'use client';

import { useState } from 'react';
import {
  Button,
  BracketCard,
  CornerFrame,
  Badge,
  Dot,
  TechLabel,
  Vinyl,
  StickyNote,
  SpoilerGate,
} from '@kurzagin/ui';
import { Copy, Check, Terminal, ExternalLink, Sparkles, Play, Pause } from 'lucide-react';

const THEMES = [
  { id: 'default', name: 'Amber', color: '#c49368' },
  { id: 'citlali', name: 'Citlali', color: '#f2a9c8' },
  { id: 'furina', name: 'Furina', color: '#5ab2ff' },
] as const;

export default function HomePage() {
  const [theme, setTheme] = useState<'default' | 'citlali' | 'furina'>('default');
  const [isVinylPlaying, setIsVinylPlaying] = useState(true);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="docs-wrapper" data-theme={theme === 'default' ? undefined : theme}>
      {/* Header */}
      <header className="docs-header">
        <div className="docs-container">
          <div className="header-inner">
            <a href="#" className="brand-link">
              <Dot pulse color="accent" />
              <span>kurzagin/ui</span>
            </a>

            <div className="header-actions">
              {/* Mobile Touch-Friendly Theme Switcher */}
              <div className="theme-selector-container">
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    className={`theme-pill-btn ${theme === t.id ? 'active' : ''}`}
                    onClick={() => setTheme(t.id)}
                    aria-label={`Switch to ${t.name} theme`}
                  >
                    <span
                      className="theme-color-indicator"
                      style={{ background: t.color }}
                    />
                    <span className="theme-name-text">{t.name}</span>
                  </button>
                ))}
              </div>

              <a
                href="https://github.com/kurzagin/ui"
                target="_blank"
                rel="noreferrer"
                className="github-nav-link"
                aria-label="GitHub Repository"
              >
                <ExternalLink size={13} />
                <span className="github-text">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="docs-container">
        {/* Hero Section */}
        <section className="hero-section">
          <Badge variant="accent">
            <Sparkles size={11} />
            <span>Open Source UI</span>
          </Badge>

          <h1 className="hero-title">
            Technical & Minimalist <br />
            <span>UI Primitives</span>
          </h1>

          <p className="hero-desc">
            Cyber-aesthetic React design system extracted from kurzagin.com.
            Zero lock-in, mobile-first, installable directly from GitHub.
          </p>

          <div className="install-command-box">
            <Terminal size={13} style={{ color: 'var(--kz-accent)', flexShrink: 0 }} />
            <code>bun add github:kurzagin/ui</code>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => copyToClipboard('bun add github:kurzagin/ui', 'install')}
              style={{ marginLeft: 'auto', padding: '4px 6px', minHeight: '26px' }}
              aria-label="Copy install command"
            >
              {copiedKey === 'install' ? (
                <Check size={12} style={{ color: 'var(--kz-green-soft)' }} />
              ) : (
                <Copy size={12} />
              )}
            </Button>
          </div>
        </section>

        {/* Component Showcase */}
        <div className="showcase-grid">
          {/* Vinyl Record Turntable */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">Vinyl Turntable</span>
              <Badge variant="accent">Signature</Badge>
            </div>
            <div className="preview-box" style={{ flexDirection: 'column', gap: '16px' }}>
              <Vinyl
                size="md"
                playing={isVinylPlaying}
                label="KRZ-01"
                onClick={() => setIsVinylPlaying(!isVinylPlaying)}
              />
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsVinylPlaying(!isVinylPlaying)}
              >
                {isVinylPlaying ? <Pause size={12} /> : <Play size={12} />}
                <span>{isVinylPlaying ? 'Pause Rotation' : 'Spin Vinyl'}</span>
              </Button>
            </div>
            <div className="code-box">
              {`<Vinyl\n  size="md"\n  playing={${isVinylPlaying}}\n  label="KRZ-01"\n  onClick={() => setPlaying(!playing)}\n/>`}
            </div>
          </BracketCard>

          {/* Sticky Notes */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">Sticky Note</span>
              <Badge variant="teal">Physical UI</Badge>
            </div>
            <div className="preview-box">
              <StickyNote colorVariant={1} title="LORE LOG" tape style={{ maxWidth: '240px' }}>
                Vinyl crackle, late-night anime, technical notes.
              </StickyNote>
            </div>
            <div className="code-box">
              {`<StickyNote colorVariant={1} title="LORE LOG" tape>\n  Vinyl crackle, late-night anime.\n</StickyNote>`}
            </div>
          </BracketCard>

          {/* Spoiler Gate */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">SpoilerGate</span>
              <Badge variant="teal">Security HUD</Badge>
            </div>
            <div className="preview-box">
              <SpoilerGate
                title="CLASSIFIED CODEX"
                description="Tap to bypass classification gate and reveal secret notes."
                buttonText="Bypass Gate"
              >
                <div style={{ padding: '12px', background: 'var(--kz-bg-2)', borderRadius: '4px', fontSize: '12px' }}>
                  🔓 Intel unsealed: Project UI initialized successfully.
                </div>
              </SpoilerGate>
            </div>
            <div className="code-box">
              {`<SpoilerGate title="CLASSIFIED CODEX">\n  Secret content here\n</SpoilerGate>`}
            </div>
          </BracketCard>

          {/* Button Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">Button</span>
              <Badge variant="teal">Component</Badge>
            </div>
            <div className="preview-box">
              <Button variant="primary" size="sm">Primary</Button>
              <Button variant="outline" size="sm">Outline</Button>
              <Button variant="ghost" size="sm">Ghost</Button>
            </div>
            <div className="code-box">
              {`<Button variant="primary">Primary</Button>\n<Button variant="outline">Outline</Button>`}
            </div>
          </BracketCard>

          {/* BracketCard Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">BracketCard</span>
              <Badge variant="teal">Container</Badge>
            </div>
            <div className="preview-box">
              <BracketCard style={{ padding: '14px', fontSize: '12px', width: '100%', textAlign: 'center' }}>
                Tap or hover to reveal corner brackets
              </BracketCard>
            </div>
            <div className="code-box">
              {`<BracketCard>\n  HUD bracket styled card\n</BracketCard>`}
            </div>
          </BracketCard>

          {/* CornerFrame Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">CornerFrame</span>
              <Badge variant="teal">Frame</Badge>
            </div>
            <div className="preview-box">
              <CornerFrame style={{ padding: '14px 18px', background: 'var(--kz-bg-1)', fontSize: '12px' }}>
                Technical Target Frame
              </CornerFrame>
            </div>
            <div className="code-box">
              {`<CornerFrame>\n  Technical Target Frame\n</CornerFrame>`}
            </div>
          </BracketCard>

          {/* Badge & Dot Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">Badge & Dot</span>
              <Badge variant="teal">Status</Badge>
            </div>
            <div className="preview-box">
              <Badge><Dot color="green" pulse /> Online</Badge>
              <Badge variant="accent"><Dot color="accent" /> Active</Badge>
              <Badge variant="teal"><Dot color="teal" /> Synced</Badge>
            </div>
            <div className="code-box">
              {`<Badge variant="accent">\n  <Dot color="accent" pulse /> Active\n</Badge>`}
            </div>
          </BracketCard>

          {/* TechLabel Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">TechLabel</span>
              <Badge variant="teal">Typography</Badge>
            </div>
            <div className="preview-box">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <TechLabel label="SYSTEM_LOG" jp="システム記録" coord="35.68, 139.69" />
                <TechLabel label="NETWORK_STAT" jp="通信状況" coord="SEC-01" />
              </div>
            </div>
            <div className="code-box">
              {`<TechLabel\n  label="SYSTEM_LOG"\n  jp="システム記録"\n  coord="35.68, 139.69"\n/>`}
            </div>
          </BracketCard>
        </div>

        {/* Footer */}
        <footer
          style={{
            borderTop: '1px solid var(--kz-border-subtle)',
            padding: '20px 0 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '11px',
            color: 'var(--kz-text-2)',
            fontFamily: 'var(--kz-mono)',
          }}
        >
          <div>ui.kurzagin.com</div>
          <div>Apache-2.0 License</div>
        </footer>
      </main>
    </div>
  );
}
