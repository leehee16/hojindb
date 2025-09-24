import Link from 'next/link'
import PortfolioSidebar from '@/components/PortfolioSidebar'

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
        <PortfolioSidebar />

        {/* Divider */}
        <div className="w-px bg-gray-300 hidden lg:block"></div>

        {/* Projects Section */}
        <section className="flex-1 max-w-2xl mx-auto">          
          <div className="space-y-4 pb-8">
            <Link href="/portfolio/1" className="block group">
              <div className="relative overflow-hidden p-6 bg-white rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg tossface">1️⃣</span>
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">개인 데이터 레이크하우스 <span className="tossface">⭐</span></h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">파편화된 일상 데이터를 통합·정제해 분석 가능한 형태로 전환</p>
                  <div className="flex flex-wrap gap-2">
                    <img 
                      src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" 
                      alt="Pandas"
                      className="h-6 rounded-lg opacity-70"
                    />
                    <img 
                      src="https://img.shields.io/badge/SQL-336791?style=for-the-badge&logo=databricks&logoColor=white" 
                      alt="SQL"
                      className="h-6 rounded-lg opacity-70"
                    />
                    <img 
                      src="https://img.shields.io/badge/Apache%20Iceberg-00B4D8?style=for-the-badge&logo=apache&logoColor=white" 
                      alt="Iceberg"
                      className="h-6 rounded-lg opacity-70"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300 overflow-hidden h-40">
                  <img 
                    src="/p1.png" 
                    alt="Data Lakehouse Artwork" 
                    className="w-80 h-80 object-cover object-top transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
            
            <Link href="/portfolio/2" className="block group">
              <div className="relative overflow-hidden p-6 bg-white rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg tossface">2️⃣</span>
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">표준 산업 분류 검색 시스템</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">산업에서 기업·제품으로 이어지는 매핑과 탐색 구조, UI 설계</p>
                  <div className="flex flex-wrap gap-2">
                    <img 
                      src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" 
                      alt="FastAPI"
                      className="h-6 rounded-lg opacity-70"
                    />
                    <img 
                      src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" 
                      alt="Next.js"
                      className="h-6 rounded-lg opacity-70"
                    />
                    <img 
                      src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" 
                      alt="Docker"
                      className="h-6 rounded-lg opacity-70"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300 overflow-hidden h-40">
                  <img 
                    src="/p2.png" 
                    alt="Industrial Analysis Artwork" 
                    className="w-80 h-80 object-cover object-top transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
            
            <Link href="/portfolio/3" className="block group">
              <div className="relative overflow-hidden p-6 bg-white rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg tossface">3️⃣</span>
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">LLM 실험 오케스트레이터</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">인퍼런스 실험 자동화 툴 개발</p>
                  <div className="flex flex-wrap gap-2">
                    <img 
                      src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" 
                      alt="Pandas"
                      className="h-6 rounded-lg opacity-70"
                    />
                    <img 
                      src="https://img.shields.io/badge/GCP-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" 
                      alt="GCP"
                      className="h-6 rounded-lg opacity-70"
                    />
                    <img 
                      src="https://img.shields.io/badge/OpenRouter-000000?style=for-the-badge&logo=openai&logoColor=white" 
                      alt="OpenRouter"
                      className="h-6 rounded-lg opacity-70"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 right-14 opacity-40 group-hover:opacity-60 transition-opacity duration-300 overflow-hidden h-36 w-72">
                  <img 
                    src="/p3.png" 
                    alt="LLM Experiment Orchestrator Artwork" 
                    className="w-52 h-52 object-cover object-top transform group-hover:scale-110 transition-transform duration-300 -mt-6 ml-20"
                  />
                </div>
              </div>
            </Link>
            
            <Link href="/portfolio/4" className="block group">
              <div className="relative overflow-hidden p-6 bg-white rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg tossface">4️⃣</span>
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">LLM의 공정한 채점을 위해</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">인간 없이도 공정한 채점을 위한 방법론 연구</p>
                  <div className="flex flex-wrap gap-2">
                    <img 
                      src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" 
                      alt="Pandas"
                      className="h-6 rounded-lg opacity-70"
                    />
                    <img 
                      src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" 
                      alt="PyTorch"
                      className="h-6 rounded-lg opacity-70"
                    />
                    <img 
                      src="https://img.shields.io/badge/SciPy-8CAAE6?style=for-the-badge&logo=scipy&logoColor=white" 
                      alt="SciPy"
                      className="h-6 rounded-lg opacity-70"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 right-14 opacity-40 group-hover:opacity-60 transition-opacity duration-300 overflow-hidden h-36 w-80">
                  <img 
                    src="/p4.png" 
                    alt="ADBIAS Research Artwork" 
                    className="w-52 h-52 object-cover object-top transform group-hover:scale-110 transition-transform duration-300 mt-2 ml-24"
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}