export default function Project3() {
  return (
    <div className="space-y-8">
      {/* 프로젝트 3: LLM 인퍼런스 오케스트레이터 개발 */}
      <div className="content-container py-8">
        <header className="mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3" 
                style={{ fontFamily: '"MoneygraphyTTF Rounded", "머니그라피TTF Rounded", "Pretendard", sans-serif' }}>
              LLM 인퍼런스 오케스트레이터 개발
            </h1>
            <div className="text-sm text-gray-600">
              <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>🤖</span> 한국평가데이터 | 2025.07 - 2025.09
            </div>
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">프로젝트 개요</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              LLM 인퍼런스 실험을 체계적으로 관리하기 위한 <strong>오케스트레이터</strong>를 개발했습니다.
              이전 연구에서, 실험과 부수되는 변인들의 버전을 관리하는 것이 어려웠습니다.
            </p>
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-gray-700 text-sm">
                  <strong>API로 결과값을 받아오는 경우:</strong> 출력값이 비정상적인 경우가 많았습니다.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-gray-700 text-sm">
                  <strong>전처리 과정에서의 경우:</strong> 출력포맷을 따르지 않거나, 특정 필드에 str처리를 한 채로 생성되는 등 데이터 일관성 문제가 발생했습니다.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              따라서 실험, 프롬프트, 모델 등 모든 변인들에서 <strong>추적이 가능한 구조</strong>를 만들어 추적할 수 있도록 구성했습니다.
              입력 데이터와 실험을 프롬프트로 쉽게 구성할 수 있도록 하였고, A/B 테스트, 메타데이터 추적, 오류 발생시 재시도할 수 있도록 하였습니다.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기술 스택</h2>
          <div className="p-4 rounded-lg text-sm text-gray-700">
            <p className="mb-2">
              <span className="font-semibold">Backend:</span> 
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs mx-1">FastAPI</span>로 실험 API, 
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mx-1">GCP</span>대시보드 서버, 
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs mx-1">SQLite</span>로 실험 메타데이터 저장
            </p>
            <p className="mb-2">
              <span className="font-semibold">Frontend:</span> 
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs mx-1">Next.js</span>로 대시보드 UI 개발
            </p>
            <p>
              <span className="font-semibold">API Integration:</span> 
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs mx-1">Openrouter API</span>로 다중 LLM 인퍼런스
            </p>
          </div>
        </section>

        {/* UI 스크린샷 */}
        <section className="mb-6">
          <div className="bg-gray-200 pt-6 px-6 rounded-lg">
            <div className="rounded-t-lg overflow-hidden">
              <img 
                src="/fortsrc/infer3.png" 
                alt="LLM 실험 관리 대시보드"
                className="w-full h-auto"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">LLM 실험 관리 대시보드, 정의된 실험이 병렬적으로 실행 중</p>
        </section>

      </div>

      {/* 프로젝트 3 페이지 2 */}
      <div className="content-container py-8">
        {/* 아키텍처 다이어그램 */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">시스템 아키텍처</h2>
          <div className="bg-gray-200 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex justify-center mb-2">
                  <img 
                    src="/fortsrc/flow3.png" 
                    alt="실험 파이프라인"
                    className="max-w-full h-auto rounded-lg border border-gray-200"
                    style={{ maxHeight: '250px' }}
                  />
                </div>
                <p className="text-center text-xs text-gray-500">실험 파이프라인 - 설계된 절차를 따라서 실험 config만 구성하면 자동 실행</p>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <img 
                    src="/fortsrc/erd3.png" 
                    alt="실험 데이터 ERD"
                    className="max-w-full h-auto rounded-lg border border-gray-200"
                    style={{ maxHeight: '250px' }}
                  />
                </div>
                <p className="text-center text-xs text-gray-500">실험 데이터 ERD - 모든 실험 변인을 체계적으로 추적</p>
              </div>
            </div>
            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">실험 데이터 구조</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong>Experiments:</strong> 실험 정의 (이름, 버전, 연구자, 모델 설정, 상태, 데이터셋 필터)</li>
                <li><strong>Prompts:</strong> 프롬프트 관리 (시스템 프롬프트, 사용자 프롬프트, 데이터셋 경로, 변경 로그)</li>
                <li><strong>Researchers:</strong> 연구자 정보 (이름, API 키 할당, 생성/수정 시간)</li>
                <li><strong>API Keys:</strong> API 키 관리 (키 값, 이름, 할당 상태, 생성 시간)</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">문제 정의</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-sm">
                다수의 프롬프트 변형 실험을 수행할 때 버전 관리와 결과 추적이 어려움
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-sm">
                API 호출 실패 혹은 파싱 오류 발생 시 데이터가 유실되는 문제
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-sm">
                실험별 메타데이터를 수동으로 관리해야 하는 비효율성
              </p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기여 및 해결 방안</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <span className="not-italic" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>1️⃣</span> 실험 설계 시스템 구축
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                실험자가 직접 코드를 수정하지 않아도, 동일한 규격을 공유한 상태에서 템플릿 기반으로 실험을 설계·실행할 수 있도록 했습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <span className="not-italic" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>2️⃣</span> 프롬프트 변형 실험 자동화
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                미리 정의된 다수의 프롬프트 변형을 한 번의 실행으로 병렬 처리할 수 있게 구성하여, 반복적이고 대규모의 실험 비교를 효율적으로 수행할 수 있도록 했습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <span className="not-italic" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>3️⃣</span> 실시간 모니터링 대시보드
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                현재 어떤 실험이 실행 중인지, 실패 로그와 재시도 여부를 실시간으로 확인할 수 있는 UI를 제공하여, 문제 상황을 빠르게 파악하고 대응 가능하게 했습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">주요 성과</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600">5개</div>
                <div className="text-sm text-gray-600 mt-1">API키당 동시 실험</div>
                <div className="text-xs text-gray-500">API 호출한계 기반 계산</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">메타데이터 추적</div>
                <div className="text-xs text-gray-500">ERD 기반 체계화</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}