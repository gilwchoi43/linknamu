import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

// 더미 데이터: 실제 내용은 나중에 교체
const profile = {
  name: "최기문",
  bio: "중단없는 전진",
};

const links = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];

export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <div className="flex w-full max-w-md flex-col gap-10">
        <ProfileHeader name={profile.name} bio={profile.bio} />
        <section className="flex flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.id} title={link.title} url={link.url} />
          ))}
        </section>
      </div>
    </main>
  );
}
