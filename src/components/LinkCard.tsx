type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-14 w-full items-center justify-center rounded-2xl border-2 border-zinc-800 bg-white px-4 text-base font-medium text-zinc-900 transition hover:-translate-y-0.5 hover:bg-zinc-50 dark:border-zinc-200 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
    >
      {title}
    </a>
  );
}
