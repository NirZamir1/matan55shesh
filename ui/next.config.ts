import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3001/:path*", // Nest.js server
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
