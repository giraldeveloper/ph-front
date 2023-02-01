/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_ROUTE: 'http://ec2-54-88-139-68.compute-1.amazonaws.com/v1'
  }
};

module.exports = nextConfig;
