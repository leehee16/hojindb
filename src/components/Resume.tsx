export default function Resume() {
  return (
    <div className="pt-4 pb-6">
        {/* Header */}
        <header className="mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-black text-gray-900 tracking-wide" 
                style={{ fontFamily: '"MoneygraphyTTF Rounded", "머니그라피TTF Rounded", "Pretendard", sans-serif' }}>
              이호진
            </h1>
            <div className="text-gray-600 text-right text-sm space-y-1">
              <p>1994.08.11</p>
              <p>hojlgg4@gmail.com</p>
              <p>010-6273-9408</p>
              <p>github.com/leehee16</p>
            </div>
          </div>
        </header>

        {/* Profile */}
        <section className="mb-6">
          <h2 className="text-4xl font-black mb-4 tracking-tight" style={{color: '#1a1a1a'}}>Profile<span style={{color: '#3182F6'}}> /</span></h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-800 leading-relaxed">
              보고서 생성 자동화와 유저 모니터링 효율화 업무에서 <strong>85%, 91%의 업무 시간을 단축</strong>했습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              조직의 업무 효율화에 지속적으로 관심을 갖고 참여하면서, 어떤 솔루션을 적용하든 본질적으로 필요한 것은 <strong>데이터</strong>라는 것을 실감합니다. 그 데이터가 생성되고 흘러가는 과정에서 <strong>조직과 사람의 의도가 투영</strong>된다고 생각합니다.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              토스의 다양한 서비스에서 생성되는 데이터 속에서, 이러한 경험을 바탕으로 <strong>의사결정을 지원하고 현업에서 즉시 활용할 수 있는 신뢰성 높은 데이터</strong>를 만들고 싶습니다.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-4xl font-black mb-4 tracking-tight" style={{color: '#1a1a1a'}}>Experience<span style={{color: '#3182F6'}}> /</span></h2>
          
          <div className="space-y-10">
            {/* 한국평가데이터 */}
            <div className="grid grid-cols-20 gap-6">
              <div className="col-span-5">
                <h3 className="text-xl font-black text-gray-900">한국평가데이터</h3>
                <p className="text-gray-600 mt-2">AI 인턴</p>
                <p className="text-gray-500 text-sm mt-1">2025.03 - 재직중</p>
              </div>
              <div className="col-span-15 space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900">기업 신용 보고서 작성 자동화 <span className="text-sm text-gray-500">with 지사지원부</span></h4>
                    <span className="text-gray-500 text-sm">2025.03-09</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">보고서 작성 과정과 데이터를 분석·정리하여, LLM 기반 자동화의 기반을 다졌습니다.</p>
                  <ul className="text-gray-700 text-sm space-y-0">
                    <li><span className="text-blue-500">•</span> 보고서 상품 분석 및 <strong>데이터 원천 식별</strong></li>
                    <li><span className="text-blue-500">•</span> 자동화 가능성을 고려한 보고서 작성 <strong>프로세스 정리</strong></li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900">산업 분석 에이전트 개발 <span className="text-sm text-gray-500">with AI전환실</span></h4>
                    <span className="text-gray-500 text-sm">2025.05-09</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">유관 부서에서 수집 범위를 명확히 식별할 수 있도록, 사내 분류체계에 맞추어<br /> 산업을 정의·분류했습니다.</p>
                  <ul className="text-gray-700 text-sm space-y-0">
                    <li><span className="text-blue-500">•</span> hierarchy 데이터 <strong>수집구조 체계화</strong></li>
                    <li><span className="text-blue-500">•</span> FastAPI 검색 서버 + Next.js 인터페이스 개발로 <strong>사용자 접근성 개선</strong></li>
                    <li className="font-black"><span className="text-blue-500">•</span> 산업 리서치 시간 85% 단축</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900">LLM 인퍼런스 오케스트레이터 <span className="text-sm text-gray-500">with 사내 연구</span></h4>
                    <span className="text-gray-500 text-sm">2025.07-09</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">실험 과정을 체계적으로 관리하는 오케스트레이터를 개발했습니다. </p>
                  <ul className="text-gray-700 text-sm space-y-0">
                    <li><span className="text-blue-500">•</span> 실험 오케스트레이터 <strong>설계 및 개발</strong></li>
                    <li><span className="text-blue-500">•</span> 프롬프트 실험 <strong>병렬 처리 자동화</strong></li>
                    <li><span className="text-blue-500">•</span> 실험별 메타데이터 <strong>기록 및 추적</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 마일로스 */}
            <div className="grid grid-cols-20 gap-6">
              <div className="col-span-5">
                <h3 className="text-xl font-black text-gray-900">마일로스</h3>
                <p className="text-gray-600 mt-2">프리랜서</p>
                <p className="text-gray-500 text-sm mt-1">2017.08 - 현재</p>
              </div>
              <div className="col-span-15 space-y-6">
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900">모니터링 프로세스 효율화 프로젝트</h4>
                    <span className="text-gray-500 text-sm">2024.07-12</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">이미지 데이터 처리, 라벨링, 리포트 생성까지 과정을 자동화했습니다. </p>
                  <ul className="text-gray-700 text-sm space-y-0">
                    <li><span className="text-blue-500">•</span> 비디오 채팅 앱 사용자 <strong>모니터링 자동화</strong></li>
                    <li><span className="text-blue-500">•</span> 주간 리포트 자동 생성 및 라벨링 도구 개발</li>
                    <li className="font-black"><span className="text-blue-500">•</span> 모니터링 작업시간 91% 단축 (6시간 → 30분)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects - Page 2 시작 */}
        <section className="mb-4 pt-8 print:pt-12">
          <h2 className="text-4xl font-black mb-3 tracking-tight" style={{color: '#1a1a1a'}}>Projects<span style={{color: '#3182F6'}}> /</span></h2>
          
          <div className="space-y-4">
            {/* 마이데이터 레이크하우스 */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">마이데이터 레이크하우스 <span className="text-sm text-gray-500">개인 프로젝트</span></h3>
                <span className="text-gray-500 text-sm">2025.02 - 2025.09</span>
              </div>
              
              <div className="ml-4 space-y-0 text-sm">
                <p className="text-gray-700">분산된 개인 데이터(디바이스, 거래내역, 행동로그)를 통합하고 체계화하여 확장 가능한 레이크하우스 구축</p>
                <p className="text-gray-900 font-semibold">토스 앱로그와 금융 데이터를 결합 분석해 유저 행동 패턴과 지출 상관관계 도출</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mx-1">Pandas</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs mx-1">Matplotlib</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs mx-1">PySpark</span>
                  <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs mx-1">Iceberg</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs mx-1">OpenLineage</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs mx-1">DuckDB</span>
                </div>
              </div>
            </div>

            {/* 산업 분석 에이전트 */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">산업 분석 에이전트 <span className="text-sm text-gray-500">한국평가데이터</span></h3>
                <span className="text-gray-500 text-sm">2025.05 - 2025.09</span>
              </div>
              
              <div className="ml-4 space-y-0 text-sm">
                <p className="text-gray-700">산업 리서치 자동화를 위한 검색 시스템 및 산업-기업-상품 매핑 테이블 구축</p>
                <p className="text-black font-bold">전체 쿼리의 70%가 키워드 기반으로 발생해 산업 데이터 접근성이 높아진 것으로 확인</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mx-1">Pandas</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs mx-1">FastAPI</span>
                  <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs mx-1">Docker</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs mx-1">Next.js</span>
                </div>
              </div>
            </div>

            {/* ADBIAS */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">ADBIAS <span className="text-sm text-gray-500">연세대 ML연구실</span></h3>
                <span className="text-gray-500 text-sm">2025.03 - 2025.07</span>
              </div>
              
              <div className="ml-4 space-y-0 text-sm">
                <p className="text-gray-700">LLM 채점자 편향 문제 해결을 위한 MFRM 기반 보정 방법론 연구 논문</p>
                <p className="text-black font-bold">QWK 정확도 6.4%p 향상 및 편향 분포 57.9% 감소</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mx-1">Pandas</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs mx-1">NumPy</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs mx-1">PyTorch</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-3">
          <h2 className="text-4xl font-black mb-2 tracking-tight" style={{color: '#1a1a1a'}}>Education<span style={{color: '#3182F6'}}> /</span></h2>
          
          <div className="space-y-2">
            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">경희대학교</h3>
                  <p className="text-gray-600">경영학 학사</p>
                </div>
                <div className="text-right text-gray-500 text-sm">
                  <p className="font-medium">2016.03 - 2022.07</p>
                  <p>서울</p>
                </div>
              </div>
              <ul className="text-gray-700 text-sm ml-4">
                <li><span className="text-blue-500">•</span> 데이터 분석·머신러닝 기초·마케팅·회계 관련 전공 과목 이수</li>
                <li><span className="text-blue-500">•</span> 세무사 준비 경험(2022.07-2023.12) - 세법,재무회계</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">제로베이스 AI/DATA</h3>
                  <p className="text-gray-600">데이터 분석 과정</p>
                </div>
                <div className="text-right text-gray-500 text-sm">
                  <p className="font-medium">2025.01 - 2025.08</p>
                  <p>7개월</p>
                </div>
              </div>
              <ul className="text-gray-700 text-sm ml-4">
                <li><span className="text-blue-500">•</span> 연세대학교 ML연구실 인턴 파견</li>
                <li><span className="text-blue-500">•</span> 데이터 분석 및 머신러닝 기반 비즈니스 문제 해결 실습</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">삼정 KPMG AX 컨설턴트 과정 1기</h3>
                  <p className="text-gray-600">데이터 분석 & 프로젝트 관리</p>
                </div>
                <div className="text-right text-gray-500 text-sm">
                  <p className="font-medium">2024.07 - 2025.01</p>
                  <p>6개월</p>
                </div>
              </div>
              <ul className="text-gray-700 text-sm ml-4">
                <li><span className="text-blue-500">•</span> ML/LLM 데이터 프로젝트 수행 및 관리</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-3">
          <h2 className="text-4xl font-black mb-2 tracking-tight" style={{color: '#1a1a1a'}}>Skills<span style={{color: '#3182F6'}}> /</span></h2>
          
          <div className="space-y-0">
            <div>
              <span className="font-semibold text-gray-800">Database & Query:</span> 
              <span className="text-gray-700 ml-2">MySQL,Oracle, SQLite</span> <span className="text-xs text-gray-500"><span className="text-blue-500">•</span> 스키마 설계, 쿼리 작성</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Data:</span> 
              <span className="text-gray-700 ml-2">pandas, NumPy, PySpark, Matplotlib, PyTorch, Scikit-learn</span> <span className="text-xs text-gray-500"><span className="text-blue-500">•</span> 분석 파이프라인 구축, 머신러닝</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Development:</span> 
              <span className="text-gray-700 ml-2">FastAPI, Docker, Next.js, LangGraph</span> <span className="text-xs text-gray-500">• 웹, LLM 애플리케이션 개발</span>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-2">
          <h2 className="text-4xl font-black mb-2 tracking-tight" style={{color: '#1a1a1a'}}>Certifications<span style={{color: '#3182F6'}}> /</span></h2>
          
          <div className="space-y-0 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-800">SQLD</span>
                <span className="text-gray-500">SQLD-054013415 | 2024.09</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-800">ADSP</span>
                <span className="text-gray-500">ADsP-043008256 | 2024.10</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-800">빅데이터분석기사</span>
                <span className="text-gray-500">BAE-009000964 | 2024.11</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-800">정보처리기사 필기</span>
                <span className="text-gray-500">2025.08</span>
              </div>
          </div>
        </section>
    </div>
  );
}