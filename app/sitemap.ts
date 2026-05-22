import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/mission",
  "/problem",
  "/why-blockers-fail",
  "/approach",
  "/recovery",
  "/for-individuals",
  "/for-parents",
  "/for-churches",
  "/accountability",
  "/technical-vision",
  "/pilot",
  "/support",
  "/privacy",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
