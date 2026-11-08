import React, { forwardRef, ReactNode, useState, useRef, useEffect } from 'react';

export interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  presets?: string[];
  label?: string;
  sublabel?: string;
  coord?: string;
  showHex?: boolean;
  showHexInput?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: ReactNode;
}

export const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(
  (
    {
      value,
      onChange,
      presets = [
        '#000000', '#ffffff', '#c49368', '#6a9e9e', '#a855f7',
        '#3b82f6', '#22c55e', '#ef4444', '#eab308', '#ec4899',
        '#64748b', '#1e293b'
      ],
      label,
      sublabel,
      coord,
      showHex = true,
      showHexInput = true,
      disabled = false,
      size = 'md',
      className = '',
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
        document.addEventListener('mousedown', handleOutsideClick);
      }
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [isOpen]);

    return (
      <div
        ref={containerRef}
        className={[
          'kz-color-picker',
          `kz-color-picker-${size}`,
          disabled ? 'kz-color-picker-disabled' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {(label || sublabel || coord || (showHex && (label || sublabel || coord))) && (
          <div className="kz-color-picker-header">
            <div className="kz-color-picker-label-group">
              {label && <label className="kz-color-picker-label">{label}</label>}
              {sublabel && <span className="kz-color-picker-sublabel">{sublabel}</span>}
              {coord && <span className="kz-color-picker-coord">{coord}</span>}
            </div>
            {showHex && <span className="kz-color-picker-hex">{value.toUpperCase()}</span>}
          </div>
        )}

        <div className="kz-color-picker-trigger-row" ref={ref}>
          <button
            type="button"
            disabled={disabled}
            className="kz-color-picker-swatch-trigger"
            onClick={() => !disabled && setIsOpen(!isOpen)}
            aria-label={label || 'Select color'}
          >
            <span className="kz-color-picker-swatch-preview" style={{ backgroundColor: value }} />
            <span className="kz-color-picker-swatch-val">{value}</span>
            <span className="kz-color-picker-caret">▼</span>
          </button>
        </div>

        {isOpen && (
          <div className="kz-color-picker-popover">
            <div className="kz-color-picker-palette">
              {presets.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={[
                    'kz-color-picker-palette-btn',
                    value.toLowerCase() === color.toLowerCase() ? 'active' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    onChange(color);
                  }}
                  title={color}
                />
              ))}
            </div>

            {showHexInput && (
              <div className="kz-color-picker-custom-input">
                <input
                  type="color"
                  value={value.startsWith('#') && value.length === 7 ? value : '#000000'}
                  onChange={(e) => onChange(e.target.value)}
                  className="kz-color-picker-native-input"
                />
                <input
                  type="text"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder="#000000"
                  className="kz-color-picker-text-input"
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

ColorPicker.displayName = 'ColorPicker';
