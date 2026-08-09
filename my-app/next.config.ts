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
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/customer/contact",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/services.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/customer/services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/company.html",
        destination: "/company",
        permanent: true,
      },
      {
        source: "/customer/company",
        destination: "/company",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/customer/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  

};

export default nextConfig;
