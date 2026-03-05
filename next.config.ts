import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  // output: 'export', // static export disabled so API routes can run
  // allow build to succeed even if generated types have issues
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
