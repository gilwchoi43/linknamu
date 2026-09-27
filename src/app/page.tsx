import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

const profile = {
  name: "최기문",
  bio: "중단 없는 전진 | 요즘에는 AI 게임 개발에 관심이 많아요",
  imageUrl: "/profile.png",
};

const links = [
  { id: "github", title: "깃허브", url: "https://github.com/gilwchoi43", emoji: "☎" },
  { id: "blog", title: "블로그", url: "https://blog.naver.com/keymoonyang", emoji: "＠" },
  { id: "email", title: "이메일", url: "mailto:gil.choi@daum.net", emoji: "☞" },
];

export default function Home() {
  return (
    <main className="flex flex-1 justify-center px-6 py-16 sm:py-24">
      <div className="flex w-full max-w-sm flex-col gap-12">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          imageUrl={profile.imageUrl}
        />
        <section className="flex flex-col gap-4">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              title={link.title}
              url={link.url}
              emoji={link.emoji}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
