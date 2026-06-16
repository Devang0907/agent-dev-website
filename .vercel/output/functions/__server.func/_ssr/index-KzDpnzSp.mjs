import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
const ASCII = ` █████╗  ██████╗ ███████╗███╗   ██╗████████╗      ██████╗ ███████╗██╗   ██╗
██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝      ██╔══██╗██╔════╝██║   ██║
███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║   █████╗██║  ██║█████╗  ██║   ██║
██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║   ╚════╝██║  ██║██╔══╝  ╚██╗ ██╔╝
██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║         ██████╔╝███████╗ ╚████╔╝ 
╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝         ╚═════╝ ╚══════╝  ╚═══╝  `;
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Install, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Providers, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Commands, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-30 border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/", className: "flex items-center gap-2 text-sm font-bold tracking-tight", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "▮" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "agent-dev" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-6 text-xs text-muted-foreground sm:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#install", className: "hover:text-foreground", children: "install" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-foreground", children: "features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#providers", className: "hover:text-foreground", children: "providers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#commands", className: "hover:text-foreground", children: "commands" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.npmjs.com/package/@devang0907/agent-dev", target: "_blank", rel: "noreferrer", className: "hover:text-foreground", children: "npm ↗" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.npmjs.com/package/@devang0907/agent-dev", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 rounded-sm bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:opacity-90", children: "$ install" })
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: toggle, "aria-label": "Toggle theme", title: dark ? "Switch to light" : "Switch to dark", className: "inline-flex h-8 w-8 items-center justify-center rounded-sm border border-border text-sm transition-colors hover:bg-secondary", children: dark ? "☀" : "☾" });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "hidden text-[8px] leading-tight text-primary sm:block sm:text-[10px]", children: ASCII }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex w-fit items-center gap-2 rounded-sm border border-border bg-card px-2.5 py-1 text-[11px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
        "a minimal coding agent"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl", children: [
        "AI in your terminal.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "No browser. No bloat." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "agent-dev" }),
        " is a tiny terminal coding agent built with Ink. Chat with a model that can read, write, and edit files — and run bash — without leaving your shell."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CopyCmd, { cmd: "npm i -g @devang0907/agent-dev" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.npmjs.com/package/@devang0907/agent-dev", target: "_blank", rel: "noreferrer", className: "rounded-sm border border-border px-3 py-2 text-xs font-medium hover:bg-secondary", children: "view on npm ↗" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "● MIT licensed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "● 4 built-in tools" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "● works with OpenAI · Groq · Gemini · OpenRouter" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalDemo, {})
  ] });
}
function CopyCmd({
  cmd
}) {
  const [copied, setCopied] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }, className: "group inline-flex items-center gap-3 rounded-sm border border-border bg-card px-3 py-2 text-xs hover:border-foreground/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "$" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: cmd }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[10px] text-muted-foreground group-hover:text-foreground", children: copied ? "copied ✓" : "copy" })
  ] });
}
function TerminalDemo() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-terminal text-terminal-foreground shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 px-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-400/80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-400/80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-400/80" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white/40", children: "~/projects/app — agent-dev" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white/40", children: "zsh" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: "overflow-x-auto px-4 py-4 text-[12px] leading-relaxed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "$ " }),
      "npx @devang0907/agent-dev",
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "◆" }),
      " agent ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "v0.1.1 · model: llama-3.3-70b" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "›" }),
      " refactor utils.ts to use async/await",
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "read" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "src/utils.ts" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "edit" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "src/utils.ts" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "(+12 -8)" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "bash" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "npm run typecheck" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "  ✓ no errors" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: "Done. Converted " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: "readConfig" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: " and " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: "loadCache" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: "to async/await and updated callers." }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "›" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink" })
    ] })
  ] });
}
function Install() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "install", label: "01", title: "install in seconds", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { title: "run instantly", lines: ["$ npx @devang0907/agent-dev"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { title: "or install globally", lines: ["$ npm i -g @devang0907/agent-dev", "$ agent"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-md border border-border bg-card p-4 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-muted-foreground", children: "# set at least one API key" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "overflow-x-auto leading-relaxed", children: `export OPENROUTER_API_KEY=sk-or-...   # free models (default)
export OPENAI_API_KEY=sk-...          # ChatGPT
export GROQ_API_KEY=gsk_...           # Groq
export GEMINI_API_KEY=...             # Google Gemini` })
    ] })
  ] });
}
function Features() {
  const items = [{
    k: "read",
    t: "Read any file",
    d: "Inspect source, configs, logs — scoped safely to your working directory."
  }, {
    k: "write",
    t: "Write new files",
    d: "Scaffold modules, tests, or docs in one prompt. No copy-paste from chat."
  }, {
    k: "edit",
    t: "Surgical edits",
    d: "Targeted diffs across files. The agent shows what changed before applying."
  }, {
    k: "bash",
    t: "Run commands",
    d: "Install deps, run tests, grep, git — the agent uses your shell, not a sandbox."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "features", label: "02", title: "four tools. that's the whole agent.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 text-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "●" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: i.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
        "→ ",
        i.t
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: i.d })
  ] }, i.k)) }) });
}
function Providers() {
  const rows = [["OpenAI", "OPENAI_API_KEY", "gpt-4o, gpt-4o-mini"], ["Groq", "GROQ_API_KEY", "llama-3.3-70b-versatile"], ["Google Gemini", "GEMINI_API_KEY", "gemini-2.0-flash"], ["OpenRouter (free)", "OPENROUTER_API_KEY", "llama-3.3-70b-instruct:free"]];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "providers", label: "03", title: "bring your own model.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-md border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-border bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Provider" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Env var" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Example model" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-semibold", children: r[0] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-primary", children: r[1] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: r[2] })
    ] }, r[0])) })
  ] }) }) });
}
function Commands() {
  const cmds = [["/model", "open model selector, grouped by provider"], ["/model groq", "open selector filtered by search"], ["/settings", "thinking level, theme, API key status"], ["/new", "clear the current session"], ["/quit", "exit the agent"]];
  const cli = [["npm run dev", "interactive mode"], [`npm run dev -- -p "List files"`, "print mode (one-shot)"], ["npm run dev -- -c", "continue last session"], [`--model groq/llama-3.3-70b-versatile`, "pick a model inline"]];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "commands", label: "04", title: "commands & cli", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-4 py-2 text-xs text-muted-foreground", children: "interactive commands" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border text-sm", children: cmds.map(([c, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-baseline gap-4 px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-primary", children: c }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: d })
        ] }, c)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-4 py-2 text-xs text-muted-foreground", children: "cli flags" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border text-sm", children: cli.map(([c, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-col gap-1 px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-primary text-xs", children: c }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: d })
        ] }, c)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs text-muted-foreground", children: [
      "Config and sessions are stored in ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "~/.agent-dev/" }),
      "."
    ] })
  ] });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "my-24 rounded-md border border-border bg-card p-8 sm:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight sm:text-3xl", children: "stop context-switching." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "ship code without leaving the terminal." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CopyCmd, { cmd: "npx @devang0907/agent-dev" })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "▮" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "agent-dev — MIT — built with Ink" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.npmjs.com/package/@devang0907/agent-dev", target: "_blank", rel: "noreferrer", className: "hover:text-foreground", children: "npm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#install", className: "hover:text-foreground", children: "install" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#commands", className: "hover:text-foreground", children: "docs" })
    ] })
  ] }) });
}
function Section({
  id,
  label,
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: "border-t border-dashed border-border py-16 sm:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-baseline gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
        "[",
        label,
        "]"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold tracking-tight sm:text-2xl", children: title })
    ] }),
    children
  ] });
}
function CodeBlock({
  title,
  lines
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-4 py-2 text-xs text-muted-foreground", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "overflow-x-auto px-4 py-4 text-xs leading-relaxed", children: lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: l.startsWith("$") ? "" : "" }),
      l
    ] }, l)) })
  ] });
}
export {
  Index as component
};
