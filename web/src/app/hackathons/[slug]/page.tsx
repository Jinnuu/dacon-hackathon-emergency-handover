import Link from "next/link";

type EvaluationItem = {
  label: string;
  description: string;
  weight: string;
};

type ScheduleItem = {
  title: string;
  date: string;
  description: string;
};

type PrizeItem = {
  place: string;
  reward: string;
  description: string;
};

type TeamItem = {
  name: string;
  members: number;
  intro: string;
  lookingFor: string;
  isOpen: boolean;
};

type SubmissionItem = {
  title: string;
  description: string;
  required: boolean;
};

type LeaderboardItem = {
  rank: number;
  teamName: string;
  participantScore: number;
  judgeScore: number;
  totalScore: number;
  submittedAt: string;
};

type HackathonDetail = {
  slug: string;
  title: string;
  status: string;
  oneLiner: string;
  description: string;
  host: string;
  mode: string;
  period: string;
  overview: string[];
  evaluation: EvaluationItem[];
  schedule: ScheduleItem[];
  prizes: PrizeItem[];
  teams: TeamItem[];
  submissions: SubmissionItem[];
  leaderboard: LeaderboardItem[];
  guide: string[];
};

const hackathonDetail: HackathonDetail = {
  slug: "monthly-hackathon-emergency-handover-docs",
  title: "월간 해커톤 긴급 인수인계 해커톤",
  status: "진행 중",
  oneLiner: "문서만 남기고 사라진 프로젝트를 빠르게 제품처럼 복구하는 해커톤",
  description:
    "제공된 문서와 공개 데이터만으로 해커톤 웹서비스 MVP를 구현하는 대회입니다. 백엔드 없이도 핵심 흐름이 자연스럽게 보이도록 구성하고, 심사자가 로그인 없이 주요 화면과 제출 결과를 확인할 수 있어야 합니다.",
  host: "Daker 월간 해커톤",
  mode: "웹 서비스 MVP / 프론트엔드 중심",
  period: "2026.03.01 - 2026.03.31",
  overview: [
    "이 해커톤의 목표는 문서 기반 인수인계 상황에서 빠르게 서비스 구조를 해석하고, 핵심 사용자 흐름이 살아 있는 MVP를 구현하는 것입니다.",
    "필수 라우트는 홈, 해커톤 목록, 해커톤 상세, 팀 모집, 랭킹이며, 상세 페이지 안에는 개요·평가·일정·상금·팀·제출·리더보드·안내 섹션이 모두 포함되어야 합니다.",
    "이번 1차 버전은 실제 데이터 연결 전 단계이므로, 하드코딩된 예시 데이터를 바탕으로 화면 구조와 정보 배치를 먼저 검증합니다.",
  ],
  evaluation: [
    {
      label: "핵심 흐름 완성도",
      description:
        "홈 → 목록 → 상세 → 팀/제출/리더보드 흐름이 자연스럽게 이어지는지 평가합니다.",
      weight: "35%",
    },
    {
      label: "명세 해석력",
      description:
        "제공 문서의 요구사항을 빠뜨리지 않고 UI와 정보 구조에 반영했는지 봅니다.",
      weight: "25%",
    },
    {
      label: "시연 용이성",
      description:
        "심사자가 로그인 없이 핵심 기능과 제출 결과를 빠르게 확인할 수 있어야 합니다.",
      weight: "20%",
    },
    {
      label: "완성도와 가독성",
      description:
        "과도하지 않은 디자인, 읽기 쉬운 화면, 모바일 대응 여부를 함께 확인합니다.",
      weight: "20%",
    },
  ],
  schedule: [
    {
      title: "기획 및 구조 파악",
      date: "03.01 - 03.05",
      description: "문서 분석, 화면 구조 설계, 상세 페이지 섹션 정의",
    },
    {
      title: "핵심 화면 구현",
      date: "03.06 - 03.14",
      description: "홈, 목록, 상세 1차 구현 및 페이지 이동 흐름 연결",
    },
    {
      title: "팀 모집 / 제출 / 리더보드 연결",
      date: "03.15 - 03.24",
      description: "팀 생성, 제출 상태, 랭킹 반영 흐름 정리",
    },
    {
      title: "마감 및 데모 준비",
      date: "03.25 - 03.31",
      description: "UI 정리, 문구 다듬기, 심사용 데모 시나리오 점검",
    },
  ],
  prizes: [
    {
      place: "대상",
      reward: "상금 100만원",
      description: "전체 완성도와 흐름 설계가 가장 우수한 팀",
    },
    {
      place: "우수상",
      reward: "상금 50만원",
      description: "사용자 경험과 시연성이 뛰어난 팀",
    },
    {
      place: "특별상",
      reward: "상금 30만원",
      description: "제한된 조건에서 인상적인 구현을 보여준 팀",
    },
  ],
  teams: [
    {
      name: "404 Found",
      members: 3,
      intro: "문서 기반 복구형 MVP를 빠르게 조립하는 프론트엔드 팀",
      lookingFor: "디자인 감각이 있는 프론트엔드 1명",
      isOpen: true,
    },
    {
      name: "LGTM",
      members: 2,
      intro: "심사용 데모 흐름과 정보 구조를 정교하게 만드는 팀",
      lookingFor: "현재 모집 마감",
      isOpen: false,
    },
    {
      name: "Patch Notes",
      members: 1,
      intro: "작지만 완성도 높은 제품 감각을 목표로 하는 1인 팀",
      lookingFor: "기획/카피에 강한 협업자 1명",
      isOpen: true,
    },
  ],
  submissions: [
    {
      title: "기획서 또는 기획 링크",
      description: "서비스 구조와 핵심 흐름을 설명하는 문서 또는 링크",
      required: true,
    },
    {
      title: "배포된 웹 URL",
      description: "심사자가 바로 접속 가능한 공개 웹 서비스 링크",
      required: true,
    },
    {
      title: "최종 솔루션 PDF",
      description: "구현 내용과 주요 의사결정을 요약한 문서",
      required: true,
    },
    {
      title: "추가 메모",
      description: "심사자가 보면 좋은 포인트, 제약사항, 데모 안내",
      required: false,
    },
  ],
  leaderboard: [
    {
      rank: 1,
      teamName: "404 Found",
      participantScore: 28,
      judgeScore: 66,
      totalScore: 94,
      submittedAt: "2026-03-28 21:30",
    },
    {
      rank: 2,
      teamName: "LGTM",
      participantScore: 26,
      judgeScore: 61,
      totalScore: 87,
      submittedAt: "2026-03-28 20:55",
    },
    {
      rank: 3,
      teamName: "Patch Notes",
      participantScore: 22,
      judgeScore: 58,
      totalScore: 80,
      submittedAt: "2026-03-28 19:40",
    },
  ],
  guide: [
    "민감하거나 비공개 정보는 화면에 노출하지 않습니다.",
    "백엔드 없이 localStorage 중심으로 구현하되, 심사자가 주요 흐름을 확인할 수 있어야 합니다.",
    "데이터 연결 전 단계에서는 하드코딩 데이터로 구조를 먼저 검증해도 됩니다.",
    "UI는 화려함보다 정보 가독성과 흐름 이해를 우선합니다.",
  ],
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const sectionLinks = [
  { id: "overview", label: "개요" },
  { id: "evaluation", label: "평가" },
  { id: "schedule", label: "일정" },
  { id: "prize", label: "상금" },
  { id: "teams", label: "팀" },
  { id: "submit", label: "제출" },
  { id: "leaderboard", label: "리더보드" },
  { id: "guide", label: "안내" },
] as const;

export default async function HackathonDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug !== hackathonDetail.slug) {
    return (
      <main className="min-h-screen bg-zinc-50 px-4 py-16 text-zinc-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-zinc-500">Not found</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
            해당 해커톤을 찾을 수 없습니다.
          </h1>
          <p className="mt-4 text-sm leading-6 text-zinc-600">
            현재 1차 버전에서는 하나의 하드코딩된 상세 데이터만 보여주고
            있습니다. 목록 페이지로 돌아가 다시 확인해 주세요.
          </p>
          <div className="mt-6">
            <Link
              href="/hackathons"
              className="inline-flex items-center rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
            >
              해커톤 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/hackathons"
            className="inline-flex items-center text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
          >
            ← 해커톤 목록
          </Link>
        </div>

        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                {hackathonDetail.status}
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                {hackathonDetail.title}
              </h1>
              <p className="mt-3 text-lg text-zinc-700">
                {hackathonDetail.oneLiner}
              </p>
              <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base">
                {hackathonDetail.description}
              </p>
            </div>

            <div className="grid w-full max-w-sm grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl bg-zinc-50 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  주최
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-900">
                  {hackathonDetail.host}
                </p>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  형태
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-900">
                  {hackathonDetail.mode}
                </p>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  기간
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-900">
                  {hackathonDetail.period}
                </p>
              </div>
            </div>
          </div>
        </section>

        <nav className="mt-6 overflow-x-auto rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm">
          <ul className="flex min-w-max gap-2">
            {sectionLinks.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="inline-flex rounded-xl px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 grid grid-cols-1 gap-6">
          <section
            id="overview"
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
              개요
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-700 sm:text-base">
              {hackathonDetail.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section
            id="evaluation"
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
              평가
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              {hackathonDetail.evaluation.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-semibold text-zinc-950">
                      {item.label}
                    </h3>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-700 ring-1 ring-zinc-200">
                      {item.weight}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="schedule"
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
              일정
            </h2>
            <div className="mt-5 space-y-4">
              {hackathonDetail.schedule.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 p-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-base font-semibold text-zinc-950">
                      {item.title}
                    </h3>
                    <span className="text-sm font-medium text-zinc-500">
                      {item.date}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="prize"
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
              상금
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
              {hackathonDetail.prizes.map((prize) => (
                <div
                  key={prize.place}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
                >
                  <p className="text-sm font-medium text-zinc-500">
                    {prize.place}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-zinc-950">
                    {prize.reward}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {prize.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="teams"
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                  팀
                </h2>
                <p className="mt-1 text-sm text-zinc-600">
                  이 해커톤에 참여 중이거나 모집 중인 팀 예시입니다.
                </p>
              </div>
              <Link
                href="/camp"
                className="inline-flex items-center rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
              >
                팀 모집 페이지 보기
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {hackathonDetail.teams.map((team) => (
                <div
                  key={team.name}
                  className="rounded-2xl border border-zinc-200 p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-zinc-950">
                      {team.name}
                    </h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        team.isOpen
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      {team.isOpen ? "모집 중" : "모집 마감"}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-500">팀원 {team.members}명</p>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">
                    {team.intro}
                  </p>
                  <div className="mt-4 rounded-xl bg-zinc-50 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                      찾는 팀원
                    </p>
                    <p className="mt-2 text-sm text-zinc-700">
                      {team.lookingFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="submit"
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                  제출
                </h2>
                <p className="mt-1 text-sm text-zinc-600">
                  현재는 예시 제출 항목만 표시합니다. 저장 기능은 다음 단계에서
                  연결합니다.
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              {hackathonDetail.submissions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold text-zinc-950">
                      {item.title}
                    </h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        item.required
                          ? "bg-rose-50 text-rose-700"
                          : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      {item.required ? "필수" : "선택"}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-zinc-50 p-5">
              <p className="text-sm font-medium text-zinc-900">제출 전 체크</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">
                <li>• 심사자가 별도 로그인 없이 접속 가능한 링크인지 확인</li>
                <li>• 핵심 흐름이 끊기지 않도록 데모 경로를 점검</li>
                <li>• 민감 정보, 내부 정보, 비공개 정보 노출 여부 확인</li>
              </ul>
            </div>
          </section>

          <section
            id="leaderboard"
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                  리더보드
                </h2>
                <p className="mt-1 text-sm text-zinc-600">
                  참가자 점수와 심사위원 점수를 합산한 예시 순위입니다.
                </p>
              </div>
              <Link
                href="/rankings"
                className="inline-flex items-center rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
              >
                전체 랭킹 보기
              </Link>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-zinc-200">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-200 text-sm">
                  <thead className="bg-zinc-50 text-left text-zinc-600">
                    <tr>
                      <th className="px-4 py-3 font-medium">순위</th>
                      <th className="px-4 py-3 font-medium">팀명</th>
                      <th className="px-4 py-3 font-medium">참가자</th>
                      <th className="px-4 py-3 font-medium">심사위원</th>
                      <th className="px-4 py-3 font-medium">총점</th>
                      <th className="px-4 py-3 font-medium">제출 시각</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 bg-white">
                    {hackathonDetail.leaderboard.map((entry) => (
                      <tr key={entry.teamName}>
                        <td className="px-4 py-4 font-semibold text-zinc-950">
                          {entry.rank}
                        </td>
                        <td className="px-4 py-4 text-zinc-800">
                          {entry.teamName}
                        </td>
                        <td className="px-4 py-4 text-zinc-600">
                          {entry.participantScore}
                        </td>
                        <td className="px-4 py-4 text-zinc-600">
                          {entry.judgeScore}
                        </td>
                        <td className="px-4 py-4 font-semibold text-zinc-950">
                          {entry.totalScore}
                        </td>
                        <td className="px-4 py-4 text-zinc-600">
                          {entry.submittedAt}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section
            id="guide"
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
              안내
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-700 sm:text-base">
              {hackathonDetail.guide.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}