import React, { HTMLAttributes, forwardRef } from 'react';

export interface VinylProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'alley' | 'teal' | 'gold' | 'hologram';
  playing?: boolean;
  coverUrl?: string;
  label?: string;
  showRing?: boolean;
}

export const Vinyl = forwardRef<HTMLDivElement, VinylProps>(
  (
    {
      size = 'md',
      variant = 'default',
      playing = false,
      coverUrl,
      label = 'KRZ',
      showRing = true,
      className = '',
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`kz-vinyl-area kz-vinyl-${size} kz-vinyl-${variant} ${className}`.trim()}
        onClick={onClick}
        {...props}
      >
        {showRing && <div className="kz-vinyl-ring" aria-hidden="true" />}
        <div className={`kz-vinyl ${playing ? 'playing' : ''}`}>
          <div className="kz-vinyl-grooves" aria-hidden="true" />
          <div className="kz-vinyl-label">
            {coverUrl ? (
              <img
                src={coverUrl}
                alt="Vinyl center artwork"
                className="kz-vinyl-cover"
              />
            ) : (
              <span>{label}</span>
            )}
            <div className="kz-vinyl-spindle" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }
);

Vinyl.displayName = 'Vinyl';
