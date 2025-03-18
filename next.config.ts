import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['api.ts'],
  images: {
    domains: [
      'app.econverse.com.br',
      'github.com',
      'vercel.com',
      '*.vercel.app',
      '*-paulocesarrodrigues-projects.vercel.app',
      'econverse-git-main-paulocesarrodrigues-projects.vercel.app',
      'econverse-caxldy142-paulocesarrodrigues-projects.vercel.app',
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
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

export default nextConfig
