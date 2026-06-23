import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "▮" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "agent-dev — MIT — built with Ink" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://github.com/Devang0907/agent-dev",
          target: "_blank",
          rel: "noreferrer",
          className: "hover:text-foreground",
          children: "github"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://www.npmjs.com/package/@devang0907/agent-dev",
          target: "_blank",
          rel: "noreferrer",
          className: "hover:text-foreground",
          children: "npm"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#install", className: "hover:text-foreground", children: "install" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs", className: "hover:text-foreground", children: "docs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://github.com/Devang0907/agent-dev/issues/new",
          target: "_blank",
          rel: "noreferrer",
          className: "hover:text-foreground",
          children: "feedback"
        }
      )
    ] })
  ] }) });
}
function ThemeToggle() {
  const [dark, setDark] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle theme",
      title: dark ? "Switch to light" : "Switch to dark",
      className: "inline-flex h-8 w-8 items-center justify-center rounded-sm border border-border text-sm transition-colors hover:bg-secondary",
      children: dark ? "☀" : "☾"
    }
  );
}
function SiteNav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-30 border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 text-sm font-bold tracking-tight", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "▮" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "agent-dev" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-5 text-xs text-muted-foreground lg:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs", className: "hover:text-foreground", children: "docs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#install", className: "hover:text-foreground", children: "install" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#modes", className: "hover:text-foreground", children: "modes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#tools", className: "hover:text-foreground", children: "tools" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#providers", className: "hover:text-foreground", children: "providers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#telegram", className: "hover:text-foreground", children: "telegram" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#browser", className: "hover:text-foreground", children: "browser" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#commands", className: "hover:text-foreground", children: "commands" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#skills", className: "hover:text-foreground", children: "skills" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://github.com/Devang0907/agent-dev",
          target: "_blank",
          rel: "noreferrer",
          className: "hover:text-foreground",
          children: "github ↗"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://github.com/Devang0907/agent-dev/issues/new",
          target: "_blank",
          rel: "noreferrer",
          className: "hover:text-foreground",
          children: "feedback ↗"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://github.com/Devang0907/agent-dev/issues/new",
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex h-8 items-center justify-center rounded-sm border border-border px-2.5 text-xs transition-colors hover:bg-secondary lg:hidden",
          children: "feedback"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://www.npmjs.com/package/@devang0907/agent-dev",
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex items-center gap-1.5 rounded-sm bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:opacity-90",
          children: "$ install"
        }
      )
    ] })
  ] }) });
}
export {
  SiteNav as S,
  SiteFooter as a
};
