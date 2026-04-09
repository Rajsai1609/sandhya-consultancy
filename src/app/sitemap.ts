import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllServices, getAllJobs } from "@/lib/data";

const base = siteConfig.url;

const STATIC_ROUTES: MetadataRoute.Sitemap = [
  { url: base, priority: 1.0, changeFrequency: "weekly" },
  { url: `${base}/services`, priority: 0.9, changeFrequency: "weekly" },
  { url: `${base}/industries`, priority: 0.8, changeFrequency: "monthly" },
  { url: `${base}/staffing`, priority: 0.8, changeFrequency: "monthly" },
  { url: `${base}/products`, priority: 0.8, changeFrequency: "monthly" },
  { url: `${base}/academy`, priority: 0.8, changeFrequency: "monthly" },
  { url: `${base}/careers`, priority: 0.9, changeFrequency: "daily" },
  { url: `${base}/about`, priority: 0.7, changeFrequency: "monthly" },
  { url: `${base}/contact`, priority: 0.7, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let services: Awaited<ReturnType<typeof getAllServices>> = [];
  let jobs: Awaited<ReturnType<typeof getAllJobs>> = [];
  try {
    [services, jobs] = await Promise.all([getAllServices(), getAllJobs("open")]);
  } catch {
    // DB unavailable during build — return static routes only
  }

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: s.updatedAt,
  }));

  const jobRoutes: MetadataRoute.Sitemap = jobs.map((j) => ({
    url: `${base}/careers/${j.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
    lastModified: j.updatedAt,
  }));

  return [...STATIC_ROUTES, ...serviceRoutes, ...jobRoutes];
}
