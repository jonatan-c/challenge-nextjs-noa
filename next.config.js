/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "raw.githubusercontent.com",
      "images.unsplash.com",
      "images.pexels.com",
      "*",
    ],
  },
};

module.exports = nextConfig;
