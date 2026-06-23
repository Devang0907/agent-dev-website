import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteNav, a as SiteFooter } from "./site-nav-H1MAy2oj.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const ASCII = ` █████╗  ██████╗ ███████╗███╗   ██╗████████╗      ██████╗ ███████╗██╗   ██╗
██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝      ██╔══██╗██╔════╝██║   ██║
███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║   █████╗██║  ██║█████╗  ██║   ██║
██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║   ╚════╝██║  ██║██╔══╝  ╚██╗ ██╔╝
██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║         ██████╔╝███████╗ ╚████╔╝ 
╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝         ╚═════╝ ╚══════╝  ╚═══╝  `;
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Install, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modes, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tools, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Providers, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Telegram, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Commands, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsMcp, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Config, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "hidden text-[8px] leading-tight text-primary sm:block sm:text-[10px]", children: ASCII }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex w-fit items-center gap-2 rounded-sm border border-border bg-card px-2.5 py-1 text-[11px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
        "Ink TUI · Telegram · Browser · Node 20+"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl", children: [
        "AI in your terminal.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Build, plan, or boss it." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "agent-dev" }),
        " is a minimal terminal coding agent. Chat with an AI that reads and edits code, searches the web, runs git and shell commands (with approval), uses MCP servers, loads skills, controls a real Chromium browser, schedules Telegram reminders — and optionally delegates work through a",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-500 dark:text-purple-400", children: "boss orchestrator" }),
        " that coordinates specialized workers."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CopyCmd, { cmd: "npm i -g @devang0907/agent-dev" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/Devang0907/agent-dev", target: "_blank", rel: "noreferrer", className: "rounded-sm border border-border px-3 py-2 text-xs font-medium hover:bg-secondary", children: "view on github ↗" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "● MIT licensed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "● 19 built-in tools" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "● Telegram gateway" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "● Browser automation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "● Build · Plan · Boss" })
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-purple-400", children: "BOSS · Build" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: "overflow-x-auto px-4 py-4 text-[12px] leading-relaxed", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { title: "from source", lines: ["$ git clone https://github.com/Devang0907/agent-dev.git", "$ cd agent-dev && npm install", "$ npm run dev"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { title: "run instantly", lines: ["$ npx @devang0907/agent-dev"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { title: "global install", lines: ["$ npm i -g @devang0907/agent-dev", "$ agent"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-md border border-border bg-card p-4 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-muted-foreground", children: "# set at least one API key · requires Node.js 20+" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "overflow-x-auto leading-relaxed", children: `export OPENROUTER_API_KEY=sk-or-...   # free models (default)
export OPENAI_API_KEY=sk-...          # ChatGPT
export ANTHROPIC_API_KEY=sk-ant-...   # Claude
export GROQ_API_KEY=gsk_...           # Groq
export GEMINI_API_KEY=...             # Google Gemini` })
    ] })
  ] });
}
function Modes() {
  const modes = [{
    name: "Build",
    tag: "default",
    toggle: "Tab / /build",
    desc: "Full tool access — edit files, run shell, verify. The agent ships code.",
    color: "text-primary"
  }, {
    name: "Plan",
    tag: "read-only",
    toggle: "Tab / /plan",
    desc: "Explore code, research, write plans to .agent-dev/plans/*.md. No writes or shell.",
    color: "text-sky-500 dark:text-sky-400"
  }, {
    name: "Boss",
    tag: "opt-in",
    toggle: "--boss / /boss",
    desc: "Orchestrator plans work and delegates to explore, implement, shell, and plan workers.",
    color: "text-purple-500 dark:text-purple-400"
  }];
  const workers = [["explore", "read-only research", "read, grep, git, docs, browser"], ["implement", "focused code changes", "read, write, edit, diff, grep, verify"], ["shell", "commands & tests", "bash, exec, verify"], ["plan", "architecture docs", "plan, read, grep"]];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "modes", label: "02", title: "agent modes", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3", children: modes.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-bold ${m.color}`, children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-sm border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground", children: m.tag })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] text-muted-foreground", children: m.toggle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: m.desc })
    ] }, m.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-md border border-border bg-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Boss mode — hierarchical orchestrator (orchestrator-workers pattern)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-3 overflow-x-auto text-xs leading-relaxed text-muted-foreground", children: `User → Boss (plan + delegate)
         ├─ explore worker   (read-only research)
         ├─ implement worker (code changes)
         ├─ shell worker     (commands & tests)
         └─ plan worker      (architecture docs)` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 overflow-hidden rounded-md border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-border bg-secondary/50 text-[10px] uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-medium", children: "Worker" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-medium", children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-medium", children: "Tools" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: workers.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-semibold text-purple-500 dark:text-purple-400", children: w[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: w[1] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: w[2] })
        ] }, w[0])) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs text-muted-foreground", children: [
        "Worker traces log to",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "~/.agent-dev/traces/<sessionId>/" }),
        ". Use",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "/trace" }),
        " to find the latest log."
      ] })
    ] })
  ] });
}
function Tools() {
  const tools = [["read", "Read a file in the project directory"], ["write", "Create or overwrite a file"], ["edit", "Replace text in a file"], ["diff", "Preview unified diff before applying changes"], ["grep", "Search codebase (ripgrep; findstr on Windows)"], ["git", "Git status, diff, log, commit — writes need approval"], ["bash", "Run a shell command — requires approval"], ["exec", "Structured shell command — requires approval"], ["web_search", "Search the internet (DuckDuckGo / Google News)"], ["docs", "Look up npm READMEs, MDN, or fetch a docs URL"], ["memory", "Store/recall facts in ~/.agent-dev/memory.json"], ["plan", "Create and track multi-step task plans"], ["delegate", "Boss only — spawn a worker for a subtask"], ["database", "Run SQL on SQLite files — mutations need approval"], ["verify", "Auto-run tests/build from package.json scripts"], ["mcp", "Call tools from MCP servers"], ["skill", "Load a skill from available_skills"], ["schedule", "Telegram reminders and daily tasks (gateway must run)"], ["browser", "Control Chromium — navigate, click, extract, screenshot"]];
  const browserActions = [["open / goto", "Launch browser or navigate to a URL"], ["click / type / select", "Interact with page elements via CSS selectors"], ["getPageContent / extract", "Inspect page text and element values"], ["screenshot", "Save PNG to ~/.agent-dev/screenshots/"], ["listTabs / switchTab", "Multi-tab control across a session"], ["waitForUser", "Pause for CAPTCHA, OTP, or manual payment"]];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "tools", label: "03", title: "19 built-in tools", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "-mt-4 mb-6 text-sm text-muted-foreground", children: [
      "18 in normal mode; ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "delegate" }),
      " is boss-only. File ops are scoped to the working directory. Shell, git writes, SQL mutations, MCP calls, and destructive browser actions prompt for approval (",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "y" }),
      " / ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "n" }),
      ")."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3", children: tools.map(([k, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary", children: k }),
        k === "delegate" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-purple-500 dark:text-purple-400", children: "boss" }),
        k === "browser" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-sky-500 dark:text-sky-400", children: "new" }),
        k === "schedule" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-sky-500 dark:text-sky-400", children: "telegram" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs leading-relaxed text-muted-foreground", children: d })
    ] }, k)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "browser", className: "mt-6 rounded-md border border-border bg-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Browser automation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs leading-relaxed text-muted-foreground", children: [
        "The agent can interact with real websites — fill forms, click buttons, extract data, and take screenshots. Runs ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "visible by default" }),
        " so you can watch it work. Session state (tabs, cookies) persists across tool calls."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { title: "one-time setup", lines: ["$ npx playwright install chromium"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 overflow-hidden rounded-md border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-border bg-secondary/50 text-[10px] uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-medium", children: "Action" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-medium", children: "Description" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: browserActions.map(([action, desc]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-semibold text-primary", children: action }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: desc })
        ] }, action)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: "Plan mode allows read-only browser actions only. Form interactions and purchases require Build mode and may prompt for approval." })
    ] })
  ] });
}
function Providers() {
  const rows = [["OpenAI (ChatGPT)", "OPENAI_API_KEY", "gpt-4o, gpt-4.1, o4-mini"], ["Anthropic (Claude)", "ANTHROPIC_API_KEY", "claude-sonnet-4-6, claude-opus-4-8, claude-haiku-4-5"], ["Groq", "GROQ_API_KEY", "llama-3.3-70b-versatile, llama-3.1-8b-instant"], ["Google Gemini", "GEMINI_API_KEY or GOOGLE_API_KEY", "gemini-2.5-pro, gemini-2.5-flash"], ["Free (OpenRouter)", "OPENROUTER_API_KEY", "meta-llama/llama-3.3-70b-instruct:free"]];
  const freeModels = [["Free auto (recommended)", "openrouter/free"], ["Llama 3.3 70B (free)", "meta-llama/llama-3.3-70b-instruct:free"], ["Qwen3 Coder (free)", "qwen/qwen3-coder:free"], ["Qwen3 Next 80B (free)", "qwen/qwen3-next-80b-a3b-instruct:free"], ["GPT-OSS 120B (free)", "openai/gpt-oss-120b:free"], ["Gemma 4 26B (free)", "google/gemma-4-26b-a4b-it:free"]];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "providers", label: "04", title: "bring your own model", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "-mt-4 mb-6 text-sm text-muted-foreground", children: [
      "Model refs use ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "provider/model-id" }),
      ", e.g.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "anthropic/claude-sonnet-4-6" }),
      " or",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "free/openrouter/free" }),
      ". Default:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "free/meta-llama/llama-3.3-70b-instruct:free" }),
      ". Retired free slugs are remapped automatically."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-md border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-border bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Provider" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Env var" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Example models" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-semibold", children: r[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-primary", children: r[1] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: r[2] })
      ] }, r[0])) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-sm font-semibold", children: "Free models (OpenRouter)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-md border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-border bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Model" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Slug" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: freeModels.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-semibold", children: r[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-xs text-muted-foreground", children: r[1] })
        ] }, r[0])) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs text-muted-foreground", children: [
        "Free models use the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: ":free" }),
        " suffix. agent-dev migrates retired slugs and retries fallbacks automatically."
      ] })
    ] })
  ] });
}
function Telegram() {
  const tgCommands = [["/start", "Welcome guide — commands, tools, project path"], ["/build, /plan, /boss", "Switch agent modes from Telegram"], ["/model <provider/id>", "Switch model remotely"], ["/schedules", "List active reminders and daily tasks"], ["/stop", "Abort the current turn"], ["/whoami", "Show your Telegram user ID for setup"]];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "telegram", label: "05", title: "telegram gateway", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "-mt-4 mb-6 text-sm text-muted-foreground", children: [
      "Chat with agent-dev from your phone via Telegram. The gateway runs on your PC with long-polling — no public URL or port forwarding. Shell/git/exec approvals arrive as",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Approve / Deny" }),
      " inline buttons. Set reminders and daily tasks (e.g. morning news) while the gateway is running."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { title: "setup via /connect in TUI", lines: ["# 1. Create a bot with @BotFather, save the token", "# 2. In agent-dev run /connect → Telegram", "# 3. DM your bot, send /whoami, add ID to allowlist"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { title: "or settings.json", lines: ["{", '  "telegram": {', '    "botToken": "123456789:ABCdef...",', '    "allowedUserIds": [987654321],', '    "workdir": "D:/projects/MyRepo"', "  }", "}"] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { title: "run the gateway", lines: ["$ agent telegram --workdir D:/projects/MyRepo", "$ agent telegram --boss --verbose"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-terminal p-4 text-xs leading-relaxed text-terminal-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-white/40", children: "# live gateway log" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { children: `[user] (123456789) list files in src
[agent] Here are the files in src/...
[tool] Running: grep pattern
[approval] npm test
[approval] Approved` })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-md border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-4 py-2 text-xs text-muted-foreground", children: "telegram commands" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full text-left text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: tgCommands.map(([cmd, desc]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-mono text-primary", children: cmd }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-muted-foreground", children: desc })
        ] }, cmd)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Reminders & scheduled tasks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs leading-relaxed text-muted-foreground", children: [
          "Ask the agent to remind you later or run recurring tasks. Uses the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "schedule" }),
          " tool — a background scheduler checks every 30 seconds and delivers due items to your chat."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-4 overflow-x-auto rounded-sm border border-border bg-background p-3 text-[11px] leading-relaxed text-muted-foreground", children: `Remind me to drink water in 5 minutes
Send me top news headlines every morning at 8:00` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs text-muted-foreground", children: [
          "Only users in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "allowedUserIds" }),
          " can chat. Treat the bot token like a password."
        ] })
      ] })
    ] })
  ] });
}
function Commands() {
  const cmds = [["/model, /m [search]", "Open model selector (grouped by provider)"], ["/build", "Switch to Build mode (full tool access)"], ["/plan", "Switch to Plan mode (read-only exploration)"], ["/boss", "Toggle boss orchestrator mode"], ["/tasks", "Show the active task plan"], ["/trace", "Show path to the latest worker trace log"], ["/sessions", "Browse and load saved chat sessions"], ["/settings", "Thinking level and API key status"], ["/connect", "Configure Telegram gateway (bot token & allowed user IDs)"], ["/skills", "Browse and install skills (Vercel CLI)"], ["/skill <name>", "Load a skill for the current turn"], ["/new", "Start a new session"], ["/quit", "Exit"]];
  const cli = [["npm run dev", "Interactive TUI"], [`npm run dev -- -p "List files in src"`, "Print mode (no TUI)"], ["npm run dev -- --boss", "Start in boss orchestrator mode"], [`npm run dev -- --boss -p "refactor auth"`, "Boss mode, print and exit"], ["npm run dev -- -c", "Continue last session"], ["npm run dev -- --model groq/llama-3.3-70b-versatile", "Pick a model inline"], ["agent telegram --workdir ./my-repo", "Start Telegram gateway"], ["npm run build && npm start", "Production build"]];
  const flags = [["-p, --print", "Print response and exit"], ["-c, --continue", "Resume the most recent session"], ["--boss", "Enable boss orchestrator mode"], ["--model <ref>", "Provider/model (e.g. openai/gpt-4o)"], ["-h, --help", "Show help"]];
  const shortcuts = [["Tab / Shift+Tab", "Cycle Build ↔ Plan when input is empty"], ["Esc", "Abort a running turn"], ["Ctrl+G", "Scroll chat to latest"], ["Ctrl+U / Ctrl+D", "Scroll chat up/down"]];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "commands", label: "06", title: "commands & cli", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-4 py-2 text-xs text-muted-foreground", children: "interactive commands" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border text-sm", children: cmds.map(([c, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-col gap-0.5 px-4 py-2.5 sm:flex-row sm:items-baseline sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "shrink-0 text-primary text-xs", children: c }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: d })
      ] }, c)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-4 py-2 text-xs text-muted-foreground", children: "cli usage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border text-sm", children: cli.map(([c, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-col gap-1 px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-primary text-[11px]", children: c }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: d })
        ] }, c)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-4 py-2 text-xs text-muted-foreground", children: "flags & shortcuts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "divide-y divide-border text-sm", children: [
          flags.map(([c, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-baseline gap-4 px-4 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "shrink-0 text-primary text-xs", children: c }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: d })
          ] }, c)),
          shortcuts.map(([c, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-baseline gap-4 px-4 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "shrink-0 text-xs text-muted-foreground", children: c }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: d })
          ] }, c))
        ] })
      ] })
    ] })
  ] }) });
}
function SkillsMcp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "skills", label: "07", title: "skills & mcp", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Vercel Agent Skills" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs leading-relaxed text-muted-foreground", children: [
          "Same format as OpenCode and Cursor. The agent sees an",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "<available_skills>" }),
          " catalog and loads full instructions with the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "skill" }),
          " tool."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-4 overflow-x-auto rounded-sm border border-border bg-background p-3 text-[11px] leading-relaxed", children: `agent skills add vercel-labs/agent-skills
agent skills add vercel-labs/agent-skills -g
agent skills find react
agent skills list` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-3 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://skills.sh", target: "_blank", rel: "noreferrer", className: "text-primary hover:underline", children: "skills.sh ↗" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://vercel.com/docs/agent-resources/skills", target: "_blank", rel: "noreferrer", className: "text-primary hover:underline", children: "Vercel skills docs ↗" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "MCP servers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs leading-relaxed text-muted-foreground", children: [
          "Add servers to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "~/.agent-dev/mcp.json" }),
          ". Use the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "mcp" }),
          " tool with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "list_servers" }),
          ",",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "list_tools" }),
          ", and",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "call_tool" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-4 overflow-x-auto rounded-sm border border-border bg-background p-3 text-[11px] leading-relaxed", children: `{
  "servers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "D:/projects"]
    }
  }
}` })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 overflow-hidden rounded-md border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-border bg-secondary/50 text-[10px] uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-medium", children: "Scope" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-medium", children: "Path" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [["Global (Vercel CLI)", "~/.config/agents/skills/"], ["Global (compat)", "~/.agents/skills/"], ["Project", ".agents/skills/ (walk up to git root)"], ["Agent config", "~/.agent-dev/skills/"], ["Custom", "skills.paths in settings.json"]].map(([scope, path]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 font-medium", children: scope }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 font-mono text-muted-foreground", children: path })
      ] }, scope)) })
    ] }) })
  ] });
}
function Config() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "config", label: "08", title: "configuration", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "-mt-4 mb-4 text-sm text-muted-foreground", children: [
      "All config lives under ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "~/.agent-dev/" }),
      " (override with",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "AGENT_DEV_DIR" }),
      ")."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-md border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-border bg-secondary/50 text-[10px] uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-medium", children: "Path" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-medium", children: "Purpose" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [["settings.json", "Default provider/model, thinking, modes, API keys, skills"], ["sessions/*.jsonl", "Chat history (one file per session)"], ["last-session.json", "Pointer to resume with -c"], ["memory.json", "Cross-session memory"], ["plan.json", "Active task plan"], ["mcp.json", "MCP server definitions"], ["traces/<sessionId>/", "Boss worker trace logs (JSONL)"], ["telegram-sessions.json", "Telegram chat → session id mapping"], ["schedules.json", "Active reminders and daily scheduled tasks"]].map(([path, purpose]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 font-mono text-primary", children: path }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 text-muted-foreground", children: purpose })
        ] }, path)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { title: "example settings.json", lines: ["{", '  "defaultProvider": "free",', '  "defaultModel": "meta-llama/llama-3.3-70b-instruct:free",', '  "thinkingLevel": "off",', '  "agentMode": "build",', '  "orchestratorMode": "off"', "}"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-xs text-muted-foreground", children: [
      "Set ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "orchestratorMode" }),
      " to",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: '"boss"' }),
      " to enable boss mode by default. Env vars:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "TELEGRAM_BOT_TOKEN" }),
      ",",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "TELEGRAM_ALLOWED_USER_IDS" }),
      ",",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "AGENT_DEV_DIR" }),
      ". Single-agent ReAct loop — boss mode nests additional loops inside the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-foreground", children: "delegate" }),
      " tool."
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "overflow-x-auto px-4 py-4 text-xs leading-relaxed", children: lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: l }, l)) })
  ] });
}
export {
  Index as component
};
