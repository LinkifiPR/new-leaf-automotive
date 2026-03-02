import type { MetadataRoute } from "next";

import { servicePages } from "@/data/services";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://new-leaf-auto.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = ["", "/about", "/services"];
  const serviceRoutes = servicePages.map((service) => `/services/${service.slug}`);

  return [...baseRoutes, ...serviceRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.8 : 0.9
  }));
}
