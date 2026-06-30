import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BrowserShowcase } from "@/components/browser-showcase";
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
      <main className="mx-2 space-y-2 sm:mx-4 sm:space-y-4 lg:mx-5">
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
    <section className="mx-2 mt-2 sm:mx-4 sm:mt-3 lg:mx-5">
      <div className="hero-frame editorial-shadow relative min-h-[calc(100svh-0.5rem)] overflow-hidden sm:min-h-[calc(100svh-0.75rem)]">
        <img
          src="/new%20bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/25 via-transparent to-black/5" />

        <div className="relative flex min-h-[calc(100svh-0.5rem)] flex-col items-center justify-center px-4 pb-14 pt-20 text-center sm:min-h-[calc(100svh-0.75rem)] sm:px-10 sm:pb-20 sm:pt-28">
          <h1 className="nature-hero-title max-w-3xl px-1 text-foreground">
            Autopilot for your terminal workflow.
            <span className="block">Scale effortlessly.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl px-1 text-sm leading-relaxed text-foreground/65 sm:mt-6 sm:text-base lg:text-lg">
            <span className="font-medium text-foreground">agent-dev</span> reads and edits code,
            runs shell commands with approval, and delegates complex tasks through boss
            orchestration.
          </p>
          <div className="mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 px-2 sm:mt-9 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:px-0">
            <CopyCmd cmd="npm i -g @devang0907/agent-dev" variant="hero" />
            <a
              href="https://github.com/Devang0907/agent-dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-foreground/15 bg-white/60 px-5 text-xs font-medium uppercase tracking-[0.06em] text-foreground backdrop-blur-sm transition-colors hover:bg-white sm:w-auto"
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
    id: "browser",
    label: "Browser agent",
    subtitle: "Shop & book with approval",
    title: "Browser automation",
    body: "Let the agent drive a real browser — search Amazon, compare flights, book hotels, and fill checkout flows. Every payment step pauses for your approval before anything is charged.",
    cta: "Browser automation docs",
    href: "/docs#browser-automation",
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

type ShowcaseTabId = (typeof SHOWCASE_TABS)[number]["id"];

const TERMINAL_DEMOS: Record<
  ShowcaseTabId,
  { badge: string; badgeClass: string; children: React.ReactNode }
> = {
  boss: {
    badge: "BOSS · Build",
    badgeClass: "text-purple-400",
    children: (
      <>
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
        <span className="text-green-400">bash</span>{" "}
        <span className="text-white/60">npm test</span>
        {"\n"}
        <span className="text-white/60"> ✓ 42 passed</span>
        {"\n\n"}
        <span className="text-white/80">Auth refactor complete. Trace: </span>
        <span className="text-yellow-300">/trace</span>
      </>
    ),
  },
  browser: {
    badge: "Build · Browser",
    badgeClass: "text-orange-400",
    children: (
      <>
        <span className="text-white/50">$ </span>agent{"\n"}
        <span className="text-primary">◆</span> agent{" "}
        <span className="text-white/40">claude-sonnet-4 · Build</span>
        {"\n\n"}
        <span className="text-primary">›</span> buy a wireless mouse on Amazon under $50{"\n\n"}
        <span className="text-orange-400">browser</span>{" "}
        <span className="text-white/60">goto amazon.com</span>
        {"\n"}
        <span className="text-orange-400">browser</span>{" "}
        <span className="text-white/60">type "wireless mouse" · click search</span>
        {"\n"}
        <span className="text-orange-400">browser</span>{" "}
        <span className="text-white/60">click product · add to cart</span>
        {"\n"}
        <span className="text-yellow-300">approve?</span>{" "}
        <span className="text-white/60">checkout · pay $49.99</span>
        {"\n"}
        <span className="text-white/60"> ✓ approved by user</span>
        {"\n"}
        <span className="text-orange-400">browser</span>{" "}
        <span className="text-white/60">confirm order</span>
        {"\n"}
        <span className="text-white/60"> ✓ order placed</span>
        {"\n\n"}
        <span className="text-white/80">Mouse ordered. Receipt saved.</span>
      </>
    ),
  },
  telegram: {
    badge: "Telegram · Build",
    badgeClass: "text-blue-400",
    children: (
      <>
        <span className="text-white/50">$ </span>agent --telegram{"\n"}
        <span className="text-primary">◆</span> agent{" "}
        <span className="text-white/40">gateway listening · Build</span>
        {"\n\n"}
        <span className="text-blue-400">telegram</span>{" "}
        <span className="text-white/60">@you: run tests then deploy staging</span>
        {"\n\n"}
        <span className="text-green-400">bash</span>{" "}
        <span className="text-white/60">npm test</span>
        {"\n"}
        <span className="text-white/60"> ✓ 42 passed</span>
        {"\n"}
        <span className="text-yellow-300">approve?</span>{" "}
        <span className="text-white/60">bash npm run deploy:staging</span>
        {"\n"}
        <span className="text-blue-400">telegram</span>{" "}
        <span className="text-white/60">inline ✅ approved from phone</span>
        {"\n"}
        <span className="text-green-400">bash</span>{" "}
        <span className="text-white/60">npm run deploy:staging</span>
        {"\n"}
        <span className="text-white/60"> ✓ deployed staging.agent.dev</span>
        {"\n\n"}
        <span className="text-blue-400">telegram</span>{" "}
        <span className="text-white/60">agent: staging is live 🚀</span>
        {"\n"}
        <span className="text-white/40">daily task scheduled · 09:00 UTC</span>
      </>
    ),
  },
  mcp: {
    badge: "Build · MCP",
    badgeClass: "text-emerald-400",
    children: (
      <>
        <span className="text-white/50">$ </span>agent{"\n"}
        <span className="text-primary">◆</span> agent{" "}
        <span className="text-white/40">gpt-4.1 · Build</span>
        {"\n\n"}
        <span className="text-primary">›</span> check deploy status and load project skills{"\n\n"}
        <span className="text-emerald-400">mcp</span>{" "}
        <span className="text-white/60">vercel → list_deployments</span>
        {"\n"}
        <span className="text-emerald-400">skill</span>{" "}
        <span className="text-white/60">vercel-agent-skills/deploy</span>
        {"\n"}
        <span className="text-green-400">read</span>{" "}
        <span className="text-white/60">.vercel/project.json</span>
        {"\n"}
        <span className="text-emerald-400">mcp</span>{" "}
        <span className="text-white/60">filesystem → read AGENTS.md</span>
        {"\n"}
        <span className="text-emerald-400">skill</span>{" "}
        <span className="text-white/60">cursor-rules → inject rules</span>
        {"\n"}
        <span className="text-white/60"> ✓ 2 MCP servers · 4 skills loaded</span>
        {"\n\n"}
        <span className="text-white/80">Production </span>
        <span className="text-emerald-400">READY</span>
        <span className="text-white/80"> · agent-dev-a3f91c</span>
      </>
    ),
  },
};

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
    <section className="mx-2 pt-8 pb-6 sm:mx-4 sm:pt-14 sm:pb-8 lg:mx-5">
      <h2 className="ref-section-title mb-5 px-2 text-center text-foreground sm:mb-8 sm:px-0">
        Empowering autonomous development with
      </h2>
      <LogoTicker />

      <div className="hero-frame ref-sky-bg editorial-shadow overflow-hidden">
        <div className="border-b border-black/8 px-3 pt-4 sm:px-8 sm:pt-6">
          <div className="scrollbar-none -mx-1 flex gap-5 overflow-x-auto px-1 pb-0 sm:mx-0 sm:gap-10 sm:px-0">
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

        <div className="grid gap-6 p-4 sm:gap-8 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">
          <div className="flex flex-col justify-center">
            <h2 className="ref-section-title text-foreground">{tab.title}</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/65 sm:mt-5 sm:text-base">{tab.body}</p>
            <a
              href={tab.href}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-90 sm:mt-8 sm:w-fit"
            >
              {tab.cta}
            </a>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-2xl sm:min-h-[380px] sm:rounded-[20px]">
            <img
              src="/new%20bg%202.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-sky-200/20 pointer-events-none" />
            {active === "browser" ? (
              <div className="absolute inset-2 sm:inset-4 md:inset-6">
                <div className="h-full overflow-hidden rounded-xl bg-white/92 p-1.5 shadow-lg backdrop-blur-md sm:rounded-2xl sm:p-2">
                  <BrowserShowcase className="h-full" />
                </div>
              </div>
            ) : (
              <div className="absolute inset-x-2 bottom-2 sm:inset-x-4 sm:bottom-4 md:inset-x-6 md:bottom-6">
                <div className="rounded-xl bg-white/92 p-1.5 shadow-lg backdrop-blur-md sm:rounded-2xl sm:p-2">
                  <TerminalDemo compact variant={active} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CopyCmd({ cmd, variant = "default" }: { cmd: string; variant?: "default" | "hero" }) {
  const [copied, setCopied] = useState(false);
  const isHero = variant === "hero";

  const copy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  if (isHero) {
    return (
      <div className="inline-flex h-11 w-full max-w-lg items-stretch overflow-hidden rounded-lg bg-foreground sm:w-auto">
        <div className="flex min-w-0 flex-1 items-center overflow-x-auto">
          <code className="terminal-mono terminal-selectable whitespace-nowrap px-4 text-left text-xs font-normal normal-case tracking-normal text-background">
            $ {cmd}
          </code>
        </div>
        <button
          type="button"
          onClick={copy}
          className="shrink-0 border-l border-background/15 px-4 text-xs font-semibold uppercase tracking-[0.08em] text-background/70 transition-colors hover:bg-background/10 hover:text-background"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>
    );
  }

  return (
    <div className="group inline-flex h-11 max-w-full items-center gap-2 overflow-x-auto rounded-full bg-foreground px-4 text-xs font-semibold uppercase tracking-[0.08em] text-background sm:gap-3 sm:px-5">
      <code className="terminal-mono terminal-selectable whitespace-nowrap font-semibold">
        <span className="text-background/60">$</span> {cmd}
      </code>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 text-[10px] text-background/60 transition-colors hover:text-background"
      >
        {copied ? "copied ✓" : "copy"}
      </button>
    </div>
  );
}

function TerminalDemo({
  compact = false,
  variant = "boss",
}: {
  compact?: boolean;
  variant?: ShowcaseTabId;
}) {
  const demo = TERMINAL_DEMOS[variant];

  return (
    <div
      className={`flex flex-col overflow-hidden bg-terminal text-terminal-foreground ${
        compact ? "h-[280px] rounded-lg sm:h-[330px] sm:rounded-xl" : "rounded-[18px] sm:rounded-[20px]"
      }`}
    >
      <div className="flex h-8 shrink-0 items-center justify-between gap-2 border-b border-white/10 px-2.5 sm:h-9 sm:px-3">
        <div className="flex shrink-0 gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/80 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/80 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-green-400/80 sm:h-2.5 sm:w-2.5" />
        </div>
        <span className="hidden min-w-0 truncate text-[9px] text-white/40 sm:inline sm:text-[10px]">
          ~/projects/app — agent-dev
        </span>
        <span className={`shrink-0 text-[9px] sm:text-[10px] ${demo.badgeClass}`}>{demo.badge}</span>
      </div>
      <div
        className={`min-h-0 flex-1 overflow-x-auto overflow-y-auto ${
          compact ? "max-h-[248px] sm:max-h-[294px]" : ""
        }`}
      >
        <pre
          className={`terminal-mono terminal-selectable whitespace-pre-wrap ${
            compact
              ? "px-3 py-3 text-[9px] leading-relaxed sm:px-4 sm:py-4 sm:text-[10px]"
              : "px-6 py-6 text-[12px] leading-relaxed"
          }`}
        >
          {demo.children}
          {"\n\n"}
          <span className="text-primary">›</span> <span className="blink pointer-events-none select-none" />
        </pre>
      </div>
    </div>
  );
}

function Install() {
  const [method, setMethod] = useState<"npm" | "source">("npm");

  const installLines =
    method === "npm"
      ? ["$ npm i -g @devang0907/agent-dev", "$ agent"]
      : [
          "$ git clone https://github.com/Devang0907/agent-dev.git",
          "$ cd agent-dev && npm install",
          "$ npm run dev",
        ];

  return (
    <section id="install" className="scroll-mt-24 py-8 sm:scroll-mt-28 sm:py-14">
      <div className="hero-frame ref-sky-bg editorial-shadow overflow-hidden">
        <div className="grid gap-8 p-5 sm:gap-10 sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:p-12">
          <div className="flex flex-col justify-center lg:pr-4">
            <p className="editorial-label text-foreground/50">Get started</p>
            <h2 className="ref-section-title mt-3 text-foreground">Quick start</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/65 sm:text-base">
              Install in under a minute. Set one API key, open your project, and start
              coding with the agent in your terminal.
            </p>

            <ol className="mt-6 space-y-4">
              {[
                {
                  step: "01",
                  title: "Install",
                  body: "Global npm install or clone the repo for local development.",
                },
                {
                  step: "02",
                  title: "Configure",
                  body: "Export at least one provider key — OpenRouter works out of the box.",
                },
                {
                  step: "03",
                  title: "Launch",
                  body: "Run agent in any project folder. Requires Node.js 20+.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="editorial-label mt-0.5 shrink-0 text-foreground/35">{item.step}</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-foreground/55">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 w-full sm:w-auto">
              <CopyCmd cmd="npm i -g @devang0907/agent-dev" variant="hero" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-white/70 bg-white/65 p-4 backdrop-blur-sm sm:rounded-[20px] sm:p-5">
              <div className="flex gap-4 border-b border-black/8 pb-3">
                <button
                  type="button"
                  onClick={() => setMethod("npm")}
                  className={`border-b-2 pb-2 text-left transition-colors ${
                    method === "npm"
                      ? "border-foreground text-foreground"
                      : "border-transparent text-foreground/45 hover:text-foreground/70"
                  }`}
                >
                  <span className="block text-sm font-medium">Global install</span>
                  <span className="mt-0.5 block text-[11px] text-foreground/50">Recommended</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMethod("source")}
                  className={`border-b-2 pb-2 text-left transition-colors ${
                    method === "source"
                      ? "border-foreground text-foreground"
                      : "border-transparent text-foreground/45 hover:text-foreground/70"
                  }`}
                >
                  <span className="block text-sm font-medium">From source</span>
                  <span className="mt-0.5 block text-[11px] text-foreground/50">Contributors</span>
                </button>
              </div>

              <div className="mt-4">
                <TerminalCodeBlock
                  title={method === "npm" ? "terminal" : "from source"}
                  lines={installLines}
                  copyText={installLines.join("\n")}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/65 p-4 backdrop-blur-sm sm:rounded-[20px] sm:p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">API keys</p>
                  <p className="mt-0.5 text-xs text-foreground/55">Add to ~/.bashrc or ~/.zshrc</p>
                </div>
                <span className="editorial-label shrink-0 text-foreground/40">Step 02</span>
              </div>
              <TerminalCodeBlock
                title="environment"
                lines={[
                  "export OPENROUTER_API_KEY=sk-or-...   # free models",
                  "export OPENAI_API_KEY=sk-...          # ChatGPT",
                  "export ANTHROPIC_API_KEY=sk-ant-...   # Claude",
                  "export GROQ_API_KEY=gsk_...           # Groq",
                  "export GEMINI_API_KEY=...             # Gemini",
                ]}
                copyText={`export OPENROUTER_API_KEY=sk-or-...
export OPENAI_API_KEY=sk-...
export ANTHROPIC_API_KEY=sk-ant-...
export GROQ_API_KEY=gsk_...
export GEMINI_API_KEY=...`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    title: "Build · Plan · Boss",
    desc: "Full tool access, read-only exploration, or a boss orchestrator that delegates to specialized workers.",
    href: "/docs#agent-modes",
    tag: "Modes",
  },
  {
    title: "Browser automation",
    desc: "Shop on Amazon, book flights and hotels, and complete checkouts — with payment approval before anything is charged.",
    href: "/docs#browser-automation",
    tag: "Browser",
  },
  {
    title: "Bring your own model",
    desc: "OpenRouter free tier, Claude, GPT, Groq, or Gemini. Switch anytime with /model.",
    href: "/docs#providers",
    tag: "Models",
  },
  {
    title: "Telegram gateway",
    desc: "Chat from your phone with inline approvals, reminders, and daily scheduled tasks.",
    href: "/docs#telegram-gateway",
    tag: "Mobile",
  },
  {
    title: "Skills & MCP",
    desc: "Load Vercel Agent Skills and connect MCP servers for filesystems, APIs, and custom workflows.",
    href: "/docs#skills",
    tag: "Extend",
  },
  {
    title: "Compaction & rules",
    desc: "Auto-compact long sessions, inject rules from AGENTS.md, and configure permission presets.",
    href: "/docs#context-compaction",
    tag: "Context",
  },
] as const;

function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-8 sm:scroll-mt-28 sm:py-14">
      <div className="hero-frame ref-sky-bg editorial-shadow overflow-hidden">
        <div className="grid gap-8 p-5 sm:gap-10 sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:p-12">
          <div className="flex flex-col justify-center lg:pr-4">
            <p className="editorial-label text-foreground/50">Capabilities</p>
            <h2 className="ref-section-title mt-3 text-foreground">Everything in one agent</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/65 sm:text-base">
              One terminal session for reading code, running tests, delegating work, and shipping —
              without leaving your shell.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-foreground/60">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                20 tools with approval gates for destructive actions
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                Boss orchestration for complex multi-step tasks
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                MCP, skills, and Telegram when you need more reach
              </li>
            </ul>
            <Link
              to="/docs"
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-90 sm:w-fit"
            >
              Full documentation →
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <a
                key={f.title}
                href={f.href}
                className="group flex flex-col rounded-2xl border border-white/70 bg-white/65 p-4 backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:shadow-md sm:rounded-[20px] sm:p-5"
              >
                <span className="editorial-label text-foreground/40">{f.tag}</span>
                <h3 className="mt-2 text-sm font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-foreground/55 sm:text-sm sm:text-foreground/60">
                  {f.desc}
                </p>
                <span className="mt-4 text-[10px] font-medium uppercase tracking-[0.08em] text-foreground/45 transition-colors group-hover:text-foreground">
                  read docs →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="pb-8 pt-2 sm:pb-16 sm:pt-4">
      <div className="hero-frame editorial-shadow relative min-h-[240px] overflow-hidden sm:min-h-[300px]">
        <img
          src="/hero-sky-landscape.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white/85 via-white/70 to-white/40" />
        <div className="relative flex h-full min-h-[240px] flex-col items-start justify-center gap-5 p-6 sm:min-h-[300px] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-12">
          <div>
            <h2 className="ref-section-title text-foreground">Stop context-switching.</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/65 sm:text-base">
              Ship code without leaving the terminal.
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <CopyCmd cmd="npm i -g @devang0907/agent-dev" variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TerminalCodeBlock({
  title,
  lines,
  copyText,
}: {
  title: string;
  lines: string[];
  copyText?: string;
}) {
  const [copied, setCopied] = useState(false);
  const textToCopy = copyText ?? lines.join("\n");

  return (
    <div className="overflow-hidden rounded-xl bg-terminal text-terminal-foreground shadow-lg sm:rounded-2xl">
      <div className="flex items-center justify-between gap-2 border-b border-white/10 px-3 py-2 sm:px-4 sm:py-2.5">
        <span className="text-[10px] uppercase tracking-[0.08em] text-white/40">{title}</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(textToCopy);
              setCopied(true);
              setTimeout(() => setCopied(false), 1400);
            }}
            className="text-[10px] uppercase tracking-[0.06em] text-white/35 transition-colors hover:text-white/70"
          >
            {copied ? "copied ✓" : "copy"}
          </button>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/80 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/80 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-green-400/80 sm:h-2.5 sm:w-2.5" />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <pre className="terminal-mono terminal-selectable whitespace-pre px-3 py-3 text-[11px] leading-relaxed sm:px-4 sm:py-4 sm:text-xs">
          {lines.join("\n")}
        </pre>
      </div>
    </div>
  );
}
