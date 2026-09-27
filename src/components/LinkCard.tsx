type LinkCardProps = {
  title: string;
  url: string;
  emoji: string;
};

export default function LinkCard({ title, url, emoji }: LinkCardProps) {
  // mailto: 링크를 새 탭으로 열면 빈 탭이 남으므로 웹 주소만 새 탭으로 연다
  const isWebLink = url.startsWith("http");

  return (
    <a
      href={url}
      target={isWebLink ? "_blank" : undefined}
      rel={isWebLink ? "noopener noreferrer" : undefined}
      className="relative flex h-15 w-full items-center justify-center rounded-3xl border border-white/12 bg-white/8 px-14 text-[15px] font-semibold text-zinc-100 shadow-[0_8px_28px_-12px_rgb(0_0_0/0.6)] backdrop-blur-md transition duration-300 ease-out hover:bg-white/14 hover:border-white/20 hover:shadow-[0_12px_32px_-12px_rgb(0_0_0/0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 motion-safe:hover:-translate-y-px"
    >
      <span aria-hidden className="absolute left-5 text-lg text-zinc-400">
        {emoji}
      </span>
      {title}
    </a>
  );
}
