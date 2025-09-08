export default function Project4() {
  return (
    <div className="space-y-8">
      {/* 프로젝트 4: ADBIAS - LLM 채점자 편향 보정 연구 */}
      <div className="content-container py-8">
        <header className="mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3" 
                style={{ fontFamily: '"MoneygraphyTTF Rounded", "머니그라피TTF Rounded", "Pretendard", sans-serif' }}>
              ADBIAS - LLM 채점자 편향 보정 연구
            </h1>
            <div className="text-sm text-gray-600 mb-2">
              <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>🎓</span> 연세대 ML연구실 | 2025.03 - 2025.07
            </div>
            <div className="text-sm">
              <span className="font-semibold text-blue-600">GitHub:</span>
              <a href="https://github.com/leehee16/ADBIAS" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1 hover:text-blue-800">github.com/leehee16/ADBIAS</a>
            </div>
            <div className="text-sm mt-1">
              <span className="font-semibold text-blue-600">OpenReview:</span>
              <a href="https://openreview.net/forum?id=6CD9wkEzUR&referrer=%5Bthe%20profile%20of%20Hojin%20Lee%5D(%2Fprofile%3Fid%3D~Hojin_Lee2)" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1 hover:text-blue-800">openreview.net/forum?id=6CD9wkEzUR</a>
            </div>
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">프로젝트 개요</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              ML연구실에서 4명의 팀원과 함께 LLM을 평가자로 활용할 때 발생하는 채점자 편향문제를 해결하는 방법론을 연구했습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              매주 주말 팀 미팅을 통해 기존 연구의 한계점을 분석하고, 아이디어를 공유하며 해결지점을 구체화해 나갔습니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              최종적으로 인간 골드 레이블 없이도 LLM의 평가자 편향을 정량 추정하고 <strong>메타 LLM 집계 단계에서 편향을 동적으로 보정</strong>하는 기법을 제안하고 구현하였습니다. 현재 리뷰를 기다리고 있습니다.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기술 스택</h2>
          <div className="p-4 rounded-lg text-sm text-gray-700">
            <p className="mb-2">
              <span className="font-semibold">Modeling:</span> 
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs mx-1">PyTorch</span>로 MFRM 추정 모듈 개발, 그래디언트 기반 최적화
            </p>
            <p className="mb-2">
              <span className="font-semibold">Data Processing:</span> 
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mx-1">Pandas</span> 및 
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs mx-1">NumPy</span>로 데이터 전처리 및 분석
            </p>
            <p>
              <span className="font-semibold">Experiment & Analysis:</span> 
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs mx-1">SciPy</span> 및 
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs mx-1">Statsmodels</span> 통계 분석
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">시행착오</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              이 연구는 처음에 LLM의 참신성을 정량적으로 평가하는 문제에서 시작했습니다. 참신성 점수가 포함된 에세이 데이터셋을 활용하며 기존 연구 흐름을 따라갔지만, 진행하면서 초점은 점차 <strong>&ldquo;LLM을 평가자로 활용할 수 있을까?&rdquo;</strong>라는 질문으로 옮겨갔습니다.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              그러나 주제를 구체화하는 과정은 쉽지 않았습니다. 팀원마다 이해 수준과 관점이 달라 논의가 평행선을 달렸고, 특히 LLM을 다루면서도 기존 머신러닝의 예측·분류 문제로 단순 환원하는 경우가 많았습니다. 그 결과 <strong>연구 주제를 확정하지 못했습니다</strong>.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              이 난관을 넘기 위해 <strong>협업 방식을 구체화</strong>했습니다. 논의한 내용을 곧바로 문서화해 슬랙에 공유했고, 논문이나 아이디어 리뷰는 한 명이 핵심을 요약하면 나머지 팀원들이 각자 리포트를 작성해 다시 공유하는 식으로 진행했습니다. 이렇게 함으로써 모두가 같은 정보를 갖게 되었고, 각자가 어디까지 이해했는지를 확인할 수 있었습니다. 또한 업무마다 어디까지 하면 끝이라고 볼 것인지를 분명히 정해 흐지부지되는 일을 막았습니다.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              이런 체계 덕분에 방법론을 바꿀 때도 <strong>빠르게 움직일 수 있었습니다.</strong> 초기에는 T5 인코더–디코더 모델을 파인튜닝하며 성능 고도화를 시도했지만, 투입 대비 성과가 제한적이라는 결론에 도달했습니다. 거의 하루 이내에 새로운 방향성으로 전환할 수 있었는데, 앞서 남겨둔 문서와 각 접근법의 장단점 기록하고 공유할 수 있었기 때문입니다.
            </p>
          </div>
        </section>

      </div>

      {/* 프로젝트 4 페이지 2 */}
      <div className="content-container py-8">
        {/* 방법론 아키텍처 */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">방법론 및 아키텍처</h2>
          <div className="bg-gray-200 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex justify-center mb-2">
                  <img 
                    src="/fortsrc/figure_MFRM4.png" 
                    alt="MFRM 기반 편향 보정 아키텍처"
                    className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
                    style={{ maxHeight: '280px' }}
                  />
                </div>
                <p className="text-center text-xs text-gray-500">MFRM 기반 편향 보정 아키텍처</p>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <img 
                    src="/fortsrc/flow4.png" 
                    alt="방법론 개요 - 편향 추정 및 보정 파이프라인"
                    className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
                    style={{ maxHeight: '280px' }}
                  />
                </div>
                <p className="text-center text-xs text-gray-500">방법론 개요 - 편향 추정 및 보정 파이프라인</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">문제 정의</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-sm">
                LLM을 에세이 평가자로 활용할때, <strong>LLM별 채점자 편향</strong>을 보이는 문제
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-sm">
                EM 알고리즘은 초기값 민감성과 제약 설정의 복잡성으로 인한 R로 구현된
                <strong>Many-Facet Rasch Model(채점자 편향 추정 모델)</strong>의 국지해 수렴 및 수렴 속도 문제
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-sm">
                인간 채점 레이블을 확보하기 어려워 <strong>비용·확장성 측면에서 제약</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기여 및 해결 방안</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <span className="not-italic" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>1️⃣</span> PyTorch 기반 MFRM 추정 모듈 개발
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                기존 R 라이브러리 기반 MFRM은 시작값에 따라 결과가 달라지고 최적해를 찾지 못하는 문제가 있었습니다. 이를 해결하기 위해 <strong>PyTorch로 MFRM을 새로 구현</strong>하여 더 안정적으로 각 LLM의 편향 정도를 측정할 수 있도록 했습니다. 딥러닝의 역전파 알고리즘을 활용해 모델이 스스로 최적의 편향값을 찾아가도록 하고, 편향값들의 평균을 0으로 맞춰 상대적 비교가 가능하게 했습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <span className="not-italic" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>2️⃣</span> 메타 LLM 프롬프트 주입 기법
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                추정된 채점자 심각도(β)를 메타 LLM 프롬프트에 정량적 지시사항으로 주입하여 동적 편향 보정을 구현했습니다. 예를 들어 &ldquo;conventions: gemini(1.1446) &gt; claude(1.0914) &gt; gpt(0.8994)&rdquo;와 같은 특성별 편향 순위 정보를 제공하여, 메타 LLM이 각 모델의 상대적 편향을 고려해 최종 점수를 집계하도록 했습니다. 이를 통해 기존 대비 57.9% 편향 분포 감소를 달성했으며, 이는 채점자별 점수 분산의 표준편차 감소율로 측정했습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <span className="not-italic" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>3️⃣</span> 연구 의의
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                기존에는 LLM 편향을 보정하려면 매번 값비싼 인간 채점 데이터가 필요했습니다. 본 연구는 <strong>최소 3개 모델의 초기 편향 정보만 확보하면</strong>, 이후 새로운 에세이에 대해서는 인간 골드 레이블 없이도 각 LLM의 채점자 편향을 자동으로 추정할 수 있는 방법론을 제시했습니다. 이를 통해 LLM 기반 자동 채점 시스템의 비용·확장성 문제를  해결하고자했습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">주요 성과</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600">6.4%</div>
                <div className="text-sm text-gray-600 mt-1">QWK 정확도 향상</div>
                <div className="text-xs text-gray-500">인간 평가자와의 일치도</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600">57.9%</div>
                <div className="text-sm text-gray-600 mt-1">편향 분포 감소</div>
                <div className="text-xs text-gray-500">모델별 과대/과소 완화</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600">3배</div>
                <div className="text-sm text-gray-600 mt-1">처리 속도 향상</div>
                <div className="text-xs text-gray-500">EM 알고리즘 대비</div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}