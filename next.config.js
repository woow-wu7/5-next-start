/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    TEST_ENV: 'env'
  },
};

module.exports = nextConfig;
