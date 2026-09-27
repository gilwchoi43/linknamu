import { links } from "@/lib/links";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const linkIds = new Set(links.map((link) => link.id));

// 모든 링크의 클릭 수를 한 번에 반환: { github: 42, blog: 3, email: 0 }
export async function GET() {
  const clicks = await getClicksCollection();
  const docs = await clicks.find({ _id: { $in: [...linkIds] } }).toArray();

  const counts: Record<string, number> = {};
  for (const id of linkIds) counts[id] = 0;
  for (const doc of docs) counts[doc._id] = doc.count;

  return Response.json(counts);
}

// 본문 { id }로 받은 링크의 클릭 수를 1 늘린다
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  // 등록된 링크만 허용해 임의의 문서가 생기지 않게 한다
  if (typeof id !== "string" || !linkIds.has(id)) {
    return Response.json({ error: "알 수 없는 링크입니다" }, { status: 400 });
  }

  const clicks = await getClicksCollection();
  const doc = await clicks.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return Response.json({ id, count: doc?.count ?? 1 });
}
