import React, { forwardRef, ReactNode, useState, useRef, useEffect } from 'react';

export interface DropdownItem {
  id: string;
  label: ReactNode;
  sublabel?: string;
  icon?: ReactNode;
  badge?: string | number;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
  onClick?: () => void;
}

export interface DropdownMenuProps {
  trigger: ReactNode;
  items: DropdownItem[];
  title?: string;
  coord?: string;
  align?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  (
    {
      trigger,
      items,
      title,
      coord,
      align = 'left',
      className = '',
      disabled = false,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
        document.addEventListener('mousedown', handleOutsideClick);
      }
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [isOpen]);

    return (
      <div
        ref={containerRef}
        className={['kz-dropdown-container', className].filter(Boolean).join(' ')}
      >
        <div
          ref={ref}
          className="kz-dropdown-trigger-wrapper"
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          {trigger}
        </div>

        {isOpen && (
          <div
            className={[
              'kz-dropdown-menu',
              `align-${align}`,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {(title || coord) && (
              <div className="kz-dropdown-header">
                {title && <span className="kz-dropdown-title">{title}</span>}
                {coord && <span className="kz-dropdown-coord">{coord}</span>}
              </div>
            )}
            <div className="kz-dropdown-list">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  disabled={item.disabled}
                  className={[
                    'kz-dropdown-item',
                    item.danger ? 'danger' : '',
                    item.disabled ? 'disabled' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => {
                    if (item.disabled) return;
                    item.onClick?.();
                    setIsOpen(false);
                  }}
                >
                  <div className="kz-dropdown-item-left">
                    {item.icon && <span className="kz-dropdown-item-icon">{item.icon}</span>}
                    <div className="kz-dropdown-item-text">
                      <span className="kz-dropdown-item-label">{item.label}</span>
                      {item.sublabel && (
                        <span className="kz-dropdown-item-sublabel">{item.sublabel}</span>
                      )}
                    </div>
                  </div>
                  <div className="kz-dropdown-item-right">
                    {item.shortcut && (
                      <span className="kz-dropdown-item-shortcut">{item.shortcut}</span>
                    )}
                    {item.badge !== undefined && (
                      <span className="kz-dropdown-item-badge">{item.badge}</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

DropdownMenu.displayName = 'DropdownMenu';
