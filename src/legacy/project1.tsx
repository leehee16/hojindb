'use client';

import { useState, ReactNode } from 'react';
import Image from 'next/image';
import CodeToggle from '@/components/CodeToggle';

// Table 컴포넌트 인라인 정의
interface TableCellObject {
  content: ReactNode;
  rowspan?: number;
  className?: string;
  colspan?: number;
  onClick?: () => void;
  buttonClassName?: string;
}

type TableCell = string | number | TableCellObject;

interface TableProps {
  headers: string[];
  rows: TableCell[][];
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
          {rows.map((row, rowIndex) => {
            const clickableCell = row.find((cell) => typeof cell === 'object' && cell !== null && (cell as TableCellObject).onClick) as TableCellObject | undefined;
            const rowOnClick = clickableCell?.onClick;
            const isRowClickable = Boolean(rowOnClick);

            return (
              <tr
                key={rowIndex}
                className={`transition-colors ${isRowClickable ? 'hover:bg-blue-50/50 cursor-pointer' : 'hover:bg-gray-50/50'}`}
                onClick={rowOnClick}
                onKeyDown={(event) => {
                  if (!isRowClickable) return;
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    rowOnClick?.();
                  }
                }}
                role={isRowClickable ? 'button' : undefined}
                tabIndex={isRowClickable ? 0 : undefined}
              >
                {row.map((cell, cellIndex) => {
                  if (typeof cell === 'object' && cell !== null && 'content' in cell) {
                    const tableCell = cell as TableCellObject;
                    const innerContent = tableCell.buttonClassName ? (
                      <div className={tableCell.buttonClassName}>{tableCell.content}</div>
                    ) : (
                      tableCell.content
                    );

                    return (
                      <td
                        key={cellIndex}
                        className={`px-4 py-3 text-gray-800 ${isRowClickable ? 'select-none' : ''} ${tableCell.className || ''}`}
                        rowSpan={tableCell.rowspan}
                        colSpan={tableCell.colspan}
                      >
                        {innerContent}
                      </td>
                    );
                  }

                  return (
                    <td
                      key={cellIndex}
                      className="px-4 py-3 text-gray-800"
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default function Project1() {
  const [schemaDetail, setSchemaDetail] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    supertoss: false,
    servicetoss: false,
    securitiestoss: false,
    banktoss: false,
    intoss: false
  });

  const schemaDescriptions: Record<string, string> = {
    dim_date: 'dim_date는 여러 날짜 범주를 쉽게 꺼내기 위해 10개년치를 미리 생성해둔 날짜 차원입니다.',
    dim_merchant: 'dim_merchant는 거래내역에서 추출한 거래 주체를 분류하기 위한 테이블로, 현재 고도화가 필요한 상태입니다.',
    dim_bus_stop: 'dim_bus_stop은 fact_photo_metadata의 위치 해상도를 보완하기 위해 만든 앵커 역할의 좌표 테이블입니다.',
    dim_toss_event: 'dim_toss_event는 앱 로그 이벤트를 사용자 행동 흐름으로 매핑한 테이블이며, 보다 보편적인 조인 구조를 마련하기 위해 재설계 중입니다.',
    fact_app_logs: 'fact_app_logs는 앱 로그 이벤트를 한 건씩 기록하는 테이블로 현재는 토스 로그만 담고 있으며, 다른 앱 로그도 수용하기 위한 스키마 개편을 진행 중입니다.',
    fact_transaction: 'fact_transaction에는 1년치 신용카드 거래내역과 4년치 토스뱅크 거래내역을 함께 적재했습니다.',
    fact_movement: 'fact_movement는 걸음 수, 칼로리, 이동 거리 등 6년치 활동 데이터를 저장합니다.',
    fact_obsidian_notes: 'fact_obsidian_notes는 Obsidian에서 작성한 마크다운 문서의 메타데이터를 보관하는 테이블입니다.',
    fact_photo_metadata: 'fact_photo_metadata는 사진 촬영 시각과 위치 정보를 담지만, 특정 시간대에 집중되는 특성 때문에 신뢰성이 떨어지는 데이터였습니다.'
  };

  const dimensionSchemaData = [
    {
      id: 'dim_date',
      name: 'dim_date',
      description: '날짜 차원',
      columns: 'date_key, year, quarter, month',
      remark: '2020-2030년'
    },
    {
      id: 'dim_merchant',
      name: 'dim_merchant',
      description: '거래처 정보',
      columns: 'merchant_key, merchant_name, category',
      remark: '926개 거래처'
    },
    {
      id: 'dim_bus_stop',
      name: 'dim_bus_stop',
      description: '위치/정류장 정보',
      columns: 'latitude, longitude, geohash, admin_name',
      remark: '206,018개 정류장'
    },
    {
      id: 'dim_toss_event',
      name: 'dim_toss_event',
      description: '토스 이벤트 분류',
      columns: 'event_key, event_category, domain',
      remark: 'URLScheme 분류'
    }
  ];

  const factSchemaData = [
    {
      id: 'fact_app_logs',
      name: 'fact_app_logs',
      grain: '로그 이벤트 1건',
      measures: 'event_time, log_level, module_name',
      source: '토스앱 디바이스 로그',
      count: '124,622건'
    },
    {
      id: 'fact_transaction',
      name: 'fact_transaction',
      grain: '거래 1건',
      measures: 'amount, merchant_key, txn_type',
      source: '은행/카드 거래내역',
      count: '5,411건'
    },
    {
      id: 'fact_movement',
      name: 'fact_movement',
      grain: '시간별 활동 1건',
      measures: 'steps, active_calories, distance_km',
      source: '아이폰 헬스/운동 데이터',
      count: '107,608건'
    },
    {
      id: 'fact_obsidian_notes',
      name: 'fact_obsidian_notes',
      grain: '노트 작성 1건',
      measures: 'word_count, wikilinks, tags',
      source: 'Obsidian 메타데이터',
      count: '517건'
    },
    {
      id: 'fact_photo_metadata',
      name: 'fact_photo_metadata',
      grain: '사진 촬영 1건',
      measures: 'latitude, longitude, creation_time',
      source: '아이폰 사진 EXIF',
      count: '17,515건'
    }
  ];

  const toggleSection = (key: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleSchemaDetail = (tableName: string) => {
    setSchemaDetail((prev) => (prev === tableName ? null : tableName));
  };

  const dimensionTableRows = dimensionSchemaData.flatMap(({ id, name, description, columns, remark }) => {
    const isActive = schemaDetail === id;
    const onRowToggle = () => toggleSchemaDetail(id);
    const baseRow: TableCell[] = [
      {
        content: name,
        className: `font-mono font-bold text-gray-900 ${isActive ? 'bg-blue-50' : ''}`,
        onClick: onRowToggle,
        buttonClassName: 'flex items-center text-sm text-gray-900'
      },
      {
        content: description,
        className: isActive ? 'bg-blue-50' : undefined,
        onClick: onRowToggle,
        buttonClassName: 'text-sm text-gray-900'
      },
      {
        content: columns,
        className: isActive ? 'bg-blue-50' : undefined,
        onClick: onRowToggle,
        buttonClassName: 'text-sm text-gray-900'
      },
      {
        content: (
          <div className="flex items-center justify-end gap-2">
            <span className="text-sm text-gray-900">{remark}</span>
            <svg
              className={`h-4 w-4 transform text-blue-600 transition-transform ${isActive ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ),
        className: isActive ? 'bg-blue-50' : undefined,
        onClick: onRowToggle,
        buttonClassName: 'flex items-center justify-end text-sm text-gray-900 gap-2'
      }
    ];

    const rows: TableCell[][] = [baseRow];

    if (isActive) {
      rows.push([
        {
          content: (
            <div className="text-sm text-gray-700">
              {schemaDescriptions[id]}
            </div>
          ),
          className: 'bg-gray-50 px-4 py-3 text-gray-700 border-l-2 border-gray-200',
          colspan: 4
        }
      ]);
    }

    return rows;
  });

  const factTableRows = factSchemaData.flatMap(({ id, name, grain, measures, source, count }) => {
    const isActive = schemaDetail === id;
    const onRowToggle = () => toggleSchemaDetail(id);
    const baseRow: TableCell[] = [
      {
        content: name,
        className: `font-mono text-xs font-semibold text-gray-900 ${isActive ? 'bg-blue-50' : ''}`,
        onClick: onRowToggle,
        buttonClassName: 'flex items-center gap-2 text-xs text-gray-900 uppercase tracking-wide'
      },
      {
        content: grain,
        className: isActive ? 'bg-blue-50' : undefined,
        onClick: onRowToggle,
        buttonClassName: 'text-xs text-gray-900'
      },
      {
        content: measures,
        className: isActive ? 'bg-blue-50' : undefined,
        onClick: onRowToggle,
        buttonClassName: 'text-xs text-gray-900'
      },
      {
        content: source,
        className: isActive ? 'bg-blue-50' : undefined,
        onClick: onRowToggle,
        buttonClassName: 'text-xs text-gray-900'
      },
      {
        content: (
          <div className="flex items-center justify-end gap-2">
            <span className="text-xs text-gray-900">{count}</span>
            <svg
              className={`h-4 w-4 transform text-blue-600 transition-transform ${isActive ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ),
        className: isActive ? 'bg-blue-50' : undefined,
        onClick: onRowToggle,
        buttonClassName: 'flex items-center justify-end text-xs text-gray-900 gap-2'
      }
    ];

    const rows: TableCell[][] = [baseRow];

    if (isActive) {
      rows.push([
        {
          content: (
            <div className="text-sm text-gray-700">
              {schemaDescriptions[id]}
            </div>
          ),
          className: 'bg-gray-50 px-4 py-3 text-gray-700 border-l-2 border-gray-200',
          colspan: 5
        }
      ]);
    }

    return rows;
  });

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
                  마이 데이터 레이크하우스 구축
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  토스앱 로그, 금융 거래내역, 사진 메타데이터, 운동 기록 등 일상 속 파편화된 데이터를 통합하여 
                  <strong> 의미있는 인사이트</strong>로 전환하는 데이터 레이크하우스를 설계했습니다.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  스마트폰, 랩탑등에서 가져올 수 있는 시계열 데이터를 모아서 사용자(나)를 더 잘 <strong>이해할 수 있도록</strong> 기반을 마련하는것이 프로젝트의 목표입니다.
                </p>
                <div className="mx-auto flex w-full max-w-md flex-wrap items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 mb-4">
                  <span>원천 데이터</span>
                  <span className="text-gray-400">→</span>
                  <span>레이크하우스</span>
                  <span className="text-gray-400">→</span>
                  <span>분석</span>
                </div>
                <div className="mx-auto w-full max-w-md rounded-lg border border-gray-200 bg-white px-4 py-3">
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
                      <span className="font-semibold text-gray-900">데이터가 쓸 수 있도록 만들기</span>
                      <div className="text-gray-600 text-xs">데이터 정합성 : 신뢰할 수 있는 데이터 적재하기</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center text-lg">
                      <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>2️⃣</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">데이터 형태 정의하기</span>
                      <div className="text-gray-600 text-xs">스키마 설계 : 재사용이 용이한 데이터 형태 만들기</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center text-lg">
                      <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>3️⃣</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">로그 데이터 살펴보기</span>
                      <div className="text-gray-600 text-xs">데이터 탐색 : 행동 데이터 찾기</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center text-lg">
                      <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>4️⃣</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">행동 데이터로 변환하기</span>
                      <div className="text-gray-600 text-xs">URLScheme 카디널리티를 줄이기</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center text-lg">
                      <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>5️⃣</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">세션 정의하기</span>
                      <div className="text-gray-600 text-xs">가장 적합한 세션 구분 기준 정하기</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center text-lg">
                      <span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>6️⃣</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">데이터 품질 테스트해보기</span>
                      <div className="text-gray-600 text-xs">간단한 데이터 분석을 통해 데이터 품질을 테스트</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">프로젝트 개요</h2>
          <div className="mb-4">
            <Image
              src="/archi.png"
              alt="데이터 레이크하우스 아키텍처 다이어그램"
              width={1584}
              height={492}
              className="w-full rounded-lg border border-gray-200 shadow-sm"
              priority
            />
          </div>
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
              예를들어 내가 어떤 서비스를 이용하고, 어떤 서비스가 내 행위에 영향을 받고, 서비스의 시퀀스가 어떻게 영향을 받는지 파악하기 위해 아래와 같은 마트를 구성할 수도 있겠습니다.
            </p>

            {/* 목표 테이블 구조 & 세션 컨텍스트 */}
            <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
              <div className="space-y-4">
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
                다양한 분석 목적에 대응할 수 있도록 유연하게 설계하고자 했습니다.
              </p>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                {/* 차원 테이블 */}
                <div className="mb-6">
                  <h4 className="font-bold text-blue-600 mb-3">디멘젼 테이블</h4>
                  <div className="bg-gray-200 rounded-lg p-4">
                    <Table
                      headers={['테이블명', '설명', '주요 컬럼', '비고']}
                      rows={dimensionTableRows}
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
                      rows={factTableRows}
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
              <h4 className="font-bold text-blue-600 mb-3">어떤 로그가 액션을 대변할 수 있을까?</h4>
              <div className="bg-gray-200 rounded-lg shadow-md p-4">
                <Image
                  src="/applog.png"
                  alt="앱로그 데이터 복잡성 시각화 - 시간대별 모듈별 로그 발생 패턴"
                  width={800}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
                <p className="text-base text-gray-500 text-center mt-2">
                시간대별 모듈별 로그 발생 패턴 - 일단위로 균일한 발생 패턴을 보여줍니다.
              </p>

              <div className="mt-5 space-y-2">
                <ol className="list-decimal list-inside text-base text-gray-700 space-y-1">
                  <li>AppDomainPlugin-com.vivarepublica.cash.notiService</li>
                  <li>AppDomainPlugin-3.com.vivarepublica.cash.WidgetExtension</li>
                  <li>AppDomain-com.vivarepublica.cash / Log</li>
                </ol>
                <p className="text-base text-gray-700">
                  토스 애플리케이션의 로그는 notiService,WidgetExtension,Log 총 3개의 폴더에 적재되어 있었습니다. 이 로그들을 하나로 모아 시간축으로 정렬해 패턴을 확인했습니다.
                  위의 그래프는 x축은 날짜 y축은 시간인데, 5개월간 상당히 균등한 패턴을 보여줍니다. 0시부터 6시까지는 발생이 미미했고, 7시,12시,18시에 집중적으로 생성되는 것을 확인 할 수 있습니다.
                  그러나, 이 로그가 생활 패턴과 연관이 있어보이지만, 사용자인 나의 <strong>액션으로 부터 발생</strong>했는지 시각적 분포로는 확신하기 어려웠습니다.
                </p>
              </div>
            </div>
            <h4 className="font-bold text-blue-600 mb-3">URLScheme 모듈 로그는 앱내 액션을 대변해 줄 수 있는 로그이다.</h4>
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
                    <p className="text-xs text-gray-600"><span style={{ fontFamily: '"Toss Face Font Mac", "Apple Color Emoji", "Segoe UI Emoji"' }}>⭐</span> 사용자 액션 로그로 사용</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-base text-gray-700 mb-3">
                더 자세히 로그를 들여다보면, 로그가 분명 프론트엔드에서 발생한 데이터라는 것을 알 수 있었습니다. &apos;*.log&apos;날짜와 로그의 날짜가 모두 일치하는 것으로 보아 데이터 발생지점과 적재지점이 같기 때문입니다. 즉, 기기에서 오롯이 생성된 데이터라고 판단할 수 있습니다.
                여기서 INFO 레벨로 찍힌 Cache로그가 69.5%로 과반수를 차지했는데, 대부분 캐시 실패의 경우를 로깅하는 데이터였습니다. 
              </p>
              <div className="mb-3">
                <Image
                  src="/urllogcode.png"
                  alt="딥링크 URL scheme 로그 코드 스니펫"
                  width={1562}
                  height={420}
                  className="w-full rounded"
                />
              </div>
              <p className="text-base text-gray-700 mb-3">
                각 모듈별로 로그의 의미를 살펴보았을때, URLScheme는 확실히 나의 액션으로부터 생성된 데이터였습니다.
              </p>
              <p className="text-base text-gray-700 mb-4">
                URLScheme은 <strong>프론트엔드에서 호출하는 딥링크</strong>인데 버튼이나 액션에 따라 다음 페이지를 열어 줍니다. 
                이 URLScheme을 domain, route, parameter로 분리하였습니다. scheme은 supertoss,servicetoss등과 같은 식별자이고, route는 어떤 화면을 호출할지 식별할 식별자입니다. params은 세부정보를 담고있는데 필드값의 조합이 상당히 다양했습니다. 
                예를들어 referrer 같은 필드값은 호출의 출처를 나타내어 사용자 행동 경로나 이벤트 추적에 활용할 수 있을 것으로 판단됩니다.
              </p>
              <p>  
                제가 확보한 URLScheme 로그는 총 2,076건이었고 이 가운데 1,006개의 고유 값이 존재했습니다. 그런데 <strong>scheme 5개, route 344개, params 882개</strong>처럼 카디널리티가 높아 그대로는 분석하기 어려웠기 때문에 이를 분류하는 작업이 필요합니다.
              </p>
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
                  <span className="text-sm text-blue-600 font-medium mr-3">04</span>행동 데이터로 변환하기

                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  데이터의 카디널리티를 줄이기 위해 scheme은 그대로 사용하였고, 애플리케이션 동작과 사용행태를 복기해가면서 분류를 진행했습니다.
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
                      </ul>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-blue-600 mb-3">🏗️ 도메인별 카테고리 구조</h4>
                    <p className="text-gray-900 text-sm mb-4">
                      scheme 5개, route 344개, params 882개의 높은 카디널리티를 도메인별 카테고리로 분류하여 관리 가능한 수준으로 축소
                    </p>
                  </div>

                  {/* SUPERTOSS */}
                  <div className="mb-6">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
                      onClick={() => toggleSection('supertoss')}
                      aria-expanded={expandedSections.supertoss}
                      aria-controls="supertoss-table"
                    >
                      <span>SUPERTOSS (1,351건 → 7개 카테고리)</span>
                      <svg
                        className={`ml-3 h-4 w-4 transform text-blue-600 transition-transform ${expandedSections.supertoss ? 'rotate-180' : ''}`}
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
                      className="flex w-full items-center justify-between rounded border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
                      onClick={() => toggleSection('servicetoss')}
                      aria-expanded={expandedSections.servicetoss}
                      aria-controls="servicetoss-table"
                    >
                      <span>SERVICETOSS (570건 → 6개 카테고리)</span>
                      <svg
                        className={`ml-3 h-4 w-4 transform text-blue-600 transition-transform ${expandedSections.servicetoss ? 'rotate-180' : ''}`}
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
                            ['servicetoss_other', '317', '55.6%', '137개', '기타 서비스'],
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
                      className="flex w-full items-center justify-between rounded border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
                      onClick={() => toggleSection('securitiestoss')}
                      aria-expanded={expandedSections.securitiestoss}
                      aria-controls="securitiestoss-table"
                    >
                      <span>SECURITIESTOSS (73건 → 3개 카테고리)</span>
                      <svg
                        className={`ml-3 h-4 w-4 transform text-blue-600 transition-transform ${expandedSections.securitiestoss ? 'rotate-180' : ''}`}
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
                            ['securitiestoss_stocks', '56', '76.7%', '30개', '주식/ETF'],
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
                      className="flex w-full items-center justify-between rounded border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
                      onClick={() => toggleSection('banktoss')}
                      aria-expanded={expandedSections.banktoss}
                      aria-controls="banktoss-table"
                    >
                      <span>BANKTOSS (72건 → 3개 카테고리)</span>
                      <svg
                        className={`ml-3 h-4 w-4 transform text-blue-600 transition-transform ${expandedSections.banktoss ? 'rotate-180' : ''}`}
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
                      className="flex w-full items-center justify-between rounded border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
                      onClick={() => toggleSection('intoss')}
                      aria-expanded={expandedSections.intoss}
                      aria-controls="intoss-table"
                    >
                      <span>INTOSS (10건 → 1개 카테고리)</span>
                      <svg
                        className={`ml-3 h-4 w-4 transform text-blue-600 transition-transform ${expandedSections.intoss ? 'rotate-180' : ''}`}
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
                      세션 구분 기준을 30분 미사용 시점으로 설정하다 보니, 실제로는 10시간이 하나의 세션으로 잡히는 문제가 발생했습니다. 또한 실제 사용 행태를 생각해보면, 10분 이상 연속으로 사용하지 않는 경우가 대부분인 것으로 보입니다. 따라서 그래프처럼 이벤트 로그간 시간delta를 조사해, 유의미하게 꺾이는 구간을 발견하여 세션 구분 값으로 사용했습니다.
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
                  <span className="text-sm text-blue-600 font-medium mr-3">06</span>간단 데이터 분석
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  데이터를 분석해보면서 데이터의 품질을 체크해보았습니다.
                </p>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div className="mb-6">
                    <h4 className="font-bold text-blue-600 mb-3">세션 수 증가 요인 TOP 4</h4>
                    <div className="bg-gray-200 rounded-lg p-4">
                      <Table
                        headers={['순위', '요인', '최대 증가율', '상관계수', '임계값']}
                        rows={[
                          [
                            '1',
                            {
                              content: (
                                <span className="inline-flex items-center gap-2 text-gray-900">
                                  <span className="tossface" aria-hidden>🏃</span>
                                  <span>Movement</span>
                                </span>
                              )
                            },
                            '+359.7%',
                            '0.571',
                            '10,000보+'
                          ],
                          [
                            '2',
                            {
                              content: (
                                <span className="inline-flex items-center gap-2 text-gray-900">
                                  <span className="tossface" aria-hidden>📸</span>
                                  <span>Photo</span>
                                </span>
                              )
                            },
                            '+326.9%',
                            '0.436',
                            '4-10장'
                          ],
                          [
                            '3',
                            {
                              content: (
                                <span className="inline-flex items-center gap-2 text-gray-900">
                                  <span className="tossface" aria-hidden>💰</span>
                                  <span>Transaction</span>
                                </span>
                              )
                            },
                            '+393.6%',
                            '0.465',
                            '2-3건 큰 거래액'
                          ],
                          [
                            '4',
                            {
                              content: (
                                <span className="inline-flex items-center gap-2 text-gray-900">
                                  <span className="tossface" aria-hidden>📝</span>
                                  <span>Notes</span>
                                </span>
                              )
                            },
                            '+271.0%',
                            '-',
                            'Daily 노트'
                          ]
                        ]}
                        className="text-sm"
                      />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      앱내 세션 앞으로 운동,사진,거래,노트기록을 앱사용을 유발할 이벤트로 가정하고 상관관계를 조사해보았습니다.
                      예를들어, 만보 이상 걷는 이벤트가 있을경우 앱 사용량(세션수)가 3배정도 상승했습니다.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      종합하자면, 활동량이 많은 경우 앱사용이 증가하는 양상을 보였는데 이는 스마트폰 사용량에 따른 상관성이 아닐까 추측됩니다.
                      노트작성을 제외한 다른 이벤트들은 모두 스마트폰 사용중 기록되기 때문입니다. 또한, 이 스마트폰에서 생성되는 데이터간 차이도 생각보다 유의하지 않을 것으로 생각되는데, 그 이유는
                      데이터 스케일 차이 때문입니다. 발생량이 많은 데이터는 그만큼 많은 앱사용세션과 연결될 수 있습니다. 
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      따라서, <strong>데이터의 양과 원천을 반영할 수 있는 구조</strong>가 필요합니다. 실험군/대조군을 구분하는 데이터 마트, 스마트폰 사용량 같은 <strong>통제 변인</strong>를 추가하는 방안을 고민하고 있습니다. 
                      예를 들어 screen_on_time 같은 필드를 포함해, “걷기 이벤트 → 세션 증가”가 스마트폰 사용 자체의 증가 때문은 아닌지 파악할 수 있을 것으로 기대됩니다. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </div>
    </div>
  );
}
