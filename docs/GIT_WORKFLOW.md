# GIT WORKFLOW

## 기본 원칙

- `main`은 항상 실행 가능한 안정 상태로 유지한다.
- 모든 작업은 브랜치를 따서 진행한다.
- 한 브랜치에는 한 작업만 담는다.
- AI가 생성한 코드도 바로 `main`에 넣지 않는다.

## 브랜치 규칙

- `chore/...` : 설정, 초기 세팅
- `feat/...` : 기능 개발
- `fix/...` : 버그 수정
- `docs/...` : 문서 작업
- `refactor/...` : 구조 개선

ex:
    - `chore/init-next-app`
    - `feat/home`
    - `feat/hackathons-list`
    - `feat/hackathon-detail`
    - `feat/camp`
    - `feat/rankings`
    - `fix/localstorage-duplication`

## 작업 시작 순서

```bash
git switch main
git pull origin main
git switch -c feat/branch-name