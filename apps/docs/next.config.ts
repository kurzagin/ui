import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@krpkg/ui'],
  turbopack: {
    root: path.resolve(__dirname, '../..'),
  },
};

export default nextConfig;
