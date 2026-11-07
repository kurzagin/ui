import React, { ReactNode } from 'react';

export interface CyberSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: ReactNode;
  sublabel?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'purple' | 'teal';
  className?: string;
}

export function CyberSwitch({
  checked,
  onChange,
  label,
  sublabel,
  disabled = false,
  size = 'md',
  variant = 'default',
  className = '',
}: CyberSwitchProps) {
  return (
    <label
      className={`kz-switch-container kz-switch-${size} kz-switch-${variant} ${
        checked ? 'kz-checked' : ''
      } ${disabled ? 'kz-disabled' : ''} ${className}`.trim()}
      onClick={(e) => {
        if (disabled) return;
        e.preventDefault();
        onChange(!checked);
      }}
    >
      <div
        className="kz-switch-track"
        role="switch"
        aria-checked={checked}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (disabled) return;
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            onChange(!checked);
          }
        }}
      >
        <span className="kz-switch-state-text left">{checked ? '1' : ''}</span>
        <div className="kz-switch-thumb">
          <span className="kz-switch-thumb-grip" />
        </div>
        <span className="kz-switch-state-text right">{!checked ? '0' : ''}</span>
      </div>

      {(label || sublabel) && (
        <div className="kz-switch-text-group">
          {label && <span className="kz-switch-label">{label}</span>}
          {sublabel && <span className="kz-switch-sublabel">{sublabel}</span>}
        </div>
      )}
    </label>
  );
}
