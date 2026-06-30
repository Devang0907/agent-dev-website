import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-CY27m-YS.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const siteConfig = {
  name: "agent-dev",
  title: "agent-dev — a minimal terminal coding agent",
  tagline: "Autopilot for your terminal workflow",
  description: "A minimal terminal coding agent with an Ink TUI. Read and edit code, use MCP servers, load skills, chat via Telegram, and optionally delegate through a boss orchestrator.",
  author: "Devang0907",
  locale: "en_US",
  themeColor: "#f3f2ee",
  twitterCard: "summary_large_image",
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
    "open source"
  ]
};
function getSiteUrl() {
  if (typeof window !== "undefined") return window.location.origin;
  return "https://agent-dev.dev";
}
function absoluteUrl(path) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}
function buildSeoHead({
  title = siteConfig.title,
  description = siteConfig.description,
  path = "/",
  ogImage = siteConfig.ogImage,
  ogType = "website",
  noIndex = false
} = {}) {
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
        content: noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large"
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
      { name: "twitter:image:alt", content: imageAlt }
    ],
    links: [{ rel: "canonical", href: canonical }]
  };
}
function jsonLdScript(data) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data)
  };
}
function organizationJsonLd() {
  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: getSiteUrl(),
    logo: absoluteUrl("/agent-dev-logo.png"),
    sameAs: [siteConfig.githubUrl, siteConfig.npmUrl]
  });
}
function webSiteJsonLd() {
  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: getSiteUrl(),
    description: siteConfig.description
  });
}
function softwareApplicationJsonLd() {
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
      priceCurrency: "USD"
    },
    author: {
      "@type": "Organization",
      name: siteConfig.author,
      url: siteConfig.githubUrl
    }
  });
}
function documentationPageJsonLd() {
  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "agent-dev documentation",
    description: "How to install, configure, and use agent-dev.",
    url: absoluteUrl("/docs"),
    author: {
      "@type": "Organization",
      name: siteConfig.author,
      url: siteConfig.githubUrl
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/agent-dev-logo.png")
      }
    }
  });
}
const sitemapEntries = [
  { path: "/", changefreq: "weekly", priority: 1 },
  { path: "/docs", changefreq: "weekly", priority: 0.8 }
];
function buildSitemapXml(entries = sitemapEntries) {
  const lastmod = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const urls = entries.map(
    (entry) => `  <url>
    <loc>${absoluteUrl(entry.path)}</loc>
    <lastmod>${entry.lastmod ?? lastmod}</lastmod>
    <changefreq>${entry.changefreq ?? "weekly"}</changefreq>
    <priority>${entry.priority ?? 0.5}</priority>
  </url>`
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}
function buildRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${absoluteUrl("/sitemap.xml")}
`;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => {
    const seo = buildSeoHead();
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        ...seo.meta
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600&display=swap"
        },
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        ...seo.links
      ],
      scripts: [organizationJsonLd(), webSiteJsonLd()]
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  reactExports.useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const Route$3 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => new Response(buildSitemapXml(), {
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Cache-Control": "public, max-age=3600"
        }
      })
    }
  }
});
const Route$2 = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => new Response(buildRobotsTxt(), {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=3600"
        }
      })
    }
  }
});
const $$splitComponentImporter$1 = () => import("./index-BcBGGp9-.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    ...buildSeoHead({
      title: siteConfig.title,
      description: siteConfig.description,
      path: "/"
    }),
    scripts: [softwareApplicationJsonLd()]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CZr_uH9y.mjs");
const Route = createFileRoute("/docs/")({
  head: () => ({
    ...buildSeoHead({
      title: "Documentation — agent-dev",
      description: "Install, configure, and use agent-dev. Terminal coding agent with Ink TUI, MCP, skills, Telegram gateway, and boss orchestrator.",
      path: "/docs"
    }),
    scripts: [documentationPageJsonLd()]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$3.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$4
});
const RobotsDottxtRoute = Route$2.update({
  id: "/robots.txt",
  path: "/robots.txt",
  getParentRoute: () => Route$4
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const DocsIndexRoute = Route.update({
  id: "/docs/",
  path: "/docs/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  RobotsDottxtRoute,
  SitemapDotxmlRoute,
  DocsIndexRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
