'use client';

import { useState, ReactNode } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeToggleProps {
  title: string;
  children: ReactNode;
  code: string;
  language?: string;
  buttonClassName?: string;
}

export default function CodeToggle({
  title,
  children,
  code,
  language = 'python',
  buttonClassName = "text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
}: CodeToggleProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <button
          onClick={() => setShowCode(!showCode)}
          className={buttonClassName}
        >
          {showCode ? '코드 숨기기' : '코드 보기'}
        </button>
      </div>
      <div className="text-sm text-gray-700 mb-3">
        {children}
      </div>
      {showCode && (
        <div className="mt-3">
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            className="rounded text-xs"
            customStyle={{
              margin: 0,
              padding: '1rem',
              fontSize: '0.75rem',
              lineHeight: '1.5'
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}