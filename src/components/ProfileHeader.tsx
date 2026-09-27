import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-5 text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={128}
        height={128}
        loading="eager"
        className="h-28 w-28 rounded-full object-cover ring-4 ring-white/15 shadow-[0_16px_36px_-10px_rgb(0_0_0/0.7)] sm:h-32 sm:w-32"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50">
          {name}
        </h1>
        <p className="text-[15px] leading-relaxed text-zinc-400">{bio}</p>
      </div>
    </header>
  );
}
