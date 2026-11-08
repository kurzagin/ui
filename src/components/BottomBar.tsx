import React, { ReactNode } from 'react';

export interface BottomBarItem {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  badge?: string | number;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface BottomBarProps {
  items: BottomBarItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  bordered?: boolean;
  blur?: boolean;
  fixed?: boolean;
  className?: string;
  variant?: 'default' | 'alley' | 'teal';
}

export function BottomBar({
  items,
  activeId,
  onSelect,
  bordered = true,
  blur = true,
  fixed = true,
  className = '',
  variant = 'default',
}: BottomBarProps) {
  return (
    <nav
      className={`kz-bottom-bar kz-bottom-bar-${variant} ${
        fixed ? 'kz-bottom-bar-fixed' : ''
      } ${blur ? 'kz-bottom-bar-blur' : ''} ${
        bordered ? 'kz-bottom-bar-bordered' : ''
      } ${className}`.trim()}
      role="navigation"
      aria-label="Bottom navigation"
    >
      <div className="kz-bottom-bar-track">
        {items.map((item) => {
          const isActive = activeId !== undefined ? item.id === activeId : item.active;

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              disabled={item.disabled}
              className={`kz-bottom-bar-item ${isActive ? 'kz-active' : ''} ${
                item.disabled ? 'kz-disabled' : ''
              }`.trim()}
              onClick={() => {
                if (item.disabled) return;
                item.onClick?.();
                onSelect?.(item.id);
              }}
            >
              {isActive && <span className="kz-bottom-bar-active-pip" />}
              <div className="kz-bottom-bar-icon-wrap">
                {item.icon}
                {item.badge !== undefined && (
                  <span className="kz-bottom-bar-badge">{item.badge}</span>
                )}
              </div>
              <span className="kz-bottom-bar-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
