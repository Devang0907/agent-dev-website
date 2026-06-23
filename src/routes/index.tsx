import { createFileRoute } from "@tanstack/react-router";
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
          "A minimal terminal coding agent with an Ink TUI. Read and edit code, search the web, run git/shell with approval, use MCP servers, load skills, control a browser, chat via Telegram, and optionally delegate through a boss orchestrator.",
      },
      { property: "og:title", content: "agent-dev — terminal coding agent with Ink TUI" },
      {
        property: "og:description",
        content:
          "Chat with an AI in your terminal. 19 built-in tools, Telegram gateway, browser automation, Build/Plan modes, boss orchestrator, MCP, and Vercel Agent Skills.",
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
            "A minimal terminal coding agent with an Ink TUI. ReAct loop with 19 tools, Telegram gateway, browser automation, boss orchestrator, MCP, and skills.",
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
        <Modes />
        <Tools />
        <Providers />
        <Telegram />
        <Commands />
        <SkillsMcp />
        <Config />
        <CTA />
      </main>
      <SiteFooter />
    </div>
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
          Ink TUI · Telegram · Browser · Node 20+
        </div>
        <h1 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          AI in your terminal.
          <br />
          <span className="text-muted-foreground">Build, plan, or boss it.</span>
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          <span className="text-foreground">agent-dev</span> is a minimal terminal coding agent.
          Chat with an AI that reads and edits code, searches the web, runs git and shell commands
          (with approval), uses MCP servers, loads skills, controls a real Chromium browser,
          schedules Telegram reminders — and optionally delegates work through a{" "}
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
          <span>● 19 built-in tools</span>
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
export ANTHROPIC_API_KEY=sk-ant-...   # Claude
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
    ["explore", "read-only research", "read, grep, git, docs, browser"],
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
    ["diff", "Preview unified diff before applying changes"],
    ["grep", "Search codebase (ripgrep; findstr on Windows)"],
    ["git", "Git status, diff, log, commit — writes need approval"],
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
    ["schedule", "Telegram reminders and daily tasks (gateway must run)"],
    ["browser", "Control Chromium — navigate, click, extract, screenshot"],
  ];
  const browserActions = [
    ["open / goto", "Launch browser or navigate to a URL"],
    ["click / type / select", "Interact with page elements via CSS selectors"],
    ["getPageContent / extract", "Inspect page text and element values"],
    ["screenshot", "Save PNG to ~/.agent-dev/screenshots/"],
    ["listTabs / switchTab", "Multi-tab control across a session"],
    ["waitForUser", "Pause for CAPTCHA, OTP, or manual payment"],
  ];
  return (
    <Section id="tools" label="03" title="19 built-in tools">
      <p className="-mt-4 mb-6 text-sm text-muted-foreground">
        18 in normal mode; <code className="text-foreground">delegate</code> is boss-only. File ops
        are scoped to the working directory. Shell, git writes, SQL mutations, MCP calls, and
        destructive browser actions prompt for approval (
        <code className="text-foreground">y</code> / <code className="text-foreground">n</code>).
      </p>
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {tools.map(([k, d]) => (
          <div key={k} className="bg-card px-4 py-3">
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-bold text-primary">{k}</span>
              {k === "delegate" && (
                <span className="text-[10px] text-purple-500 dark:text-purple-400">boss</span>
              )}
              {k === "browser" && (
                <span className="text-[10px] text-sky-500 dark:text-sky-400">new</span>
              )}
              {k === "schedule" && (
                <span className="text-[10px] text-sky-500 dark:text-sky-400">telegram</span>
              )}
            </div>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>

      <div id="browser" className="mt-6 rounded-md border border-border bg-card p-5">
        <h3 className="text-sm font-semibold">Browser automation</h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          The agent can interact with real websites — fill forms, click buttons, extract data, and
          take screenshots. Runs <strong className="text-foreground">visible by default</strong> so
          you can watch it work. Session state (tabs, cookies) persists across tool calls.
        </p>
        <CodeBlock
          title="one-time setup"
          lines={["$ npx playwright install chromium"]}
        />
        <div className="mt-4 overflow-hidden rounded-md border border-border">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-secondary/50 text-[10px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-3 py-2 font-medium">Action</th>
                <th className="px-3 py-2 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {browserActions.map(([action, desc]) => (
                <tr key={action} className="border-b border-border last:border-0">
                  <td className="px-3 py-2 font-semibold text-primary">{action}</td>
                  <td className="px-3 py-2 text-muted-foreground">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Plan mode allows read-only browser actions only. Form interactions and purchases require
          Build mode and may prompt for approval.
        </p>
      </div>
    </Section>
  );
}

function Providers() {
  const rows = [
    ["OpenAI (ChatGPT)", "OPENAI_API_KEY", "gpt-4o, gpt-4.1, o4-mini"],
    ["Anthropic (Claude)", "ANTHROPIC_API_KEY", "claude-sonnet-4-6, claude-opus-4-8, claude-haiku-4-5"],
    ["Groq", "GROQ_API_KEY", "llama-3.3-70b-versatile, llama-3.1-8b-instant"],
    ["Google Gemini", "GEMINI_API_KEY or GOOGLE_API_KEY", "gemini-2.5-pro, gemini-2.5-flash"],
    ["Free (OpenRouter)", "OPENROUTER_API_KEY", "meta-llama/llama-3.3-70b-instruct:free"],
  ];
  const freeModels = [
    ["Free auto (recommended)", "openrouter/free"],
    ["Llama 3.3 70B (free)", "meta-llama/llama-3.3-70b-instruct:free"],
    ["Qwen3 Coder (free)", "qwen/qwen3-coder:free"],
    ["Qwen3 Next 80B (free)", "qwen/qwen3-next-80b-a3b-instruct:free"],
    ["GPT-OSS 120B (free)", "openai/gpt-oss-120b:free"],
    ["Gemma 4 26B (free)", "google/gemma-4-26b-a4b-it:free"],
  ];
  return (
    <Section id="providers" label="04" title="bring your own model">
      <p className="-mt-4 mb-6 text-sm text-muted-foreground">
        Model refs use <code className="text-foreground">provider/model-id</code>, e.g.{" "}
        <code className="text-foreground">anthropic/claude-sonnet-4-6</code> or{" "}
        <code className="text-foreground">free/openrouter/free</code>. Default:{" "}
        <code className="text-foreground">free/meta-llama/llama-3.3-70b-instruct:free</code>.
        Retired free slugs are remapped automatically.
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

function Telegram() {
  const tgCommands = [
    ["/start", "Welcome guide — commands, tools, project path"],
    ["/build, /plan, /boss", "Switch agent modes from Telegram"],
    ["/model <provider/id>", "Switch model remotely"],
    ["/schedules", "List active reminders and daily tasks"],
    ["/stop", "Abort the current turn"],
    ["/whoami", "Show your Telegram user ID for setup"],
  ];
  return (
    <Section id="telegram" label="05" title="telegram gateway">
      <p className="-mt-4 mb-6 text-sm text-muted-foreground">
        Chat with agent-dev from your phone via Telegram. The gateway runs on your PC with
        long-polling — no public URL or port forwarding. Shell/git/exec approvals arrive as{" "}
        <strong className="text-foreground">Approve / Deny</strong> inline buttons. Set reminders
        and daily tasks (e.g. morning news) while the gateway is running.
      </p>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-4">
          <CodeBlock
            title="setup via /connect in TUI"
            lines={[
              "# 1. Create a bot with @BotFather, save the token",
              "# 2. In agent-dev run /connect → Telegram",
              "# 3. DM your bot, send /whoami, add ID to allowlist",
            ]}
          />
          <CodeBlock
            title="or settings.json"
            lines={[
              "{",
              '  "telegram": {',
              '    "botToken": "123456789:ABCdef...",',
              '    "allowedUserIds": [987654321],',
              '    "workdir": "D:/projects/MyRepo"',
              "  }",
              "}",
            ]}
          />
        </div>
        <div className="space-y-4">
          <CodeBlock
            title="run the gateway"
            lines={[
              "$ agent telegram --workdir D:/projects/MyRepo",
              "$ agent telegram --boss --verbose",
            ]}
          />
          <div className="rounded-md border border-border bg-terminal p-4 text-xs leading-relaxed text-terminal-foreground">
            <div className="mb-2 text-white/40"># live gateway log</div>
            <pre>{`[user] (123456789) list files in src
[agent] Here are the files in src/...
[tool] Running: grep pattern
[approval] npm test
[approval] Approved`}</pre>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-md border border-border bg-card">
          <div className="border-b border-border px-4 py-2 text-xs text-muted-foreground">
            telegram commands
          </div>
          <table className="w-full text-left text-xs">
            <tbody>
              {tgCommands.map(([cmd, desc]) => (
                <tr key={cmd} className="border-b border-border last:border-0">
                  <td className="px-4 py-2.5 font-mono text-primary">{cmd}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-md border border-border bg-card p-5">
          <h3 className="text-sm font-semibold">Reminders & scheduled tasks</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Ask the agent to remind you later or run recurring tasks. Uses the{" "}
            <code className="text-foreground">schedule</code> tool — a background scheduler checks
            every 30 seconds and delivers due items to your chat.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-sm border border-border bg-background p-3 text-[11px] leading-relaxed text-muted-foreground">
            {`Remind me to drink water in 5 minutes
Send me top news headlines every morning at 8:00`}
          </pre>
          <p className="mt-3 text-xs text-muted-foreground">
            Only users in <code className="text-foreground">allowedUserIds</code> can chat. Treat
            the bot token like a password.
          </p>
        </div>
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
    ["/connect", "Configure Telegram gateway (bot token & allowed user IDs)"],
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
    ["agent telegram --workdir ./my-repo", "Start Telegram gateway"],
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
    <Section id="commands" label="06" title="commands & cli">
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
    <Section id="skills" label="07" title="skills & mcp">
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
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "D:/projects"]
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
    <Section id="config" label="08" title="configuration">
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
                ["telegram-sessions.json", "Telegram chat → session id mapping"],
                ["schedules.json", "Active reminders and daily scheduled tasks"],
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
        <code className="text-foreground">"boss"</code> to enable boss mode by default. Env vars:{" "}
        <code className="text-foreground">TELEGRAM_BOT_TOKEN</code>,{" "}
        <code className="text-foreground">TELEGRAM_ALLOWED_USER_IDS</code>,{" "}
        <code className="text-foreground">AGENT_DEV_DIR</code>. Single-agent ReAct loop — boss mode
        nests additional loops inside the <code className="text-foreground">delegate</code> tool.
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
