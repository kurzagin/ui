/**
 * Raw design tokens - source of truth across Web, Tauri Desktop, and React Native
 */
declare const colors: {
    readonly bg: "#0a0a0c";
    readonly bg0: "#0a0a0c";
    readonly bg1: "#111114";
    readonly bg2: "#18181c";
    readonly bg3: "#1f1f24";
    readonly bgCard: "#121215";
    readonly bgCardHover: "#18181d";
    readonly bgCardActive: "#222228";
    readonly border: "#2a2a30";
    readonly borderSubtle: "#1e1e24";
    readonly borderLight: "#3f3f46";
    readonly text: "#f4f4f5";
    readonly text0: "#e2ded6";
    readonly text1: "#b0aca4";
    readonly text2: "#706c66";
    readonly text3: "#4a4844";
    readonly textMuted: "#a1a1aa";
    readonly textDim: "#71717a";
    readonly accent: "#c49368";
    readonly accentHover: "#d4a478";
    readonly accentDim: "rgba(196, 147, 104, 0.12)";
    readonly accentMuted: "rgba(224, 169, 109, 0.15)";
    readonly teal: "#6a9e9e";
    readonly tealDim: "rgba(106, 158, 158, 0.12)";
    readonly warm: "#a08060";
    readonly redSoft: "#b05050";
    readonly greenSoft: "#6a9a6a";
    readonly danger: "#ef4444";
    readonly success: "#22c55e";
    readonly blue: "#3b82f6";
    readonly purple: "#a855f7";
    readonly sticky1: "#e8e0b8";
    readonly sticky2: "#e0c8c0";
    readonly sticky3: "#c0d0d8";
    readonly sticky4: "#c8d8c0";
};
declare const themePalettes: {
    readonly default: {
        readonly name: "Amber Baseline";
        readonly accent: "#c49368";
        readonly bg0: "#0a0a0c";
        readonly bg1: "#111114";
        readonly bg2: "#18181c";
        readonly border: "#2a2a30";
    };
    readonly citlali: {
        readonly name: "Citlali Star-Gaze";
        readonly accent: "#f2a9c8";
        readonly bg0: "#090d1d";
        readonly bg1: "#10172d";
        readonly bg2: "#172343";
        readonly border: "#334879";
    };
    readonly furina: {
        readonly name: "Furina Hydro-Overture";
        readonly accent: "#5ab2ff";
        readonly bg0: "#060d16";
        readonly bg1: "#0b1624";
        readonly bg2: "#122238";
        readonly border: "#1f3c5e";
    };
    readonly alley: {
        readonly name: "Alley Neon-Noir";
        readonly accent: "#b066ff";
        readonly bg0: "#050409";
        readonly bg1: "#0b0914";
        readonly bg2: "#141021";
        readonly border: "#382c54";
    };
};
declare const typography: {
    readonly fontMono: "IBMPlexMono_400Regular";
    readonly fontMonoLight: "IBMPlexMono_300Light";
    readonly fontMonoMedium: "IBMPlexMono_500Medium";
    readonly fontMonoBold: "IBMPlexMono_600SemiBold";
    readonly fontSans: "IBMPlexSans_400Regular";
    readonly fontSansLight: "IBMPlexSans_300Light";
    readonly fontSansMedium: "IBMPlexSans_500Medium";
    readonly fontSansBold: "IBMPlexSans_600SemiBold";
    readonly fontJp: "NotoSansJP_400Regular";
    readonly fontJpMedium: "NotoSansJP_500Medium";
    readonly fontJpBold: "NotoSansJP_700Bold";
    readonly webMono: "'IBM Plex Mono', monospace";
    readonly webSans: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    readonly webJp: "'Noto Sans JP', sans-serif";
};
declare const spacing: {
    readonly none: 0;
    readonly xs: 4;
    readonly sm: 8;
    readonly md: 12;
    readonly lg: 16;
    readonly xl: 24;
    readonly xxl: 32;
    readonly xxxl: 48;
};
declare const borderRadius: {
    readonly none: 0;
    readonly sm: 4;
    readonly md: 6;
    readonly lg: 10;
    readonly full: 9999;
};
/**
 * CSS Variable references for DOM & Tauri Webview contexts
 */
declare const cssTokens: {
    readonly colors: {
        readonly bg0: "var(--kz-bg-0)";
        readonly bg1: "var(--kz-bg-1)";
        readonly bg2: "var(--kz-bg-2)";
        readonly bg3: "var(--kz-bg-3)";
        readonly border: "var(--kz-border)";
        readonly borderSubtle: "var(--kz-border-subtle)";
        readonly borderLight: "var(--kz-border-light)";
        readonly text0: "var(--kz-text-0)";
        readonly text1: "var(--kz-text-1)";
        readonly text2: "var(--kz-text-2)";
        readonly text3: "var(--kz-text-3)";
        readonly accent: "var(--kz-accent)";
        readonly accentHover: "var(--kz-accent-hover)";
        readonly accentDim: "var(--kz-accent-dim)";
        readonly teal: "var(--kz-teal)";
        readonly tealDim: "var(--kz-teal-dim)";
        readonly warm: "var(--kz-warm)";
        readonly redSoft: "var(--kz-red-soft)";
        readonly greenSoft: "var(--kz-green-soft)";
        readonly blue: "var(--kz-blue)";
        readonly purple: "var(--kz-purple)";
    };
    readonly typography: {
        readonly mono: "var(--kz-mono)";
        readonly sans: "var(--kz-sans)";
        readonly jp: "var(--kz-jp)";
    };
    readonly radius: {
        readonly sm: "var(--kz-radius-sm)";
        readonly md: "var(--kz-radius-md)";
        readonly lg: "var(--kz-radius-lg)";
    };
};
declare const tokens: {
    readonly colors: {
        readonly bg0: "var(--kz-bg-0)";
        readonly bg1: "var(--kz-bg-1)";
        readonly bg2: "var(--kz-bg-2)";
        readonly bg3: "var(--kz-bg-3)";
        readonly border: "var(--kz-border)";
        readonly borderSubtle: "var(--kz-border-subtle)";
        readonly borderLight: "var(--kz-border-light)";
        readonly text0: "var(--kz-text-0)";
        readonly text1: "var(--kz-text-1)";
        readonly text2: "var(--kz-text-2)";
        readonly text3: "var(--kz-text-3)";
        readonly accent: "var(--kz-accent)";
        readonly accentHover: "var(--kz-accent-hover)";
        readonly accentDim: "var(--kz-accent-dim)";
        readonly teal: "var(--kz-teal)";
        readonly tealDim: "var(--kz-teal-dim)";
        readonly warm: "var(--kz-warm)";
        readonly redSoft: "var(--kz-red-soft)";
        readonly greenSoft: "var(--kz-green-soft)";
        readonly blue: "var(--kz-blue)";
        readonly purple: "var(--kz-purple)";
    };
    readonly typography: {
        readonly mono: "var(--kz-mono)";
        readonly sans: "var(--kz-sans)";
        readonly jp: "var(--kz-jp)";
    };
    readonly radius: {
        readonly sm: "var(--kz-radius-sm)";
        readonly md: "var(--kz-radius-md)";
        readonly lg: "var(--kz-radius-lg)";
    };
};
type ThemeName = 'default' | 'citlali' | 'furina' | 'alley';

export { type ThemeName, borderRadius, colors, cssTokens, spacing, themePalettes, tokens, typography };
