export default function HackathonsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-zinc-500">Hackathons</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
            해커톤 목록
          </h1>
          <p className="mt-4 text-sm leading-6 text-zinc-600">
            진행 중이거나 예정된 해커톤을 확인하는 페이지입니다.
          </p>
        </div>
      </div>
    </main>
  );
}