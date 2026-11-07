import React, { ReactNode } from 'react';

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  prefix?: string;
  separator?: string;
  className?: string;
}

export function Breadcrumbs({
  items,
  prefix = 'SYS //',
  separator = '/',
  className = '',
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`kz-breadcrumbs ${className}`.trim()}
    >
      {prefix && <span className="kz-breadcrumb-prefix">{prefix}</span>}
      <ol className="kz-breadcrumb-list">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const isActive = item.active || isLast;

          return (
            <li
              key={idx}
              className={`kz-breadcrumb-item ${isActive ? 'kz-active' : ''}`}
            >
              {idx > 0 && (
                <span className="kz-breadcrumb-separator" aria-hidden="true">
                  {separator}
                </span>
              )}
              {item.href && !isActive ? (
                <a
                  href={item.href}
                  className="kz-breadcrumb-link"
                  onClick={item.onClick}
                >
                  {item.label}
                </a>
              ) : item.onClick && !isActive ? (
                <button
                  type="button"
                  className="kz-breadcrumb-button"
                  onClick={item.onClick}
                >
                  {item.label}
                </button>
              ) : (
                <span
                  className="kz-breadcrumb-current"
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
