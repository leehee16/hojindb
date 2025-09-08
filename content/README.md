# 블로그 콘텐츠 가이드

## 디렉토리 구조
```
content/
├── posts/          # 발행된 블로그 글
├── drafts/         # 작성중인 초안
└── README.md       # 이 파일
```

## 글 작성 가이드

### 파일명 규칙
`YYYY-MM-DD-title-slug.md`

예시: `2025-09-08-building-modern-blog.md`

### Frontmatter 형식
```yaml
---
title: "글 제목"
date: "2025-09-08"
excerpt: "글 요약..."
tags: ["태그1", "태그2"]
published: true
---
```

## 옵시디언 연동

1. 이 `content` 폴더를 옵시디언 볼트로 설정
2. `drafts/`에서 글 작성
3. 완성되면 `posts/`로 이동
4. Git으로 커밋/푸시하면 자동 배포

## 마크다운 기능

- **기본 마크다운** 문법 지원
- **코드 블록** 하이라이팅
- **수학 공식** (LaTeX)
- **링크**, **이미지** 삽입
- **태그** 기반 분류