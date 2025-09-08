// Table 컴포넌트 인라인 정의
interface TableProps {
  headers: string[];
  rows: (string | number | { content: string | number; rowspan?: number; className?: string })[][];
  className?: string;
}

function Table({ headers, rows, className = "" }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full bg-white table-fixed ${className}`}>
        <thead>
          <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
            {headers.map((header, index) => (
              <th 
                key={index}
                className="px-4 py-3 text-left font-semibold text-gray-700 text-sm tracking-wide uppercase border-b-2 border-gray-200"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50/50 transition-colors">
              {row.map((cell, cellIndex) => {
                if (typeof cell === 'object' && cell !== null) {
                  return (
                    <td
                      key={cellIndex}
                      className={`px-4 py-3 text-gray-800 ${cell.className || ''}`}
                      rowSpan={cell.rowspan}
                    >
                      {cell.content}
                    </td>
                  );
                } else {
                  return (
                    <td
                      key={cellIndex}
                      className="px-4 py-3 text-gray-800"
                    >
                      {cell}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LogStatTable({ data }: { data: any[] }) {
  const headers = ['Level', 'Module', '로그', '유니크', '유니크 비율'];
  
  const rows = [
    [
      { content: 'debug', rowspan: 4, className: 'font-medium bg-blue-50 text-blue-700 rounded-lg px-2 py-1' },
      'Common',
      '28,262',
      '8,478',
      { content: '30%', className: 'font-mono text-sm' }
    ],
    [
      'URLScheme',
      '2,076', 
      '1,006',
      { content: '48%', className: 'font-mono text-sm' }
    ],
    [
      'Securities',
      '2,098',
      '4', 
      { content: '0.2%', className: 'font-mono text-sm' }
    ],
    [
      'Network',
      '1,073',
      '4',
      { content: '0.4%', className: 'font-mono text-sm' }
    ],
    [
      { content: 'error', rowspan: 2, className: 'font-medium bg-red-50 text-red-700 rounded-lg px-2 py-1' },
      'Common',
      '754',
      '67',
      { content: '9%', className: 'font-mono text-sm' }
    ],
    [
      'EventLog',
      '223',
      '158', 
      { content: '71%', className: 'font-mono text-sm' }
    ],
    [
      { content: 'info', className: 'font-medium bg-green-50 text-green-700 rounded-lg px-2 py-1' },
      'Cache',
      '98,672',
      '170',
      { content: '0.2%', className: 'font-mono text-sm' }
    ]
  ];

  return (
    <Table headers={headers} rows={rows} className="text-xs" />
  );
}

export default function Project1() {
  return (
    <div className="space-y-8">
      {/* Page 2: Project 1 - Page 1 */}
      <div className="content-container py-8">
        <header className="mb-6">
          <div className="pb-3">
            <h1 className="text-4xl font-bold text-gray-900 mb-3" 
                style={{ fontFamily: '"MoneygraphyTTF Rounded", "머니그라피TTF Rounded", "Pretendard", sans-serif' }}>
              마이 데이터 레이크하우스
            </h1>
            <div className="text-sm text-gray-600">
              <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>🧑‍💻</span> 개인 프로젝트 | 2025.07 - 2025.09
            </div>
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">프로젝트 개요</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              내가 생성한 다양한 데이터를 체계적으로 분석해보고자 하는 동기로부터,
              다양한 개인 데이터 소스를 통합적으로 분석할 수 있는 <strong>확장 가능한 데이터 레이크하우스</strong>를 설계·구축했습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              이 과정에서 데이터가 수집되고 저장된 뒤 적재와 분석으로 이어지는 전 과정을 다루어, 데이터가 어떻게 변형되고 흘러가는지 경험했습니다.
              또한 데이터 소스가 계속 추가되는 상황에 대응하고자, <strong>스키마의 확장성</strong>을 프로젝트의 목표로 두었습니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              파이프라인 설계 단계에서 데이터 특성과 품질을 검증하고, 대규모 데이터에도 견딜 수 있는 다소 과한 파이프라인을 설계하고자했습니다.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기술 스택</h2>
          <div className="p-4 rounded-lg text-sm text-gray-700">
            <p className="mb-2">
              <span className="font-semibold">데이터 탐색:</span> 
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mx-1">Pandas</span>로 초기 데이터 분석, 
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs mx-1">Seaborn</span>으로 데이터 시각화와 패턴 탐색
            </p>
            <p className="mb-2">
              <span className="font-semibold">파이프라인 처리:</span> 
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs mx-1">Spark</span>로 대용량 데이터 변환 및 처리 로직 구현
            </p>
            <p>
              <span className="font-semibold">추적 및 쿼리:</span> 
              <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs mx-1">Iceberg</span>로 테이블 버전관리, 
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs mx-1">OpenLineage</span>로 라인니지 기록, 
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs mx-1">DuckDB</span>/<span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs mx-1">Spark</span>로 쿼리
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">아키텍처</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-8">
              {/* 왼쪽: 데이터 레이크 구조 */}
              <div>
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-xl mr-2" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>📁</span>
                      <span className="font-bold text-lg text-gray-800">lake/</span>
                    </div>
                    <div className="text-xs text-gray-500">41,359 files</div>
                  </div>
                </div>

                <div className="space-y-1">
                  {/* Bronze Layer */}
                  <div className="flex items-center justify-between py-1 px-2">
                    <div className="flex items-center">
                      <span className="text-lg mr-2" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>🥉</span>
                      <div>
                        <div className="font-semibold text-gray-800">bronze/</div>
                        <div className="text-xs text-gray-600">Raw data ingestion</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-sm font-bold text-gray-700">40,910</div>
                      <div className="text-xs text-gray-500">files</div>
                    </div>
                  </div>

                  {/* Silver Layer */}
                  <div className="flex items-center justify-between py-1 px-2">
                    <div className="flex items-center">
                      <span className="text-lg mr-2" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>🥈</span>
                      <div>
                        <div className="font-semibold text-gray-800">silver/</div>
                        <div className="text-xs text-gray-600">Cleaned & transformed</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-sm font-bold text-gray-700">447</div>
                      <div className="text-xs text-gray-500">files</div>
                    </div>
                  </div>

                  {/* Gold Layer */}
                  <div className="flex items-center justify-between py-1 px-2">
                    <div className="flex items-center">
                      <span className="text-lg mr-2" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>🥇</span>
                      <div>
                        <div className="font-semibold text-gray-800">gold/</div>
                        <div className="text-xs text-gray-600">Analytics-ready data</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-sm font-bold text-gray-700">3</div>
                      <div className="text-xs text-gray-500">files</div>
                    </div>
                  </div>

                  {/* Lineage */}
                  <div className="flex items-center justify-between py-1 px-2">
                    <div className="flex items-center">
                      <span className="text-lg mr-2" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>📋</span>
                      <div>
                        <div className="font-semibold text-gray-800">lineage/</div>
                        <div className="text-xs text-gray-600">Data lineage tracking</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-sm font-bold text-gray-700">8</div>
                      <div className="text-xs text-gray-500">file</div>
                    </div>
                  </div>
                </div>
                
              </div>
              
              {/* 오른쪽: 아키텍처 컴포넌트 */}
              <div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">메달리온 아키텍처</h4>
                    <p className="text-gray-700 text-sm">파일기반 데이터 저장</p>
                    <p className="text-gray-600 text-xs">Bronze(csv, sqlite, xml) → Silver(parquet) → Gold(parquet, csv)</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">데이터 라인니지 추적</h4>
                    <p className="text-gray-700 text-sm">OpenLineage를 통한 변환 추적</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">스키마 진화</h4>
                    <p className="text-gray-700 text-sm">Iceberg - 스키마 변경 이력 관리</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">일자별 파티셔닝</h4>
                    <p className="text-gray-700 text-sm">transaction_id 멱등성키, date기준 파티셔닝</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 메달리온 아키텍처 흐름 - 전체 너비 */}
            <div className="mt-4 pt-3 border-t border-gray-300">
              <div className="flex items-center justify-center space-x-8">
                {/* Bronze */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-2xl mr-2" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>🥉</span>
                    <span className="font-bold text-lg text-gray-800">Bronze</span>
                  </div>
                  <div className="text-xs text-gray-600 max-w-32">
                    스마트폰 앱 로그, 사진 메타데이터, 헬스데이터 원본
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center">
                  <span className="text-xl text-gray-400">→</span>
                </div>

                {/* Silver */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-2xl mr-2" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>🥈</span>
                    <span className="font-bold text-lg text-gray-800">Silver</span>
                  </div>
                  <div className="text-xs text-gray-600 max-w-32">
                    Parquet로 가공한 팩트테이블들 (f_Activity, f_Transaction)
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center">
                  <span className="text-xl text-gray-400">→</span>
                </div>

                {/* Gold */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-2xl mr-2" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>🥇</span>
                    <span className="font-bold text-lg text-gray-800">Gold</span>
                  </div>
                  <div className="text-xs text-gray-600 max-w-32">
                    시각화용 CSV, DuckDB 집계 테이블
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Page 3: Project 1 - Page 2 */}
      <div className="content-container py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">팩트 테이블 모델링</h2>
          <div className="bg-gray-200 rounded-lg p-4">
            <Table 
              headers={['Fact 테이블', '그레인', '주요 차원', '사실 유형', '데이터 원천']}
              rows={[
                [
                  { content: 'f_Activity', className: 'font-mono font-bold' },
                  '생성물 1건',
                  'Date, Time, Location',
                  'Event',
                  '사진 메타데이터'
                ],
                [
                  { content: 'f_Transaction', className: 'font-mono font-bold' },
                  '거래 1건',
                  'Date, Time, Merchant',
                  'Transaction',
                  '은행/카드 거래내역'
                ],
                [
                  { content: 'f_Mobile', className: 'font-mono font-bold' },
                  '로그 1~3회',
                  'Date, Time, App, Location',
                  'Event',
                  '앱 사용 로그'
                ]
              ]}
              className="text-sm"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">토스앱 로그 분석</h2>
          <p className="text-gray-700 italic mb-6">
            <strong>2025-04-08~2025-08-27</strong>의 디바이스 로그를 분석했습니다. 
            로그파일과 date가 100% 일치했습니다. 데이터가 모두 디바이스에서 생성되었다고 짐작할 수 있습니다.
          </p>
          

          <div className="space-y-6">
            {/* 분석 시리즈 1: 캐싱 실패 패턴 */}
            <div className="bg-white border border-gray-300 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  <span className="text-sm text-blue-600 font-medium mr-3">01</span>왜 캐싱 실패만 집중적으로 로깅할까?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  캐시 모듈, 커먼 모듈 로그 분석
                </p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Cache 모듈의 98,684개 로그 중 98,671개가 valueNotFound로, 성공으로 기록된 로그가 거의 없었습니다. 다른 모듈의 로그도 비슷한 양상이었는데,
                    <strong> 디바이스에 캐시 실패를 주로 기록</strong>한다고 보고 그 이유를 고민해보았습니다.
                  </p>

                  <div className="bg-gray-200 rounded-lg p-4 mb-4">
                    <h4 className="font-bold text-gray-900 mb-3">레벨별 로그 통계</h4>
                    <LogStatTable data={[]} />
                    <div className="mt-3 pt-3 border-t border-gray-300">
                      <p className="text-gray-600 text-xs leading-relaxed">
                        <span className="not-italic" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>💡</span> <span className="italic">Common 모듈은 주로 디버그 용도로 활용되며, Cache 모듈은 Info 역할을 합니다. 다만 Cache 로그는 대부분 실패 위주로 기록되는 특징이 있습니다.</span>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-blue-600">Cache의 3계층</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      실패 원인은 memory 69,618 / user_defaults 26,048 / disk 3,005 순으로 나타납니다.
                      <code className="bg-gray-200 px-1 py-0.5 rounded text-xs">memory → user_defaults</code>는 <strong>20.7%가 2초 내 발생</strong>했지만, 
                      <code className="bg-gray-200 px-1 py-0.5 rounded text-xs">user_defaults → disk</code>는 관측되지 않았습니다. 
                      즉, 캐시 조회간 <strong>유의미한 시퀀스가 없다</strong>고 판단했습니다.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-blue-600">Common로그에서의 시퀀스</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Common로그의 경우 airDrop 스캔과 Startup 단계 등 앱 초기화 상태 
                      <code className="bg-gray-200 px-1 py-0.5 rounded text-xs">start, prepare, finish</code>를 나타내는 것으로 확인됩니다. 
                      Common 로그는 일련의 시퀀스가 있어보여, Common로그와 Cache로그의 연관성을 조사해보았습니다.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">결론</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      <code className="bg-white px-1 py-0.5 rounded text-xs">prepare → finish</code> 소요시간과 memory cache 이벤트 수의 피어슨 상관계수가 +0.54로 캐시 실패가 앱 초기화 성능에 영향을 미치는 것을 확인했습니다.
                      토스 앱이 디바이스 내에서 발생하는 실패 지점을 관찰하고, 캐시 동작 과정에서의 
                      <strong>성능 병목</strong>을 파악하려고 하거나, <strong>의도적으로 캐시하지않은 로그정책</strong>이 있을 것으로 유추할 수 있었습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 분석 시리즈 2: 금융 거래와 앱 이벤트 연관성 */}
            <div className="bg-white border border-gray-300 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  <span className="text-sm text-blue-600 font-medium mr-3">02</span>토스뱅크 거래내역과 앱 이벤트 결합 분석
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  금융 거래를 앱 내부 이벤트로 간주하고 분석을 진행했습니다.
                </p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-bold text-blue-600">시간 근접도 분석</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      전체 거래 중 <strong>약 4%만</strong>이 거래 시각 60분 내에 주요 앱 이벤트(Startup finish, AirDrop start)가 존재했습니다. 
                      가장 많이 매칭된 이벤트는 Startup finish였고, 일부는 AirDrop 스캔 직후에 거래가 기록되기도 했습니다. 
                      이는 거래가 <strong>토스 앱 외 채널에서 발생</strong>했다고 할 수 있습니다.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-blue-600">일자별 상관관계</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      일평균 거래금액과 일간 로그 수는 피어슨 계수 0.64, AirDrop 카운트와는 0.59로 상관관계를 보였습니다. 
                      일간 거래 합계와 Startup finish 횟수의 상관도 0.39로, 앱을 자주 실행한 날에 총 지출도 늘어나는 경향을 확인했습니다. 
                      따라서, 개별 일 단위로 보면 <strong>앱 사용량과 금융 활동이 함께 증가하는 경향이 있다</strong>고 할 수 있습니다.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">결론</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      인앱 내부에서 금융을 동반한 서비스(송금, 결제, 커머스 등)는 거의 이용하지 않았다고 볼 수 있습니다. 
                      그러나 일자별로 보면 금융 활동이 많은 날에는 토스앱 실행 빈도 역시 증가하는 양상을 보입니다. 
                      토스앱을 직접적인 결제,송금 채널보다 <strong>금융 활동 전반을 확인,관리하는 채널로 사용함</strong>을 알 수 있습니다. 
                      실제로 토스증권을 주로 이용하므로, 토스증권 데이터를 수집하여 이용행태 분석을 고도화 할 수 있을 것으로 보입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}