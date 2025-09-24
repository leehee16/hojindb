'use client';

import { useState } from 'react';
import Image from 'next/image';
import CodeToggle from '@/components/CodeToggle';

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


export default function Project1() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    supertoss: false,
    servicetoss: false,
    securitiestoss: false,
    banktoss: false,
    intoss: false
  });

  const toggleSection = (key: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">요약</h2>
          <div className="bg-gradient-to-r from-gray-100 to-gray-100 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 왼쪽: 프로젝트 요약 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>🏗️</span>
                  개인 데이터 레이크하우스 구축
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  토스앱 로그, 금융 거래내역, 사진 메타데이터, 운동 기록 등 일상 속 파편화된 데이터를 통합하여 
                  <strong> 의미있는 인사이트</strong>로 전환하는 데이터 레이크하우스를 설계했습니다.
                </p>
                <div className="bg-white/70 p-3 rounded-lg">
                  <div className="grid grid-cols-3 gap-3 text-center text-xs">
                    <div>
                      <div className="font-bold text-blue-600">124K+</div>
                      <div className="text-gray-600">앱 로그</div>
                    </div>
                    <div>
                      <div className="font-bold text-green-600">5.4K</div>
                      <div className="text-gray-600">거래 내역</div>
                    </div>
                    <div>
                      <div className="font-bold text-orange-600">17.5K</div>
                      <div className="text-gray-600">사진 메타</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 오른쪽: 분석 흐름 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>📊</span>
                  프로젝트 여정
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center text-lg">
                      <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>1️⃣</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">데이터 정합성</span>
                      <div className="text-gray-600 text-xs">리니지 추적, 품질 관리, Iceberg 적재</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center text-lg">
                      <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>2️⃣</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">스키마 설계</span>
                      <div className="text-gray-600 text-xs">차원/팩트 테이블 구조 정의</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center text-lg">
                      <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>3️⃣</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">데이터 탐색</span>
                      <div className="text-gray-600 text-xs">로그 구조 분석, URLScheme 발견</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center text-lg">
                      <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>4️⃣</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">행동 데이터로 변환하기</span>
                      <div className="text-gray-600 text-xs">URLScheme로그를 기능단위로 분류하여 카디널리티 줄이기</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center text-lg">
                      <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>5️⃣</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">세션 정의</span>
                      <div className="text-gray-600 text-xs">10분 기준 사용자 행동 시퀀스 구분</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center text-lg">
                      <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>6️⃣</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">핵심 인사이트</span>
                      <div className="text-gray-600 text-xs">운동량 임계값, 거래 전환 패턴 발견</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">프로젝트 개요</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              토스는 서비스 전반에서 방대한 데이터를 생성합니다.
              이 데이터는 고객 경험을 이해하고 서비스 품질을 높이는 자산이지만,
              안정적으로 활용 가능하도록 정제하는 과정에서
              끊임없는 기술적 과제와 운영상의 복잡성이 뒤따릅니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              저는 이 문제의식을 개인 데이터에 적용해 보았습니다.
              거래 내역, 스마트폰 로그, 사진 메타데이터, 운동 기록 등 일상 속에서 생성되는 데이터는
              서로 다른 소스와 형태를 가지며 파편화되어 있습니다.
              이를 통합하고 의미 있는 인사이트로 전환하고자, <strong>데이터 레이크하우스</strong>를 설계하고 데이터를 검증했습니다. 
              </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>첫째, 여러 데이터 원천에서 제가 직접 생성한 데이터를 수집했습니다.</strong><br/>
              예를들어, <strong>금융 거래내역</strong>은 개별 건을 이벤트 단위로 나눌 수 있고, 타임스탬프가 명확해 분석에 적합했습니다. 카드사나 은행에서 이 다운로드 내려받아 이용했습니다.
              또한 <strong>일상적으로 작성하는 글</strong>은 Obsidian에서 .md 형태로 저장하는데, 생성 일시, 주제, 폴더 구조 등
              메타데이터가 유용한 소스가 될 수 있었습니다.
              <strong>스마트폰 데이터</strong>에서는 사진 메타데이터와 애플리케이션 로그를 확보할 수 있었으며,
              이 중 앱 로그 데이터를 선별해 활용했습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>둘째, 이렇게 수집한 데이터를 활용하기 쉬운 형태로 변환하고 검증했습니다.</strong><br/>
              원천 데이터는 형태와 맥락이 제각각이었기 때문에 그대로는 분석에 쓰기 어려웠습니다.
              스키마가 예고 없이 달라질 수 있다는 점을 감안해 진화에 유연하게 대응할 수 있도록 했고,
              처리 과정에서 어떤 변화가 일어났는지 추적할 수 있도록 족적을 남겼습니다.
              중복이나 오류가 결과에 영향을 주지 않도록 키를 설계했으며,
              시계열·위치 정보에서 발생하는 이상값은 정제 과정을 거쳐 신뢰할 수 있는 데이터로 다듬었습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>셋째, 가공한 데이터가 분석 목표에 적합한지 테스트하기위해 분석해보았습니다.</strong><br/>
              예를들어 내가 어떤 서비스를 이용하고, 어떤 서비스가 내 행위에 영향을 받고, 서비스의 시퀀스가 어떻게 영향을 받는지 파악하기 위해 아래와 같은 마트를 구성할 수 있도록 하는 것이 목표입니다.
            </p>

            {/* 목표 테이블 구조 */}
            <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
              <Table
                headers={[
                  'session_id', 'event_order', 'event_time', 'event_type', 'service', 'duration_sec'
                ]}
                rows={[
                  [
                    's001', '1', '2025-07-01 09:05:00', 'supertoss_home', 'supertoss', '30'
                  ],
                  [
                    's001', '3', '2025-07-01 09:07:30', 'banktoss_detail', 'banktoss', '600'
                  ],
                  [
                    's002', '2', '2025-07-01 12:16:00', 'securities_portfolio', 'securities', '450'
                  ],
                  [
                    's003', '1', '2025-07-01 15:30:00', 'bank_transfer_init', 'bank', '45'
                  ]
                ]}
                className="text-xs"
              />
            </div>

            {/* 세션 컨텍스트 테이블 - 피벗 형식 */}
            <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-4 mt-4">
              <Table
                headers={[
                  'session_id', 'steps_before', 'photos_during', 'notes_during', 'txn_after'
                ]}
                rows={[
                  [
                    's001', '12034', '4', '0', '200000'
                  ],
                  [
                    's002', '540', '0', '3', '0'
                  ],
                  [
                    's003', '8200', '2', '1', '50000'
                  ]
                ]}
                className="text-xs"
              />
            </div>
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
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs mx-1">OpenLineage</span>로 리니지 기록, 
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
                      <div className="font-mono text-sm font-bold text-gray-700">16</div>
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
                      <div className="font-mono text-sm font-bold text-gray-700">19</div>
                      <div className="text-xs text-gray-500">files</div>
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
                    <h4 className="font-bold text-gray-900 mb-2">데이터 리니지 추적</h4>
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
                    스마트폰 앱 로그, 사진 메타데이터, 헬스데이터 원본 등
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
                    Parquet로 가공한 팩트테이블들
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
        <section className="mb-8">
          {/* 데이터 정합성 */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-sm overflow-hidden mb-4">
            <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                <span className="text-sm text-blue-600 font-medium mr-3">01</span>데이터 정합성
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                데이터의 수집하고 적재하고 정의하는 과정에서 발생할 수 있는 이슈를 식별하고 품질을 검증했습니다.
              </p>
            </div>

            <div className="p-6">
              <div className="space-y-3">
              <CodeToggle
                title="1. 데이터 리니지 추적"
                code={`# OpenLineage 클라이언트 with File Transport
file_config = FileConfig(
    log_file_path=str(lineage_dir / "etl_jobs" / "logs_lineage.json"),
    append=True
)
self.client = OpenLineageClient(transport=FileTransport(file_config))

# Job 시작 이벤트
event = RunEvent(
    eventType=RunState.START,
    eventTime=self.start_time.isoformat(),
    run=run,
    job=job,
    inputs=[],
    outputs=[],
    producer="dade-etl-logs"
)
self.client.emit(event)

# Job 완료 이벤트 (입출력 데이터셋, 스키마 포함)
event = RunEvent(
    eventType=RunState.COMPLETE,
    eventTime=end_time.isoformat(),
    run=run,
    job=job,
    inputs=input_datasets,
    outputs=output_datasets,
    producer="dade-etl-logs"
)
self.client.emit(event)`}
              >
                <p>
                  OpenLineage와 Spark Listener를 활용하여 ETL 수행 이력과 데이터 흐름을 자동으로 기록하였습니다.<br/>
                  입력 및 출력 데이터셋의 스키마, 소스 URI, 레코드 수를 메타데이터를 저장하여, 추적가능하도록 구성했습니다.
                </p>
              </CodeToggle>
              <CodeToggle
                title="2. 데이터 품질 및 정합성 관리"
                code={`# event_id, log_id 생성 (멱등성, 고유성 보장)
F.sha2(
    F.concat_ws("|", F.col("timestamp"), F.col("level"),
                F.col("module"), F.col("message")), 256
).alias("event_id"),

F.sha2(
    F.concat_ws("|", F.col("timestamp"), F.col("message")), 256
).substr(1, 16).alias("log_id"),

# NULL 값 필터링
transformed = transformed.filter(
    (F.col("event_time").isNotNull()) &
    (F.col("log_level").isNotNull()) &
    (F.col("module_name").isNotNull())
)

# 중복 제거
transformed = transformed.dropDuplicates(["event_id"])`}
              >
                <p>
                  스키마를 명확히 정의하고, NULL 값 필터링과 중복 제거를 통해 데이터 품질을 보장하였습니다.<br/>
                  event_id와 log_id를 해시값으로 생성하여, 데이터의 멱등성과 고유성을 확보하였습니다.
                </p>
              </CodeToggle>
              <CodeToggle
                title="3. Iceberg 적재 및 최적화"
                language="sql"
                code={`# Iceberg 테이블 생성 (자동 생성/검증)
spark.sql("""
CREATE TABLE IF NOT EXISTS local.silver.fact_app_logs (
  event_id       STRING,
  log_id         STRING,
  event_time     TIMESTAMP,
  log_level      STRING,
  module_name    STRING,
  log_message    STRING,
  app_domain     STRING,
  message_length INT,
  event_date     DATE,
  event_hour     INT
)
USING iceberg
PARTITIONED BY (event_date, app_domain)
TBLPROPERTIES (
  'write.metadata.delete-after-commit.enabled'='true',
  'write.metadata.previous-versions-max'='10',
  'write.distribution-mode'='hash'
)
""")

# Iceberg 적재 (MERGE)
merge_result = spark.sql("""
    MERGE INTO local.silver.fact_app_logs target
    USING staging_logs source
    ON target.event_id = source.event_id
    WHEN NOT MATCHED THEN INSERT *
""")`}
              >
                <p>
                  Iceberg 테이블을 자동 생성/검증하는 로직을 구현하여 운영 편의성을 높였습니다.<br/>
                  event_date로 파티셔닝하여 parquet으로 저장하고 있습니다.<br/>
                  적재할때 중복 제거와 신규 데이터만 삽입이 가능하도록 적재하고 있습니다.
                </p>
              </CodeToggle>
              <CodeToggle
                title="4. 멱등성 키 관리"
                code={`# event_id = 멱등성 키
F.sha2(
    F.concat_ws("|", F.col("timestamp"), F.col("level"),
                F.col("module"), F.col("message")), 256
).alias("event_id")

# MERGE 과정에서 event_id로 중복 제거
ON target.event_id = source.event_id
WHEN NOT MATCHED THEN INSERT *`}
              >
                <p>
                  merge를 위한 멱등성 키를 생성하여 데이터의 고유성을 보장했습니다.<br/>
                  각 레코드는 반드시 유일한 키를 가져야 하며, 중복 처리 시 정확한 업데이트가 가능하도록 설계했습니다.
                </p>
              </CodeToggle>
              <CodeToggle
                title="5. Timestamp 표준화"
                code={`# timestamp -> 표준 Spark Timestamp 변환
F.to_timestamp(F.col("timestamp")).alias("event_time"),

# NULL 값 허용하지 않도록 필터링
transformed = transformed.filter(
    (F.col("event_time").isNotNull())
)`}
              >
                <p>
                  timestamp는 특히 중요한 필드로, NULL 값을 허용하지 않도록 강제했습니다.<br/>
                  다양한 포맷으로 입력되는 시간 데이터를 모두 ISO8601 표준으로 변환하여 일관성을 확보했습니다.
                </p>
              </CodeToggle>
              <CodeToggle
                title="6. 위치 데이터 정합성"
                code={`# 위도/경도 유효성 검증
transformed = transformed.filter(
    (F.col("lat").between(-90, 90)) &
    (F.col("lon").between(-180, 180))
)`}
              >
                <p>
                  위도, 경도 데이터의 유효성을 검증하고 범위를 체크(-180,180)했습니다.<br/>
                </p>
              </CodeToggle>
              </div>
            </div>
          </div>

          {/* 테이블 스키마 */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-sm overflow-hidden mb-4">
            <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                <span className="text-sm text-blue-600 font-medium mr-3">02</span>테이블 스키마
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                차원 테이블과 팩트 테이블 구조 정의
              </p>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                {/* 차원 테이블 */}
                <div className="mb-6">
                  <h4 className="font-bold text-blue-600 mb-3">차원 테이블</h4>
                  <div className="bg-gray-200 rounded-lg p-4">
                    <Table
                      headers={['테이블명', '설명', '주요 컬럼', '비고']}
                      rows={[
                        [
                          { content: 'dim_date', className: 'font-mono font-bold text-blue-600' },
                          '날짜 차원',
                          'date_key, year, quarter, month',
                          '2020-2030년'
                        ],
                        [
                          { content: 'dim_merchant', className: 'font-mono font-bold text-blue-600' },
                          '거래처 정보',
                          'merchant_key, merchant_name, category',
                          '926개 거래처'
                        ],
                        [
                          { content: 'dim_bus_stop', className: 'font-mono font-bold text-blue-600' },
                          '위치/정류장 정보',
                          'latitude, longitude, geohash, admin_name',
                          '206,018개 정류장'
                        ],
                        [
                          { content: 'dim_toss_event', className: 'font-mono font-bold text-blue-600' },
                          '토스 이벤트 분류',
                          'event_key, event_category, domain',
                          'URLScheme 분류'
                        ]
                      ]}
                      className="text-sm"
                    />
                  </div>
                </div>

                {/* 팩트 테이블 */}
                <div className="mb-6">
                  <h4 className="font-bold text-blue-600 mb-3">팩트 테이블</h4>
                  <div className="bg-gray-200 rounded-lg p-4">
                    <Table
                      headers={['테이블명', '그레인', '주요 측정값', '데이터 원천', '건수']}
                      rows={[
                        [
                          { content: 'fact_app_logs', className: 'font-mono text-xs font-semibold text-blue-700' },
                          '로그 이벤트 1건',
                          'event_time, log_level, module_name',
                          '토스앱 디바이스 로그',
                          '124,622건'
                        ],
                        [
                          { content: 'fact_transaction', className: 'font-mono text-xs font-semibold text-blue-700' },
                          '거래 1건',
                          'amount, merchant_key, txn_type',
                          '은행/카드 거래내역',
                          '5,411건'
                        ],
                        [
                          { content: 'fact_movement', className: 'font-mono text-xs font-semibold text-blue-700' },
                          '시간별 활동 1건',
                          'steps, active_calories, distance_km',
                          '아이폰 헬스/운동 데이터',
                          '107,608건'
                        ],
                        [
                          { content: 'fact_obsidian_notes', className: 'font-mono text-xs font-semibold text-blue-700' },
                          '노트 작성 1건',
                          'word_count, wikilinks, tags',
                          'Obsidian 메타데이터',
                          '517건'
                        ],
                        [
                          { content: 'fact_photo_metadata', className: 'font-mono text-xs font-semibold text-blue-700' },
                          '사진 촬영 1건',
                          'latitude, longitude, creation_time',
                          '아이폰 사진 EXIF',
                          '17,515건'
                        ]
                      ]}
                      className="text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="space-y-4">
            {/* 데이터 살펴보기 */}
            <div className="bg-white border border-gray-300 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  <span className="text-sm text-blue-600 font-medium mr-3">03</span>데이터 살펴보기
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  로그 데이터의 원천과 구조를 분석하여 데이터 품질을 파악
                </p>
              </div>

              <div className="p-6">
                <div className="space-y-6">

            <div className="mb-6">
              <ol className="text-sm text-gray-700 space-y-1 mb-3">
                <li>1. AppDomainPlugin-com.vivarepublica.cash.notiService</li>
                <li>2. AppDomainPlugin-3.com.vivarepublica.cash.WidgetExtension</li>
                <li>3. AppDomain-com.vivarepublica.cash / Log</li>
              </ol>                          
              <p className="text-gray-700 mb-3">
                토스 애플리케이션의 로그 데이터는 총 3군데 나눠서 저장되고 있었습니다. 이 데이터를 모두 적재한뒤, 아래와 같이 시간축으로 시각화를 해보았습니다.
              </p>

              <div className="bg-gray-200 rounded-lg shadow-md p-4">
                <Image
                  src="/applog.png"
                  alt="앱로그 데이터 복잡성 시각화 - 시간대별 모듈별 로그 발생 패턴"
                  width={800}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-500 text-center mt-2">
                시간대별 모듈별 로그 발생 패턴 - 일단위로 균일한 발생 패턴을 보여줍니다.
              </p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
              <h4 className="font-bold text-gray-900 mb-3">로그 레벨 및 모듈별 분포</h4>
              <div className="grid grid-cols-2 gap-4">
                {/* 레벨별 요약 */}
                <div className="bg-white rounded-lg p-3">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">로그 레벨 분포</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-green-600">INFO</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '69.28%'}}></div>
                        </div>
                        <span className="text-xs font-mono">69.3%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-blue-600">DEBUG</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '29.45%'}}></div>
                        </div>
                        <span className="text-xs font-mono">29.5%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-red-600">ERROR</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: '0.79%'}}></div>
                        </div>
                        <span className="text-xs font-mono">0.8%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-yellow-600">WARN</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{width: '0.19%'}}></div>
                        </div>
                        <span className="text-xs font-mono">0.2%</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-gray-200">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Total Logs</span>
                      <span className="font-mono font-semibold">124,731</span>
                    </div>
                  </div>
                </div>

                {/* 주요 모듈 */}
                <div className="bg-white rounded-lg p-3">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">주요 모듈 TOP 5</h5>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono">Cache</span>
                      <span className="text-gray-600">86,684 (69.5%)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono">Common</span>
                      <span className="text-gray-600">29,251 (23.4%)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-orange-600 font-semibold">URLScheme <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>⭐</span></span>
                      <span className="text-gray-600">2,076 (1.7%)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono">Securities</span>
                      <span className="text-gray-600">2,101 (1.7%)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono">SecuritiesNet</span>
                      <span className="text-gray-600">1,887 (1.5%)</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-gray-200">
                    <p className="text-xs text-gray-600"><span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>⭐</span> 사용자 액션 로그</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 mb-3">
                앱로그는 분명 프론트엔드에서 발생한 데이터입니다. 또한 &apos;*.log&apos;날짜와 로그의 날짜가 모두 일치하는 것으로 보아 데이터 발생지점과 적재지점이 같습니다. 즉, 기기에서 오롯이 생성된 데이터라고 판단할 수 있습니다.
                여기서 INFO 레벨로 찍힌 Cache로그가 69.5%로 과반수를 차지했는데, 대부분 실패의 경우를 로깅하는 데이터였습니다. 문제는 이 로그가 나의 액션으로 생성되었는지 알 수 없다는 점이었습니다.
                로그마다 내 행동을 대변해줄 수 있는 데이터를 찾다가..
              </p>
              <div className="mb-4">
                <div className="bg-gray-200 rounded-lg shadow-md p-4">
                  <Image
                    src="/urllog.png"
                    alt="로그 메시지 발생 분포 - URLScheme 로그 패턴 시각화"
                    width={800}
                    height={400}
                    className="w-full rounded-lg"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center mt-2">
                  로그 메시지 발생 분포 - URLScheme 이벤트의 시간별 분포 패턴
                </p>
              </div>

              <div className="mb-3">
                <Image
                  src="/urllogcode.png"
                  alt="딥링크 URL scheme 로그 코드 스니펫"
                  width={1562}
                  height={420}
                  className="w-full rounded"
                />
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>URLScheme은 프론트엔드에서 호출하는 딥링크로, 사용자가 버튼을 누르거나 특정 액션을 취했을 때 다음 페이지를 호출합니다. 제 수중의 데이터는 총 2076의 레코드가 있었는데, 1006건의 고유한 값들이 있었습니다.</strong>
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-3">
                  <li>• scheme: 5개</li>
                  <li>• route: 344개</li>
                  <li>• params: 882개</li>
                </ul>
                <div className="text-sm text-gray-700">
                  <p className="mb-1">또다른 문제는 로그 메세지만 덜렁 가지고 있다보니, 파라미터값이 882개로 카디널리티가 너무커서 분석에 문제가 생김</p>
                </div>
              </div>
            </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          {/* 도메인 카디널리티 줄이기 */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  <span className="text-sm text-blue-600 font-medium mr-3">04</span>도메인 카디널리티를 줄이기 위한 방법
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  344개 Route → 카테고리별 분류
                </p>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded border">
                      <h5 className="font-semibold text-blue-600 mb-2">도메인별 분포</h5>
                      <ul className="text-sm space-y-1">
                        <li><strong>supertoss</strong>: 1,351개 (65%) - 메인 앱</li>
                        <li><strong>servicetoss</strong>: 570개 (27%) - 부가 서비스</li>
                        <li><strong>securitiestoss</strong>: 73개 (4%) - 증권</li>
                        <li><strong>banktoss</strong>: 72개 (3%) - 은행 특화</li>
                        <li><strong>intoss</strong>: 10개 (0.5%) - 내부 기능</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <h5 className="font-semibold text-green-600 mb-2">분류 결과</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Route 344개 → 카테고리 20개</strong>로 약 94% 축소</li>
                        <li>• 도메인별 특성을 반영한 의미 있는 분류 체계 구축</li>
                        <li>• 분석과 시각화가 가능한 카디널리티 확보</li>
                        <li>• 향후 신규 route 추가 시 기존 카테고리에 매핑 가능한 확장성 확보</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-blue-600 mb-3">🏗️ 도메인별 카테고리 구조</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      scheme 5개, route 344개, params 882개의 높은 카디널리티를 도메인별 카테고리로 분류하여 관리 가능한 수준으로 축소
                    </p>
                  </div>

                  {/* SUPERTOSS */}
                  <div className="mb-6">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100"
                      onClick={() => toggleSection('supertoss')}
                      aria-expanded={expandedSections.supertoss}
                      aria-controls="supertoss-table"
                    >
                      <span>SUPERTOSS (1,351건 → 7개 카테고리)</span>
                      <svg
                        className={`ml-3 h-4 w-4 transform transition-transform ${expandedSections.supertoss ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {expandedSections.supertoss && (
                      <div id="supertoss-table" className="mt-3">
                        <Table
                          headers={['카테고리', '건수', '비율', 'Route 수', '설명']}
                          rows={[
                            ['supertoss_credit', '258', '19.1%', '1개', '신용 서비스 (/lab 중심)'],
                            ['supertoss_account', '262', '19.4%', '8개', '계좌 관리 전반'],
                            ['supertoss_payment', '192', '14.2%', '11개', '소비/송금/결제'],
                            ['supertoss_investment', '164', '12.1%', '2개', '투자 포트폴리오'],
                            ['supertoss_home', '133', '9.8%', '8개', '메인 화면/홈'],
                            ['supertoss_info', '120', '8.9%', '7개', '내역/상세/검색'],
                            ['supertoss_other', '222', '16.4%', '60개', '기타 모든 기능']
                          ]}
                          className="text-xs"
                        />
                      </div>
                    )}
                  </div>

                  {/* SERVICETOSS */}
                  <div className="mb-6">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100"
                      onClick={() => toggleSection('servicetoss')}
                      aria-expanded={expandedSections.servicetoss}
                      aria-controls="servicetoss-table"
                    >
                      <span>SERVICETOSS (570건 → 6개 카테고리)</span>
                      <svg
                        className={`ml-3 h-4 w-4 transform transition-transform ${expandedSections.servicetoss ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {expandedSections.servicetoss && (
                      <div id="servicetoss-table" className="mt-3">
                        <Table
                          headers={['카테고리', '건수', '비율', 'Route 수', '설명']}
                          rows={[
                            ['servicetoss_other', '317', '55.6%', '137개', '분류되지 않은 다양한 서비스'],
                            ['servicetoss_rewards', '100', '17.5%', '20개', '포인트/이벤트/래플'],
                            ['servicetoss_mobility', '65', '11.4%', '5개', '교통/모빌리티 서비스'],
                            ['servicetoss_government', '38', '6.7%', '12개', '세금/정부 서비스'],
                            ['servicetoss_housing', '28', '4.9%', '8개', '부동산/청약'],
                            ['servicetoss_commerce', '22', '3.9%', '7개', '쇼핑/공동구매']
                          ]}
                          className="text-xs"
                        />
                      </div>
                    )}
                  </div>

                  {/* SECURITIESTOSS */}
                  <div className="mb-6">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100"
                      onClick={() => toggleSection('securitiestoss')}
                      aria-expanded={expandedSections.securitiestoss}
                      aria-controls="securitiestoss-table"
                    >
                      <span>SECURITIESTOSS (73건 → 3개 카테고리)</span>
                      <svg
                        className={`ml-3 h-4 w-4 transform transition-transform ${expandedSections.securitiestoss ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {expandedSections.securitiestoss && (
                      <div id="securitiestoss-table" className="mt-3">
                        <Table
                          headers={['카테고리', '건수', '비율', 'Route 수', '설명']}
                          rows={[
                            ['securitiestoss_stocks', '56', '76.7%', '30개', '개별 종목 (US, AMX, NAS 등)'],
                            ['securitiestoss_info', '14', '19.2%', '6개', '투자 정보/이벤트'],
                            ['securitiestoss_other', '3', '4.1%', '2개', '기타 기능']
                          ]}
                          className="text-xs"
                        />
                      </div>
                    )}
                  </div>

                  {/* BANKTOSS */}
                  <div className="mb-6">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100"
                      onClick={() => toggleSection('banktoss')}
                      aria-expanded={expandedSections.banktoss}
                      aria-controls="banktoss-table"
                    >
                      <span>BANKTOSS (72건 → 3개 카테고리)</span>
                      <svg
                        className={`ml-3 h-4 w-4 transform transition-transform ${expandedSections.banktoss ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {expandedSections.banktoss && (
                      <div id="banktoss-table" className="mt-3">
                        <Table
                          headers={['카테고리', '건수', '비율', 'Route 수', '설명']}
                          rows={[
                            ['banktoss_detail', '34', '47.2%', '8개', '상세 정보/거래 내역'],
                            ['banktoss_other', '32', '44.4%', '14개', '기타 은행 서비스'],
                            ['banktoss_home', '6', '8.3%', '2개', '홈 화면']
                          ]}
                          className="text-xs"
                        />
                      </div>
                    )}
                  </div>

                  {/* INTOSS */}
                  <div className="mb-6">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100"
                      onClick={() => toggleSection('intoss')}
                      aria-expanded={expandedSections.intoss}
                      aria-controls="intoss-table"
                    >
                      <span>INTOSS (10건 → 1개 카테고리)</span>
                      <svg
                        className={`ml-3 h-4 w-4 transform transition-transform ${expandedSections.intoss ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {expandedSections.intoss && (
                      <div id="intoss-table" className="mt-3">
                        <Table
                          headers={['카테고리', '건수', '비율', 'Route 수', '설명']}
                          rows={[
                            ['intoss_games', '10', '100%', '8개', '내부 게임들']
                          ]}
                          className="text-xs"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
        </section>

        <section className="mb-8">
          {/* 분석 시리즈 2: 세션 구분하기 */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  <span className="text-sm text-blue-600 font-medium mr-3">05</span>세션 구분하기
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  10분 기준 사용자 세션 정의
                </p>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="bg-gray-200 rounded-lg shadow-md p-4">
                    <Image
                      src="/session.png"
                      alt="세션 구분 분석 차트"
                      width={800}
                      height={400}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center mt-2">
                    세션 간격 분포와 누적 분포 - 세션 정의
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-bold text-blue-600">세션 정의</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      10분 이상 미사용 시 새로운 세션으로 구분하고, 최대 20분까지만 이어지도록 하여 자연스러운 사용자 행동 단위로 정의했습니다.
                    </p>
                  </div>

                  <CodeToggle
                    title="세션 구분 SQL 쿼리"
                    language="sql"
                    code={`WITH urlscheme_sessions AS (
  SELECT
    event_time,
    CASE
      WHEN LAG(event_time) OVER (ORDER BY event_time) IS NULL THEN 1
      -- 10분 기준으로 변경
      WHEN EXTRACT(EPOCH FROM (event_time - LAG(event_time) OVER (ORDER BY event_time))) >= 600 THEN 1
      ELSE 0
    END AS new_session_flag
  FROM fact_app_logs
  WHERE module_name = 'URLScheme'
),

urlscheme_with_session_id AS (
  SELECT
    event_time AS session_start,
    SUM(new_session_flag) OVER (ORDER BY event_time ROWS UNBOUNDED PRECEDING) AS session_id
  FROM urlscheme_sessions
),

session_windows AS (
  SELECT
    session_id,
    session_start,
    -- 세션 윈도우를 20분으로 설정
    session_start + INTERVAL '20 minutes' AS session_end
  FROM urlscheme_with_session_id
),

session_events AS (
  SELECT
    f.*,
    s.session_id,
    s.session_start,
    s.session_end
  FROM fact_app_logs f
  JOIN session_windows s
    ON f.event_time >= s.session_start
    AND f.event_time <= s.session_end
)

SELECT
  CAST(session_start AS DATE) AS event_date,
  session_id,
  session_start,
  session_end,
  MAX(event_time) AS last_activity,
  EXTRACT(EPOCH FROM (MAX(event_time) - session_start)) AS actual_session_length,
  COUNT(*) AS event_count,
  COUNT(*) FILTER (WHERE module_name = 'URLScheme') AS urlscheme_event_count
FROM session_events
GROUP BY session_id, session_start, session_end
ORDER BY session_start;`}
                  >
                    <p className="text-gray-700 text-sm">
                      세션 구분 기준을 30분 미사용 시점으로 설정하다 보니, 실제로는 10시간이 하나의 세션으로 잡히는 문제가 발생했습니다. 또한 실제 사용 행태를 생각해보면, 10분 이상 연속으로 사용하지 않는 경우가 대부분인 것으로 보입니다. 따라서 아래의 그래프처럼 이벤트 로그간 시간delta를 조사해, 유의미하게 꺾이는 구간을 발견하여 세션 구분 값으로 사용했습니다.
                    </p>
                  </CodeToggle>
                </div>
              </div>
            </div>
        </section>

        <section className="mb-8">
            {/* 주요 분석 결과 */}
            <div className="bg-white border border-gray-300 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  <span className="text-sm text-blue-600 font-medium mr-3">06</span>주요 분석 결과
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  데이터 분석을 통해 도출한 핵심 인사이트와 발견사항
                </p>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div className="mb-6">
                    <h4 className="font-bold text-blue-600 mb-3">세션 증가 요인 TOP 4</h4>
                    <div className="bg-gray-200 rounded-lg p-4">
                      <Table
                        headers={['순위', '요인', '최대 증가율', '상관계수', '핵심 임계값']}
                        rows={[
                          ['1', '🏃 Movement', '+359.7%', '0.471', '10,000보+'],
                          ['2', '📸 Photo', '+326.9%', '0.436', '4-10장'],
                          ['3', '💰 Transaction', '+393.6%', '0.465', '2-3건 큰 거래액'],
                          ['4', '📝 Notes', '+271.0%', '-', 'Daily 노트']
                        ]}
                        className="text-sm"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-blue-600 mb-3">앱 내부 패턴 → 거래 전환 분석</h4>
                    <div className="bg-gray-200 rounded-lg p-4">
                      <Table
                        headers={['이벤트 명', '이벤트 키', '평균 전환 시간', '중간값 전환 시간', '총 전환 수']}
                        rows={[
                          ['소비 내역 조회', 'supertoss|home|/consumption', '25.0분', '5.2분', '30회'],
                          ['은행탭 계좌', 'supertoss|banktab|/account', '25.5분', '7.6분', '93회'],
                          ['소비 내역 상세', 'supertoss|home|/consumption/transaction/detail', '26.3분', '7.3분', '59회'],
                          ['계좌 상세 진입', 'supertoss|home|/dst/account', '29.2분', '11.8분', '62회'],
                          ['투자 포트폴리오 조회', 'supertoss|home|/investment-portfolio', '31.4분', '15.7분', '86회']
                        ]}
                        className="text-xs"
                      />
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
