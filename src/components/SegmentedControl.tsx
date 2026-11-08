import React, { ReactNode } from 'react';

export interface SegmentedOption<T extends string = string> {
  value: T;
  label: ReactNode;
  sublabel?: string;
  badge?: string | number;
  disabled?: boolean;
}

export interface SegmentedControlProps<T extends string = string> {
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  variant?: 'default' | 'accent' | 'purple' | 'teal';
}

export function SegmentedControl<T extends string = string>({
  options,
  value,
  onChange,
  size = 'md',
  fullWidth = false,
  className = '',
  variant = 'default',
}: SegmentedControlProps<T>) {
  return (
    <div
      className={`kz-segmented-control kz-segmented-${size} kz-segmented-${variant} ${
        fullWidth ? 'kz-segmented-full' : ''
      } ${className}`.trim()}
      role="tablist"
    >
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            disabled={option.disabled}
            className={`kz-segmented-item ${isActive ? 'kz-active' : ''} ${
              option.disabled ? 'kz-disabled' : ''
            }`.trim()}
            onClick={() => !option.disabled && onChange(option.value)}
          >
            {isActive && <span className="kz-segmented-bracket-l" />}
            <span className="kz-segmented-content">
              <span className="kz-segmented-label">{option.label}</span>
              {option.sublabel && (
                <span className="kz-segmented-sublabel">{option.sublabel}</span>
              )}
            </span>
            {option.badge !== undefined && (
              <span className="kz-segmented-badge">{option.badge}</span>
            )}
            {isActive && <span className="kz-segmented-bracket-r" />}
          </button>
        );
      })}
    </div>
  );
}
