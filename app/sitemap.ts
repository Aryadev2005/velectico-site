import type { MetadataRoute } from "next";
import { site, products, builds } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "/", "/agencies/", "/products/", "/work/", "/about/", "/contact/",
    ...products.map((p) => `/products/${p.slug}/`),
    ...builds.map((b) => `/work/${b.slug}/`),
  ];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: now, changeFrequency: "monthly", priority: p === "/" ? 1 : 0.7 }));
}
