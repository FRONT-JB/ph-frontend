# Github Repository Project

## Production

**[Apps](https://ph-frontend.vercel.app)**

## Stack

[![Node-v16.14.0](https://img.shields.io/badge/Node-v16.14.0-339933.svg?logo=node.js)](https://www.typescriptlang.org/)
[![TypeScript-v4.9.3](https://img.shields.io/badge/TypeScript-v4.9.3-007ACC.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Vite-v4.1.0](https://img.shields.io/badge/Vite-v4.1.0-646CFF.svg?logo=vite)](https://vitejs-kr.github.io/guide)
[![React-v18.2.0](https://img.shields.io/badge/React-v18.2.0-61DAFB.svg?logo=react)](https://ko.reactjs.org/)
[![Axios-v1.3.3](https://img.shields.io/badge/Axios-v1.3.3-5A29E4.svg?logo=axios)](https://axios-http.com/kr/docs/intro)
[![Emotion-v11.10.5](https://img.shields.io/badge/Emotion-v11.10.5-AC6199.svg)](https://emotion.sh/docs/introduction)
[![Husky-v8.0.3](https://img.shields.io/badge/Husky-v8.0.3-44A833.svg)](https://github.com/typicode/husky)
[![Conventional Commits-v8.0.3](https://img.shields.io/badge/Converntional-Commit-FE5196.svg?logo=conventionalcommits)](https://www.conventionalcommits.org/ko/v1.0.0-beta.4)
[![Vercel](https://img.shields.io/badge/Vercel-000000.svg?logo=vercel)](https://vercel.com)

---

## Install

    npm install

## Use

    npm run dev

## File Structure

    📂 src
      📂 api              :   API ( Axios, React-Query )
      📂 assets           :   Image files
      📂 components       :   React Component
        📂 common         :   Button, Input               .tsx
        📂 detail         :   Detail Component            .tsx
        📂 favort         :   Favorit Component           .tsx
        📂 header         :   Header, Nav Component       .tsx
        📂 layout         :   Layout Component            .tsx
        📂 search         :   Search Component            .tsx
        📄 index          :   export index                .ts
      📂 constants        :   Global Constants            .ts
        📄 env            :   Env Constants               .ts
        📄 query-key      :   ReactQueryKey Constants     .ts
        📄 route-path     :   Routes Constants            .ts
        📄 search-params  :   Search String Constants     .ts
        📄 storage        :   LocalStoage Constants       .ts
        📄 index          :   export index                .ts
      📂 hooks            :   React Hooks                 .tsx
        📄 index          :   export index                .ts
      📂 pages            :   Route Pages                 .tsx
      📂 provider         :   React Context               .tsx
        📄 index          :   export index                .ts
      📂 routes           :   React Router                .ts, .tsx
        📄 index          :   export index                .ts
      📂 styles           :   Global Styles               .ts
        📄 emotion.d.ts   :   emotion types               .ts
        📄 global-styles  :   global css                  .ts
        📄 theme          :   global color theme          .ts
        📄 utils          :   global component styles     .ts
        📄 index          :   export index                .ts
      📂 types            :   Data Types                  .ts
        📄 index          :   export index                .ts
      📂 utils            :   Global Util Func            .ts, .tsx
        📄 index          :   export index                .ts

## Requirements

- [x] 1. 검색창에 Repository명을 입력해서 Repository를 검색할 수 있다.
- [x] 2. 검색된 Public Repository를 등록할 수 있다.
  - [x] 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 이를 사용자에게 알려준다.
  - [x] 웹은 LocalStorage, 앱은 Async Storage 등 로컬 저장소를 활용한다. (웹 혹은 앱 선택)
- [x] 3. 등록된 Repository를 삭제할 수 있다.
- [x] 4. 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있다.
  - [x] 각 issue 마다 제목, Repository 명은 필수로 표현되어야 한다. 그 이외의 데이터 중 필요하다고 생각되는 부분은 추가한다.
  - [x] 해당 issue를 클릭하면 Github의 상세 페이지로 이동할 수 있다.
  - [x] 페이지네이션을 통해서 계속해서 issue를 모아서 볼 수 있다.
