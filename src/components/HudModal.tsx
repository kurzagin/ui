import React, { ReactNode, useEffect } from 'react';

export interface HudModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  jp?: string;
  coord?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  closeOnBackdrop?: boolean;
}

export const HudModal: React.FC<HudModalProps> = ({
  isOpen,
  onClose,
  title = 'SYS_ALERT',
  jp,
  coord = 'NODE-01',
  children,
  footer,
  size = 'md',
  className = '',
  closeOnBackdrop = true,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="kz-modal-portal">
      <div
        className="kz-modal-backdrop"
        onClick={closeOnBackdrop ? onClose : undefined}
      />
      <div className={`kz-modal-dialog kz-modal-${size} ${className}`}>
        {/* Top Header */}
        <div className="kz-modal-header">
          <div className="kz-modal-title-group">
            <span className="kz-modal-title">{title}</span>
            {jp && <span className="kz-modal-jp">{jp}</span>}
            {coord && <span className="kz-modal-coord">// [{coord}]</span>}
          </div>
          <button
            type="button"
            className="kz-modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            [ESC ✕]
          </button>
        </div>

        {/* Modal Body */}
        <div className="kz-modal-body">{children}</div>

        {/* Optional Footer */}
        {footer && <div className="kz-modal-footer">{footer}</div>}

        {/* Corner Accents */}
        <div className="kz-modal-corner-tl" />
        <div className="kz-modal-corner-tr" />
        <div className="kz-modal-corner-bl" />
        <div className="kz-modal-corner-br" />
      </div>
    </div>
  );
};

HudModal.displayName = 'HudModal';
