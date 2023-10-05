/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/',
      },
    ]
  },
}

module.exports = nextConfig
