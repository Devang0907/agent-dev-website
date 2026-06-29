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
          "A minimal terminal coding agent with an Ink TUI. Read and edit code, use MCP servers, load skills, chat via Telegram, and optionally delegate through a boss orchestrator.",
      },
      {
        property: "og:title",
        content: "agent-dev — terminal coding agent with Ink TUI",
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
            "A minimal terminal coding agent with an Ink TUI. ReAct loop with 20 tools, Telegram gateway, browser automation, boss orchestrator, MCP, and skills.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#f3f2ee] text-foreground">
      <SiteNav variant="landing" />
      <Hero />
      <FeatureSpotlight />
      <main className="mx-3 space-y-4 sm:mx-4 lg:mx-5">
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
    <section className="mx-3 mt-3 sm:mx-4 lg:mx-5">
      <div className="hero-frame editorial-shadow relative min-h-[calc(100svh-0.75rem)] overflow-hidden">
        <img
          src="/new%20bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/25 via-transparent to-black/5" />

        <div className="relative flex min-h-[calc(100svh-0.75rem)] flex-col items-center justify-center px-6 pb-16 pt-24 text-center sm:px-10 sm:pb-20 sm:pt-28">
          <h1 className="nature-hero-title max-w-3xl text-foreground">
            Autopilot for your terminal workflow.
            <span className="block">Scale effortlessly.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/65 sm:text-lg">
            <span className="font-medium text-foreground">agent-dev</span> reads and edits code,
            runs shell commands with approval, and delegates complex tasks through boss
            orchestration.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <CopyCmd cmd="npm i -g @devang0907/agent-dev" variant="hero" />
            <a
              href="https://github.com/Devang0907/agent-dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-foreground/15 bg-white/60 px-5 text-xs font-medium uppercase tracking-[0.06em] text-foreground backdrop-blur-sm transition-colors hover:bg-white"
            >
              view on github ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const SHOWCASE_TABS = [
  {
    id: "boss",
    label: "Boss mode",
    subtitle: "Smart delegation",
    title: "Boss mode",
    body: "Delegate exploration, implementation, and shell work to specialized workers while the boss orchestrator keeps context and approvals in one place.",
    cta: "Read boss docs",
    href: "/docs#agent-modes",
  },
  {
    id: "tools",
    label: "Built-in tools",
    subtitle: "20 terminal tools",
    title: "Built-in tools",
    body: "Read, edit, grep, git, bash, browser, MCP, and skills — with approval gates before anything destructive runs in your repo.",
    cta: "Explore tools",
    href: "/docs#tools",
  },
  {
    id: "telegram",
    label: "Telegram",
    subtitle: "Chat from anywhere",
    title: "Telegram gateway",
    body: "Approve commands from your phone, schedule daily tasks, and keep long-running agent sessions reachable outside the terminal.",
    cta: "Setup Telegram",
    href: "/docs#telegram-gateway",
  },
  {
    id: "mcp",
    label: "MCP & skills",
    subtitle: "Extend the agent",
    title: "MCP & skills",
    body: "Connect MCP servers and load Vercel Agent Skills so agent-dev can reach filesystems, APIs, and custom workflows in your stack.",
    cta: "View integrations",
    href: "/docs#skills",
  },
] as const;

const PROVIDERS = [
  { name: "OpenAI", logo: "/logos/openai.svg", color: "#10A37F" },
  { name: "Anthropic", logo: "/logos/anthropic.svg", color: "#CC785C" },
  { name: "Google Gemini", logo: "/logos/google-gemini.svg", color: "#8E75B2" },
  { name: "Meta Llama", logo: "/logos/meta.svg", color: "#0467DF" },
  { name: "DeepSeek", logo: "/logos/deepseek.svg", color: "#4D6BFE" },
] as const;

function LogoTicker() {
  const items = [...PROVIDERS, ...PROVIDERS];

  return (
    <div className="relative mb-8 overflow-hidden sm:mb-10" aria-label="Supported AI providers">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-[#f3f2ee] to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-[#f3f2ee] to-transparent sm:w-16" />
      <div className="logo-ticker-track gap-10 sm:gap-14">
        {items.map((provider, i) => (
          <div key={`${provider.name}-${i}`} className="flex shrink-0 items-center gap-3">
            <img
              src={provider.logo}
              alt=""
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
            />
            <span
              className="text-sm font-semibold tracking-[0.02em] sm:text-base"
              style={{ color: provider.color }}
            >
              {provider.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureSpotlight() {
  const [active, setActive] = useState<(typeof SHOWCASE_TABS)[number]["id"]>("boss");
  const tab = SHOWCASE_TABS.find((t) => t.id === active) ?? SHOWCASE_TABS[0];

  return (
    <section className="mx-3 pt-10 pb-8 sm:mx-4 sm:pt-14 lg:mx-5">
      <h2 className="ref-section-title mb-6 text-center text-foreground sm:mb-8">
        Empowering autonomous development with
      </h2>
      <LogoTicker />

      <div className="hero-frame ref-sky-bg editorial-shadow overflow-hidden">
        <div className="border-b border-black/8 px-4 pt-6 sm:px-8">
          <div className="flex gap-6 overflow-x-auto pb-0 sm:gap-10">
            {SHOWCASE_TABS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={`shrink-0 border-b-2 pb-4 text-left transition-colors ${
                  active === item.id
                    ? "border-foreground text-foreground"
                    : "border-transparent text-foreground/45 hover:text-foreground/70"
                }`}
              >
                <span className="block text-sm font-medium">{item.label}</span>
                <span className="mt-0.5 block text-[11px] text-foreground/50">{item.subtitle}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">
          <div className="flex flex-col justify-center">
            <h2 className="ref-section-title text-foreground">{tab.title}</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/65">{tab.body}</p>
            <a
              href={tab.href}
              className="mt-8 inline-flex w-fit items-center rounded-lg bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-90"
            >
              {tab.cta}
            </a>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[20px] sm:min-h-[380px]">
            <img
              src="/new%20bg%202.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-sky-200/20" />
            <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
              <div className="rounded-2xl bg-white/92 p-2 shadow-lg backdrop-blur-md">
                <TerminalDemo compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CopyCmd({ cmd, variant = "default" }: { cmd: string; variant?: "default" | "hero" }) {
  const [copied, setCopied] = useState(false);
  const isHero = variant === "hero";
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(cmd);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      }}
      className={
        isHero
          ? "group inline-flex h-11 items-center gap-2 rounded-lg bg-foreground px-6 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-90"
          : "group inline-flex h-11 items-center gap-3 rounded-full bg-foreground px-5 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-transform hover:scale-[1.02]"
      }
    >
      {isHero ? (
        <span>{copied ? "Copied ✓" : "Get started"}</span>
      ) : (
        <>
          <span>$</span>
          <span>{cmd}</span>
          <span className="ml-2 text-[10px] text-background/60 group-hover:text-background">
            {copied ? "copied ✓" : "copy"}
          </span>
        </>
      )}
    </button>
  );
}

function TerminalDemo({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`overflow-hidden bg-terminal text-terminal-foreground ${
        compact ? "rounded-xl" : "rounded-[18px] sm:rounded-[20px]"
      }`}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        <span className="text-[10px] text-white/40">~/projects/app — agent-dev</span>
        <span className="text-[10px] text-purple-400">BOSS · Build</span>
      </div>
      <pre
        className={`terminal-mono overflow-x-auto leading-relaxed ${
          compact ? "px-4 py-4 text-[10px]" : "px-6 py-6 text-[12px]"
        }`}
      >
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
    <LandingSection
      id="install"
      title="Quick start"
      subtitle="Install from npm or clone the repo. Set one API key and you're ready to ship from the terminal."
    >
      <div className="hero-frame ref-sky-bg editorial-shadow overflow-hidden p-6 sm:p-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <TerminalCodeBlock
            title="from source"
            lines={[
              "$ git clone https://github.com/Devang0907/agent-dev.git",
              "$ cd agent-dev && npm install",
              "$ npm run dev",
            ]}
          />
          <TerminalCodeBlock
            title="global install"
            lines={["$ npm i -g @devang0907/agent-dev", "$ agent"]}
          />
        </div>
        <div className="mt-5 overflow-hidden rounded-2xl bg-terminal text-terminal-foreground shadow-lg">
          <div className="border-b border-white/10 px-4 py-2.5">
            <span className="text-[10px] uppercase tracking-[0.08em] text-white/40">
              API keys · Node.js 20+
            </span>
          </div>
          <pre className="terminal-mono overflow-x-auto px-5 py-5 text-xs leading-relaxed text-white/75">
            {`export OPENROUTER_API_KEY=sk-or-...   # free models (default)
export OPENAI_API_KEY=sk-...          # ChatGPT
export ANTHROPIC_API_KEY=sk-ant-...   # Claude
export GROQ_API_KEY=gsk_...           # Groq
export GEMINI_API_KEY=...             # Google Gemini`}
          </pre>
        </div>
      </div>
    </LandingSection>
  );
}

const FEATURES = [
  {
    title: "Build · Plan · Boss",
    desc: "Switch between full tool access, read-only exploration, or a boss orchestrator that delegates to specialized workers.",
    href: "/docs#agent-modes",
  },
  {
    title: "20 built-in tools",
    desc: "Read, edit, grep, git, bash, browser, MCP, skills, and more — with approval gates for destructive actions.",
    href: "/docs#tools",
  },
  {
    title: "Bring your own model",
    desc: "OpenRouter free tier, Claude, GPT, Groq, or Gemini. Switch models with /model or --model.",
    href: "/docs#providers",
  },
  {
    title: "Telegram gateway",
    desc: "Chat from your phone with long-polling, inline approvals, reminders, and daily scheduled tasks.",
    href: "/docs#telegram-gateway",
  },
  {
    title: "Skills & MCP",
    desc: "Load Vercel Agent Skills and connect MCP servers for filesystem, APIs, and custom tools.",
    href: "/docs#skills",
  },
  {
    title: "Compaction & rules",
    desc: "Auto-compact long sessions, inject project rules from AGENTS.md, and configure permission presets.",
    href: "/docs#context-compaction",
  },
];

function Features() {
  return (
    <LandingSection
      id="features"
      title="Everything in one agent"
      subtitle="From reading files to running tests — agent-dev keeps your workflow inside the terminal."
    >
      <div className="hero-frame editorial-shadow overflow-hidden bg-white/55 p-6 backdrop-blur-sm sm:p-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-[20px] border border-black/6 bg-white/80 p-6 transition-colors hover:bg-white"
            >
              <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">{f.desc}</p>
              <a
                href={f.href}
                className="mt-5 inline-block text-[11px] font-medium uppercase tracking-[0.08em] text-foreground/70 transition-colors hover:text-foreground"
              >
                read docs →
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-foreground/55">
          <Link to="/docs" className="font-medium text-foreground transition-colors hover:text-foreground/80">
            full documentation →
          </Link>
        </p>
      </div>
    </LandingSection>
  );
}

function CTA() {
  return (
    <section className="pb-12 pt-4 sm:pb-16">
      <div className="hero-frame editorial-shadow relative min-h-[260px] overflow-hidden sm:min-h-[300px]">
        <img
          src="/hero-sky-landscape.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white/85 via-white/70 to-white/40" />
        <div className="relative flex h-full min-h-[260px] flex-col items-start justify-center gap-6 p-8 sm:min-h-[300px] sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <h2 className="ref-section-title text-foreground">Stop context-switching.</h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-foreground/65">
              Ship code without leaving the terminal.
            </p>
          </div>
          <CopyCmd cmd="npm i -g @devang0907/agent-dev" variant="hero" />
        </div>
      </div>
    </section>
  );
}

function LandingSection({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-10 sm:py-14">
      <h2 className="ref-section-title text-foreground">{title}</h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/65">{subtitle}</p>
      ) : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}

function TerminalCodeBlock({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-terminal text-terminal-foreground shadow-lg">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <span className="text-[10px] uppercase tracking-[0.08em] text-white/40">{title}</span>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
      </div>
      <pre className="terminal-mono overflow-x-auto px-5 py-5 text-xs leading-relaxed">
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </pre>
    </div>
  );
}
