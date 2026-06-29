import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteNav, a as SiteFooter } from "./site-nav-B8kotMET.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/lucide-react.mjs";
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#f3f2ee] text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, { variant: "landing" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureSpotlight, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-2 space-y-2 sm:mx-4 sm:space-y-4 lg:mx-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Install, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-2 mt-2 sm:mx-4 sm:mt-3 lg:mx-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-frame editorial-shadow relative min-h-[calc(100svh-0.5rem)] overflow-hidden sm:min-h-[calc(100svh-0.75rem)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/new%20bg.png", alt: "", className: "absolute inset-0 h-full w-full object-cover object-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-b from-white/25 via-transparent to-black/5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex min-h-[calc(100svh-0.5rem)] flex-col items-center justify-center px-4 pb-14 pt-20 text-center sm:min-h-[calc(100svh-0.75rem)] sm:px-10 sm:pb-20 sm:pt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "nature-hero-title max-w-3xl px-1 text-foreground", children: [
        "Autopilot for your terminal workflow.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Scale effortlessly." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-5 max-w-xl px-1 text-sm leading-relaxed text-foreground/65 sm:mt-6 sm:text-base lg:text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "agent-dev" }),
        " reads and edits code, runs shell commands with approval, and delegates complex tasks through boss orchestration."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 px-2 sm:mt-9 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:px-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CopyCmd, { cmd: "npm i -g @devang0907/agent-dev", variant: "hero" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/Devang0907/agent-dev", target: "_blank", rel: "noreferrer", className: "inline-flex h-11 w-full items-center justify-center rounded-full border border-foreground/15 bg-white/60 px-5 text-xs font-medium uppercase tracking-[0.06em] text-foreground backdrop-blur-sm transition-colors hover:bg-white sm:w-auto", children: "view on github ↗" })
      ] })
    ] })
  ] }) });
}
const SHOWCASE_TABS = [{
  id: "boss",
  label: "Boss mode",
  subtitle: "Smart delegation",
  title: "Boss mode",
  body: "Delegate exploration, implementation, and shell work to specialized workers while the boss orchestrator keeps context and approvals in one place.",
  cta: "Read boss docs",
  href: "/docs#agent-modes"
}, {
  id: "tools",
  label: "Built-in tools",
  subtitle: "20 terminal tools",
  title: "Built-in tools",
  body: "Read, edit, grep, git, bash, browser, MCP, and skills — with approval gates before anything destructive runs in your repo.",
  cta: "Explore tools",
  href: "/docs#tools"
}, {
  id: "telegram",
  label: "Telegram",
  subtitle: "Chat from anywhere",
  title: "Telegram gateway",
  body: "Approve commands from your phone, schedule daily tasks, and keep long-running agent sessions reachable outside the terminal.",
  cta: "Setup Telegram",
  href: "/docs#telegram-gateway"
}, {
  id: "mcp",
  label: "MCP & skills",
  subtitle: "Extend the agent",
  title: "MCP & skills",
  body: "Connect MCP servers and load Vercel Agent Skills so agent-dev can reach filesystems, APIs, and custom workflows in your stack.",
  cta: "View integrations",
  href: "/docs#skills"
}];
const TERMINAL_DEMOS = {
  boss: {
    badge: "BOSS · Build",
    badgeClass: "text-purple-400",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "$ " }),
      "agent --boss",
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "◆" }),
      " agent",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "free/llama-3.3-70b · BOSS" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "›" }),
      " refactor auth module and run tests",
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-400", children: "boss" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "delegate → explore worker" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "grep" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "auth middleware patterns" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-400", children: "boss" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "delegate → implement worker" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "edit" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "src/auth.ts" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "(+24 -11)" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-400", children: "boss" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "delegate → shell worker" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "bash" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "npm test" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ 42 passed" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: "Auth refactor complete. Trace: " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: "/trace" })
    ] })
  },
  tools: {
    badge: "Build · 20 tools",
    badgeClass: "text-sky-400",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "$ " }),
      "agent",
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "◆" }),
      " agent",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "claude-sonnet-4 · Build" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "›" }),
      " audit API routes and fix type errors",
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "grep" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: '"any" src/api/**/*.ts' }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "read" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "src/api/users.ts" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "edit" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "src/api/users.ts" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "(+12 -4)" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "git" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "diff --stat" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: "approve?" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "bash npm run typecheck" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ approved" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "bash" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "npm run typecheck" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ 0 errors" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: "Fixed 3 files. Ready to commit." })
    ] })
  },
  telegram: {
    badge: "Telegram · Build",
    badgeClass: "text-blue-400",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "$ " }),
      "agent --telegram",
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "◆" }),
      " agent",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "gateway listening · Build" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "telegram" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "@you: run tests then deploy staging" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "bash" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "npm test" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ 42 passed" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: "approve?" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "bash npm run deploy:staging" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "telegram" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "inline ✅ approved from phone" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "bash" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "npm run deploy:staging" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ deployed staging.agent.dev" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "telegram" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "agent: staging is live 🚀" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "daily task scheduled · 09:00 UTC" })
    ] })
  },
  mcp: {
    badge: "Build · MCP",
    badgeClass: "text-emerald-400",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "$ " }),
      "agent",
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "◆" }),
      " agent",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "gpt-4.1 · Build" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "›" }),
      " check deploy status and load project skills",
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "mcp" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "vercel → list_deployments" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "skill" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "vercel-agent-skills/deploy" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "read" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: ".vercel/project.json" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "mcp" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "filesystem → read AGENTS.md" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "skill" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "cursor-rules → inject rules" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ 2 MCP servers · 4 skills loaded" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: "Production " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "READY" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: " · agent-dev-a3f91c" })
    ] })
  }
};
const PROVIDERS = [{
  name: "OpenAI",
  logo: "/logos/openai.svg",
  color: "#10A37F"
}, {
  name: "Anthropic",
  logo: "/logos/anthropic.svg",
  color: "#CC785C"
}, {
  name: "Google Gemini",
  logo: "/logos/google-gemini.svg",
  color: "#8E75B2"
}, {
  name: "Meta Llama",
  logo: "/logos/meta.svg",
  color: "#0467DF"
}, {
  name: "DeepSeek",
  logo: "/logos/deepseek.svg",
  color: "#4D6BFE"
}];
function LogoTicker() {
  const items = [...PROVIDERS, ...PROVIDERS];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-8 overflow-hidden sm:mb-10", "aria-label": "Supported AI providers", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-[#f3f2ee] to-transparent sm:w-16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-[#f3f2ee] to-transparent sm:w-16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo-ticker-track gap-10 sm:gap-14", children: items.map((provider, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: provider.logo, alt: "", className: "h-7 w-7 object-contain sm:h-8 sm:w-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold tracking-[0.02em] sm:text-base", style: {
        color: provider.color
      }, children: provider.name })
    ] }, `${provider.name}-${i}`)) })
  ] });
}
function FeatureSpotlight() {
  const [active, setActive] = reactExports.useState("boss");
  const tab = SHOWCASE_TABS.find((t) => t.id === active) ?? SHOWCASE_TABS[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-2 pt-8 pb-6 sm:mx-4 sm:pt-14 sm:pb-8 lg:mx-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ref-section-title mb-5 px-2 text-center text-foreground sm:mb-8 sm:px-0", children: "Empowering autonomous development with" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LogoTicker, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-frame ref-sky-bg editorial-shadow overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-black/8 px-3 pt-4 sm:px-8 sm:pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scrollbar-none -mx-1 flex gap-5 overflow-x-auto px-1 pb-0 sm:mx-0 sm:gap-10 sm:px-0", children: SHOWCASE_TABS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setActive(item.id), className: `shrink-0 border-b-2 pb-4 text-left transition-colors ${active === item.id ? "border-foreground text-foreground" : "border-transparent text-foreground/45 hover:text-foreground/70"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-medium", children: item.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 block text-[11px] text-foreground/50", children: item.subtitle })
      ] }, item.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 p-4 sm:gap-8 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ref-section-title text-foreground", children: tab.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm leading-relaxed text-foreground/65 sm:mt-5 sm:text-base", children: tab.body }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: tab.href, className: "mt-6 inline-flex w-full items-center justify-center rounded-lg bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-90 sm:mt-8 sm:w-fit", children: tab.cta })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[300px] overflow-hidden rounded-2xl sm:min-h-[380px] sm:rounded-[20px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/new%20bg%202.png", alt: "", className: "absolute inset-0 h-full w-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-sky-200/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-2 bottom-2 sm:inset-x-4 sm:bottom-4 md:inset-x-6 md:bottom-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-white/92 p-1.5 shadow-lg backdrop-blur-md sm:rounded-2xl sm:p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalDemo, { compact: true, variant: active }) }) })
        ] })
      ] })
    ] })
  ] });
}
function CopyCmd({
  cmd,
  variant = "default"
}) {
  const [copied, setCopied] = reactExports.useState(false);
  const isHero = variant === "hero";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }, className: isHero ? "group inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-6 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-90 sm:w-auto" : "group inline-flex h-11 max-w-full items-center gap-2 overflow-x-auto rounded-full bg-foreground px-4 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-transform hover:scale-[1.02] sm:gap-3 sm:px-5", children: isHero ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copied ? "Copied ✓" : "Get started" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cmd }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[10px] text-background/60 group-hover:text-background", children: copied ? "copied ✓" : "copy" })
  ] }) });
}
function TerminalDemo({
  compact = false,
  variant = "boss"
}) {
  const demo = TERMINAL_DEMOS[variant];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col overflow-hidden bg-terminal text-terminal-foreground ${compact ? "h-[280px] rounded-lg sm:h-[330px] sm:rounded-xl" : "rounded-[18px] sm:rounded-[20px]"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-8 shrink-0 items-center justify-between gap-2 border-b border-white/10 px-2.5 sm:h-9 sm:px-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-red-400/80 sm:h-2.5 sm:w-2.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-yellow-400/80 sm:h-2.5 sm:w-2.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-green-400/80 sm:h-2.5 sm:w-2.5" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden min-w-0 truncate text-[9px] text-white/40 sm:inline sm:text-[10px]", children: "~/projects/app — agent-dev" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `shrink-0 text-[9px] sm:text-[10px] ${demo.badgeClass}`, children: demo.badge })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: `terminal-mono overflow-x-auto overflow-y-hidden ${compact ? "h-[248px] px-3 py-3 text-[9px] leading-relaxed sm:h-[294px] sm:px-4 sm:py-4 sm:text-[10px]" : "overflow-x-auto px-6 py-6 text-[12px] leading-relaxed"}`, children: [
      demo.children,
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "›" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink" })
    ] })
  ] });
}
function Install() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingSection, { id: "install", title: "Quick start", subtitle: "Install from npm or clone the repo. Set one API key and you're ready to ship from the terminal.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-frame ref-sky-bg editorial-shadow overflow-hidden p-4 sm:p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalCodeBlock, { title: "from source", lines: ["$ git clone https://github.com/Devang0907/agent-dev.git", "$ cd agent-dev && npm install", "$ npm run dev"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalCodeBlock, { title: "global install", lines: ["$ npm i -g @devang0907/agent-dev", "$ agent"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 overflow-hidden rounded-2xl bg-terminal text-terminal-foreground shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-white/10 px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.08em] text-white/40", children: "API keys · Node.js 20+" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "terminal-mono overflow-x-auto px-5 py-5 text-xs leading-relaxed text-white/75", children: `export OPENROUTER_API_KEY=sk-or-...   # free models (default)
export OPENAI_API_KEY=sk-...          # ChatGPT
export ANTHROPIC_API_KEY=sk-ant-...   # Claude
export GROQ_API_KEY=gsk_...           # Groq
export GEMINI_API_KEY=...             # Google Gemini` })
    ] })
  ] }) });
}
const FEATURES = [{
  title: "Build · Plan · Boss",
  desc: "Switch between full tool access, read-only exploration, or a boss orchestrator that delegates to specialized workers.",
  href: "/docs#agent-modes"
}, {
  title: "20 built-in tools",
  desc: "Read, edit, grep, git, bash, browser, MCP, skills, and more — with approval gates for destructive actions.",
  href: "/docs#tools"
}, {
  title: "Bring your own model",
  desc: "OpenRouter free tier, Claude, GPT, Groq, or Gemini. Switch models with /model or --model.",
  href: "/docs#providers"
}, {
  title: "Telegram gateway",
  desc: "Chat from your phone with long-polling, inline approvals, reminders, and daily scheduled tasks.",
  href: "/docs#telegram-gateway"
}, {
  title: "Skills & MCP",
  desc: "Load Vercel Agent Skills and connect MCP servers for filesystem, APIs, and custom tools.",
  href: "/docs#skills"
}, {
  title: "Compaction & rules",
  desc: "Auto-compact long sessions, inject project rules from AGENTS.md, and configure permission presets.",
  href: "/docs#context-compaction"
}];
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingSection, { id: "features", title: "Everything in one agent", subtitle: "From reading files to running tests — agent-dev keeps your workflow inside the terminal.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-frame editorial-shadow overflow-hidden bg-white/55 p-4 backdrop-blur-sm sm:p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3", children: FEATURES.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-black/6 bg-white/80 p-5 transition-colors hover:bg-white sm:rounded-[20px] sm:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: f.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-foreground/60", children: f.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: f.href, className: "mt-5 inline-block text-[11px] font-medium uppercase tracking-[0.08em] text-foreground/70 transition-colors hover:text-foreground", children: "read docs →" })
    ] }, f.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-center text-sm text-foreground/55", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs", className: "font-medium text-foreground transition-colors hover:text-foreground/80", children: "full documentation →" }) })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-8 pt-2 sm:pb-16 sm:pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-frame editorial-shadow relative min-h-[240px] overflow-hidden sm:min-h-[300px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/hero-sky-landscape.jpg", alt: "", className: "absolute inset-0 h-full w-full object-cover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-r from-white/85 via-white/70 to-white/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full min-h-[240px] flex-col items-start justify-center gap-5 p-6 sm:min-h-[300px] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ref-section-title text-foreground", children: "Stop context-switching." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-md text-sm leading-relaxed text-foreground/65 sm:text-base", children: "Ship code without leaving the terminal." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CopyCmd, { cmd: "npm i -g @devang0907/agent-dev", variant: "hero" }) })
    ] })
  ] }) });
}
function LandingSection({
  id,
  title,
  subtitle,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: "scroll-mt-24 py-8 sm:scroll-mt-28 sm:py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ref-section-title text-foreground", children: title }),
    subtitle ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-base leading-relaxed text-foreground/65", children: subtitle }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children })
  ] });
}
function TerminalCodeBlock({
  title,
  lines
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl bg-terminal text-terminal-foreground shadow-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 px-4 py-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.08em] text-white/40", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-400/80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-400/80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-400/80" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "terminal-mono overflow-x-auto px-4 py-4 text-[11px] leading-relaxed sm:px-5 sm:py-5 sm:text-xs", children: lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: l }, l)) })
  ] });
}
export {
  Index as component
};
