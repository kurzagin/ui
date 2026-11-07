import React, { HTMLAttributes, ReactNode, forwardRef } from 'react';

export type VinylLayout = 'disc' | 'card' | 'mini' | 'turntable';

export interface VinylProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'alley' | 'teal' | 'gold' | 'hologram';
  layout?: VinylLayout;
  playing?: boolean;
  coverUrl?: string;
  label?: string;
  showRing?: boolean;
  // Metadata for compound layouts (card, mini, turntable)
  title?: ReactNode;
  artist?: ReactNode;
  album?: ReactNode;
  rpm?: '33' | '45' | '78';
  controls?: ReactNode;
}

export const Vinyl = forwardRef<HTMLDivElement, VinylProps>(
  (
    {
      size = 'md',
      variant = 'default',
      layout = 'disc',
      playing = false,
      coverUrl,
      label = 'KRZ',
      showRing = true,
      title,
      artist,
      album,
      rpm = '33',
      controls,
      className = '',
      onClick,
      ...props
    },
    ref
  ) => {
    // Pure Disc Element
    const discElement = (
      <div
        className={`kz-vinyl-area kz-vinyl-${size} kz-vinyl-${variant}`}
        onClick={onClick}
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

    // 1. Pure Disc Layout (Default)
    if (layout === 'disc') {
      return (
        <div
          ref={ref}
          className={`kz-vinyl-wrapper kz-layout-disc ${className}`.trim()}
          {...props}
        >
          {discElement}
        </div>
      );
    }

    // 2. Mini Player Row (Compact inline player with track info)
    if (layout === 'mini') {
      return (
        <div
          ref={ref}
          className={`kz-vinyl-layout-mini kz-vinyl-${variant} ${
            playing ? 'kz-playing' : ''
          } ${className}`.trim()}
          {...props}
        >
          <div className="kz-vinyl-mini-disc">{discElement}</div>
          <div className="kz-vinyl-mini-info">
            <div className="kz-vinyl-mini-status">
              <span className={`kz-vinyl-pulse ${playing ? 'kz-pulse-active' : ''}`} />
              <span className="kz-vinyl-status-text">
                {playing ? 'NOW PLAYING' : 'STANDBY'}
              </span>
              <span className="kz-vinyl-rpm-tag">{rpm} RPM</span>
            </div>
            {title && <div className="kz-vinyl-mini-title">{title}</div>}
            {(artist || album) && (
              <div className="kz-vinyl-mini-artist">
                {artist}
                {album && ` — [${album}]`}
              </div>
            )}
          </div>
          {controls && <div className="kz-vinyl-mini-controls">{controls}</div>}
        </div>
      );
    }

    // 3. Card / Turntable Player Layout (Full Deck)
    if (layout === 'card' || layout === 'turntable') {
      return (
        <div
          ref={ref}
          className={`kz-vinyl-layout-card kz-vinyl-${variant} ${
            playing ? 'kz-playing' : ''
          } ${className}`.trim()}
          {...props}
        >
          <div className="kz-vinyl-deck-header">
            <span className="kz-vinyl-deck-tag">HI-FI DECK // {rpm} RPM</span>
            <span className="kz-vinyl-deck-status">
              <span className={`kz-vinyl-pulse ${playing ? 'kz-pulse-active' : ''}`} />
              {playing ? 'ACTIVE_PLAYBACK' : 'IDLE'}
            </span>
          </div>

          <div className="kz-vinyl-deck-center">
            {discElement}
            {layout === 'turntable' && (
              <div className={`kz-turntable-tonearm ${playing ? 'engaged' : ''}`}>
                <div className="kz-tonearm-pivot" />
                <div className="kz-tonearm-rod" />
                <div className="kz-tonearm-head" />
              </div>
            )}
          </div>

          <div className="kz-vinyl-deck-footer">
            <div className="kz-vinyl-deck-meta">
              {title && <div className="kz-vinyl-deck-title">{title}</div>}
              {(artist || album) && (
                <div className="kz-vinyl-deck-artist">
                  {artist}
                  {album && ` — [${album}]`}
                </div>
              )}
            </div>
            {controls && <div className="kz-vinyl-deck-controls">{controls}</div>}
          </div>
        </div>
      );
    }

    return discElement;
  }
);

Vinyl.displayName = 'Vinyl';
