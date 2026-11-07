import React, { ReactNode, useEffect } from 'react';

export interface TacticalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  coord?: string;
  sublabel?: string;
  children: ReactNode;
  position?: 'bottom' | 'right';
  className?: string;
}

export function TacticalDrawer({
  isOpen,
  onClose,
  title,
  coord = 'DRAWER // 0xAF',
  sublabel,
  children,
  position = 'bottom',
  className = '',
}: TacticalDrawerProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`kz-drawer-backdrop kz-drawer-${position}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`kz-drawer-panel kz-drawer-panel-${position} ${className}`.trim()}
        role="dialog"
        aria-modal="true"
      >
        {/* Grab Handle for Bottom Drawer */}
        {position === 'bottom' && (
          <div className="kz-drawer-handle-bar" onClick={onClose}>
            <span className="kz-drawer-handle-pill" />
          </div>
        )}

        <div className="kz-drawer-header">
          <div className="kz-drawer-title-group">
            {coord && <span className="kz-drawer-coord">{coord}</span>}
            {title && <h3 className="kz-drawer-title">{title}</h3>}
            {sublabel && <span className="kz-drawer-sublabel">{sublabel}</span>}
          </div>
          <button
            type="button"
            className="kz-drawer-close-btn"
            onClick={onClose}
            aria-label="Close drawer"
          >
            ✕
          </button>
        </div>

        <div className="kz-drawer-body">{children}</div>
      </div>
    </div>
  );
}
