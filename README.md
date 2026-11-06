# @kurzagin/ui

> Cyber-minimalist, dark-themed UI system extracted from [kurzagin.com](https://kurzagin.com).  
> Designed for technical, terminal, and HUD aesthetic web applications.

Public showcase & documentation: [ui.kurzagin.com](https://ui.kurzagin.com)

---

## 📦 Installation (GitHub)

No public npm registry needed. Install directly into any project using Bun, pnpm, or npm:

```bash
bun add github:kurzagin/ui
# or with pnpm
pnpm add github:kurzagin/ui
# or with npm
npm install github:kurzagin/ui
```

---

## 🚀 Quick Start

### 1. Import CSS Variables & Theme Styles

In your application root (`layout.tsx`, `App.tsx`, or `main.css`):

```tsx
import '@kurzagin/ui/styles.css';
```

### 2. Use Components

```tsx
import { BracketCard, Button, Badge, Dot, CornerFrame, TechLabel } from '@kurzagin/ui';

export default function MyComponent() {
  return (
    <BracketCard style={{ padding: '24px' }}>
      <Badge variant="accent">
        <Dot pulse color="accent" /> Live Status
      </Badge>

      <TechLabel
        label="SYSTEM_STATUS"
        jp="システム稼働中"
        coord="NODE-01"
      />

      <Button variant="primary">Execute Command</Button>
    </BracketCard>
  );
}
```

---

## 🎨 Themes

Supports instant theme switching via `data-theme` attribute:

* `default` — Dark amber cyber-minimalist baseline
* `citlali` — Pink/purple glow character skin
* `furina` — Cool blue ocean character skin

```html
<html data-theme="citlali">
  <!-- All @kurzagin/ui tokens and components adapt automatically -->
</html>
```

---

## 🛠 Project Monorepo Structure

* `packages/ui` — Core React components & CSS tokens (`tsup` built with ESM, CJS, and TypeScript definitions).
* `apps/docs` — Documentation & showcase website for [ui.kurzagin.com](https://ui.kurzagin.com).

---

## 📜 License

[Apache 2.0](LICENSE)
