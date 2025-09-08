---
title: "Building a Modern Blog with Next.js"
date: "2025-09-08"
excerpt: "Migrating from Jekyll to Next.js for better development experience and performance..."
tags: ["Next.js", "React", "Blog", "Migration"]
published: true
---

# Building a Modern Blog with Next.js

Jekyll에서 Next.js로 블로그를 마이그레이션하는 과정에서 배운 것들을 공유합니다.

## 왜 Next.js로 이주했나?

1. **JavaScript 생태계**: Ruby보다 익숙한 환경
2. **React 컴포넌트**: 재사용 가능한 UI 컴포넌트
3. **Vercel 배포**: 원클릭 배포와 최적화
4. **개발 경험**: 핫 리로드, TypeScript 지원

## 마이그레이션 과정

### 1. 프로젝트 설정
```bash
npx create-next-app@latest . --typescript --tailwind --eslint
```

### 2. 컴포넌트 구조
- Header 컴포넌트로 네비게이션 구현
- Tailwind CSS로 모던한 디자인
- 반응형 레이아웃

### 3. 배포
Vercel과 GitHub 연동으로 자동 배포 환경 구축

## 결론

Next.js로의 이주는 개발 생산성과 사용자 경험 모두를 향상시켰습니다.