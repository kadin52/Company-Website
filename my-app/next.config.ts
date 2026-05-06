import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    qualities: [25, 50, 75,100],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/customer/home"
      }
    ]
  }
};

export default nextConfig;
