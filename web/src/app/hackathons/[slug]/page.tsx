type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function HackathonDetailPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-zinc-500">Hackathon Detail</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
            해커톤 상세
          </h1>
          <p className="mt-4 text-sm leading-6 text-zinc-600">
            현재 선택한 해커톤 slug는 <span className="font-medium">{slug}</span> 입니다.
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            다음 단계에서 개요, 평가, 일정, 상금, 팀, 제출, 리더보드 섹션을 추가합니다.
          </p>
        </section>
      </div>
    </main>
  );
}