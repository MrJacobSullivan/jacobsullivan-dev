/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/api/resume',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
