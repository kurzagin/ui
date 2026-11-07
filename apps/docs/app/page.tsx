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
  Input,
  TelemetryBar,
  HudModal,
  TerminalWindow,
  Tooltip,
  Logo,
  SegmentedControl,
  CyberSwitch,
  KeyValGrid,
  Breadcrumbs,
  TacticalDrawer,
  HudToast,
} from '@kurzagin/ui';
import { Copy, Check, Terminal, ExternalLink, Sparkles, Play, Pause, ChevronUp } from 'lucide-react';

const THEMES = [
  { id: 'default', name: 'Amber', color: '#c49368' },
  { id: 'alley', name: 'Alley', color: '#b066ff' },
  { id: 'citlali', name: 'Citlali', color: '#f2a9c8' },
  { id: 'furina', name: 'Furina', color: '#5ab2ff' },
] as const;

export default function HomePage() {
  const [theme, setTheme] = useState<'default' | 'citlali' | 'furina' | 'alley'>('default');
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isVinylPlaying, setIsVinylPlaying] = useState(true);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [demoInput, setDemoInput] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('opus');
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const activeTheme = THEMES.find((t) => t.id === theme) || THEMES[0];

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
              <Logo size={18} variant="accent" />
              <span>kurzagin/ui</span>
            </a>

            <div className="header-actions">
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
            <button
              className="copy-btn"
              onClick={() => copyToClipboard('bun add github:kurzagin/ui', 'bun')}
              aria-label="Copy installation command"
            >
              {copiedKey === 'bun' ? <Check size={12} /> : <Copy size={12} />}
            </button>
          </div>
        </section>

        {/* Showcase Grid */}
        <div className="component-grid">
          {/* Brand Logo & Asset Suite Showcase */}
          <BracketCard className="component-card" style={{ gridColumn: '1 / -1' }}>
            <div className="component-header">
              <span className="component-name">Brand &amp; Assets</span>
              <div className="component-header-tags">
                <Badge variant="accent">Vector SVG</Badge>
                <Badge variant="purple">Android</Badge>
                <Badge variant="outline">ICO</Badge>
              </div>
            </div>

            {/* Sub-section 1: React Component Variants */}
            <div className="asset-sub-header">
              &gt; React &lt;Logo /&gt; Variants
            </div>
            <div className="preview-box" style={{ gap: '16px', flexWrap: 'wrap', padding: '14px 8px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <Logo size={32} variant="default" />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>Default</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <Logo size={32} variant="accent" />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>Accent</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <Logo size={32} variant="purple" />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>Alley</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <Logo size={32} variant="teal" />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>Teal</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <Logo size={32} variant="minimal" />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>Minimal</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <Logo size={32} variant="monochrome" />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>Mono</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <Logo size={32} variant="badge" />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>HUD Ring</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <Logo size={32} variant="purple" withRing />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>Alley Ring</span>
              </div>
            </div>

            {/* Sub-section 2: Native Mobile & Favicon Assets */}
            <div className="asset-sub-header" style={{ borderTop: '1px solid var(--kz-border-subtle)' }}>
              &gt; Native Icons &amp; Favicon Formats
            </div>
            <div className="preview-box asset-preview-scroll">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                <img src="/logo-badge.svg" alt="Amber Badge SVG" width={40} height={40} />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>badge.svg</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                <img src="/logo-alley.svg" alt="Alley Purple SVG" width={40} height={40} />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>alley.svg</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                <img src="/icon-alley.png" alt="Mobile Alley 1024" width={40} height={40} style={{ borderRadius: '8px' }} />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>alley.png</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                <img src="/apple-touch-icon.png" alt="Apple Touch Icon" width={36} height={36} style={{ borderRadius: '7px' }} />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>apple-180</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                <img src="/pwa-192x192.png" alt="PWA 192" width={32} height={32} style={{ borderRadius: '6px' }} />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>pwa-192</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                <img src="/favicon-48x48.png" alt="Favicon 48" width={28} height={28} />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>fav-48</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                <img src="/favicon-32x32.png" alt="Favicon 32" width={22} height={22} />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>fav-32</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                <img src="/favicon-16x16.png" alt="Favicon 16" width={16} height={16} />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>fav-16</span>
              </div>
            </div>

            <div className="code-box">
              {`// React:\n<Logo size={28} variant="accent" />\n<Logo size={28} variant="purple" withRing />\n\n// Static:\nfavicon.ico, logo.svg, icon-alley.png, pwa-192x192.png`}
            </div>
          </BracketCard>

          {/* Button Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">Button</span>
              <Badge variant="accent">Interactive</Badge>
            </div>
            <div className="preview-box">
              <Button variant="primary">Execute</Button>
              <Button variant="outline">Default</Button>
              <Button variant="ghost">Dismiss</Button>
            </div>
            <div className="code-box">
              {`<Button variant="primary">Execute</Button>\n<Button variant="outline">Default</Button>`}
            </div>
          </BracketCard>

          {/* BracketCard Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">BracketCard</span>
              <Badge variant="teal">Surface</Badge>
            </div>
            <div className="preview-box">
              <BracketCard style={{ padding: '16px', width: '100%' }}>
                <span style={{ fontFamily: 'var(--kz-mono)', fontSize: '12px' }}>
                  Bracket Card Container
                </span>
              </BracketCard>
            </div>
            <div className="code-box">
              {`<BracketCard style={{ padding: '16px' }}>\n  <span>Content</span>\n</BracketCard>`}
            </div>
          </BracketCard>

          {/* CornerFrame Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">CornerFrame</span>
              <Badge variant="teal">Surface</Badge>
            </div>
            <div className="preview-box">
              <CornerFrame style={{ padding: '16px', width: '100%' }}>
                <span style={{ fontFamily: 'var(--kz-mono)', fontSize: '12px' }}>
                  HUD Tactical Frame
                </span>
              </CornerFrame>
            </div>
            <div className="code-box">
              {`<CornerFrame style={{ padding: '16px' }}>\n  <span>Content</span>\n</CornerFrame>`}
            </div>
          </BracketCard>

          {/* Vinyl Disc Player */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">Vinyl</span>
              <Badge variant="accent">Playable</Badge>
            </div>
            <div className="preview-box" style={{ flexDirection: 'column', gap: '14px' }}>
              <Vinyl
                size="md"
                label="ALLEY"
                playing={isVinylPlaying}
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsVinylPlaying(!isVinylPlaying)}
              >
                {isVinylPlaying ? <Pause size={12} /> : <Play size={12} />}
                <span>{isVinylPlaying ? 'Pause' : 'Spin'}</span>
              </Button>
            </div>
            <div className="code-box">
              {`<Vinyl size="md" label="ALLEY" playing={playing} />`}
            </div>
          </BracketCard>

          {/* Sticky Note */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">StickyNote</span>
              <Badge variant="default">Analog</Badge>
            </div>
            <div className="preview-box">
              <StickyNote
                colorVariant={1}
                title="MEMO // 04"
                tape
                style={{ maxWidth: '200px' }}
              >
                Refactored tokens to include Alley purple palette.
              </StickyNote>
            </div>
            <div className="code-box">
              {`<StickyNote colorVariant={1} title="MEMO // 04" tape>\n  Refactored tokens.\n</StickyNote>`}
            </div>
          </BracketCard>

          {/* Spoiler Gate */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">SpoilerGate</span>
              <Badge variant="accent">Security</Badge>
            </div>
            <div className="preview-box" style={{ width: '100%', padding: '0' }}>
              <SpoilerGate
                title="CLASSIFIED_FILE"
                description="Access restricted to authorized operatives only."
                clearanceText="LVL-4"
              >
                <div style={{ padding: '18px', textAlign: 'center', width: '100%' }}>
                  <Badge variant="teal">ACCESS GRANTED</Badge>
                  <p style={{ marginTop: '8px', fontSize: '12px' }}>Welcome operative.</p>
                </div>
              </SpoilerGate>
            </div>
            <div className="code-box">
              {`<SpoilerGate title="CLASSIFIED" clearanceText="LVL-4">\n  <div>Confidential</div>\n</SpoilerGate>`}
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
              <Badge variant="purple"><Dot color="purple" /> Alley</Badge>
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

          {/* Input / Terminal Prompt */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">Input</span>
              <Badge variant="accent">Form</Badge>
            </div>
            <div className="preview-box" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
              <Input
                label="COMMAND_QUERY"
                sublabel="コマンド入力"
                placeholder="system --sync-nodes"
                value={demoInput}
                onChange={(e) => setDemoInput(e.target.value)}
                hint="Press Enter to execute query"
              />
            </div>
            <div className="code-box">
              {`<Input\n  label="COMMAND_QUERY"\n  sublabel="コマンド入力"\n  placeholder="system --sync-nodes"\n  prefixSymbol=">_"\n/>`}
            </div>
          </BracketCard>

          {/* TelemetryBar Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">TelemetryBar</span>
              <Badge variant="teal">Feedback</Badge>
            </div>
            <div className="preview-box" style={{ flexDirection: 'column', gap: '14px', alignItems: 'stretch' }}>
              <TelemetryBar
                label="BUFFER_INTEGRITY"
                coord="CORE-A"
                value={68}
              />
              <TelemetryBar
                label="MEMORY_ALLOCATION"
                coord="VRAM"
                value={45}
                segmented
                variant="teal"
              />
            </div>
            <div className="code-box">
              {`<TelemetryBar label="BUFFER" value={68} coord="CORE-A" />\n<TelemetryBar segmented variant="teal" value={45} />`}
            </div>
          </BracketCard>

          {/* TerminalWindow Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">TerminalWindow</span>
              <Badge variant="purple">Surface</Badge>
            </div>
            <div className="preview-box" style={{ padding: '0', background: 'transparent', border: 'none' }}>
              <TerminalWindow
                title="cluster_daemon.sh"
                badge="V-2.4"
                code={`#!/bin/bash\nexport THEME="alley"\nkurzagin --status:optimal --node:01`}
              />
            </div>
            <div className="code-box">
              {`<TerminalWindow\n  title="cluster_daemon.sh"\n  badge="V-2.4"\n  code="..."\n/>`}
            </div>
          </BracketCard>

          {/* HudModal & Tooltip */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">HudModal & Tooltip</span>
              <Badge variant="accent">Overlay</Badge>
            </div>
            <div className="preview-box" style={{ gap: '14px' }}>
              <Tooltip content="Execute Node Handshake" coord="0xFA">
                <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                  Trigger HudModal
                </Button>
              </Tooltip>

              <Tooltip content="Tactical HUD Telemetry">
                <Badge variant="outline">Hover For Tooltip</Badge>
              </Tooltip>
            </div>
            <div className="code-box">
              {`<Tooltip content="Execute Node Handshake">\n  <Button onClick={() => setOpen(true)}>Open Modal</Button>\n</Tooltip>`}
            </div>
          </BracketCard>

          {/* SegmentedControl Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">SegmentedControl</span>
              <Badge variant="purple">Selector</Badge>
            </div>
            <div className="preview-box" style={{ flexDirection: 'column', gap: '12px' }}>
              <SegmentedControl
                options={[
                  { value: 'opus', label: 'OPUS', sublabel: '48k' },
                  { value: 'flac', label: 'FLAC', sublabel: 'Lossless', badge: 'HD' },
                  { value: 'mp3', label: 'MP3', sublabel: '320k' },
                ]}
                value={selectedFormat}
                onChange={setSelectedFormat}
                variant="purple"
              />
              <span style={{ fontSize: '10px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>
                Active Target: {selectedFormat.toUpperCase()}
              </span>
            </div>
            <div className="code-box">
              {`<SegmentedControl\n  options={[{ value: 'opus', label: 'OPUS' }, ...]}\n  value={format}\n  onChange={setFormat}\n  variant="purple"\n/>`}
            </div>
          </BracketCard>

          {/* CyberSwitch Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">CyberSwitch</span>
              <Badge variant="accent">Toggle</Badge>
            </div>
            <div className="preview-box" style={{ flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
              <CyberSwitch
                checked={switch1}
                onChange={setSwitch1}
                label="CHAQUOPY ENGINE"
                sublabel="On-device python audio daemon"
              />
              <CyberSwitch
                checked={switch2}
                onChange={setSwitch2}
                label="ALLEY NEON MODE"
                sublabel="Secondary purple luminescence"
                variant="purple"
              />
            </div>
            <div className="code-box">
              {`<CyberSwitch\n  checked={enabled}\n  onChange={setEnabled}\n  label="CHAQUOPY ENGINE"\n  sublabel="On-device audio"\n/>`}
            </div>
          </BracketCard>

          {/* KeyValGrid Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">KeyValGrid</span>
              <Badge variant="outline">Telemetry</Badge>
            </div>
            <div className="preview-box" style={{ padding: '8px' }}>
              <KeyValGrid
                title="DIAGNOSTICS"
                coord="SPEC // 0x4B"
                items={[
                  { key: 'ENGINE_STATUS', value: 'ONLINE', status: 'success' },
                  { key: 'SAMPLE_RATE', value: '48,000 Hz', sub: 'PCM' },
                  { key: 'BITRATE', value: '160 kbps', status: 'purple' },
                  { key: 'CONTAINER', value: 'Ogg/Opus' },
                ]}
              />
            </div>
            <div className="code-box">
              {`<KeyValGrid\n  title="DIAGNOSTICS"\n  items={[{ key: 'ENGINE', value: 'ONLINE', status: 'success' }]}\n/>`}
            </div>
          </BracketCard>

          {/* Breadcrumbs Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">Breadcrumbs</span>
              <Badge variant="accent">Trajectory</Badge>
            </div>
            <div className="preview-box">
              <Breadcrumbs
                prefix="ROOT //"
                items={[
                  { label: 'HOME', href: '#' },
                  { label: 'LIBRARY', href: '#' },
                  { label: 'AUDIO_CORE', href: '#' },
                  { label: 'OPUS_v1.0.0', active: true },
                ]}
              />
            </div>
            <div className="code-box">
              {`<Breadcrumbs\n  prefix="ROOT //"\n  items={[{ label: 'HOME', href: '#' }, { label: 'CORE', active: true }]}\n/>`}
            </div>
          </BracketCard>

          {/* TacticalDrawer & HudToast Controls */}
          <BracketCard className="component-card" style={{ gridColumn: '1 / -1' }}>
            <div className="component-header">
              <span className="component-name">TacticalDrawer &amp; HudToast</span>
              <div style={{ display: 'flex', gap: '6px' }}>
                <Badge variant="purple">Drawer</Badge>
                <Badge variant="accent">Notification</Badge>
              </div>
            </div>
            <div className="preview-box" style={{ gap: '14px' }}>
              <Button variant="outline" onClick={() => setIsDrawerOpen(true)}>
                Open Bottom Drawer
              </Button>
              <Button variant="primary" onClick={() => setIsToastOpen(true)}>
                Trigger HUD Toast
              </Button>
            </div>
            <div className="code-box">
              {`<TacticalDrawer isOpen={open} onClose={() => setOpen(false)} position="bottom">\n  <Content />\n</TacticalDrawer>\n\n<HudToast isOpen={toast} onClose={() => setToast(false)} title="DOWNLOAD_COMPLETE" />`}
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

      {/* HudModal Demo Instance */}
      <HudModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="AUTH_PROMPT"
        jp="安全承認"
        coord="NODE-0x89"
        footer={
          <>
            <Button size="sm" variant="outline" onClick={() => setIsModalOpen(false)}>
              Abort
            </Button>
            <Button size="sm" variant="primary" onClick={() => setIsModalOpen(false)}>
              Confirm
            </Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={{ margin: 0 }}>
            Confirm node handshake and sync cluster state.
          </p>
          <TelemetryBar
            label="CLUSTER_LOAD"
            coord="ZONE-9"
            value={84}
            variant="purple"
            segmented
          />
        </div>
      </HudModal>

      {/* TacticalDrawer Demo Instance */}
      <TacticalDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="SYSTEM_INSPECTOR"
        coord="DRAWER // 0x4A"
        sublabel="Tactical bottom inspector"
        position="bottom"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--kz-text-1)' }}>
            Real-time audio telemetry and hardware decoder allocation.
          </p>
          <KeyValGrid
            items={[
              { key: 'DECODER_CORE', value: 'Chaquopy v16.0', status: 'success' },
              { key: 'BUFFER_STATE', value: 'OPTIMAL (4.2ms)', status: 'purple' },
              { key: 'ENCRYPTION', value: 'TLS_AES_256_GCM' },
            ]}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <Button size="sm" variant="outline" onClick={() => setIsDrawerOpen(false)}>
              Dismiss
            </Button>
          </div>
        </div>
      </TacticalDrawer>

      {/* HudToast Demo Instance */}
      <HudToast
        isOpen={isToastOpen}
        onClose={() => setIsToastOpen(false)}
        title="AUDIO_STREAM_READY"
        description="Opus stream buffered at 48,000 Hz / Lossless."
        variant="purple"
        coord="HUD // 0xCC"
        duration={4000}
      />

      {/* Floating Theme Control */}
      <div className="floating-theme-dock">
        {isThemeMenuOpen && (
          <div className="theme-dropdown-menu">
            <div className="theme-menu-header">Select Theme</div>
            {THEMES.map((t) => (
              <button
                key={t.id}
                className={`theme-menu-item ${theme === t.id ? 'active' : ''}`}
                onClick={() => {
                  setTheme(t.id);
                  setIsThemeMenuOpen(false);
                }}
              >
                <span
                  className="theme-color-indicator"
                  style={{ background: t.color }}
                />
                <span>{t.name}</span>
                {theme === t.id && <span className="theme-menu-check">●</span>}
              </button>
            ))}
          </div>
        )}

        <button
          type="button"
          className="theme-trigger-btn"
          onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
          aria-label="Toggle theme picker"
        >
          <span
            className="theme-color-indicator"
            style={{ background: activeTheme.color }}
          />
          <span>Theme: {activeTheme.name}</span>
          <ChevronUp
            size={13}
            style={{
              transform: isThemeMenuOpen ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.15s ease',
            }}
          />
        </button>
      </div>
    </div>
  );
}
