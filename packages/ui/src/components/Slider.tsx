import React, { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  sublabel?: string;
  coord?: string;
  showValue?: boolean;
  valueFormatter?: (val: number) => ReactNode;
  sliderSize?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'accent' | 'teal' | 'purple';
  fullWidth?: boolean;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      className = '',
      label,
      sublabel,
      coord,
      showValue = true,
      valueFormatter,
      sliderSize = 'md',
      variant = 'accent',
      fullWidth = true,
      min = 0,
      max = 100,
      value,
      defaultValue,
      disabled,
      ...props
    },
    ref
  ) => {
    const currentVal = Number(value !== undefined ? value : defaultValue !== undefined ? defaultValue : min);
    const minVal = Number(min);
    const maxVal = Number(max);
    const pct = Math.max(0, Math.min(100, ((currentVal - minVal) / (maxVal - minVal || 1)) * 100));

    return (
      <div
        className={[
          'kz-slider-wrapper',
          `kz-slider-${sliderSize}`,
          `kz-slider-${variant}`,
          fullWidth ? 'kz-slider-full' : '',
          disabled ? 'kz-slider-disabled' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {(label || sublabel || showValue || coord) && (
          <div className="kz-slider-header">
            <div className="kz-slider-label-group">
              {label && <label className="kz-slider-label">{label}</label>}
              {sublabel && <span className="kz-slider-sublabel">{sublabel}</span>}
              {coord && <span className="kz-slider-coord">{coord}</span>}
            </div>
            {showValue && (
              <span className="kz-slider-value">
                {valueFormatter ? valueFormatter(currentVal) : currentVal}
              </span>
            )}
          </div>
        )}

        <div className="kz-slider-track-container">
          <input
            ref={ref}
            type="range"
            min={min}
            max={max}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
            className="kz-slider-input"
            style={{ '--kz-slider-pct': `${pct}%` } as React.CSSProperties}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';
