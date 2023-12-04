/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/articles",
  //       destination: "/",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
