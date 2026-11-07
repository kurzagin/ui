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
  BottomBar,
} from '@kurzagin/ui';
import { Copy, Check, Terminal, ExternalLink, Sparkles, Play, Pause, ChevronUp, Home, Compass, Disc3, Settings, Code, Star } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState('home');
  const [openCodes, setOpenCodes] = useState<Record<string, boolean>>({});

  const toggleCode = (name: string) => {
    setOpenCodes((prev) => ({ ...prev, [name]: !prev[name] }));
  };

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
                className="github-star-nav-btn"
                aria-label="Star kurzagin/ui on GitHub"
              >
                <Star size={12} className="star-icon" />
                <span>Star on GitHub</span>
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

          <div className="hero-cta-group">
            <div className="install-command-box">
              <Terminal size={13} style={{ color: 'var(--kz-accent)', flexShrink: 0 }} />
              <code>bun add github:kurzagin/ui</code>
              <button
                className={`copy-btn ${copiedKey === 'bun' ? 'copied' : ''}`}
                onClick={() => copyToClipboard('bun add github:kurzagin/ui', 'bun')}
                aria-label="Copy installation command"
              >
                {copiedKey === 'bun' ? (
                  <>
                    <Check size={11} />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={11} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href="https://github.com/kurzagin/ui"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-star-cta"
            >
              <Star size={13} className="star-icon" />
              <span>Star on GitHub</span>
            </a>
          </div>
        </section>

        {/* Showcase Grid */}
        <div className="component-grid">
          {/* Brand Logo & Asset Suite Showcase */}
          <BracketCard className="component-card" style={{ gridColumn: '1 / -1' }}>
            <div className="component-header">
              <span className="component-name">Brand &amp; Assets</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['brand'] ? 'active' : ''}`}
                onClick={() => toggleCode('brand')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['brand'] ? 'Hide Code' : 'Code'}</span>
              </button>
            </div>

            <div className="preview-box" style={{ gap: '20px', flexWrap: 'wrap', padding: '16px 12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <Logo size={36} variant="default" />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>Logo</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <Logo size={36} variant="badge" />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>HUD Badge</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <img src="/apple-touch-icon.png" alt="Apple Touch Icon" width={36} height={36} style={{ borderRadius: '7px' }} />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>App Icon</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <img src="/favicon-32x32.png" alt="Favicon 32" width={24} height={24} />
                <span style={{ fontSize: '9px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>Favicon</span>
              </div>
            </div>

            {openCodes['brand'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`// React: <Logo size={36} variant="default" withRing />\n// Static: favicon.ico, logo.svg, icon-alley.png, pwa-192x192.png`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* Button Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">Button</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['button'] ? 'active' : ''}`}
                onClick={() => toggleCode('button')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['button'] ? 'Hide Code' : 'Code'}</span>
              </button>
            </div>
            <div className="preview-box">
              <Button variant="primary">Execute</Button>
              <Button variant="outline">Default</Button>
              <Button variant="ghost">Dismiss</Button>
            </div>
            {openCodes['button'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<Button variant="primary">Execute</Button>\n<Button variant="outline">Default</Button>`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* BracketCard Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">BracketCard</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['bracketCard'] ? 'active' : ''}`}
                onClick={() => toggleCode('bracketCard')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['bracketCard'] ? 'Hide Code' : 'Code'}</span>
              </button>
            </div>
            <div className="preview-box">
              <BracketCard style={{ padding: '16px', width: '100%' }}>
                <span style={{ fontFamily: 'var(--kz-mono)', fontSize: '12px' }}>
                  Bracket Card Container
                </span>
              </BracketCard>
            </div>
            {openCodes['bracketCard'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<BracketCard style={{ padding: '16px' }}>\n  <span>Content</span>\n</BracketCard>`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* CornerFrame Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">CornerFrame</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['cornerFrame'] ? 'active' : ''}`}
                onClick={() => toggleCode('cornerFrame')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['cornerFrame'] ? 'Hide Code' : 'Code'}</span>
              </button>
            </div>
            <div className="preview-box">
              <CornerFrame style={{ padding: '16px', width: '100%' }}>
                <span style={{ fontFamily: 'var(--kz-mono)', fontSize: '12px' }}>
                  HUD Tactical Frame
                </span>
              </CornerFrame>
            </div>
            {openCodes['cornerFrame'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<CornerFrame style={{ padding: '16px' }}>\n  <span>Content</span>\n</CornerFrame>`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* Vinyl Disc Player */}
          <BracketCard className="component-card" style={{ gridColumn: '1 / -1' }}>
            <div className="component-header">
              <span className="component-name">Vinyl Audio Deck</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['vinyl'] ? 'active' : ''}`}
                onClick={() => toggleCode('vinyl')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['vinyl'] ? 'Hide Code' : 'Code'}</span>
              </button>
            </div>
            
            <div className="preview-box" style={{ flexDirection: 'column', gap: '20px', alignItems: 'stretch' }}>
              <div style={{ width: '100%' }}>
                {/* Turntable Deck Layout */}
                <Vinyl
                  layout="turntable"
                  variant="default"
                  size="md"
                  label="AMBER"
                  title="CYBER_SYMPHONY_01"
                  artist="Kurzagin Systems"
                  album="CORE_AUDIO"
                  rpm="33"
                  playing={isVinylPlaying}
                  controls={
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setIsVinylPlaying(!isVinylPlaying)}
                    >
                      {isVinylPlaying ? <Pause size={12} /> : <Play size={12} />}
                      <span>{isVinylPlaying ? 'Stop Turntable' : 'Spin Turntable'}</span>
                    </Button>
                  }
                />
              </div>

              {/* Mini Row Player Layout */}
              <div style={{ width: '100%' }}>
                <Vinyl
                  layout="mini"
                  variant="default"
                  size="sm"
                  label="KRZ"
                  title="Sumerian Cuneiform Frequencies"
                  artist="Dingir Core"
                  album="Master Press"
                  rpm="45"
                  playing={isVinylPlaying}
                  controls={
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsVinylPlaying(!isVinylPlaying)}
                    >
                      {isVinylPlaying ? <Pause size={12} /> : <Play size={12} />}
                    </Button>
                  }
                />
              </div>
            </div>

            {openCodes['vinyl'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`// Turntable: <Vinyl layout="turntable" variant="default" title="TRACK" playing={playing} />\n// Mini: <Vinyl layout="mini" variant="default" title="TRACK" playing={playing} />\n// Disc: <Vinyl layout="disc" variant="default" playing={playing} />`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* Sticky Note */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">StickyNote</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['stickyNote'] ? 'active' : ''}`}
                onClick={() => toggleCode('stickyNote')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['stickyNote'] ? 'Hide Code' : 'Code'}</span>
              </button>
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
            {openCodes['stickyNote'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<StickyNote colorVariant={1} title="MEMO // 04" tape>\n  Refactored tokens.\n</StickyNote>`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* Spoiler Gate */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">SpoilerGate</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['spoilerGate'] ? 'active' : ''}`}
                onClick={() => toggleCode('spoilerGate')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['spoilerGate'] ? 'Hide Code' : 'Code'}</span>
              </button>
            </div>
            <div className="preview-box" style={{ width: '100%', padding: '0' }}>
              <SpoilerGate
                title="CLASSIFIED_FILE"
                description="Access restricted to authorized operatives only."
                clearanceText="LVL-4"
              >
                <div style={{ padding: '18px', textAlign: 'center', width: '100%' }}>
                  <Badge variant="accent">ACCESS GRANTED</Badge>
                  <p style={{ marginTop: '8px', fontSize: '12px' }}>Welcome operative.</p>
                </div>
              </SpoilerGate>
            </div>
            {openCodes['spoilerGate'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<SpoilerGate title="CLASSIFIED" clearanceText="LVL-4">\n  <div>Confidential</div>\n</SpoilerGate>`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* Badge & Dot Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">Badge &amp; Dot</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['badge'] ? 'active' : ''}`}
                onClick={() => toggleCode('badge')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['badge'] ? 'Hide Code' : 'Code'}</span>
              </button>
            </div>
            <div className="preview-box">
              <Badge variant="accent"><Dot color="accent" pulse /> Online</Badge>
              <Badge variant="outline"><Dot color="green" /> Synced</Badge>
              <Badge variant="purple"><Dot color="purple" /> Alley</Badge>
            </div>
            {openCodes['badge'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<Badge variant="accent">\n  <Dot color="accent" pulse /> Active\n</Badge>`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* TechLabel Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">TechLabel</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['techLabel'] ? 'active' : ''}`}
                onClick={() => toggleCode('techLabel')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['techLabel'] ? 'Hide Code' : 'Code'}</span>
              </button>
            </div>
            <div className="preview-box">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <TechLabel label="SYSTEM_LOG" jp="システム記録" coord="35.68, 139.69" />
                <TechLabel label="NETWORK_STAT" jp="通信状況" coord="SEC-01" />
              </div>
            </div>
            {openCodes['techLabel'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<TechLabel\n  label="SYSTEM_LOG"\n  jp="システム記録"\n  coord="35.68, 139.69"\n/>`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* Input / Terminal Prompt */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">Input</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['input'] ? 'active' : ''}`}
                onClick={() => toggleCode('input')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['input'] ? 'Hide Code' : 'Code'}</span>
              </button>
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
            {openCodes['input'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<Input\n  label="COMMAND_QUERY"\n  sublabel="コマンド入力"\n  placeholder="system --sync-nodes"\n  prefixSymbol=">_"\n/>`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* TelemetryBar Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">TelemetryBar</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['telemetryBar'] ? 'active' : ''}`}
                onClick={() => toggleCode('telemetryBar')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['telemetryBar'] ? 'Hide Code' : 'Code'}</span>
              </button>
            </div>
            <div className="preview-box" style={{ flexDirection: 'column', gap: '14px', alignItems: 'stretch' }}>
              <TelemetryBar
                label="BUFFER_INTEGRITY"
                coord="CORE-A"
                value={68}
                variant="accent"
              />
              <TelemetryBar
                label="MEMORY_ALLOCATION"
                coord="VRAM"
                value={45}
                segmented
                variant="accent"
              />
            </div>
            {openCodes['telemetryBar'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<TelemetryBar label="BUFFER" value={68} coord="CORE-A" />\n<TelemetryBar segmented variant="accent" value={45} />`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* TerminalWindow Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">TerminalWindow</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['terminalWindow'] ? 'active' : ''}`}
                onClick={() => toggleCode('terminalWindow')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['terminalWindow'] ? 'Hide Code' : 'Code'}</span>
              </button>
            </div>
            <div className="preview-box" style={{ padding: '0', background: 'transparent', border: 'none' }}>
              <TerminalWindow
                title="cluster_daemon.sh"
                badge="V-2.4"
                code={`#!/bin/bash\nexport THEME="default"\nkurzagin --status:optimal --node:01`}
              />
            </div>
            {openCodes['terminalWindow'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<TerminalWindow\n  title="cluster_daemon.sh"\n  badge="V-2.4"\n  code="..."\n/>`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* HudModal & Tooltip */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">HudModal &amp; Tooltip</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['modalTooltip'] ? 'active' : ''}`}
                onClick={() => toggleCode('modalTooltip')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['modalTooltip'] ? 'Hide Code' : 'Code'}</span>
              </button>
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
            {openCodes['modalTooltip'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<Tooltip content="Execute Node Handshake">\n  <Button onClick={() => setOpen(true)}>Open Modal</Button>\n</Tooltip>`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* SegmentedControl Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">SegmentedControl</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['segmentedControl'] ? 'active' : ''}`}
                onClick={() => toggleCode('segmentedControl')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['segmentedControl'] ? 'Hide Code' : 'Code'}</span>
              </button>
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
                variant="accent"
              />
              <span style={{ fontSize: '10px', fontFamily: 'var(--kz-mono)', color: 'var(--kz-text-2)' }}>
                Active Target: {selectedFormat.toUpperCase()}
              </span>
            </div>
            {openCodes['segmentedControl'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<SegmentedControl\n  options={[{ value: 'opus', label: 'OPUS' }, ...]}\n  value={format}\n  onChange={setFormat}\n  variant="accent"\n/>`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* CyberSwitch Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">CyberSwitch</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['cyberSwitch'] ? 'active' : ''}`}
                onClick={() => toggleCode('cyberSwitch')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['cyberSwitch'] ? 'Hide Code' : 'Code'}</span>
              </button>
            </div>
            <div className="preview-box" style={{ flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
              <CyberSwitch
                checked={switch1}
                onChange={setSwitch1}
                label="CHAQUOPY ENGINE"
                sublabel="On-device python audio daemon"
                variant="default"
              />
              <CyberSwitch
                checked={switch2}
                onChange={setSwitch2}
                label="SECONDARY DAEMON"
                sublabel="Optional background service"
                variant="default"
              />
            </div>
            {openCodes['cyberSwitch'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<CyberSwitch\n  checked={enabled}\n  onChange={setEnabled}\n  label="CHAQUOPY ENGINE"\n  sublabel="On-device audio"\n/>`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* KeyValGrid Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">KeyValGrid</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['keyValGrid'] ? 'active' : ''}`}
                onClick={() => toggleCode('keyValGrid')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['keyValGrid'] ? 'Hide Code' : 'Code'}</span>
              </button>
            </div>
            <div className="preview-box" style={{ padding: '8px' }}>
              <KeyValGrid
                title="DIAGNOSTICS"
                coord="SPEC // 0x4B"
                items={[
                  { key: 'ENGINE_STATUS', value: 'ONLINE', status: 'success' },
                  { key: 'SAMPLE_RATE', value: '48,000 Hz', sub: 'PCM' },
                  { key: 'BITRATE', value: '160 kbps' },
                  { key: 'CONTAINER', value: 'Ogg/Opus' },
                ]}
              />
            </div>
            {openCodes['keyValGrid'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<KeyValGrid\n  title="DIAGNOSTICS"\n  items={[{ key: 'ENGINE', value: 'ONLINE', status: 'success' }]}\n/>`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* Breadcrumbs Component */}
          <BracketCard className="component-card">
            <div className="component-header">
              <span className="component-name">Breadcrumbs</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['breadcrumbs'] ? 'active' : ''}`}
                onClick={() => toggleCode('breadcrumbs')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['breadcrumbs'] ? 'Hide Code' : 'Code'}</span>
              </button>
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
            {openCodes['breadcrumbs'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<Breadcrumbs\n  prefix="ROOT //"\n  items={[{ label: 'HOME', href: '#' }, { label: 'CORE', active: true }]}\n/>`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* TacticalDrawer & HudToast Controls */}
          <BracketCard className="component-card" style={{ gridColumn: '1 / -1' }}>
            <div className="component-header">
              <span className="component-name">TacticalDrawer &amp; HudToast</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['drawerToast'] ? 'active' : ''}`}
                onClick={() => toggleCode('drawerToast')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['drawerToast'] ? 'Hide Code' : 'Code'}</span>
              </button>
            </div>
            <div className="preview-box" style={{ gap: '14px' }}>
              <Button variant="outline" onClick={() => setIsDrawerOpen(true)}>
                Open Bottom Drawer
              </Button>
              <Button variant="primary" onClick={() => setIsToastOpen(true)}>
                Trigger HUD Toast
              </Button>
            </div>
            {openCodes['drawerToast'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<TacticalDrawer isOpen={open} onClose={() => setOpen(false)} position="bottom">\n  <Content />\n</TacticalDrawer>\n\n<HudToast isOpen={toast} onClose={() => setToast(false)} title="DOWNLOAD_COMPLETE" />`}
            </div>
              </div>
            )}
          </BracketCard>

          {/* BottomBar Component Showcase */}
          <BracketCard className="component-card" style={{ gridColumn: '1 / -1' }}>
            <div className="component-header">
              <span className="component-name">BottomBar</span>
              <button
                type="button"
                className={`code-toggle-btn ${openCodes['bottomBar'] ? 'active' : ''}`}
                onClick={() => toggleCode('bottomBar')}
                aria-label="Toggle code snippet"
              >
                <Code size={11} />
                <span>{openCodes['bottomBar'] ? 'Hide Code' : 'Code'}</span>
              </button>
            </div>
            <div className="preview-box" style={{ padding: '0', background: 'transparent', border: 'none' }}>
              <BottomBar
                fixed={false}
                variant="default"
                activeId={activeTab}
                onSelect={setActiveTab}
                items={[
                  { id: 'home', label: 'Index', icon: <Home size={15} /> },
                  { id: 'explore', label: 'Explore', icon: <Compass size={15} />, badge: '3' },
                  { id: 'audio', label: 'Audio', icon: <Disc3 size={15} /> },
                  { id: 'settings', label: 'Config', icon: <Settings size={15} /> },
                ]}
              />
            </div>
            {openCodes['bottomBar'] && (
              <div className="code-collapse-panel">
                <div className="code-box">
              {`<BottomBar\n  variant="default"\n  activeId={tab}\n  onSelect={setTab}\n  items={[\n    { id: 'home', label: 'Index', icon: <Home /> },\n    { id: 'audio', label: 'Audio', icon: <Disc3 />, badge: '3' },\n  ]}\n/>`}
            </div>
              </div>
            )}
          </BracketCard>
        </div>

        {/* Footer */}
        <footer className="docs-footer">
          <div className="docs-footer-left">
            <Logo size={16} variant="default" />
            <span>&copy; {new Date().getFullYear()} Kurzagin. All rights reserved.</span>
          </div>
          <div className="docs-footer-right">
            <a
              href="https://kurzagin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="docs-footer-link"
            >
              <span>kurzagin.com</span>
              <ExternalLink size={11} />
            </a>
            <span className="docs-footer-badge">Apache-2.0 License</span>
          </div>
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
