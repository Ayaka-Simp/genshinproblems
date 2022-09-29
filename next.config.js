/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["c.tenor.com", "i.redd.it", "preview.redd.it"],
  },
};

module.exports = nextConfig;
