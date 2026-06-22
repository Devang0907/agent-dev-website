import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "agent-dev — a minimal terminal coding agent" },
      {
        name: "description",
        content:
          "A minimal terminal coding agent with an Ink TUI. Read and edit code, search the web, run git/shell with approval, use MCP servers, load skills, and optionally delegate through a boss orchestrator.",
      },
      { property: "og:title", content: "agent-dev — terminal coding agent with Ink TUI" },
      {
        property: "og:description",
        content:
          "Chat with an AI in your terminal. 17 built-in tools, Build/Plan modes, boss orchestrator, MCP, and Vercel Agent Skills.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "agent-dev",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "macOS, Linux, Windows",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description:
            "A minimal terminal coding agent with an Ink TUI. ReAct loop with 17 tools, boss orchestrator, MCP, and skills.",
        }),
      },
    ],
  }),
  component: Index,
});

const ASCII = ` █████╗  ██████╗ ███████╗███╗   ██╗████████╗      ██████╗ ███████╗██╗   ██╗
██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝      ██╔══██╗██╔════╝██║   ██║
███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║   █████╗██║  ██║█████╗  ██║   ██║
██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║   ╚════╝██║  ██║██╔══╝  ╚██╗ ██╔╝
██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║         ██████╔╝███████╗ ╚████╔╝ 
╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝         ╚═════╝ ╚══════╝  ╚═══╝  `;

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <Hero />
        <Install />
        <Modes />
        <Tools />
        <Providers />
        <Commands />
        <SkillsMcp />
        <Config />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="/" className="flex items-center gap-2 text-sm font-bold tracking-tight">
          <span className="text-primary">▮</span>
          <span>agent-dev</span>
        </a>
        <nav className="hidden items-center gap-5 text-xs text-muted-foreground lg:flex">
          <a href="#install" className="hover:text-foreground">
            install
          </a>
          <a href="#modes" className="hover:text-foreground">
            modes
          </a>
          <a href="#tools" className="hover:text-foreground">
            tools
          </a>
          <a href="#providers" className="hover:text-foreground">
            providers
          </a>
          <a href="#commands" className="hover:text-foreground">
            commands
          </a>
          <a href="#skills" className="hover:text-foreground">
            skills
          </a>
          <a
            href="https://github.com/Devang0907/agent-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            github ↗
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://www.npmjs.com/package/@devang0907/agent-dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            $ install
          </a>
        </div>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
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
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      title={dark ? "Switch to light" : "Switch to dark"}
      className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-border text-sm transition-colors hover:bg-secondary"
    >
      {dark ? "☀" : "☾"}
    </button>
  );
}

function Hero() {
  return (
    <section className="relative grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
      <div className="absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="flex flex-col justify-center">
        <pre className="hidden text-[8px] leading-tight text-primary sm:block sm:text-[10px]">
          {ASCII}
        </pre>
        <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm border border-border bg-card px-2.5 py-1 text-[11px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Ink TUI · ReAct loop · Node 20+
        </div>
        <h1 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          AI in your terminal.
          <br />
          <span className="text-muted-foreground">Build, plan, or boss it.</span>
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          <span className="text-foreground">agent-dev</span> is a minimal terminal coding agent.
          Chat with an AI that reads and edits code, searches the web, runs git and shell commands
          (with approval), uses MCP servers, loads skills — and optionally delegates work through a{" "}
          <span className="text-purple-500 dark:text-purple-400">boss orchestrator</span> that
          coordinates specialized workers.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <CopyCmd cmd="npm i -g @devang0907/agent-dev" />
          <a
            href="https://github.com/Devang0907/agent-dev"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-border px-3 py-2 text-xs font-medium hover:bg-secondary"
          >
            view on github ↗
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-muted-foreground">
          <span>● MIT licensed</span>
          <span>● 17 built-in tools</span>
          <span>● Build · Plan · Boss modes</span>
          <span>● MCP + Vercel skills</span>
        </div>
      </div>

      <TerminalDemo />
    </section>
  );
}

function CopyCmd({ cmd }: { cmd: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(cmd);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      }}
      className="group inline-flex items-center gap-3 rounded-sm border border-border bg-card px-3 py-2 text-xs hover:border-foreground/40"
    >
      <span className="text-primary">$</span>
      <span className="font-medium">{cmd}</span>
      <span className="ml-2 text-[10px] text-muted-foreground group-hover:text-foreground">
        {copied ? "copied ✓" : "copy"}
      </span>
    </button>
  );
}

function TerminalDemo() {
  return (
    <div className="rounded-md border border-border bg-terminal text-terminal-foreground shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        <span className="text-[10px] text-white/40">~/projects/app — agent-dev</span>
        <span className="text-[10px] text-purple-400">BOSS · Build</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-[12px] leading-relaxed">
        <span className="text-white/50">$ </span>agent --boss{"\n"}
        <span className="text-primary">◆</span> agent{" "}
        <span className="text-white/40">free/llama-3.3-70b · BOSS</span>
        {"\n\n"}
        <span className="text-primary">›</span> refactor auth module and run tests{"\n\n"}
        <span className="text-purple-400">boss</span>{" "}
        <span className="text-white/60">delegate → explore worker</span>
        {"\n"}
        <span className="text-green-400">grep</span>{" "}
        <span className="text-white/60">auth middleware patterns</span>
        {"\n"}
        <span className="text-purple-400">boss</span>{" "}
        <span className="text-white/60">delegate → implement worker</span>
        {"\n"}
        <span className="text-green-400">edit</span>{" "}
        <span className="text-white/60">src/auth.ts</span>{" "}
        <span className="text-white/40">(+24 -11)</span>
        {"\n"}
        <span className="text-purple-400">boss</span>{" "}
        <span className="text-white/60">delegate → shell worker</span>
        {"\n"}
        <span className="text-green-400">verify</span>{" "}
        <span className="text-white/60">npm test</span>
        {"\n"}
        <span className="text-white/60"> ✓ 42 passed</span>
        {"\n\n"}
        <span className="text-white/80">Auth refactor complete. Trace: </span>
        <span className="text-yellow-300">/trace</span>
        {"\n\n"}
        <span className="text-primary">›</span> <span className="blink" />
      </pre>
    </div>
  );
}

function Install() {
  return (
    <Section id="install" label="01" title="quick start">
      <div className="grid gap-4 lg:grid-cols-3">
        <CodeBlock
          title="from source"
          lines={[
            "$ git clone https://github.com/Devang0907/agent-dev.git",
            "$ cd agent-dev && npm install",
            "$ npm run dev",
          ]}
        />
        <CodeBlock title="run instantly" lines={["$ npx @devang0907/agent-dev"]} />
        <CodeBlock
          title="global install"
          lines={["$ npm i -g @devang0907/agent-dev", "$ agent"]}
        />
      </div>
      <div className="mt-4 rounded-md border border-border bg-card p-4 text-xs">
        <div className="mb-2 text-muted-foreground">
          # set at least one API key · requires Node.js 20+
        </div>
        <pre className="overflow-x-auto leading-relaxed">
          {`export OPENROUTER_API_KEY=sk-or-...   # free models (default)
export OPENAI_API_KEY=sk-...          # ChatGPT
export GROQ_API_KEY=gsk_...           # Groq
export GEMINI_API_KEY=...             # Google Gemini`}
        </pre>
      </div>
    </Section>
  );
}

function Modes() {
  const modes = [
    {
      name: "Build",
      tag: "default",
      toggle: "Tab / /build",
      desc: "Full tool access — edit files, run shell, verify. The agent ships code.",
      color: "text-primary",
    },
    {
      name: "Plan",
      tag: "read-only",
      toggle: "Tab / /plan",
      desc: "Explore code, research, write plans to .agent-dev/plans/*.md. No writes or shell.",
      color: "text-sky-500 dark:text-sky-400",
    },
    {
      name: "Boss",
      tag: "opt-in",
      toggle: "--boss / /boss",
      desc: "Orchestrator plans work and delegates to explore, implement, shell, and plan workers.",
      color: "text-purple-500 dark:text-purple-400",
    },
  ];
  const workers = [
    ["explore", "read-only research", "read, grep, git, docs"],
    ["implement", "focused code changes", "read, write, edit, diff, grep, verify"],
    ["shell", "commands & tests", "bash, exec, verify"],
    ["plan", "architecture docs", "plan, read, grep"],
  ];
  return (
    <Section id="modes" label="02" title="agent modes">
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
        {modes.map((m) => (
          <div key={m.name} className="bg-card p-6">
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold ${m.color}`}>{m.name}</span>
              <span className="rounded-sm border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground">
                {m.tag}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">{m.toggle}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-md border border-border bg-card p-5">
        <p className="text-xs text-muted-foreground">
          Boss mode — hierarchical orchestrator (orchestrator-workers pattern)
        </p>
        <pre className="mt-3 overflow-x-auto text-xs leading-relaxed text-muted-foreground">
          {`User → Boss (plan + delegate)
         ├─ explore worker   (read-only research)
         ├─ implement worker (code changes)
         ├─ shell worker     (commands & tests)
         └─ plan worker      (architecture docs)`}
        </pre>
        <div className="mt-4 overflow-hidden rounded-md border border-border">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-secondary/50 text-[10px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-3 py-2 font-medium">Worker</th>
                <th className="px-3 py-2 font-medium">Role</th>
                <th className="px-3 py-2 font-medium">Tools</th>
              </tr>
            </thead>
            <tbody>
              {workers.map((w) => (
                <tr key={w[0]} className="border-b border-border last:border-0">
                  <td className="px-3 py-2 font-semibold text-purple-500 dark:text-purple-400">
                    {w[0]}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">{w[1]}</td>
                  <td className="px-3 py-2 text-muted-foreground">{w[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Worker traces log to{" "}
          <code className="text-foreground">~/.agent-dev/traces/&lt;sessionId&gt;/</code>. Use{" "}
          <code className="text-foreground">/trace</code> to find the latest log.
        </p>
      </div>
    </Section>
  );
}

function Tools() {
  const tools = [
    ["read", "Read a file in the project directory"],
    ["write", "Create or overwrite a file"],
    ["edit", "Replace text in a file"],
    ["diff", "Preview unified diff before applying"],
    ["grep", "Search codebase (ripgrep; findstr on Windows)"],
    ["git", "Status, diff, log, commit — writes need approval"],
    ["bash", "Run a shell command — requires approval"],
    ["exec", "Structured shell command — requires approval"],
    ["web_search", "Search the internet (DuckDuckGo / Google News)"],
    ["docs", "Look up npm READMEs, MDN, or fetch a docs URL"],
    ["memory", "Store/recall facts in ~/.agent-dev/memory.json"],
    ["plan", "Create and track multi-step task plans"],
    ["delegate", "Boss only — spawn a worker for a subtask"],
    ["database", "Run SQL on SQLite files — mutations need approval"],
    ["verify", "Auto-run tests/build from package.json scripts"],
    ["mcp", "Call tools from MCP servers"],
    ["skill", "Load a skill from available_skills"],
  ];
  return (
    <Section id="tools" label="03" title="17 built-in tools">
      <p className="-mt-4 mb-6 text-sm text-muted-foreground">
        16 in normal mode; <code className="text-foreground">delegate</code> is boss-only. File ops
        are scoped to the working directory. Shell, git writes, SQL mutations, and MCP calls prompt
        for approval (<code className="text-foreground">y</code> /{" "}
        <code className="text-foreground">n</code>).
      </p>
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {tools.map(([k, d]) => (
          <div key={k} className="bg-card px-4 py-3">
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-bold text-primary">{k}</span>
              {k === "delegate" && (
                <span className="text-[10px] text-purple-500 dark:text-purple-400">boss</span>
              )}
            </div>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Providers() {
  const rows = [
    ["OpenAI", "OPENAI_API_KEY", "gpt-4o, gpt-4o-mini"],
    ["Groq", "GROQ_API_KEY", "llama-3.3-70b-versatile, openai/gpt-oss-120b"],
    ["Google Gemini", "GEMINI_API_KEY or GOOGLE_API_KEY", "gemini-2.0-flash, gemini-2.5-flash"],
    ["Free (OpenRouter)", "OPENROUTER_API_KEY", "meta-llama/llama-3.3-70b-instruct:free"],
  ];
  const freeModels = [
    ["Llama 3.3 70B", "meta-llama/llama-3.3-70b-instruct:free"],
    ["DeepSeek R1", "deepseek/deepseek-r1:free"],
    ["Qwen3 235B", "qwen/qwen3-235b-a22b:free"],
    ["Gemma 3 27B", "google/gemma-3-27b-it:free"],
    ["Free auto", "openrouter/free — picks any available free model"],
  ];
  return (
    <Section id="providers" label="04" title="bring your own model">
      <p className="-mt-4 mb-6 text-sm text-muted-foreground">
        Model refs use <code className="text-foreground">provider/model-id</code>, e.g.{" "}
        <code className="text-foreground">groq/llama-3.3-70b-versatile</code> or{" "}
        <code className="text-foreground">free/deepseek/deepseek-r1:free</code>. Default:{" "}
        <code className="text-foreground">free/meta-llama/llama-3.3-70b-instruct:free</code>.
      </p>
      <div className="overflow-hidden rounded-md border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Provider</th>
              <th className="px-4 py-3 font-medium">Env var</th>
              <th className="px-4 py-3 font-medium">Example models</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-semibold">{r[0]}</td>
                <td className="px-4 py-3 text-primary">{r[1]}</td>
                <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <h3 className="mb-3 text-sm font-semibold">Free models (OpenRouter)</h3>
        <div className="overflow-hidden rounded-md border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Model</th>
                <th className="px-4 py-3 font-medium">Slug</th>
              </tr>
            </thead>
            <tbody>
              {freeModels.map((r) => (
                <tr key={r[0]} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold">{r[0]}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Free models use the <code className="text-foreground">:free</code> suffix. agent-dev
          migrates retired slugs and retries fallbacks automatically.
        </p>
      </div>
    </Section>
  );
}

function Commands() {
  const cmds = [
    ["/model, /m [search]", "Open model selector (grouped by provider)"],
    ["/build", "Switch to Build mode (full tool access)"],
    ["/plan", "Switch to Plan mode (read-only exploration)"],
    ["/boss", "Toggle boss orchestrator mode"],
    ["/tasks", "Show the active task plan"],
    ["/trace", "Show path to the latest worker trace log"],
    ["/sessions", "Browse and load saved chat sessions"],
    ["/settings", "Thinking level and API key status"],
    ["/skills", "Browse and install skills (Vercel CLI)"],
    ["/skill <name>", "Load a skill for the current turn"],
    ["/new", "Start a new session"],
    ["/quit", "Exit"],
  ];
  const cli = [
    ["npm run dev", "Interactive TUI"],
    [`npm run dev -- -p "List files in src"`, "Print mode (no TUI)"],
    ["npm run dev -- --boss", "Start in boss orchestrator mode"],
    [`npm run dev -- --boss -p "refactor auth"`, "Boss mode, print and exit"],
    ["npm run dev -- -c", "Continue last session"],
    ["npm run dev -- --model groq/llama-3.3-70b-versatile", "Pick a model inline"],
    ["npm run build && npm start", "Production build"],
  ];
  const flags = [
    ["-p, --print", "Print response and exit"],
    ["-c, --continue", "Resume the most recent session"],
    ["--boss", "Enable boss orchestrator mode"],
    ["--model <ref>", "Provider/model (e.g. openai/gpt-4o)"],
    ["-h, --help", "Show help"],
  ];
  const shortcuts = [
    ["Tab / Shift+Tab", "Cycle Build ↔ Plan when input is empty"],
    ["Esc", "Abort a running turn"],
    ["Ctrl+G", "Scroll chat to latest"],
    ["Ctrl+U / Ctrl+D", "Scroll chat up/down"],
  ];
  return (
    <Section id="commands" label="05" title="commands & cli">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-md border border-border bg-card">
          <div className="border-b border-border px-4 py-2 text-xs text-muted-foreground">
            interactive commands
          </div>
          <ul className="divide-y divide-border text-sm">
            {cmds.map(([c, d]) => (
              <li key={c} className="flex flex-col gap-0.5 px-4 py-2.5 sm:flex-row sm:items-baseline sm:gap-4">
                <code className="shrink-0 text-primary text-xs">{c}</code>
                <span className="text-xs text-muted-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <div className="rounded-md border border-border bg-card">
            <div className="border-b border-border px-4 py-2 text-xs text-muted-foreground">
              cli usage
            </div>
            <ul className="divide-y divide-border text-sm">
              {cli.map(([c, d]) => (
                <li key={c} className="flex flex-col gap-1 px-4 py-3">
                  <code className="text-primary text-[11px]">{c}</code>
                  <span className="text-xs text-muted-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-border bg-card">
            <div className="border-b border-border px-4 py-2 text-xs text-muted-foreground">
              flags & shortcuts
            </div>
            <ul className="divide-y divide-border text-sm">
              {flags.map(([c, d]) => (
                <li key={c} className="flex items-baseline gap-4 px-4 py-2.5">
                  <code className="shrink-0 text-primary text-xs">{c}</code>
                  <span className="text-xs text-muted-foreground">{d}</span>
                </li>
              ))}
              {shortcuts.map(([c, d]) => (
                <li key={c} className="flex items-baseline gap-4 px-4 py-2.5">
                  <code className="shrink-0 text-xs text-muted-foreground">{c}</code>
                  <span className="text-xs text-muted-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function SkillsMcp() {
  return (
    <Section id="skills" label="06" title="skills & mcp">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-md border border-border bg-card p-5">
          <h3 className="text-sm font-semibold">Vercel Agent Skills</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Same format as OpenCode and Cursor. The agent sees an{" "}
            <code className="text-foreground">&lt;available_skills&gt;</code> catalog and loads full
            instructions with the <code className="text-foreground">skill</code> tool.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-sm border border-border bg-background p-3 text-[11px] leading-relaxed">
            {`agent skills add vercel-labs/agent-skills
agent skills add vercel-labs/agent-skills -g
agent skills find react
agent skills list`}
          </pre>
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <a
              href="https://skills.sh"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              skills.sh ↗
            </a>
            <a
              href="https://vercel.com/docs/agent-resources/skills"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Vercel skills docs ↗
            </a>
          </div>
        </div>
        <div className="rounded-md border border-border bg-card p-5">
          <h3 className="text-sm font-semibold">MCP servers</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Add servers to <code className="text-foreground">~/.agent-dev/mcp.json</code>. Use the{" "}
            <code className="text-foreground">mcp</code> tool with{" "}
            <code className="text-foreground">list_servers</code>,{" "}
            <code className="text-foreground">list_tools</code>, and{" "}
            <code className="text-foreground">call_tool</code>.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-sm border border-border bg-background p-3 text-[11px] leading-relaxed">
            {`{
  "servers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "."]
    }
  }
}`}
          </pre>
        </div>
      </div>
      <div className="mt-4 overflow-hidden rounded-md border border-border bg-card">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-border bg-secondary/50 text-[10px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-2 font-medium">Scope</th>
              <th className="px-4 py-2 font-medium">Path</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Global (Vercel CLI)", "~/.config/agents/skills/"],
              ["Global (compat)", "~/.agents/skills/"],
              ["Project", ".agents/skills/ (walk up to git root)"],
              ["Agent config", "~/.agent-dev/skills/"],
              ["Custom", "skills.paths in settings.json"],
            ].map(([scope, path]) => (
              <tr key={scope} className="border-b border-border last:border-0">
                <td className="px-4 py-2 font-medium">{scope}</td>
                <td className="px-4 py-2 font-mono text-muted-foreground">{path}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function Config() {
  return (
    <Section id="config" label="07" title="configuration">
      <p className="-mt-4 mb-4 text-sm text-muted-foreground">
        All config lives under <code className="text-foreground">~/.agent-dev/</code> (override with{" "}
        <code className="text-foreground">AGENT_DEV_DIR</code>).
      </p>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-md border border-border bg-card">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-secondary/50 text-[10px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-2 font-medium">Path</th>
                <th className="px-4 py-2 font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["settings.json", "Default provider/model, thinking, modes, API keys, skills"],
                ["sessions/*.jsonl", "Chat history (one file per session)"],
                ["last-session.json", "Pointer to resume with -c"],
                ["memory.json", "Cross-session memory"],
                ["plan.json", "Active task plan"],
                ["mcp.json", "MCP server definitions"],
                ["traces/<sessionId>/", "Boss worker trace logs (JSONL)"],
              ].map(([path, purpose]) => (
                <tr key={path} className="border-b border-border last:border-0">
                  <td className="px-4 py-2 font-mono text-primary">{path}</td>
                  <td className="px-4 py-2 text-muted-foreground">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CodeBlock
          title="example settings.json"
          lines={[
            "{",
            '  "defaultProvider": "free",',
            '  "defaultModel": "meta-llama/llama-3.3-70b-instruct:free",',
            '  "thinkingLevel": "off",',
            '  "agentMode": "build",',
            '  "orchestratorMode": "off"',
            "}",
          ]}
        />
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Set <code className="text-foreground">orchestratorMode</code> to{" "}
        <code className="text-foreground">"boss"</code> to enable boss mode by default. Single-agent
        ReAct loop — no LangGraph. Boss mode nests additional loops inside the{" "}
        <code className="text-foreground">delegate</code> tool.
      </p>
    </Section>
  );
}

function CTA() {
  return (
    <section className="my-24 rounded-md border border-border bg-card p-8 sm:p-12">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">stop context-switching.</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            ship code without leaving the terminal.
          </p>
        </div>
        <CopyCmd cmd="npx @devang0907/agent-dev" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-2">
          <span className="text-primary">▮</span>
          <span>agent-dev — MIT — built with Ink</span>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href="https://github.com/Devang0907/agent-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            github
          </a>
          <a
            href="https://www.npmjs.com/package/@devang0907/agent-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            npm
          </a>
          <a href="#install" className="hover:text-foreground">
            install
          </a>
          <a href="#commands" className="hover:text-foreground">
            docs
          </a>
        </div>
      </div>
    </footer>
  );
}

function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-dashed border-border py-16 sm:py-20">
      <div className="mb-8 flex items-baseline gap-4">
        <span className="text-xs text-muted-foreground">[{label}]</span>
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function CodeBlock({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-md border border-border bg-card">
      <div className="border-b border-border px-4 py-2 text-xs text-muted-foreground">{title}</div>
      <pre className="overflow-x-auto px-4 py-4 text-xs leading-relaxed">
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </pre>
    </div>
  );
}
