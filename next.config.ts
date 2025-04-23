import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.geeksforgeeks.org',
        port: '',
        pathname: '/wp-content/uploads/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
        search: '',
      },

    ],
  },
  reactStrictMode: true,
};


    

export default nextConfig;
