import React, { InputHTMLAttributes, forwardRef, ReactNode } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size'> {
  label?: string;
  sublabel?: string;
  prefixSymbol?: ReactNode;
  suffixSymbol?: ReactNode;
  error?: string;
  hint?: string;
  inputSize?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = '',
      label,
      sublabel,
      prefixSymbol = '>_',
      suffixSymbol,
      error,
      hint,
      inputSize = 'md',
      fullWidth = true,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={[
          'kz-input-wrapper',
          fullWidth ? 'kz-input-full' : '',
          disabled ? 'kz-input-disabled' : '',
          error ? 'kz-input-has-error' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {(label || sublabel) && (
          <div className="kz-input-header">
            {label && <label className="kz-input-label">{label}</label>}
            {sublabel && <span className="kz-input-sublabel">{sublabel}</span>}
          </div>
        )}

        <div className={`kz-input-field-container kz-input-${inputSize}`}>
          {prefixSymbol && <div className="kz-input-prefix">{prefixSymbol}</div>}
          <input
            ref={ref}
            disabled={disabled}
            className="kz-input-field"
            {...props}
          />
          {suffixSymbol && <div className="kz-input-suffix">{suffixSymbol}</div>}
          <div className="kz-input-corner-tl" />
          <div className="kz-input-corner-br" />
        </div>

        {(error || hint) && (
          <div className="kz-input-footer">
            {error ? (
              <span className="kz-input-error-msg">{error}</span>
            ) : (
              <span className="kz-input-hint-msg">{hint}</span>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
