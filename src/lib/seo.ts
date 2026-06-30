export const siteConfig = {
  name: "agent-dev",
  title: "agent-dev — a minimal terminal coding agent",
  tagline: "Autopilot for your terminal workflow",
  description:
    "A minimal terminal coding agent with an Ink TUI. Read and edit code, use MCP servers, load skills, chat via Telegram, and optionally delegate through a boss orchestrator.",
  shortDescription:
    "Chat with an AI in your terminal. Build, plan, or boss it — with MCP, skills, browser automation, and Telegram.",
  author: "Devang0907",
  locale: "en_US",
  themeColor: "#f3f2ee",
  twitterCard: "summary_large_image" as const,
  ogImage: "/hero-nature.jpg",
  githubUrl: "https://github.com/Devang0907/agent-dev",
  npmUrl: "https://www.npmjs.com/package/@devang0907/agent-dev",
  keywords: [
    "terminal coding agent",
    "AI developer tools",
    "Ink TUI",
    "MCP",
    "agent skills",
    "Telegram bot",
    "boss orchestrator",
    "browser automation",
    "open source",
  ],
};

/** Public site origin, e.g. https://agent-dev.dev — set VITE_SITE_URL in production. */
export function getSiteUrl(): string {
  const configured = import.meta.env.VITE_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");
  if (typeof window !== "undefined") return window.location.origin;
  return "https://agent-dev.dev";
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}

export type SeoOptions = {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
};

export function buildSeoHead({
  title = siteConfig.title,
  description = siteConfig.description,
  path = "/",
  ogImage = siteConfig.ogImage,
  ogType = "website",
  noIndex = false,
}: SeoOptions = {}) {
  const canonical = absoluteUrl(path);
  const image = absoluteUrl(ogImage);
  const imageAlt = `${siteConfig.name} — ${siteConfig.tagline}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: siteConfig.keywords.join(", ") },
      { name: "author", content: siteConfig.author },
      {
        name: "robots",
        content: noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
      },
      { name: "theme-color", content: siteConfig.themeColor },
      { property: "og:site_name", content: siteConfig.name },
      { property: "og:locale", content: siteConfig.locale },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: canonical },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: siteConfig.twitterCard },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: imageAlt },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

export function jsonLdScript(data: Record<string, unknown>) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}

export function organizationJsonLd() {
  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: getSiteUrl(),
    logo: absoluteUrl("/agent-dev-logo.png"),
    sameAs: [siteConfig.githubUrl, siteConfig.npmUrl],
  });
}

export function webSiteJsonLd() {
  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: getSiteUrl(),
    description: siteConfig.description,
  });
}

export function softwareApplicationJsonLd() {
  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Linux, Windows",
    description: siteConfig.description,
    url: getSiteUrl(),
    downloadUrl: siteConfig.npmUrl,
    softwareHelp: absoluteUrl("/docs"),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: siteConfig.author,
      url: siteConfig.githubUrl,
    },
  });
}

export function documentationPageJsonLd() {
  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "agent-dev documentation",
    description: "How to install, configure, and use agent-dev.",
    url: absoluteUrl("/docs"),
    author: {
      "@type": "Organization",
      name: siteConfig.author,
      url: siteConfig.githubUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/agent-dev-logo.png"),
      },
    },
  });
}

export type SitemapEntry = {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
  lastmod?: string;
};

export const sitemapEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/docs", changefreq: "weekly", priority: 0.8 },
];

export function buildSitemapXml(entries: SitemapEntry[] = sitemapEntries): string {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${absoluteUrl(entry.path)}</loc>
    <lastmod>${entry.lastmod ?? lastmod}</lastmod>
    <changefreq>${entry.changefreq ?? "weekly"}</changefreq>
    <priority>${entry.priority ?? 0.5}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function buildRobotsTxt(): string {
  return `User-agent: *
Allow: /

Sitemap: ${absoluteUrl("/sitemap.xml")}
`;
}
