import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    qualities: [25, 50, 75,100],
  },
   async redirects() {
    return [
      {
        source: "/contact.html",
        destination: "/customer/contact",
        permanent: true,
      },
      {
        source: "/services.html",
        destination: "/customer/services",
        permanent: true,
      },
      {
        source: "/company.html",
        destination: "/customer/company",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
    ];
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
