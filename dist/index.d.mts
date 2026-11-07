export { ThemeName, borderRadius, colors, cssTokens, spacing, themePalettes, tokens, typography } from './tokens.mjs';
export { formatDuration, formatRelativeTime } from './utils.mjs';
import React, { ButtonHTMLAttributes, HTMLAttributes, ReactNode, SVGProps, InputHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface BracketCardProps extends HTMLAttributes<HTMLDivElement> {
    active?: boolean;
}
declare const BracketCard: React.ForwardRefExoticComponent<BracketCardProps & React.RefAttributes<HTMLDivElement>>;

interface CornerFrameProps extends HTMLAttributes<HTMLDivElement> {
    showCorners?: boolean;
}
declare const CornerFrame: React.ForwardRefExoticComponent<CornerFrameProps & React.RefAttributes<HTMLDivElement>>;

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'accent' | 'teal' | 'purple' | 'outline';
}
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;

interface DotProps extends HTMLAttributes<HTMLSpanElement> {
    color?: 'accent' | 'green' | 'red' | 'teal' | 'purple';
    pulse?: boolean;
}
declare const Dot: React.ForwardRefExoticComponent<DotProps & React.RefAttributes<HTMLSpanElement>>;

interface TechLabelProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    jp?: string;
    coord?: string;
}
declare const TechLabel: React.ForwardRefExoticComponent<TechLabelProps & React.RefAttributes<HTMLDivElement>>;

type VinylLayout = 'disc' | 'card' | 'mini' | 'turntable';
interface VinylProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'alley' | 'teal' | 'gold' | 'hologram';
    layout?: VinylLayout;
    playing?: boolean;
    coverUrl?: string;
    label?: string;
    showRing?: boolean;
    title?: ReactNode;
    artist?: ReactNode;
    album?: ReactNode;
    rpm?: '33' | '45' | '78';
    controls?: ReactNode;
}
declare const Vinyl: React.ForwardRefExoticComponent<VinylProps & React.RefAttributes<HTMLDivElement>>;

interface StickyNoteProps extends HTMLAttributes<HTMLDivElement> {
    colorVariant?: 1 | 2 | 3 | 4;
    title?: string;
    tape?: boolean;
}
declare const StickyNote: React.ForwardRefExoticComponent<StickyNoteProps & React.RefAttributes<HTMLDivElement>>;

interface SpoilerGateProps {
    title?: string;
    description?: string;
    clearanceText?: string;
    buttonText?: string;
    children: React.ReactNode;
    defaultRevealed?: boolean;
}
declare function SpoilerGate({ title, description, clearanceText, buttonText, children, defaultRevealed, }: SpoilerGateProps): React.JSX.Element;

interface LogoProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    variant?: 'default' | 'accent' | 'teal' | 'purple' | 'minimal' | 'monochrome' | 'badge';
    withRing?: boolean;
}
declare const Logo: React.ForwardRefExoticComponent<Omit<LogoProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size'> {
    label?: string;
    sublabel?: string;
    prefixSymbol?: ReactNode;
    suffixSymbol?: ReactNode;
    error?: string;
    hint?: string;
    inputSize?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface TelemetryBarProps extends HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    label?: string;
    coord?: string;
    variant?: 'accent' | 'teal' | 'purple' | 'danger' | 'success';
    segmented?: boolean;
    segmentsCount?: number;
    showReadout?: boolean;
    size?: 'sm' | 'md' | 'lg';
}
declare const TelemetryBar: React.ForwardRefExoticComponent<TelemetryBarProps & React.RefAttributes<HTMLDivElement>>;

interface HudModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    jp?: string;
    coord?: string;
    children: ReactNode;
    footer?: ReactNode;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    closeOnBackdrop?: boolean;
}
declare const HudModal: React.FC<HudModalProps>;

interface TerminalWindowProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    badge?: string;
    code: string;
    showLineNumbers?: boolean;
    copyable?: boolean;
}
declare const TerminalWindow: React.ForwardRefExoticComponent<TerminalWindowProps & React.RefAttributes<HTMLDivElement>>;

interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    coord?: string;
    className?: string;
}
declare const Tooltip: React.FC<TooltipProps>;

interface SegmentedOption<T extends string = string> {
    value: T;
    label: ReactNode;
    sublabel?: string;
    badge?: string | number;
    disabled?: boolean;
}
interface SegmentedControlProps<T extends string = string> {
    options: SegmentedOption<T>[];
    value: T;
    onChange: (value: T) => void;
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    className?: string;
    variant?: 'default' | 'accent' | 'purple' | 'teal';
}
declare function SegmentedControl<T extends string = string>({ options, value, onChange, size, fullWidth, className, variant, }: SegmentedControlProps<T>): React.JSX.Element;

interface CyberSwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: ReactNode;
    sublabel?: string;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'purple' | 'teal';
    className?: string;
}
declare function CyberSwitch({ checked, onChange, label, sublabel, disabled, size, variant, className, }: CyberSwitchProps): React.JSX.Element;

interface DataSpecItem {
    key: string;
    value: ReactNode;
    sub?: string;
    status?: 'default' | 'success' | 'warning' | 'alert' | 'purple';
}
interface KeyValGridProps {
    items: DataSpecItem[];
    title?: string;
    coord?: string;
    columns?: 1 | 2;
    leaderDots?: boolean;
    className?: string;
}
declare function KeyValGrid({ items, title, coord, columns, leaderDots, className, }: KeyValGridProps): React.JSX.Element;

interface BreadcrumbItem {
    label: ReactNode;
    href?: string;
    onClick?: () => void;
    active?: boolean;
}
interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    prefix?: string;
    separator?: string;
    className?: string;
}
declare function Breadcrumbs({ items, prefix, separator, className, }: BreadcrumbsProps): React.JSX.Element;

interface TacticalDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title?: ReactNode;
    coord?: string;
    sublabel?: string;
    children: ReactNode;
    position?: 'bottom' | 'right';
    className?: string;
}
declare function TacticalDrawer({ isOpen, onClose, title, coord, sublabel, children, position, className, }: TacticalDrawerProps): React.JSX.Element | null;

interface HudToastProps {
    id?: string;
    isOpen: boolean;
    onClose: () => void;
    title: ReactNode;
    description?: ReactNode;
    variant?: 'default' | 'success' | 'alert' | 'purple' | 'teal';
    duration?: number;
    coord?: string;
    className?: string;
}
declare function HudToast({ isOpen, onClose, title, description, variant, duration, coord, className, }: HudToastProps): React.JSX.Element | null;

interface BottomBarItem {
    id: string;
    label: ReactNode;
    icon?: ReactNode;
    badge?: string | number;
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
interface BottomBarProps {
    items: BottomBarItem[];
    activeId?: string;
    onSelect?: (id: string) => void;
    bordered?: boolean;
    blur?: boolean;
    fixed?: boolean;
    className?: string;
    variant?: 'default' | 'alley' | 'teal';
}
declare function BottomBar({ items, activeId, onSelect, bordered, blur, fixed, className, variant, }: BottomBarProps): React.JSX.Element;

export { Badge, type BadgeProps, BottomBar, type BottomBarItem, type BottomBarProps, BracketCard, type BracketCardProps, type BreadcrumbItem, Breadcrumbs, type BreadcrumbsProps, Button, type ButtonProps, CornerFrame, type CornerFrameProps, CyberSwitch, type CyberSwitchProps, type DataSpecItem, Dot, type DotProps, HudModal, type HudModalProps, HudToast, type HudToastProps, Input, type InputProps, KeyValGrid, type KeyValGridProps, Logo, type LogoProps, SegmentedControl, type SegmentedControlProps, type SegmentedOption, SpoilerGate, type SpoilerGateProps, StickyNote, type StickyNoteProps, TacticalDrawer, type TacticalDrawerProps, TechLabel, type TechLabelProps, TelemetryBar, type TelemetryBarProps, TerminalWindow, type TerminalWindowProps, Tooltip, type TooltipProps, Vinyl, type VinylLayout, type VinylProps };
