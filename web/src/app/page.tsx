import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "홈 | 해커톤 웹앱",
  description: "해커톤 목록, 팀 모집, 랭킹으로 이동할 수 있는 홈 페이지",
};

const navigationCards = [
  {
    title: "해커톤 목록",
    description: "진행 중이거나 예정된 해커톤을 확인하고 상세 페이지로 이동합니다.",
    href: "/hackathons",
    cta: "목록 보러가기",
  },
  {
    title: "팀 모집",
    description: "팀을 찾거나 새 팀을 만들어 해커톤 참여 준비를 할 수 있습니다.",
    href: "/camp",
    cta: "팀 모집 보기",
  },
  {
    title: "랭킹",
    description: "참여 기록과 점수를 기반으로 한 랭킹을 확인할 수 있습니다.",
    href: "/rankings",
    cta: "랭킹 보기",
  },
] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium text-zinc-500">
              Monthly Hackathon MVP
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              문서만 남기고 사라진 해커톤 웹앱
            </h1>
            <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base">
              심사자가 로그인 없이 핵심 흐름을 빠르게 확인할 수 있도록,
              해커톤 목록 확인부터 팀 모집과 랭킹 조회까지 한 번에 탐색할 수
              있는 MVP 홈 화면입니다.
            </p>
          </div>
        </section>

        <section aria-labelledby="home-navigation">
          <div className="mb-4">
            <h2
              id="home-navigation"
              className="text-lg font-semibold tracking-tight text-zinc-950"
            >
              바로가기
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              아래 카드에서 원하는 페이지로 이동할 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {navigationCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <div className="flex h-full flex-col">
                  <div className="mb-4 inline-flex w-fit rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                    이동
                  </div>

                  <h3 className="text-xl font-semibold text-zinc-950">
                    {card.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
                    {card.description}
                  </p>

                  <div className="mt-6 inline-flex items-center text-sm font-medium text-zinc-900">
                    {card.cta}
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}