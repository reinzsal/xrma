/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: '/0/:path*',
        destination: '/:path*',
      },
    ];
  },
};
