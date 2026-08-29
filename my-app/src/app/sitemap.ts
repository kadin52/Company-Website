import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lotsplumbing.com";

  return [
    {
      url: `${baseUrl}/`,
    },
    {
      url: `${baseUrl}/services`,
    },
    {
      url: `${baseUrl}/company`,
    },
    {
      url: `${baseUrl}/contact`,
    },
  ];
}