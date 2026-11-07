import React, { HTMLAttributes, forwardRef, ReactNode } from 'react';

export interface TelemetryBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  max?: number;
  label?: string;
  coord?: string;
  variant?: 'accent' | 'teal' | 'purple' | 'danger' | 'success';
  segmented?: boolean;
  segmentsCount?: number;
  showReadout?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const TelemetryBar = forwardRef<HTMLDivElement, TelemetryBarProps>(
  (
    {
      className = '',
      value,
      max = 100,
      label,
      coord,
      variant = 'accent',
      segmented = false,
      segmentsCount = 20,
      showReadout = true,
      size = 'md',
      ...props
    },
    ref
  ) => {
    const clampedValue = Math.min(Math.max(value, 0), max);
    const percentage = Math.round((clampedValue / max) * 100);

    return (
      <div
        ref={ref}
        className={[
          'kz-telemetry-container',
          `kz-telemetry-${size}`,
          `kz-telemetry-${variant}`,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {(label || coord || showReadout) && (
          <div className="kz-telemetry-header">
            <div className="kz-telemetry-label-group">
              {label && <span className="kz-telemetry-label">{label}</span>}
              {coord && <span className="kz-telemetry-coord">[{coord}]</span>}
            </div>
            {showReadout && (
              <span className="kz-telemetry-readout">{percentage}%</span>
            )}
          </div>
        )}

        <div className="kz-telemetry-track">
          {segmented ? (
            <div className="kz-telemetry-segments">
              {Array.from({ length: segmentsCount }).map((_, idx) => {
                const step = 100 / segmentsCount;
                const active = (idx + 1) * step <= percentage || (idx * step < percentage && (idx + 1) * step > percentage);
                return (
                  <span
                    key={idx}
                    className={`kz-telemetry-seg ${active ? 'active' : ''}`}
                  />
                );
              })}
            </div>
          ) : (
            <div
              className="kz-telemetry-fill"
              style={{ width: `${percentage}%` }}
            >
              <div className="kz-telemetry-glow" />
            </div>
          )}
        </div>
      </div>
    );
  }
);

TelemetryBar.displayName = 'TelemetryBar';
