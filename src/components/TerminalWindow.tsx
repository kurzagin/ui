import React, { HTMLAttributes, forwardRef, useState } from 'react';

export interface TerminalWindowProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  badge?: string;
  code: string;
  showLineNumbers?: boolean;
  copyable?: boolean;
}

export const TerminalWindow = forwardRef<HTMLDivElement, TerminalWindowProps>(
  (
    {
      className = '',
      title = 'terminal.sh',
      badge = 'ACTIVE',
      code,
      showLineNumbers = true,
      copyable = true,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    const lines = code.trim().split('\n');

    return (
      <div
        ref={ref}
        className={['kz-terminal-window', className].filter(Boolean).join(' ')}
        {...props}
      >
        <div className="kz-terminal-header">
          <div className="kz-terminal-dots">
            <span className="kz-term-dot kz-term-dot-red" />
            <span className="kz-term-dot kz-term-dot-yellow" />
            <span className="kz-term-dot kz-term-dot-green" />
          </div>

          <div className="kz-terminal-title-box">
            <span className="kz-terminal-title">{title}</span>
            {badge && <span className="kz-terminal-badge">{badge}</span>}
          </div>

          <div className="kz-terminal-actions">
            {copyable && (
              <button
                type="button"
                className="kz-terminal-copy-btn"
                onClick={handleCopy}
                aria-label="Copy code"
              >
                {copied ? '[COPIED]' : '[COPY]'}
              </button>
            )}
          </div>
        </div>

        <div className="kz-terminal-body">
          <pre className="kz-terminal-pre">
            {showLineNumbers ? (
              <code>
                {lines.map((line, idx) => (
                  <div key={idx} className="kz-terminal-line">
                    <span className="kz-terminal-lineno">{idx + 1}</span>
                    <span className="kz-terminal-linecontent">{line || ' '}</span>
                  </div>
                ))}
              </code>
            ) : (
              <code>{code}</code>
            )}
          </pre>
        </div>
      </div>
    );
  }
);

TerminalWindow.displayName = 'TerminalWindow';
