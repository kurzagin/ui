import React, { ReactNode } from 'react';

export interface DataSpecItem {
  key: string;
  value: ReactNode;
  sub?: string;
  status?: 'default' | 'success' | 'warning' | 'alert' | 'purple';
}

export interface KeyValGridProps {
  items: DataSpecItem[];
  title?: string;
  coord?: string;
  columns?: 1 | 2;
  leaderDots?: boolean;
  className?: string;
}

export function KeyValGrid({
  items,
  title,
  coord,
  columns = 1,
  leaderDots = true,
  className = '',
}: KeyValGridProps) {
  return (
    <div
      className={`kz-keyval-grid kz-keyval-cols-${columns} ${className}`.trim()}
    >
      {(title || coord) && (
        <div className="kz-keyval-header">
          {title && <span className="kz-keyval-title">{title}</span>}
          {coord && <span className="kz-keyval-coord">{coord}</span>}
        </div>
      )}
      <div className="kz-keyval-list">
        {items.map((item, idx) => (
          <div key={idx} className="kz-keyval-row">
            <span className="kz-keyval-key">
              {item.status && (
                <span className={`kz-keyval-dot kz-dot-${item.status}`} />
              )}
              {item.key}
            </span>
            {leaderDots && <span className="kz-keyval-leader" />}
            <span className="kz-keyval-val">
              <span className="kz-keyval-val-main">{item.value}</span>
              {item.sub && <span className="kz-keyval-val-sub">{item.sub}</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
