export const tokens = {
  colors: {
    bg0: 'var(--kz-bg-0)',
    bg1: 'var(--kz-bg-1)',
    bg2: 'var(--kz-bg-2)',
    bg3: 'var(--kz-bg-3)',
    border: 'var(--kz-border)',
    borderSubtle: 'var(--kz-border-subtle)',
    borderLight: 'var(--kz-border-light)',
    text0: 'var(--kz-text-0)',
    text1: 'var(--kz-text-1)',
    text2: 'var(--kz-text-2)',
    text3: 'var(--kz-text-3)',
    accent: 'var(--kz-accent)',
    accentHover: 'var(--kz-accent-hover)',
    accentDim: 'var(--kz-accent-dim)',
    teal: 'var(--kz-teal)',
    tealDim: 'var(--kz-teal-dim)',
    warm: 'var(--kz-warm)',
    redSoft: 'var(--kz-red-soft)',
    greenSoft: 'var(--kz-green-soft)',
    blue: 'var(--kz-blue)',
    purple: 'var(--kz-purple)',
  },
  typography: {
    mono: 'var(--kz-mono)',
    sans: 'var(--kz-sans)',
    jp: 'var(--kz-jp)',
  },
  radius: {
    sm: 'var(--kz-radius-sm)',
    md: 'var(--kz-radius-md)',
    lg: 'var(--kz-radius-lg)',
  },
} as const;

export type ThemeName = 'default' | 'citlali' | 'furina';
