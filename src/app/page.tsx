import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links } from "@/lib/links";

const profile = {
  name: "최기문",
  bio: "중단 없는 전진 | 요즘에는 AI 게임 개발에 관심이 많아요",
  imageUrl: "/profile.png",
};

export default function Home() {
  return (
    <main className="flex flex-1 justify-center px-6 py-16 sm:py-24">
      <div className="flex w-full max-w-sm flex-col gap-12">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          imageUrl={profile.imageUrl}
        />
        <LinkList links={links} />
      </div>
    </main>
  );
}
