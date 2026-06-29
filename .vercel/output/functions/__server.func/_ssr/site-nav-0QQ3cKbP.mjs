import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useRouterState, L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mx-3 mt-4 pb-10 sm:mx-4 lg:mx-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-frame border border-black/6 bg-white/50 px-8 py-12 backdrop-blur-sm sm:px-12 sm:py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 border-b border-black/8 pb-10 md:grid-cols-4", children: [
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
function NavLinks({ tone }) {
  const isOnDocs = useRouterState({
    select: (state) => state.location.pathname.startsWith("/docs")
  });
  const linkClass = (active) => cn(
    "transition-colors",
    tone === "light" ? active ? "font-medium text-foreground" : "hover:opacity-100" : active ? "font-medium text-primary-foreground" : "hover:text-primary-foreground"
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
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
        isCompact ? "top-6" : "top-0"
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isCompact ? "editorial-shell" : "w-full px-4 sm:px-6 lg:px-10"
          ),
          children: showHeroNav ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-[72px] items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/",
                className: "flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BrandMark, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "agent-dev" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "editorial-shadow absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 rounded-full border border-white/60 bg-white/90 px-6 py-2.5 text-[11px] uppercase tracking-[0.08em] text-foreground/70 backdrop-blur-md lg:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLinks, { tone: "light" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://github.com/Devang0907/agent-dev/issues/new",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "inline-flex h-9 items-center justify-center rounded-full border border-border px-3 text-[11px] uppercase tracking-[0.08em] text-foreground/80 transition-colors hover:bg-secondary lg:hidden",
                  children: "feedback"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://www.npmjs.com/package/@devang0907/agent-dev",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "inline-flex h-10 items-center rounded-full border border-foreground/15 bg-white/90 px-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground backdrop-blur-sm transition-transform hover:scale-[1.02]",
                  children: "try agent-dev"
                }
              )
            ] })
          ] }) : showLightCompactNav ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editorial-shadow flex h-[68px] items-center justify-between rounded-full border border-white/60 bg-white/90 px-5 text-foreground backdrop-blur-md sm:px-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/",
                className: "flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BrandMark, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "agent-dev" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-6 text-[11px] uppercase tracking-[0.08em] text-foreground/70 lg:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLinks, { tone: "light" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://github.com/Devang0907/agent-dev/issues/new",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "inline-flex h-9 items-center justify-center rounded-full border border-border px-3 text-[11px] uppercase tracking-[0.08em] text-foreground/80 transition-colors hover:bg-secondary lg:hidden",
                  children: "feedback"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://www.npmjs.com/package/@devang0907/agent-dev",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "inline-flex h-10 items-center rounded-full border border-foreground/15 bg-white/90 px-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground backdrop-blur-sm transition-transform hover:scale-[1.02]",
                  children: "try agent-dev"
                }
              )
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "flex h-[68px] items-center justify-between border border-white/5 bg-primary text-primary-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isCompact ? "editorial-shadow rounded-full px-5 sm:px-8" : "rounded-none border-x-0 border-t-0 px-6 shadow-none sm:px-10 lg:px-16"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 text-sm font-semibold tracking-tight", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BrandMark, { inverted: true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "agent-dev" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-6 text-[11px] uppercase tracking-[0.08em] text-primary-foreground/70 lg:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLinks, { tone: "dark" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "https://github.com/Devang0907/agent-dev/issues/new",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex h-9 items-center justify-center rounded-md border border-primary-foreground/20 px-3 text-[11px] uppercase tracking-[0.08em] text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground lg:hidden",
                      children: "feedback"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "https://www.npmjs.com/package/@devang0907/agent-dev",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex h-10 items-center gap-1.5 rounded-full bg-primary-foreground px-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary transition-transform hover:scale-[1.02]",
                      children: "try agent-dev"
                    }
                  )
                ] })
              ]
            }
          )
        }
      )
    }
  );
}
export {
  SiteNav as S,
  SiteFooter as a,
  cn as c
};
