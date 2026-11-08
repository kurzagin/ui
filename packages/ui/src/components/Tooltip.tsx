import React, { forwardRef, ReactNode, useState, useRef } from 'react';

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  coord?: string;
  shortcut?: string;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  coord,
  shortcut,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(true);
  };

  const hide = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 100);
  };

  return (
    <div
      className={`kz-tooltip-wrapper ${className}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={`kz-tooltip-box kz-tooltip-${position}`}
        >
          {coord && <span className="kz-tooltip-coord">[{coord}]</span>}
          <div className="kz-tooltip-content">
            <span className="kz-tooltip-text">{content}</span>
            {shortcut && <kbd className="kz-tooltip-shortcut">{shortcut}</kbd>}
          </div>
          <div className="kz-tooltip-arrow" />
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';
