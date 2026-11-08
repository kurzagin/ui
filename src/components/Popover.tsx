import React, { forwardRef, ReactNode, useState, useRef, useEffect } from 'react';

export interface PopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  title?: string;
  coord?: string;
  align?: 'left' | 'right' | 'center';
  position?: 'top' | 'bottom';
  className?: string;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      trigger,
      children,
      title,
      coord,
      align = 'center',
      position = 'bottom',
      className = '',
      isOpen: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      disabled = false,
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : internalOpen;

    const containerRef = useRef<HTMLDivElement>(null);

    const toggleOpen = () => {
      if (disabled) return;
      const next = !open;
      if (!isControlled) {
        setInternalOpen(next);
      }
      onOpenChange?.(next);
    };

    const handleClose = () => {
      if (!isControlled) {
        setInternalOpen(false);
      }
      onOpenChange?.(false);
    };

    useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          handleClose();
        }
      };
      if (open) {
        document.addEventListener('mousedown', handleOutsideClick);
      }
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [open]);

    return (
      <div
        ref={containerRef}
        className={['kz-popover-container', className].filter(Boolean).join(' ')}
      >
        <div
          ref={ref}
          className="kz-popover-trigger-wrapper"
          onClick={toggleOpen}
        >
          {trigger}
        </div>

        {open && (
          <div
            className={[
              'kz-popover-content',
              `pos-${position}`,
              `align-${align}`,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {(title || coord) && (
              <div className="kz-popover-header">
                {title && <span className="kz-popover-title">{title}</span>}
                {coord && <span className="kz-popover-coord">{coord}</span>}
              </div>
            )}
            <div className="kz-popover-body">{children}</div>
          </div>
        )}
      </div>
    );
  }
);

Popover.displayName = 'Popover';
