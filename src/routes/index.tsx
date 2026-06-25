import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "agent-dev — a minimal terminal coding agent" },
      {
        name: "description",
        content:
          "A minimal terminal coding agent with an OpenTUI + SolidJS TUI. Read and edit code, use MCP servers, load skills, chat via Telegram, and optionally delegate through a boss orchestrator.",
      },
      {
        property: "og:title",
        content: "agent-dev — terminal coding agent with OpenTUI + SolidJS",
      },
      {
        property: "og:description",
        content:
          "Chat with an AI in your terminal. 20 built-in tools, Telegram gateway, browser automation, Build/Plan modes, boss orchestrator, MCP, and Vercel Agent Skills.",
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
            "A minimal terminal coding agent with an OpenTUI + SolidJS TUI. ReAct loop with 20 tools, Telegram gateway, browser automation, boss orchestrator, MCP, and skills.",
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
      <SiteNav />
      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <Hero />
        <Install />
        <Features />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
      <div className="absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="flex flex-col justify-center">
        <pre className="hidden text-[8px] leading-tight text-primary sm:block sm:text-[10px]">
          {ASCII}
        </pre>
        <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm border border-border bg-card px-2.5 py-1 text-[11px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          OpenTUI + SolidJS · Telegram · Browser · Bun 1.2+
        </div>
        <h1 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          AI in your terminal.
          <br />
          <span className="text-muted-foreground">Build, plan, or boss it.</span>
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          <span className="text-foreground">agent-dev</span> is a minimal terminal coding agent.
          Chat with an AI that reads and edits code, runs shell commands with approval, and ships
          from your terminal — with optional boss orchestration for complex tasks.
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
          <span>● 20 built-in tools</span>
          <span>● Telegram gateway</span>
          <span>● Browser automation</span>
          <span>● Build · Plan · Boss</span>
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
      <div className="grid gap-4 lg:grid-cols-2">
        <CodeBlock
          title="from source"
          lines={[
            "$ git clone https://github.com/Devang0907/agent-dev.git",
            "$ cd agent-dev && bun install",
            "$ bun run dev",
          ]}
        />
        <CodeBlock
          title="global install"
          lines={["$ npm i -g @devang0907/agent-dev", "$ agent"]}
        />
      </div>
      <div className="mt-4 rounded-md border border-border bg-card p-4 text-xs">
        <div className="mb-2 text-muted-foreground">
          # set at least one API key · requires Bun 1.2+ on PATH
        </div>
        <pre className="overflow-x-auto leading-relaxed">
          {`export OPENROUTER_API_KEY=sk-or-...   # free models (default)
export OPENAI_API_KEY=sk-...          # ChatGPT
export ANTHROPIC_API_KEY=sk-ant-...   # Claude
export GROQ_API_KEY=gsk_...           # Groq
export GEMINI_API_KEY=...             # Google Gemini`}
        </pre>
      </div>
    </Section>
  );
}

const FEATURES = [
  {
    title: "Build · Plan · Boss",
    desc: "Switch between full tool access, read-only exploration, or a boss orchestrator that delegates to specialized workers.",
    href: "/docs#agent-modes",
    color: "text-purple-500 dark:text-purple-400",
  },
  {
    title: "20 built-in tools",
    desc: "Read, edit, grep, git, bash, browser, MCP, skills, and more — with approval gates for destructive actions.",
    href: "/docs#tools",
    color: "text-primary",
  },
  {
    title: "Bring your own model",
    desc: "OpenRouter free tier, Claude, GPT, Groq, or Gemini. Switch models with /model or --model.",
    href: "/docs#providers",
    color: "text-sky-500 dark:text-sky-400",
  },
  {
    title: "Telegram gateway",
    desc: "Chat from your phone with long-polling, inline approvals, reminders, and daily scheduled tasks.",
    href: "/docs#telegram-gateway",
    color: "text-primary",
  },
  {
    title: "Skills & MCP",
    desc: "Load Vercel Agent Skills and connect MCP servers for filesystem, APIs, and custom tools.",
    href: "/docs#skills",
    color: "text-sky-500 dark:text-sky-400",
  },
  {
    title: "Compaction & rules",
    desc: "Auto-compact long sessions, inject project rules from AGENTS.md, and configure permission presets.",
    href: "/docs#context-compaction",
    color: "text-muted-foreground",
  },
];

function Features() {
  return (
    <Section id="features" label="02" title="features">
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div key={f.title} className="bg-card p-6">
            <h3 className={`text-sm font-bold ${f.color}`}>{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            <a href={f.href} className="mt-4 inline-block text-xs text-primary hover:underline">
              read docs →
            </a>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        <Link to="/docs" className="text-primary hover:underline">
          full documentation →
        </Link>
      </p>
    </Section>
  );
}

function CTA() {
  return (
    <section className="my-20 rounded-md border border-border bg-card p-8 sm:p-12">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">stop context-switching.</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            ship code without leaving the terminal.
          </p>
        </div>
        <CopyCmd cmd="npm i -g @devang0907/agent-dev" />
      </div>
    </section>
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
    <section id={id} className="border-t border-dashed border-border py-12 sm:py-16">
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
