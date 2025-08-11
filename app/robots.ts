import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/profil", "/artikel", "/kebudayaan"],
    },
    sitemap: "https://www.padukuhangebang.com/sitemap.xml",
  };
}
