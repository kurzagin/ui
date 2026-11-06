import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'kurzagin/ui — Cyber-Minimalist UI System',
  description: 'Technical, dark-themed UI components for modern web apps.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="kz-dot-grid">
        {children}
      </body>
    </html>
  );
}
