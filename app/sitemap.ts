import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.padukuhangebang.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.padukuhangebang.com/profil",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.padukuhangebang.com/umkm",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.01,
    },
    {
      url: "https://www.padukuhangebang.com/umkms",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.01,
    },
    {
      url: "https://www.padukuhangebang.com/destinations",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.01,
    },
    {
      url: "https://www.padukuhangebang.com/booklet",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.01,
    },
    {
      url: "https://www.padukuhangebang.com/kebudayaan",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.05,
    },
    {
      url: "https://www.padukuhangebang.com/galeri",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.05,
    },
    {
      url: "https://www.padukuhangebang.com/events",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.05,
    },
    {
      url: "https://www.padukuhangebang.com/artikel",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.3,
    },
  ];
}
