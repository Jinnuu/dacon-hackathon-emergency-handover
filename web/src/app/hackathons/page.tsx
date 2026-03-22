import Link from "next/link";

const hackathons = [
  {
    slug: "monthly-hackathon-emergency-handover-docs",
    title: "긴급 인수인계 해커톤 - 문서만 남기고 사라졌다",
    status: "진행 중",
    summary:
      "기능 명세서와 공개 자료를 바탕으로 해커톤 플랫폼 MVP를 구현하는 웹 해커톤입니다.",
    tags: ["Web", "Vercel", "MVP"],
  },
] as const;

export default function HackathonsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-zinc-500">Hackathons</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
            해커톤 목록
          </h1>
          <p className="mt-4 text-sm leading-6 text-zinc-600">
            진행 중이거나 예정된 해커톤을 확인하는 페이지입니다.
          </p>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-4">
          {hackathons.map((hackathon) => (
            <Link
              key={hackathon.slug}
              href={`/hackathons/${hackathon.slug}`}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <article>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                    {hackathon.status}
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">
                  {hackathon.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {hackathon.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {hackathon.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-sm font-medium text-zinc-500">
                  상세 보기 →
                </p>
              </article>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}