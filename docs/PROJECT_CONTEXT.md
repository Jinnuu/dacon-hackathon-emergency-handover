# PROJECT CONTEXT

## 프로젝트 개요

이 프로젝트는 "월간 해커톤 긴급 인수인계 해커톤 - 문서만 남기고 사라졌다" 대회를 위한 웹 서비스 구현 프로젝트다.

핵심 목표는 기능 명세서와 제공된 공개 JSON 데이터를 바탕으로, 해커톤 플랫폼 웹앱 MVP를 구현하는 것이다.

## 핵심 컨셉

- 백엔드 없이 localStorage 중심으로 동작하는 프론트엔드 MVP
- 심사자가 로그인 없이 핵심 흐름을 바로 확인 가능해야 함
- 제공된 공개 데이터를 seed data로 활용
- 실제 서비스처럼 보이는 UX와 명세 정합성을 우선

## 필수 라우트

- `/` 메인 페이지
- `/hackathons` 해커톤 목록
- `/hackathons/[slug]` 해커톤 상세
- `/camp` 팀 모집
- `/rankings` 랭킹

## 해커톤 상세 필수 섹션

- 개요(Overview)
- 평가(Eval)
- 일정(Schedule)
- 상금(Prize)
- 팀(Teams)
- 제출(Submit)
- 리더보드(Leaderboard)
- 안내(Guide / Notice)

## 핵심 사용자 흐름

1. 메인 페이지에서 해커톤 목록, 팀 찾기, 랭킹으로 이동
2. 해커톤 목록에서 특정 해커톤 카드 클릭
3. 해커톤 상세에서 개요/평가/일정/상금/팀/제출/리더보드 확인
4. 팀 모집 페이지에서 팀 생성 또는 목록 확인
5. 제출 페이지에서 제출 등록
6. 제출 결과가 리더보드에 반영

## 데이터 저장 전략

- 초기 공개 JSON은 seed data로 사용
- 사용자 상호작용 데이터는 localStorage에 저장
- 저장 대상:
  - hackathons
  - teams
  - submissions
  - leaderboards

## 공개/비공개 원칙

절대 공개하면 안 되는 정보:
- 내부 유저 정보
- 유저가 비공개한 정보
- 다른 팀의 내부 정보
- 심사와 무관한 민감 정보

## 기술 스택

- Next.js
- TypeScript
- Tailwind CSS
- localStorage 기반 상태 저장
- Vercel 배포 예정

## 폴더 원칙

- `data/raw`: 제공받은 원본 JSON
- `src/data/seed`: 앱에서 사용할 가공 데이터
- `docs`: 프로젝트 문서
- `src/app`: 라우트
- `src/components`: UI 컴포넌트
- `src/lib`: 유틸리티 및 storage 관련 코드
- `src/types`: 타입 정의

## MVP 우선순위

1. 읽기 화면 완성
   - 메인
   - 해커톤 목록
   - 해커톤 상세
2. 상태 변화 기능
   - 팀 생성
   - 제출 등록
   - 리더보드 반영
3. 마감 전 polish
   - empty state
   - validation
   - 에러 처리
   - 모바일 대응
   - seed reset 기능

## 디자인 원칙

- 심사자가 3분 안에 이해할 수 있는 구조
- 과한 애니메이션보다 명확한 정보 구조 우선
- 빠른 탐색, 직관적 네비게이션, 깔끔한 카드 UI