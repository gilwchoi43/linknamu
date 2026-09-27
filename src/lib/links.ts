export type Link = {
  id: string;
  title: string;
  url: string;
  emoji: string;
};

export const links: Link[] = [
  { id: "github", title: "깃허브", url: "https://github.com/gilwchoi43", emoji: "☎" },
  { id: "blog", title: "블로그", url: "https://blog.naver.com/keymoonyang", emoji: "＠" },
  { id: "email", title: "이메일", url: "mailto:gil.choi@daum.net", emoji: "☞" },
];
