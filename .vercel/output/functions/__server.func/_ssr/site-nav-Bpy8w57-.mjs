import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useRouterState, L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { X, M as Menu } from "../_libs/lucide-react.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const LOGO_SRC = "/agent-dev-logo.png";
function BrandMark({ className, inverted = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: LOGO_SRC,
      alt: "",
      "aria-hidden": true,
      className: cn("h-7 w-7 shrink-0 object-contain", inverted && "invert", className)
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mx-2 mt-4 pb-8 sm:mx-4 sm:pb-10 lg:mx-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-frame border border-black/6 bg-white/50 px-5 py-10 backdrop-blur-sm sm:px-12 sm:py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 border-b border-black/8 pb-8 sm:gap-10 sm:pb-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-sm font-semibold text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BrandMark, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "agent-dev" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm leading-relaxed text-foreground/60", children: "The terminal coding agent for autonomous development workflows. Open source, scriptable, and built to keep coding fast inside your terminal." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "editorial-label mt-4 text-foreground/45", children: "MIT licensed · built with Ink" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "editorial-label mb-4 text-foreground/45", children: "Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#install", className: "block text-foreground/60 transition-colors hover:text-foreground", children: "install" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#features", className: "block text-foreground/60 transition-colors hover:text-foreground", children: "features" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs", className: "block text-foreground/60 transition-colors hover:text-foreground", children: "docs" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "editorial-label mb-4 text-foreground/45", children: "Community" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://github.com/Devang0907/agent-dev",
              target: "_blank",
              rel: "noreferrer",
              className: "block text-foreground/60 transition-colors hover:text-foreground",
              children: "github"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.npmjs.com/package/@devang0907/agent-dev",
              target: "_blank",
              rel: "noreferrer",
              className: "block text-foreground/60 transition-colors hover:text-foreground",
              children: "npm"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://github.com/Devang0907/agent-dev/issues/new",
              target: "_blank",
              rel: "noreferrer",
              className: "block text-foreground/60 transition-colors hover:text-foreground",
              children: "feedback"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col gap-3 text-xs text-foreground/50 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " agent-dev. Built for terminal-first development."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "editorial-label text-foreground/45", children: "Open source · ship from terminal" })
    ] })
  ] }) });
}
const SCROLL_THRESHOLD = 24;
const MOBILE_LINKS = [
  { type: "link", to: "/docs", label: "docs", activeOnDocs: true },
  { type: "anchor", href: "/#install", label: "install" },
  { type: "anchor", href: "/#features", label: "features" },
  {
    type: "external",
    href: "https://github.com/Devang0907/agent-dev",
    label: "github ↗"
  },
  {
    type: "external",
    href: "https://github.com/Devang0907/agent-dev/issues/new",
    label: "feedback ↗"
  }
];
function NavLinks({ tone }) {
  const isOnDocs = useRouterState({
    select: (state) => state.location.pathname.startsWith("/docs")
  });
  const linkClass = (active) => cn(
    "transition-colors whitespace-nowrap text-[11px] uppercase tracking-[0.08em]",
    tone === "light" ? active ? "font-medium text-foreground" : "hover:opacity-100" : active ? "font-medium text-primary-foreground" : "hover:text-primary-foreground"
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex items-center gap-5 lg:gap-6",
        tone === "light" ? "text-foreground/70" : "text-primary-foreground/70"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs", className: linkClass(isOnDocs), children: "docs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#install", className: linkClass(false), children: "install" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#features", className: linkClass(false), children: "features" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://github.com/Devang0907/agent-dev",
            target: "_blank",
            rel: "noreferrer",
            className: linkClass(false),
            children: "github ↗"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://github.com/Devang0907/agent-dev/issues/new",
            target: "_blank",
            rel: "noreferrer",
            className: linkClass(false),
            children: "feedback ↗"
          }
        )
      ]
    }
  );
}
function TryAgentButton({ tone }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: "https://www.npmjs.com/package/@devang0907/agent-dev",
      target: "_blank",
      rel: "noreferrer",
      className: cn(
        "inline-flex h-9 shrink-0 items-center rounded-full px-3 text-[10px] font-semibold uppercase tracking-[0.08em] transition-transform hover:scale-[1.02] sm:h-10 sm:px-4 sm:text-[11px]",
        tone === "light" ? "border border-foreground/15 bg-white/90 text-foreground backdrop-blur-sm" : "bg-primary-foreground text-primary"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "try it" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "try agent-dev" })
      ]
    }
  );
}
function MobileNavMenu({
  open,
  tone,
  onClose
}) {
  const isOnDocs = useRouterState({
    select: (state) => state.location.pathname.startsWith("/docs")
  });
  if (!open) return null;
  const itemClass = (active) => cn(
    "rounded-lg px-3 py-2.5 text-sm uppercase tracking-[0.08em] transition-colors",
    tone === "light" ? active ? "bg-foreground/8 font-medium text-foreground" : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground" : active ? "bg-primary-foreground/12 font-medium text-primary-foreground" : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      className: cn(
        "absolute inset-x-0 top-[calc(100%+0.5rem)] flex flex-col gap-0.5 rounded-2xl border p-2 shadow-lg backdrop-blur-md lg:hidden",
        tone === "light" ? "border-black/8 bg-white/95 text-foreground" : "border-white/10 bg-primary text-primary-foreground"
      ),
      children: MOBILE_LINKS.map((link) => {
        const active = link.type === "link" && link.activeOnDocs && isOnDocs;
        if (link.type === "link") {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: link.to, onClick: onClose, className: itemClass(active), children: link.label }, link.label);
        }
        if (link.type === "anchor") {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: link.href, onClick: onClose, className: itemClass(false), children: link.label }, link.label);
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: link.href,
            target: "_blank",
            rel: "noreferrer",
            onClick: onClose,
            className: itemClass(false),
            children: link.label
          },
          link.label
        );
      })
    }
  );
}
function NavBar({ tone, invertedLogo = false }) {
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  reactExports.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);
  reactExports.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "flex h-14 items-center justify-between gap-2 sm:h-[68px]",
          tone === "light" ? "rounded-full border border-white/60 bg-white/90 px-3 text-foreground backdrop-blur-md sm:px-5" : "rounded-full border border-white/5 bg-primary px-3 text-primary-foreground sm:px-5",
          tone === "light" && "editorial-shadow",
          tone === "dark" && "editorial-shadow"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: "flex min-w-0 items-center gap-2 text-sm font-semibold tracking-tight",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BrandMark, { inverted: invertedLogo }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: "agent-dev" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden shrink-0 lg:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLinks, { tone }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-1.5 sm:gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TryAgentButton, { tone }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setMobileOpen((value) => !value),
                "aria-expanded": mobileOpen,
                "aria-label": mobileOpen ? "Close menu" : "Open menu",
                className: cn(
                  "inline-flex h-9 w-9 items-center justify-center rounded-full border lg:hidden",
                  tone === "light" ? "border-border text-foreground" : "border-primary-foreground/20 text-primary-foreground"
                ),
                children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileNavMenu, { open: mobileOpen, tone, onClose: () => setMobileOpen(false) })
  ] });
}
function SiteNav({ variant = "default" }) {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const isOnDocs = useRouterState({
    select: (state) => state.location.pathname.startsWith("/docs")
  });
  const isLanding = variant === "landing";
  const isCompact = scrolled || !isLanding;
  const showHeroNav = isLanding && !scrolled && !isOnDocs;
  const showLightCompactNav = isOnDocs;
  reactExports.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: cn(
        "fixed inset-x-0 z-40 transition-[top] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isCompact ? "top-3 sm:top-6" : "top-0"
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isCompact ? "editorial-shell px-3 sm:px-0" : "w-full px-3 sm:px-6 lg:px-10"
          ),
          children: showHeroNav ? /* @__PURE__ */ jsxRuntimeExports.jsx(HeroNavBar, {}) : showLightCompactNav ? /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, { tone: "light" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, { tone: "dark", invertedLogo: true })
        }
      )
    }
  );
}
function HeroNavBar() {
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  reactExports.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);
  reactExports.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-14 items-center justify-between sm:h-[72px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/",
        className: "flex min-w-0 items-center gap-2 text-sm font-semibold tracking-tight text-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BrandMark, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: "agent-dev" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "editorial-shadow absolute left-1/2 hidden -translate-x-1/2 rounded-full border border-white/60 bg-white/90 px-6 py-2.5 backdrop-blur-md lg:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLinks, { tone: "light" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-1.5 sm:gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TryAgentButton, { tone: "light" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setMobileOpen((value) => !value),
          "aria-expanded": mobileOpen,
          "aria-label": mobileOpen ? "Close menu" : "Open menu",
          className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground lg:hidden",
          children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileNavMenu, { open: mobileOpen, tone: "light", onClose: () => setMobileOpen(false) })
  ] });
}
export {
  SiteNav as S,
  SiteFooter as a,
  cn as c
};
