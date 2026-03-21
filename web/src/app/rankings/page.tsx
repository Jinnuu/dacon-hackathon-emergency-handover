export default function RankingsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-zinc-500">Rankings</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
            랭킹
          </h1>
          <p className="mt-4 text-sm leading-6 text-zinc-600">
            제출 결과와 점수를 확인하는 페이지입니다.
          </p>
        </div>
      </div>
    </main>
  );
}