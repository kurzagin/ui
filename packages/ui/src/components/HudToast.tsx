import React, { ReactNode, useEffect, useState } from 'react';

export interface HudToastProps {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  description?: ReactNode;
  variant?: 'default' | 'success' | 'alert' | 'purple' | 'teal';
  duration?: number; // ms, 0 means persist
  coord?: string;
  className?: string;
}

export function HudToast({
  isOpen,
  onClose,
  title,
  description,
  variant = 'default',
  duration = 4000,
  coord = 'HUD // NOTIFY',
  className = '',
}: HudToastProps) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isOpen || duration <= 0) return;
    setProgress(100);

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);
      if (elapsed >= duration) {
        clearInterval(interval);
        onClose();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`kz-hud-toast kz-toast-${variant} ${className}`.trim()}
      role="alert"
    >
      <div className="kz-toast-inner">
        <span className="kz-toast-bracket-l" />
        <div className="kz-toast-content">
          <div className="kz-toast-header">
            <span className="kz-toast-dot" />
            <span className="kz-toast-coord">{coord}</span>
          </div>
          <div className="kz-toast-title">{title}</div>
          {description && (
            <div className="kz-toast-desc">{description}</div>
          )}
        </div>
        <button
          type="button"
          className="kz-toast-dismiss"
          onClick={onClose}
          aria-label="Dismiss notification"
        >
          ✕
        </button>
        <span className="kz-toast-bracket-r" />
      </div>

      {duration > 0 && (
        <div className="kz-toast-progress-track">
          <div
            className="kz-toast-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}
