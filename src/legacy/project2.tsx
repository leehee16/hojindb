import Image from 'next/image'

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

export default function Project2() {
  return (
    <div className="space-y-8">
      {/* Page 4: Project 2 - Page 1 */}
      <div className="content-container py-8">
        <header className="mb-6">
          <div className="pb-3">
            <h1 className="text-4xl font-bold text-gray-900 mb-3" 
                style={{ fontFamily: '"MoneygraphyTTF Rounded", "머니그라피TTF Rounded", "Pretendard", sans-serif' }}>
              산업 분석 에이전트 개발
            </h1>
            <div className="text-sm text-gray-600">
              <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>🏢</span> 한국평가데이터 | 2025.05 - 2025.09
            </div>
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">프로젝트 개요</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              기존에는 조사자가 기업에 대하여 산업을 조사할때, 산업 동향, 시장 상황, 규제 환경을 직접 리서치해야 했습니다. 
              리서치는 공수가 많이 들어가므로, 이를 자동화하는 프로젝트에 참여했습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              리서치를 자동화하려면 기업에서 출발해 산업을 도출하고 수동적으로 조사를 이어가는 방식이 아니라, 산업 자체에서 자동화를 시작해야 했습니다. 
              표준산업분류를 기준으로 하기로했는데, 이는 임의의 분류이므로 <strong>기업을 나타내기 어렵다는 문제</strong>가 있었습니다.
            </p>
            <div className="space-y-4 mt-4">
              <div>
                <span className="font-semibold text-gray-800">첫째,</span> 
                <span className="text-gray-700 ml-2">
                  산업 내의 구성 요소를 정리하고, 어떤 범위까지 데이터를 다룰지와 수집 범위를 식별했으며, 데이터가 어느 수준까지 리서치를 지원할 수 있는지 커버리지를 파악했습니다. 
                  이를 통해 산업에서 기업, 그리고 상품·제품으로 산업에 대한 해상도를 점차 높여갈 수 있도록 했습니다.
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">둘째,</span>
                <span className="text-gray-700 ml-2">
                  조사자가 데이터를 쉽게 사용할 수 있는 소비처를 만들었습니다. 
                  산업 코드를 직접 기억하거나 입력하지 않아도 자연스럽게 검색하고 활용할 수 있도록 UI를 설계했습니다.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기술 스택</h2>
          <div className="p-4 rounded-lg text-sm text-gray-700">
            <p className="mb-2">
              <span className="font-semibold">Backend:</span> 
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs mx-1">FastAPI</span>로 검색 API, 
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs mx-1">SQLite</span>로 산업 데이터 저장
            </p>
            <p className="mb-2">
              <span className="font-semibold">Frontend:</span> 
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs mx-1">Next.js</span>로 검색 인터페이스 개발
            </p>
            <p>
              <span className="font-semibold">Data Processing:</span> 
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mx-1">Pandas</span>로 산업 분류체계 정리, 
              <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs mx-1">Docker</span>로 배포
            </p>
          </div>
        </section>

        {/* UI 스크린샷 */}
        <section className="mb-6">
          <div className="bg-gray-200 pt-6 px-6 rounded-lg">
            <div className="rounded-t-lg overflow-hidden">
              <Image 
                src="/fortsrc/agent2.png" 
                alt="산업 분석 에이전트 검색 인터페이스"
                width={1200}
                height={400}
                className="w-full h-auto"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">산업 분석 에이전트 검색 인터페이스</p>
        </section>


        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">매핑 테이블과 검색 인덱스</h2>
          <div className="bg-gray-200 rounded-lg p-4">
            <Table 
              headers={['테이블명', '용도', '주요 필드']}
              rows={[
                [
                  { content: 'industry_fts', className: 'font-mono font-bold' },
                  '검색 테이블',
                  'ksic11_code, ksic11_name_ko/en, context_fts, index_terms'
                ],
                [
                  { content: 'industry_negative_fts', className: 'font-mono font-bold' },
                  '부정 필터 테이블',
                  'negative_terms'
                ],
                [
                  { content: 'mapping_fts', className: 'font-mono font-bold' },
                  '매핑 테이블',
                  'ksic11_code, ksic10_code/name, kcpc_code/name, hs_code/name'
                ]
              ]}
              className="text-sm"
            />
          </div>
        </section>
      </div>

      {/* Page 5: Project 2 - Page 2 */}
      <div className="content-container py-8">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">문제 정의</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-sm">
                산업 분류가 프록시로 작동하는 한계 때문에 조사자가 필요한 정보를 수집하는 데 어려움
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
              <p className="text-gray-700 text-sm">
                조사자들이 정확한 산업분류 코드나 공식 산업명으로 데이터를 접근하기 힘듬
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">기여 및 성과</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <span className="not-italic" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>1️⃣</span> 데이터 구조 체계화
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                산업–기업–상품을 연결하는 매핑 테이블과 브릿지 테이블을 구축하여 이 계층 기준으로 데이터를 순차적으로 확장할 수 있는 구조를 만들었습니다.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                여러 분류 코드와 관련 키워드 검색을 지원하여 수집된 데이터 커버리지 중 가장 상세한 수준까지 보여줄 수 있게 했습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <span className="not-italic" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>2️⃣</span> 검색 서버 구축 및 사용 패턴 분석
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                FastAPI 기반 검색 서버를 구축하고 검색 결과 로그를 수집했습니다. 
                일 검색량은 평균 5건이었으며, 실제 사용 행태를 정량적으로 파악할 수 있었습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <span className="not-italic" style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>3️⃣</span> UI 개발 및 접근성 개선
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Next.js 검색 및 뷰어 UI를 개발하여 산업 코드나 명칭을 몰라도 자연스럽게 키워드 기반 검색이 가능하게 했습니다. 
                조사자의 초기 진입 장벽을 낮추고 전사적으로 활용 가능한 구조를 확보했습니다.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">한계 및 향후 과제</h4>
                <p className="text-gray-700 text-sm">
                  신산업은 기존 매핑 체계로 대응이 불가능하여 분류 예측 모델링에 대한 니즈를 확인했습니다.
                </p>
              </div>
            </div>

            {/* 주요 성과 지표 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">주요 성과 지표</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-gray-600 mt-1">리서치 시간 단축</div>
                  <div className="text-xs text-gray-500">도입 전후 작성완료 시점 비교</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">70%</div>
                  <div className="text-sm text-gray-600 mt-1">키워드 기반 접근</div>
                  <div className="text-xs text-gray-500">8월 검색로그 분석 (총 90건)</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
