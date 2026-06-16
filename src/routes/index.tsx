import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "agent-dev — a minimal terminal coding agent" },
      {
        name: "description",
        content:
          "agent-dev is a minimal terminal coding agent with an Ink UI. Chat with an AI that reads, writes, edits files, and runs bash — right in your terminal.",
      },
      { property: "og:title", content: "agent-dev — a minimal terminal coding agent" },
      {
        property: "og:description",
        content:
          "A minimal terminal coding agent with an Ink UI. Read, write, edit, and run bash from your shell.",
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
            "A minimal terminal coding agent with an Ink UI. Read, write, edit files and run bash commands.",
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
        <Features />
        <Providers />
        <Commands />
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
        <nav className="hidden items-center gap-6 text-xs text-muted-foreground sm:flex">
          <a href="#install" className="hover:text-foreground">install</a>
          <a href="#features" className="hover:text-foreground">features</a>
          <a href="#providers" className="hover:text-foreground">providers</a>
          <a href="#commands" className="hover:text-foreground">commands</a>
          <a
            href="https://www.npmjs.com/package/@devang0907/agent-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            npm ↗
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
          a minimal coding agent
        </div>
        <h1 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          AI in your terminal.
          <br />
          <span className="text-muted-foreground">No browser. No bloat.</span>
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          <span className="text-foreground">agent-dev</span> is a tiny terminal coding agent built
          with Ink. Chat with a model that can read, write, and edit files — and run bash — without
          leaving your shell.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <CopyCmd cmd="npm i -g @devang0907/agent-dev" />
          <a
            href="https://www.npmjs.com/package/@devang0907/agent-dev"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-border px-3 py-2 text-xs font-medium hover:bg-secondary"
          >
            view on npm ↗
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-muted-foreground">
          <span>● MIT licensed</span>
          <span>● 4 built-in tools</span>
          <span>● works with OpenAI · Groq · Gemini · OpenRouter</span>
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
        <span className="text-[10px] text-white/40">zsh</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-[12px] leading-relaxed">
<span className="text-white/50">$ </span>npx @devang0907/agent-dev{"\n"}
<span className="text-primary">◆</span> agent <span className="text-white/40">v0.1.1 · model: llama-3.3-70b</span>{"\n\n"}
<span className="text-primary">›</span> refactor utils.ts to use async/await{"\n\n"}
<span className="text-green-400">read</span> <span className="text-white/60">src/utils.ts</span>{"\n"}
<span className="text-green-400">edit</span> <span className="text-white/60">src/utils.ts</span> <span className="text-white/40">(+12 -8)</span>{"\n"}
<span className="text-green-400">bash</span> <span className="text-white/60">npm run typecheck</span>{"\n"}
<span className="text-white/60">  ✓ no errors</span>{"\n\n"}
<span className="text-white/80">Done. Converted </span><span className="text-yellow-300">readConfig</span><span className="text-white/80"> and </span><span className="text-yellow-300">loadCache</span>{"\n"}
<span className="text-white/80">to async/await and updated callers.</span>{"\n\n"}
<span className="text-primary">›</span> <span className="blink" />
      </pre>
    </div>
  );
}

function Install() {
  return (
    <Section id="install" label="01" title="install in seconds">
      <div className="grid gap-4 sm:grid-cols-2">
        <CodeBlock
          title="run instantly"
          lines={["$ npx @devang0907/agent-dev"]}
        />
        <CodeBlock
          title="or install globally"
          lines={["$ npm i -g @devang0907/agent-dev", "$ agent"]}
        />
      </div>
      <div className="mt-4 rounded-md border border-border bg-card p-4 text-xs">
        <div className="mb-2 text-muted-foreground"># set at least one API key</div>
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

function Features() {
  const items = [
    {
      k: "read",
      t: "Read any file",
      d: "Inspect source, configs, logs — scoped safely to your working directory.",
    },
    {
      k: "write",
      t: "Write new files",
      d: "Scaffold modules, tests, or docs in one prompt. No copy-paste from chat.",
    },
    {
      k: "edit",
      t: "Surgical edits",
      d: "Targeted diffs across files. The agent shows what changed before applying.",
    },
    {
      k: "bash",
      t: "Run commands",
      d: "Install deps, run tests, grep, git — the agent uses your shell, not a sandbox.",
    },
  ];
  return (
    <Section id="features" label="02" title="four tools. that's the whole agent.">
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
        {items.map((i) => (
          <div key={i.k} className="bg-card p-6">
            <div className="flex items-baseline gap-2 text-primary">
              <span className="text-xs">●</span>
              <span className="font-bold">{i.k}</span>
              <span className="text-xs text-muted-foreground">→ {i.t}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Providers() {
  const rows = [
    ["OpenAI", "OPENAI_API_KEY", "gpt-4o, gpt-4o-mini"],
    ["Groq", "GROQ_API_KEY", "llama-3.3-70b-versatile"],
    ["Google Gemini", "GEMINI_API_KEY", "gemini-2.0-flash"],
    ["OpenRouter (free)", "OPENROUTER_API_KEY", "llama-3.3-70b-instruct:free"],
  ];
  return (
    <Section id="providers" label="03" title="bring your own model.">
      <div className="overflow-hidden rounded-md border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Provider</th>
              <th className="px-4 py-3 font-medium">Env var</th>
              <th className="px-4 py-3 font-medium">Example model</th>
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
    </Section>
  );
}

function Commands() {
  const cmds = [
    ["/model", "open model selector, grouped by provider"],
    ["/model groq", "open selector filtered by search"],
    ["/settings", "thinking level, theme, API key status"],
    ["/new", "clear the current session"],
    ["/quit", "exit the agent"],
  ];
  const cli = [
    ["npm run dev", "interactive mode"],
    [`npm run dev -- -p "List files"`, "print mode (one-shot)"],
    ["npm run dev -- -c", "continue last session"],
    [`--model groq/llama-3.3-70b-versatile`, "pick a model inline"],
  ];
  return (
    <Section id="commands" label="04" title="commands & cli">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-md border border-border bg-card">
          <div className="border-b border-border px-4 py-2 text-xs text-muted-foreground">
            interactive commands
          </div>
          <ul className="divide-y divide-border text-sm">
            {cmds.map(([c, d]) => (
              <li key={c} className="flex items-baseline gap-4 px-4 py-3">
                <code className="text-primary">{c}</code>
                <span className="text-muted-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-md border border-border bg-card">
          <div className="border-b border-border px-4 py-2 text-xs text-muted-foreground">
            cli flags
          </div>
          <ul className="divide-y divide-border text-sm">
            {cli.map(([c, d]) => (
              <li key={c} className="flex flex-col gap-1 px-4 py-3">
                <code className="text-primary text-xs">{c}</code>
                <span className="text-xs text-muted-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Config and sessions are stored in <code className="text-foreground">~/.agent-dev/</code>.
      </p>
    </Section>
  );
}

function CTA() {
  return (
    <section className="my-24 rounded-md border border-border bg-card p-8 sm:p-12">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            stop context-switching.
          </h2>
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
        <div className="flex items-center gap-5">
          <a
            href="https://www.npmjs.com/package/@devang0907/agent-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            npm
          </a>
          <a href="#install" className="hover:text-foreground">install</a>
          <a href="#commands" className="hover:text-foreground">docs</a>
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
          <div key={l}>
            <span className="text-primary">{l.startsWith("$") ? "" : ""}</span>
            {l}
          </div>
        ))}
      </pre>
    </div>
  );
}
