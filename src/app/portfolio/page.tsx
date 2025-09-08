import Link from 'next/link'

export const metadata = {
  title: "Portfolio - Hojin's Blog",
  description: "이호진의 프로젝트 포트폴리오"
}

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "마이데이터 레이크하우스",
      subtitle: "개인 프로젝트",
      period: "2025.02 - 2025.09",
      description: "분산된 개인 데이터(디바이스, 거래내역, 행동로그)를 통합하고 체계화하여 확장 가능한 레이크하우스 구축",
      achievement: "토스 앱로그와 금융 데이터를 결합 분석해 유저 행동 패턴과 지출 상관관계 도출",
      techs: ["Pandas", "Matplotlib", "PySpark", "Iceberg", "OpenLineage", "DuckDB"],
      category: "Data Engineering"
    },
    {
      id: 2,
      title: "산업 분석 에이전트",
      subtitle: "한국평가데이터",
      period: "2025.05 - 2025.09",
      description: "산업 리서치 자동화를 위한 검색 시스템 및 산업-기업-상품 매핑 테이블 구축",
      achievement: "전체 쿼리의 70%가 키워드 기반으로 발생해 산업 데이터 접근성이 높아진 것으로 확인",
      techs: ["Pandas", "FastAPI", "Docker", "Next.js"],
      category: "Web Development"
    },
    {
      id: 3,
      title: "ADBIAS",
      subtitle: "연세대 ML연구실",
      period: "2025.03 - 2025.07",
      description: "LLM 채점자 편향 문제 해결을 위한 MFRM 기반 보정 방법론 연구 논문",
      achievement: "QWK 정확도 6.4%p 향상 및 편향 분포 57.9% 감소",
      techs: ["Pandas", "NumPy", "PyTorch"],
      category: "Machine Learning"
    },
    {
      id: 4,
      title: "모니터링 프로세스 효율화",
      subtitle: "마일로스",
      period: "2024.07 - 2024.12",
      description: "이미지 데이터 처리, 라벨링, 리포트 생성까지 과정을 자동화",
      achievement: "모니터링 작업시간 91% 단축 (6시간 → 30분)",
      techs: ["Python", "OpenCV", "Automation"],
      category: "Process Automation"
    }
  ]

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'Pandas': 'bg-blue-100 text-blue-800',
      'Matplotlib': 'bg-green-100 text-green-800',
      'PySpark': 'bg-orange-100 text-orange-800',
      'Iceberg': 'bg-cyan-100 text-cyan-800',
      'OpenLineage': 'bg-purple-100 text-purple-800',
      'DuckDB': 'bg-yellow-100 text-yellow-800',
      'FastAPI': 'bg-red-100 text-red-800',
      'Docker': 'bg-cyan-100 text-cyan-800',
      'Next.js': 'bg-green-100 text-green-800',
      'NumPy': 'bg-purple-100 text-purple-800',
      'PyTorch': 'bg-orange-100 text-orange-800',
      'Python': 'bg-blue-100 text-blue-800',
      'OpenCV': 'bg-green-100 text-green-800',
      'Automation': 'bg-gray-100 text-gray-800'
    }
    return colors[tech] || 'bg-gray-100 text-gray-800'
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Data Engineering': 'bg-blue-50 border-blue-200',
      'Web Development': 'bg-green-50 border-green-200',
      'Machine Learning': 'bg-purple-50 border-purple-200',
      'Process Automation': 'bg-orange-50 border-orange-200'
    }
    return colors[category] || 'bg-gray-50 border-gray-200'
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="flex gap-8">
        {/* Left Sidebar - 인사말과 이력서 바로가기 */}
        <aside className="w-80 hidden lg:block">
          <div className="bg-neutral-50 p-6 sticky top-24">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">안녕하세요 👋</h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                데이터와 개발을 통해 실제 문제를 해결하고 효율성을 높이는 것에 관심이 많은 이호진입니다.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                각 프로젝트에서 어떤 문제를 해결했고, 어떤 성과를 얻었는지 확인해보세요.
              </p>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <Link 
                href="/about"
                className="block bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center mb-4"
              >
                📄 상세 이력서 보기
              </Link>
              
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>hojlgg4@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <span>010-6273-9408</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🔗</span>
                  <a href="https://github.com/leehee16" className="text-blue-600 hover:text-blue-700">
                    github.com/leehee16
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Divider */}
        <div className="w-px bg-gray-300 hidden lg:block"></div>

        {/* Projects Section */}
        <section className="flex-1 max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Portfolio</h1>
            <p className="text-gray-600">실제 문제 해결과 효율성 향상을 위한 프로젝트들</p>
          </div>
          
          <div className="space-y-6 pb-8">
            {projects.map((project) => (
              <div key={project.id} className="post-item border-b border-gray-200 pb-6 last:border-b-0">
                <p className="post-author mb-3">
                  <time className="post-author-date text-gray-500 text-sm">
                    {project.period}
                  </time>
                  <span className="post-author-name text-gray-700 text-sm ml-3">
                    {project.subtitle}
                  </span>
                </p>
                
                <Link href={`/portfolio/${project.id}`} className="block group">
                  <h3 className="post-title text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="post-excerpt text-gray-600 text-base leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-gray-900 font-semibold text-sm mb-4">
                    🎯 {project.achievement}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span 
                        key={tech} 
                        className={`${getTechColor(tech)} px-2 py-1 rounded text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}