# DEEPDIVE 프론트엔드 3기 Next.js 협업 Team-1

Next.js의 App Router 기능을 활용한 **블로그** 프로젝트입니다.  
글 작성, 수정, 삭제, 검색 및 카테고리 필터링 기능을 포함하였고, 이 프로젝트를 진행함으로써 App Router를 조금 더 이해하게 된 것 같습니다.

## 🚀 프로젝트 실행

```bash
$ npm i
$ npm run dev
```

## 👥 팀원 소개 및 역할 분담

| 이름   | 역할                                                           |
| ------ | -------------------------------------------------------------- |
| 최가은 | 팀장, Post 수정 기능 구현, PostForm 컴포넌트 작성, README 작성 |
| 김승범 | Post 작성 기능 구현, 404 페이지 구현                           |
| 이설아 | Post 목록 기능 구현, 수정 및 카테고리 기능 구현                |
| 최동윤 | 홈 화면 및 레이아웃 구현                                       |
| 하유희 | Post 상세 페이지 구현                                          |

## 🗂️ 폴더 구조

```
app-router-blog-starter/
├── 🧳 app/
│   └── posts/
        ├── [id]/page.js        # 글 상세 페이지
        └── page.jsx            # 글 목록 페이지
│   ├── edit/[id]/page.js       # 글 수정 페이지
│   ├── write/page.js           # 글 작성 페이지
│   ├── page.js                 # 홈 페이지
│   ├── layout.js               # 공통 레이아웃
│   └── not-found.jsx           # 404 페이지
├── components/
│   ├── PostForm.js             # 글 작성/수정 폼
│   └── SearchBar.jsx           # 검색 바
├── data/
│   └── data.js                 # 게시글 임시 데이터
```

## ✅ 상세 기능 설명

### 1. 기본 레이아웃 및 홈페이지(`/`)

- 기본 레이아웃은 `nav` 바와 `main` 으로 구성
  - `nav`: Home(`/`), 글 목록(`/posts`), 글 작성(`/write`)로 구성
  - `main`: props로 받은 children이 들어옴

### 2. 게시글 목록(`/posts`)

- 서버에서 게시글 목록 fetch
- 클라이언트에서 검색어와 카테고리로 필터링 기능 구현
- 검색 기능
  - `searchParams.query` 값을 받아 제목에 해당 키워드가 포함된 게시글만 필터링
  - 대소문자 구분 없이 필터링 처리
  - 검색 입력은 클라이언트 컴포넌트인 SearchBar를 통해 수행
- 카테고리 기능
  - `searchParams.category` 값을 기준으로 게시글의 category 속성과 비교
  - "All", "React", "Next.js", "JavaScript" 등의 카테고리 링크를 눌러 필터링
  - 선택된 카테고리에 따라 링크 스타일 변경 (선택된 항목은 강조 표시)

### 3. 게시글 작성(`/write`)

- 글 작성 폼을 클라이언트 컴포넌트로 구현(`use client` 사용)
- 제목, 내용 입력 후 서버에 POST 요청 전송
- 작성 폼은 `PostForm` 컴포넌트를 재사용하여 구현
- 작성 완료 후 `/post`로 라우팅

### 4. 게시글 상세(`posts/[id]`)

- URL의 `id`값 기반 해당 게시글 정보 fetch
- 클릭된 글의 상세 내용(`title`, `content`) 출력
- 404 응답시 `/not-found` 페이지로 redirect 처리
- 게시글에 대해 수정 및 삭제 버튼 제공
  - 수정: `/edit/[id]`로 라우팅
  - 삭제: `confirm`을 이용해 삭제 유무를 묻고, `DELETE` 요청 후 `/`로 라우팅

### 5. 게시글 수정(`/edit/[id]`)

- `id`에 해당하는 기존 게시글 데이터를 받아와 수정 폼에 미리 채움
- 수정 폼은 `PostForm` 컴포넌트를 재사용하여 구현
- `PUT` 요청으로 서버에 수정된 데이터 전송
- 수정 완료 후 `/posts/[id]`로 라우팅
- `PostForm` 컴포넌트는 작성과 수정에서 모두 재사용 가능하며, prop로 받은 `post` 유무에 따라 동작 분기

### 6. 404 - not found(`/not-found`)

- 존재하지 않는 게시글 또는 잘못된 URL로 접근 시 안내 메시지 출력
- 게시글 상세 페이지에서 404 응답을 감지하여 해당 페이지로 이동 처리

## 🌿 Git 브랜치

- `main`: 최종 결과물 확인(반드시 PR 통해 머지 진행)
- `feature/본인이름 영어로`: 본인이 맡은 부분 브랜치 파서 작업
