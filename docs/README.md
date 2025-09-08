# HojinDB Documentation

이 디렉토리는 HojinDB 블로그 개발 과정과 기술적 결정사항을 기록합니다.

## 문서 목록

### 📋 개발 문서
- [`development-log.md`](./development-log.md) - 개발 일지 및 진행 과정
- `setup-guide.md` - 개발 환경 설정 가이드 (작성 예정)
- `deployment-guide.md` - 배포 가이드 (작성 예정)

### 🔧 기술 문서
- `component-guide.md` - 컴포넌트 사용법 (작성 예정)
- `styling-guide.md` - 스타일링 가이드라인 (작성 예정)
- `mdx-guide.md` - MDX 블로그 시스템 가이드 (작성 예정)

### 📈 프로젝트 정보
- **기술 스택**: Next.js 15.5.2, TypeScript, Tailwind CSS
- **배포**: Vercel
- **저장소**: https://github.com/leehee16/hojindb
- **라이브**: https://hojindb.vercel.app/

## 로컬 개발 환경

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드된 앱 실행
npm start
```

## 기여 방법

1. 개발 과정에서 중요한 결정사항이나 문제 해결 과정을 `development-log.md`에 기록
2. 새로운 기능이나 컴포넌트 추가시 해당 가이드 문서 작성
3. 버그 수정이나 개선사항도 문서에 반영