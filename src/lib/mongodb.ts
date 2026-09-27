import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다 (.env.local 확인)");
}

// 개발 모드의 핫 리로드마다 새 연결이 쌓이지 않도록 전역에 클라이언트를 보관
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

const clientPromise =
  globalForMongo._mongoClientPromise ?? new MongoClient(uri).connect();

if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClientPromise = clientPromise;
}

export type ClickDoc = { _id: string; count: number };

export async function getClicksCollection() {
  const client = await clientPromise;
  // DB 이름은 MONGODB_URI 경로(/linknamu)에서 가져온다
  return client.db().collection<ClickDoc>("clicks");
}
