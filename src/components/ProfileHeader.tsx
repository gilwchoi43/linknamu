type ProfileHeaderProps = {
  name: string;
  bio: string;
};

export default function ProfileHeader({ name, bio }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      {/* 더미 프로필 사진: 실제 사진이 정해지면 <Image>로 교체 */}
      <div
        aria-hidden
        className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-emerald-600 text-4xl font-bold text-white sm:h-32 sm:w-32"
      >
        {name.charAt(0)}
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-widest text-zinc-900 dark:text-zinc-50">
          {name}
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400">{bio}</p>
      </div>
    </header>
  );
}
