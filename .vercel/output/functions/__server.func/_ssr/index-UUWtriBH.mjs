import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteNav, a as SiteFooter } from "./site-nav-Cf_nA01Z.mjs";
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
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#f3f2ee] text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, { variant: "landing" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureSpotlight, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "editorial-shell", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Install, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-3 mt-3 sm:mx-4 lg:mx-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-frame editorial-shadow relative min-h-[calc(100svh-0.75rem)] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/new%20bg.png", alt: "", className: "absolute inset-0 h-full w-full object-cover object-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-b from-white/25 via-transparent to-black/5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex min-h-[calc(100svh-0.75rem)] flex-col items-center justify-center px-6 pb-16 pt-24 text-center sm:px-10 sm:pb-20 sm:pt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "nature-hero-title max-w-3xl text-foreground", children: [
        "Autopilot for your terminal workflow.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Scale effortlessly." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/65 sm:text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "agent-dev" }),
        " reads and edits code, runs shell commands with approval, and delegates complex tasks through boss orchestration."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CopyCmd, { cmd: "npm i -g @devang0907/agent-dev", variant: "hero" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/Devang0907/agent-dev", target: "_blank", rel: "noreferrer", className: "inline-flex h-11 items-center rounded-full border border-foreground/15 bg-white/60 px-5 text-xs font-medium uppercase tracking-[0.06em] text-foreground backdrop-blur-sm transition-colors hover:bg-white", children: "view on github ↗" })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-[#d4eaf7] to-transparent sm:w-16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-[#d4eaf7] to-transparent sm:w-16" }),
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-3 pt-2 pb-8 sm:mx-4 sm:pt-4 lg:mx-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-frame ref-sky-bg editorial-shadow overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-black/8 px-4 pt-8 sm:px-8 sm:pt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ref-section-title mb-6 text-center text-foreground sm:mb-8", children: "Empowering autonomous development with" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LogoTicker, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-6 overflow-x-auto pb-0 sm:gap-10", children: SHOWCASE_TABS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setActive(item.id), className: `shrink-0 border-b-2 pb-4 text-left transition-colors ${active === item.id ? "border-foreground text-foreground" : "border-transparent text-foreground/45 hover:text-foreground/70"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-medium", children: item.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 block text-[11px] text-foreground/50", children: item.subtitle })
      ] }, item.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ref-section-title text-foreground", children: tab.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-md text-base leading-relaxed text-foreground/65", children: tab.body }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: tab.href, className: "mt-8 inline-flex w-fit items-center rounded-lg bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-90", children: tab.cta })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[320px] overflow-hidden rounded-[20px] sm:min-h-[380px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/new%20bg%202.png", alt: "", className: "absolute inset-0 h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-sky-200/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-white/92 p-2 shadow-lg backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalDemo, { compact: true }) }) })
      ] })
    ] })
  ] }) });
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
  }, className: isHero ? "group inline-flex h-11 items-center gap-2 rounded-lg bg-foreground px-6 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-90" : "group inline-flex h-11 items-center gap-3 rounded-full bg-foreground px-5 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-transform hover:scale-[1.02]", children: isHero ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copied ? "Copied ✓" : "Get started" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cmd }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[10px] text-background/60 group-hover:text-background", children: copied ? "copied ✓" : "copy" })
  ] }) });
}
function TerminalDemo({
  compact = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `overflow-hidden bg-terminal text-terminal-foreground ${compact ? "rounded-xl" : "rounded-[18px] sm:rounded-[20px]"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 px-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-400/80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-400/80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-400/80" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white/40", children: "~/projects/app — agent-dev" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-purple-400", children: "BOSS · Build" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: `terminal-mono overflow-x-auto leading-relaxed ${compact ? "px-4 py-4 text-[10px]" : "px-6 py-6 text-[12px]"}`, children: [
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "verify" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "npm test" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ 42 passed" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: "Auth refactor complete. Trace: " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: "/trace" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "›" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink" })
    ] })
  ] });
}
function Install() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "install", label: "01", title: "quick start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { title: "from source", lines: ["$ git clone https://github.com/Devang0907/agent-dev.git", "$ cd agent-dev && npm install", "$ npm run dev"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { title: "global install", lines: ["$ npm i -g @devang0907/agent-dev", "$ agent"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editorial-card mt-6 p-6 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editorial-label mb-3 text-muted-foreground", children: "# set at least one API key · requires Node.js 20+" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "terminal-mono overflow-x-auto leading-relaxed text-muted-foreground", children: `export OPENROUTER_API_KEY=sk-or-...   # free models (default)
export OPENAI_API_KEY=sk-...          # ChatGPT
export ANTHROPIC_API_KEY=sk-ant-...   # Claude
export GROQ_API_KEY=gsk_...           # Groq
export GEMINI_API_KEY=...             # Google Gemini` })
    ] })
  ] });
}
const FEATURES = [{
  title: "Build · Plan · Boss",
  desc: "Switch between full tool access, read-only exploration, or a boss orchestrator that delegates to specialized workers.",
  href: "/docs#agent-modes",
  color: "text-purple-500"
}, {
  title: "20 built-in tools",
  desc: "Read, edit, grep, git, bash, browser, MCP, skills, and more — with approval gates for destructive actions.",
  href: "/docs#tools",
  color: "text-primary"
}, {
  title: "Bring your own model",
  desc: "OpenRouter free tier, Claude, GPT, Groq, or Gemini. Switch models with /model or --model.",
  href: "/docs#providers",
  color: "text-sky-500"
}, {
  title: "Telegram gateway",
  desc: "Chat from your phone with long-polling, inline approvals, reminders, and daily scheduled tasks.",
  href: "/docs#telegram-gateway",
  color: "text-primary"
}, {
  title: "Skills & MCP",
  desc: "Load Vercel Agent Skills and connect MCP servers for filesystem, APIs, and custom tools.",
  href: "/docs#skills",
  color: "text-sky-500"
}, {
  title: "Compaction & rules",
  desc: "Auto-compact long sessions, inject project rules from AGENTS.md, and configure permission presets.",
  href: "/docs#context-compaction",
  color: "text-muted-foreground"
}];
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "features", label: "02", title: "features", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: FEATURES.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editorial-card p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-sm font-bold ${f.color}`, children: f.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: f.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: f.href, className: "mt-5 inline-block text-xs uppercase tracking-[0.08em] text-foreground hover:underline", children: "read docs →" })
    ] }, f.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-center text-sm text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs", className: "text-primary hover:underline", children: "full documentation →" }) })
  ] });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "editorial-card my-16 p-8 sm:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "editorial-section-title text-3xl", children: "stop context-switching." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "ship code without leaving the terminal." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CopyCmd, { cmd: "npm i -g @devang0907/agent-dev" })
  ] }) });
}
function Section({
  id,
  label,
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: "editorial-section border-t border-border/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-baseline gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "editorial-label text-muted-foreground", children: [
        "[",
        label,
        "]"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "editorial-section-title text-3xl sm:text-5xl", children: title })
    ] }),
    children
  ] });
}
function CodeBlock({
  title,
  lines
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editorial-card overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editorial-label border-b border-border/70 px-5 py-3 text-muted-foreground", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "terminal-mono overflow-x-auto px-5 py-5 text-xs leading-relaxed", children: lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: l }, l)) })
  ] });
}
export {
  Index as component
};
