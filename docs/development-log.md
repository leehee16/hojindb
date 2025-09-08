# HojinDB 블로그 개발 로그

## 프로젝트 개요
- **프로젝트명**: HojinDB Personal Blog
- **기술 스택**: Next.js 15.5.2, TypeScript, Tailwind CSS
- **배포**: Vercel (https://hojindb.vercel.app/)
- **저장소**: https://github.com/leehee16/hojindb

## 개발 일지

### 2025-09-08: 프로젝트 초기 설정

#### ✅ 완료된 작업들

**1. 프로젝트 마이그레이션**
- Jekyll에서 Next.js로 전환 결정
- Ruby 관리의 복잡성 → JavaScript 생태계로 이동
- 더 나은 개발 경험과 확장성을 위한 선택

**2. Next.js 프로젝트 생성**
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```
- TypeScript 지원으로 타입 안정성 확보
- Tailwind CSS로 스타일링 시스템 구축
- ESLint로 코드 품질 관리
- App Router 사용 (최신 Next.js 패러다임)
- src 디렉토리 구조로 정리된 프로젝트 구조

**3. 개발 환경 설정**
- ✅ 로컬 개발 서버: http://localhost:3000
- ✅ 핫 리로드 및 개발자 도구 활성화
- ✅ TypeScript 컴파일 및 타입 체킹

**4. Git 저장소 관리**
- ✅ Jekyll 파일들 정리 (Ruby 의존성 제거)
- ✅ GitHub 저장소 이름 변경: `leehee16.github.io` → `hojindb`
- ✅ 적절한 .gitignore 설정 (node_modules, .next 등)
- ✅ 첫 번째 커밋 및 푸시 완료

**5. Vercel 배포**
- ✅ GitHub 저장소와 Vercel 연동
- ✅ 자동 배포 파이프라인 구축
- ✅ 커스텀 도메인 설정: https://hojindb.vercel.app/
- ✅ Next.js 최적화된 배포 환경

#### 🎯 다음 단계

**1. 헤더 컴포넌트 개발** (진행 예정)
- React 컴포넌트로 헤더 재구현
- 로고 + "hojin" 텍스트 배치
- 네비게이션 메뉴 추가
- Tailwind CSS로 스타일링

**2. MDX 블로그 시스템 구축**
- MDX 라이브러리 설치 및 설정
- 마크다운 파일 기반 포스트 시스템
- 포스트 메타데이터 관리
- 동적 라우팅 구현

**3. UI/UX 개선**
- 포스트 목록 카드 스타일 디자인
- 반응형 레이아웃
- 다크모드 지원
- 성능 최적화

## 기술적 결정사항

### Jekyll → Next.js 마이그레이션 이유
1. **개발 경험**: JavaScript/TypeScript 생태계에 더 익숙
2. **관리 용이성**: Ruby 환경 관리 복잡성 해결
3. **확장성**: React 컴포넌트 기반 개발로 더 유연한 커스터마이징
4. **성능**: Next.js의 자동 최적화 기능들
5. **배포**: Vercel과의 완벽한 통합

### Vercel vs GitHub Pages
- **선택**: Vercel
- **이유**: 
  - Next.js 최적화된 배포 환경
  - 자동 배포 파이프라인
  - 커스텀 도메인 쉬운 설정
  - 성능 최적화 자동 적용

## 프로젝트 구조
```
hojindb/
├── src/
│   └── app/                 # App Router 페이지들
│       ├── layout.tsx       # 루트 레이아웃
│       ├── page.tsx         # 홈페이지
│       ├── globals.css      # 글로벌 스타일
│       └── favicon.ico      # 파비콘
├── public/                  # 정적 파일들
├── docs/                    # 개발 문서
├── package.json            # 프로젝트 의존성
├── tailwind.config.ts      # Tailwind 설정
├── tsconfig.json          # TypeScript 설정
└── next.config.ts         # Next.js 설정
```

## 참고 링크
- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Vercel 배포 가이드](https://vercel.com/docs)
- [프로젝트 저장소](https://github.com/leehee16/hojindb)
- [배포된 사이트](https://hojindb.vercel.app/)