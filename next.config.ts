import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  images: {
    domains: [
      'app.econverse.com.br',
      'github.com',
      'vercel.com',
      '*.vercel.app',
      '*-paulocesarrodrigues-projects.vercel.app',
    ],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
    }
    return config
  },
}

export default nextConfig
