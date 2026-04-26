/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath only on GitHub Actions so local dev stays at /
  basePath: process.env.GITHUB_ACTIONS ? '/naturaobe' : '',
  images: {
    unoptimized: true, // required for static export
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

module.exports = nextConfig
