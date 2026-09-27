"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { Link } from "@/lib/links";

type LinkListProps = {
  links: Link[];
};

export default function LinkList({ links }: LinkListProps) {
  // 데이터를 받기 전에는 0회로 표시
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let ignore = false;
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Record<string, number>) => {
        if (ignore) return;
        // 받아오는 사이에 누른 클릭(낙관적 +1)이 덮어써지지 않도록 큰 값을 유지
        setCounts((prev) => {
          const next = { ...data };
          for (const [id, count] of Object.entries(prev)) {
            next[id] = Math.max(next[id] ?? 0, count);
          }
          return next;
        });
      })
      .catch((error) => console.error("클릭 수를 불러오지 못했습니다", error));
    return () => {
      ignore = true;
    };
  }, []);

  function handleClick(id: string) {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    // 새 탭 이동이나 메일 앱 실행 중에도 요청이 끝까지 전송되도록 sendBeacon 사용
    const body = JSON.stringify({ id });
    const sent = navigator.sendBeacon?.(
      "/api/clicks",
      new Blob([body], { type: "application/json" }),
    );
    if (!sent) {
      fetch("/api/clicks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch((error) => console.error("클릭 수를 저장하지 못했습니다", error));
    }
  }

  return (
    <section className="flex flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          title={link.title}
          url={link.url}
          emoji={link.emoji}
          clicks={counts[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </section>
  );
}
