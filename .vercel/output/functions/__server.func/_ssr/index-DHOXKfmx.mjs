import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as SiteNav, a as SiteFooter } from "./site-nav-ByVFRg9K.mjs";
import { B as BananaSlug } from "../_libs/github-slugger.mjs";
import { M as Markdown } from "../_libs/react-markdown.mjs";
import { r as rehypeSlug } from "../_libs/rehype-slug.mjs";
import { r as rehypeAutolinkHeadings } from "../_libs/rehype-autolink-headings.mjs";
import { r as remarkGfm } from "../_libs/remark-gfm.mjs";
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
import "../_libs/devlop.mjs";
import "../_libs/unified.mjs";
import "../_libs/bail.mjs";
import "../_libs/extend.mjs";
import "../_libs/is-plain-obj.mjs";
import "../_libs/trough.mjs";
import "../_libs/vfile.mjs";
import "../_libs/vfile-message.mjs";
import "../_libs/unist-util-stringify-position.mjs";
import "node:process";
import "node:path";
import "node:url";
import "../_libs/remark-parse.mjs";
import "../_libs/mdast-util-from-markdown.mjs";
import "../_libs/micromark-util-decode-numeric-character-reference+[...].mjs";
import "../_libs/micromark-util-decode-string.mjs";
import "../_libs/decode-named-character-reference+[...].mjs";
import "../_libs/character-entities.mjs";
import "../_libs/micromark-util-normalize-identifier+[...].mjs";
import "../_libs/micromark.mjs";
import "../_libs/micromark-util-combine-extensions+[...].mjs";
import "../_libs/micromark-util-chunked.mjs";
import "../_libs/micromark-factory-space.mjs";
import "../_libs/micromark-util-character.mjs";
import "../_libs/micromark-core-commonmark.mjs";
import "../_libs/micromark-util-classify-character+[...].mjs";
import "../_libs/micromark-util-resolve-all.mjs";
import "../_libs/micromark-util-subtokenize.mjs";
import "../_libs/micromark-factory-destination.mjs";
import "../_libs/micromark-factory-label.mjs";
import "../_libs/micromark-factory-title.mjs";
import "../_libs/micromark-factory-whitespace.mjs";
import "../_libs/micromark-util-html-tag-name.mjs";
import "../_libs/mdast-util-to-string.mjs";
import "../_libs/remark-rehype.mjs";
import "../_libs/mdast-util-to-hast.mjs";
import "../_libs/ungap__structured-clone.mjs";
import "../_libs/micromark-util-sanitize-uri.mjs";
import "../_libs/unist-util-position.mjs";
import "../_libs/trim-lines.mjs";
import "../_libs/unist-util-visit.mjs";
import "../_libs/unist-util-visit-parents.mjs";
import "../_libs/unist-util-is.mjs";
import "../_libs/hast-util-to-jsx-runtime.mjs";
import "../_libs/comma-separated-tokens.mjs";
import "../_libs/property-information.mjs";
import "../_libs/space-separated-tokens.mjs";
import "../_libs/style-to-js.mjs";
import "../_libs/style-to-object.mjs";
import "../_libs/inline-style-parser.mjs";
import "../_libs/hast-util-whitespace.mjs";
import "../_libs/estree-util-is-identifier-name.mjs";
import "../_libs/html-url-attributes.mjs";
import "../_libs/hast-util-heading-rank.mjs";
import "../_libs/hast-util-to-string.mjs";
import "../_libs/hast-util-is-element.mjs";
import "../_libs/micromark-extension-gfm.mjs";
import "../_libs/micromark-extension-gfm-autolink-literal+[...].mjs";
import "../_libs/micromark-extension-gfm-footnote+[...].mjs";
import "../_libs/micromark-extension-gfm-strikethrough+[...].mjs";
import "../_libs/micromark-extension-gfm-table.mjs";
import "../_libs/micromark-extension-gfm-task-list-item+[...].mjs";
import "../_libs/mdast-util-gfm.mjs";
import "../_libs/mdast-util-gfm-autolink-literal+[...].mjs";
import "../_libs/ccount.mjs";
import "../_libs/mdast-util-find-and-replace.mjs";
import "../_libs/escape-string-regexp.mjs";
import "../_libs/mdast-util-gfm-footnote.mjs";
import "../_libs/mdast-util-gfm-strikethrough.mjs";
import "../_libs/mdast-util-gfm-table.mjs";
import "../_libs/markdown-table.mjs";
import "../_libs/mdast-util-to-markdown.mjs";
import "../_libs/longest-streak.mjs";
import "../_libs/mdast-util-phrasing.mjs";
import "../_libs/mdast-util-gfm-task-list-item.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function groupTocItems(items) {
  const groups = [];
  let current = null;
  for (const item of items) {
    if (item.level === 2) {
      current = { section: item, children: [] };
      groups.push(current);
    } else if (current) {
      current.children.push(item);
    }
  }
  return groups;
}
function TocLink({
  item,
  activeId,
  nested = false,
  onSelect
}) {
  const active = activeId === item.id;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: () => onSelect(item.id),
      className: cn(
        "docs-toc-link relative w-full rounded-sm text-left transition-colors",
        nested ? "py-1 pl-3 pr-2 text-[11px] leading-snug" : "py-1.5 pl-3 pr-2 text-xs leading-snug",
        active ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "aria-hidden": true,
            className: cn(
              "absolute left-0 top-1 bottom-1 w-0.5 rounded-full transition-colors",
              active ? "bg-primary" : "bg-transparent"
            )
          }
        ),
        item.text
      ]
    }
  );
}
function DocsSidebar({ items }) {
  const groups = reactExports.useMemo(() => groupTocItems(items), [items]);
  const [activeId, setActiveId] = reactExports.useState(items[0]?.id ?? "");
  reactExports.useEffect(() => {
    const headings = items.map((item) => document.getElementById(item.id)).filter((el) => el !== null);
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-88px 0px -55% 0px", threshold: 0 }
    );
    for (const heading of headings) {
      observer.observe(heading);
    }
    return () => observer.disconnect();
  }, [items]);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
    history.replaceState(null, "", `#${id}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "docs-toc-mobile mb-8 lg:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-[10px] uppercase tracking-wider text-muted-foreground", children: "On this page" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "docs-toc-mobile-scroll flex gap-2 overflow-x-auto pb-1", children: groups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => scrollTo(group.section.id),
          className: cn(
            "shrink-0 rounded-sm border px-2.5 py-1 text-[11px] transition-colors",
            activeId === group.section.id || group.children.some((child) => child.id === activeId) ? "border-primary bg-primary/10 text-foreground" : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
          ),
          children: group.section.text
        },
        group.section.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "docs-toc-panel sticky top-[4.75rem] rounded-md border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-4 py-2.5 text-[10px] uppercase tracking-wider text-muted-foreground", children: "On this page" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "docs-toc-scroll max-h-[calc(100vh-6.5rem)] overflow-y-auto px-2 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: groups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TocLink, { item: group.section, activeId, onSelect: scrollTo }),
        group.children.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-0.5 space-y-0.5 border-l border-border/80 pl-2", children: group.children.map((child) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TocLink,
          {
            item: child,
            activeId,
            nested: true,
            onSelect: scrollTo
          }
        ) }, child.id)) })
      ] }, group.section.id)) }) })
    ] }) })
  ] });
}
const components = {
  a: ({ href, children, ...props }) => {
    const external = href?.startsWith("http");
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href,
        target: external ? "_blank" : void 0,
        rel: external ? "noreferrer" : void 0,
        ...props,
        children
      }
    );
  },
  pre: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "docs-code-block overflow-x-auto rounded-md border border-border bg-terminal p-4 text-xs leading-relaxed text-terminal-foreground", children }),
  code: ({ className, children, ...props }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: cn("font-mono", className), ...props, children });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "rounded-sm border border-border bg-secondary/60 px-1 py-0.5 text-[0.9em] text-foreground", ...props, children });
  },
  table: ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "docs-table-wrap overflow-x-auto rounded-md border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { children }) }),
  h2: ({ id, children, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id, className: "docs-heading docs-h2", ...props, children }),
  h3: ({ id, children, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id, className: "docs-heading docs-h3", ...props, children })
};
function MarkdownDoc({ content, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: cn("docs-prose", className), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Markdown,
    {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }]
      ],
      components,
      children: content
    }
  ) });
}
function stripMarkdown(text) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`]/g, "").trim();
}
function parseHeadings(markdown) {
  const slugger = new BananaSlug();
  const items = [];
  const regex = /^(#{2,3})\s+(.+)$/gm;
  let match;
  while ((match = regex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = stripMarkdown(match[2]);
    items.push({ level, text, id: slugger.slug(text) });
  }
  return items;
}
const readme = '# agent-dev\n\nA minimal terminal coding agent with an Ink TUI. Chat with an AI that can read and edit code, search the web, run git/shell commands (with approval), use MCP servers, load skills, schedule Telegram reminders and daily tasks, and optionally delegate work through a **boss orchestrator** that coordinates specialized worker agents.\n\n## Quick start\n\n**From source:**\n\n```bash\ngit clone https://github.com/Devang0907/agent-dev.git\ncd agent-dev\nnpm install\nnpm run dev\n```\n\n**Global install (npm):**\n\n```bash\nnpm install -g @devang0907/agent-dev\nagent\n```\n\nSet at least one API key:\n\n```bash\nexport OPENROUTER_API_KEY=sk-or-...   # Free models (default)\nexport OPENAI_API_KEY=sk-...          # ChatGPT\nexport ANTHROPIC_API_KEY=sk-ant-...   # Claude\nexport GROQ_API_KEY=gsk_...           # Groq\nexport GEMINI_API_KEY=...             # Google Gemini\n```\n\nRequires **Node.js 20+**.\n\n## Providers\n\n| Provider | Env var | Example models |\n|----------|---------|----------------|\n| OpenAI (ChatGPT) | `OPENAI_API_KEY` | `gpt-4o`, `gpt-4.1`, `o4-mini` |\n| Anthropic (Claude) | `ANTHROPIC_API_KEY` | `claude-sonnet-4-6`, `claude-opus-4-8`, `claude-haiku-4-5-20251001` |\n| Groq | `GROQ_API_KEY` | `llama-3.3-70b-versatile`, `llama-3.1-8b-instant` |\n| Google Gemini | `GEMINI_API_KEY` or `GOOGLE_API_KEY` | `gemini-2.5-pro`, `gemini-2.5-flash` |\n| Free (OpenRouter) | `OPENROUTER_API_KEY` | See [free models](#free-models-openrouter) below |\n\nModel refs use `provider/model-id`, e.g. `anthropic/claude-sonnet-4-6`, `openai/gpt-4.1`, or `free/openrouter/free`.\n\n### Free models (OpenRouter)\n\nFree models use the `:free` suffix on OpenRouter. Availability changes often — agent-dev migrates retired slugs and retries fallbacks automatically. If a model fails, use **`/model openrouter/free`** (auto-picks a working free model).\n\n| Model | Slug |\n|-------|------|\n| Free auto (recommended) | `openrouter/free` |\n| Llama 3.3 70B (free) | `meta-llama/llama-3.3-70b-instruct:free` |\n| Qwen3 Coder (free) | `qwen/qwen3-coder:free` |\n| Qwen3 Next 80B (free) | `qwen/qwen3-next-80b-a3b-instruct:free` |\n| GPT-OSS 120B (free) | `openai/gpt-oss-120b:free` |\n| Gemma 4 26B (free) | `google/gemma-4-26b-a4b-it:free` |\n\nRetired slugs like `deepseek/deepseek-r1:free` and `qwen/qwen3-235b-a22b:free` are remapped automatically on load.\n\nDefault provider/model: `free/meta-llama/llama-3.3-70b-instruct:free`.\n\n## CLI\n\n```bash\nnpm run dev                                    # Interactive TUI\nnpm run dev -- -p "List files in src"          # Print mode (no TUI)\nnpm run dev -- --boss                          # Start in boss orchestrator mode\nnpm run dev -- --boss -p "refactor auth module" # Boss mode, print and exit\nnpm run dev -- -c                              # Continue last session\nnpm run dev -- --model groq/llama-3.3-70b-versatile "hello"\nnpm run build && npm start                     # Production build\nnpm test                                       # Run test suite\nnpm run test:watch                             # Watch mode\nnpm run test:coverage                          # Coverage report\n```\n\n| Flag | Description |\n|------|-------------|\n| `-p`, `--print` | Print response and exit |\n| `-c`, `--continue` | Resume the most recent session |\n| `--boss` | Enable boss orchestrator mode |\n| `--model <ref>` | Provider/model (e.g. `openai/gpt-4o`) |\n| `-h`, `--help` | Show help |\n\n**Skills subcommand:**\n\n```bash\nagent skills add vercel-labs/agent-skills\nagent skills add vercel-labs/agent-skills -g    # global\nagent skills find react\nagent skills list\n```\n\n## Telegram gateway\n\nChat with agent-dev from your phone via Telegram (OpenClaw-style). The gateway runs on your PC, uses long-polling (no public URL or port forwarding), and forwards DMs to the agent. Shell/git/exec approvals arrive as **Approve / Deny** inline buttons. You can also set **reminders** and **daily tasks** (e.g. morning news) that fire while the gateway is running.\n\nOn first connect, send `/start` (or any message) to receive a welcome guide with available commands and capabilities.\n\n### Setup\n\n1. **Create a bot** — open [@BotFather](https://t.me/BotFather) in Telegram, run `/newbot`, save the token.\n\n2. **Configure** — use `/connect` in the TUI (recommended), or add to `~/.agent-dev/settings.json` manually:\n\n```json\n{\n  "telegram": {\n    "botToken": "123456789:ABCdef...",\n    "allowedUserIds": [987654321],\n    "workdir": "D:/projects/MyRepo"\n  }\n}\n```\n\nOr use environment variables:\n\n```bash\nexport TELEGRAM_BOT_TOKEN=123456789:ABCdef...\nexport TELEGRAM_ALLOWED_USER_IDS=987654321\n```\n\n**TUI setup (`/connect`):** in the interactive agent, run `/connect` to open the gateway setup screen. Choose **Telegram**, paste your `botToken`, enter `allowedUserIds` as comma-separated numbers (e.g. `123456789`), then save. Values are written to `telegram.botToken` and `telegram.allowedUserIds` in `~/.agent-dev/settings.json`. More gateways can be added here later.\n\n3. **Find your Telegram user ID** — start the gateway, DM your bot, send `/whoami`. If the allowlist is empty, check the gateway console logs for `Rejected message from user <id>`.\n\n4. **Add your ID** to `allowedUserIds`, then restart the gateway.\n\n### Run\n\n```bash\nnpm run dev -- telegram --workdir D:/projects/MyRepo\n# or after build:\nagent telegram --workdir D:/projects/MyRepo\nagent telegram --boss --verbose\n```\n\nKeep the process running while you use the bot. While the gateway runs, the terminal shows a live log of Telegram activity:\n\n```\n[user] (123456789) list files in src\n[agent] Here are the files in src/...\n[tool] Running: grep pattern\n[approval] npm test\n[approval] Approved\n```\n\nOn Windows, run it in a dedicated terminal, or use Task Scheduler / [pm2](https://pm2.keymetrics.io/) to keep it alive on login.\n\n### Telegram commands\n\n| Command | Description |\n|---------|-------------|\n| `/start` | Welcome guide — commands, tools, project path (first connect) |\n| `/help` | Show the welcome guide again |\n| `/whoami` | Show your numeric Telegram user ID |\n| `/new` | Start a new agent session |\n| `/status` | Model, workdir, session id, busy/idle |\n| `/stop` | Abort the current turn |\n| `/build` | Switch to Build mode (edit files, run shell) |\n| `/plan` | Switch to Plan mode (read-only exploration) |\n| `/boss` | Toggle boss orchestrator mode |\n| `/boss on` / `/boss off` | Enable or disable boss mode |\n| `/mode` | Show current mode and available options |\n| `/model` | List available models |\n| `/model <provider/id>` | Switch model (e.g. `/model groq/llama-3.3-70b-versatile`) |\n| `/schedules` | List active reminders and daily tasks for this chat |\n| `/compact` | Summarize older messages to free context |\n\n### Reminders and scheduled tasks\n\nWhile the Telegram gateway is running, you can ask the agent to remind you later or run recurring tasks (e.g. morning news). The agent uses the built-in **`schedule`** tool; a background scheduler checks every 30 seconds and delivers due items to your chat.\n\n**One-shot reminders** — simple notifications at a relative or absolute time:\n\n```\nRemind me to drink water in 5 minutes\nRemind me to call mom in 2 hours\n```\n\n**Daily recurring tasks** — the agent runs your instruction each day (uses `web_search` for news, etc.):\n\n```\nSend me the top news headlines every morning at 8:00\nGive me a daily weather summary at 7:30\n```\n\n| Schedule kind | When it fires |\n|---------------|---------------|\n| `reminder` | Sends `⏰ Reminder: …` in Telegram |\n| `task` | Runs the agent with your message (good for news, reports) |\n\nTiming options the agent can set: `in_minutes` (e.g. 5), `daily_at` in 24h local time (e.g. `08:00`), or `at` (ISO datetime). Schedules are stored in `~/.agent-dev/schedules.json`. Ask the agent to cancel a schedule by id, or use `/schedules` to list them.\n\n**Requirements:** the gateway process must stay running (see [Run](#run) above). If a **task** fires while the agent is busy, it retries in about a minute. **Reminders** always send immediately.\n\nWhile the agent is busy, Telegram accepts **one queued follow-up message** per chat; additional messages get a busy reply until the queue drains.\n\n### Security\n\n- Only users in `allowedUserIds` can chat with the agent (except `/whoami` for setup).\n- The bot can run shell commands on your PC after you approve them — treat the bot token like a password.\n- Do not commit `settings.json` with tokens to git.\n\n## Interactive commands\n\n| Command | Description |\n|---------|-------------|\n| `/model`, `/m [search]` | Open model selector (grouped by provider) |\n| `/build` | Switch to Build mode (full tool access) |\n| `/plan` | Switch to Plan mode (read-only exploration) |\n| `/boss` | Toggle boss orchestrator mode |\n| `/tasks` | Show the active task plan |\n| `/compact [instructions]` | Summarize older messages to free context (optional focus) |\n| `/rules` | List loaded project rule files (`AGENTS.md`, etc.) |\n| `/permissions` | Show merged permission presets for this project |\n| `/trace` | Show path to the latest worker trace log |\n| `/sessions` | Browse and load saved chat sessions |\n| `/settings` | Thinking level and API key status |\n| `/connect` | Configure gateway connection (Telegram bot token and allowed user IDs) |\n| `/skills` | Browse and install skills (Vercel CLI) |\n| `/skill <name>` | Load a skill for the current turn |\n| `/new` | Start a new session |\n| `/quit` | Exit |\n\n**Keyboard shortcuts:**\n\n- **Tab** / **Shift+Tab** — cycle Build ↔ Plan when input is empty\n- **Esc** — abort a running turn\n- **Ctrl+G** — scroll chat to latest\n- **Ctrl+U** / **Ctrl+D** — scroll chat up/down\n\n## Context compaction\n\nLong sessions can exceed model context limits. agent-dev tracks approximate token usage (footer shows `ctx 42k/128k`) and compacts older history when needed.\n\n| Trigger | Behavior |\n|---------|----------|\n| **Auto** | Before each turn when `tokens > contextWindow - reserveTokens` (default reserve 16k) |\n| **Overflow** | On provider context errors — compact once and retry the turn |\n| **Manual** | `/compact` or `/compact focus on auth changes` |\n\nCompaction is **lossy for the model** but **non-destructive on disk**: full chat history stays in `sessions/*.jsonl`; a `compaction` entry records the summary and which messages the LLM still sees.\n\nToggle auto-compaction in `/settings` or `settings.json`:\n\n```json\n{\n  "compaction": {\n    "enabled": true,\n    "reserveTokens": 16384,\n    "keepRecentTokens": 20000\n  }\n}\n```\n\nTelegram: `/compact` (same as TUI).\n\n## Project rules\n\nProject rules are markdown instructions injected into the system prompt automatically.\n\n**Discovery order** (root → specific; all matching files are concatenated):\n\n| Priority | Path |\n|----------|------|\n| 1 | `~/.agent-dev/AGENTS.md` |\n| 2 | `AGENTS.md` or `CLAUDE.md` from git root down to cwd |\n| 3 | `<workdir>/.agent-dev/AGENTS.md` |\n| 4 | `<workdir>/.agent-dev/rules/*.md` (sorted by filename) |\n\nUse `/rules` in the TUI to see which files were loaded. Total injected size is capped (default 32k characters).\n\nDisable with `AGENT_NO_PROJECT_RULES=1` or in `settings.json`:\n\n```json\n{\n  "projectRules": {\n    "enabled": false,\n    "maxChars": 32768\n  }\n}\n```\n\nBoss worker sessions do not inherit project rules in v1 (main agent loop only).\n\n## Permission presets\n\nGated tools (shell, `verify`, git writes, DB mutations, MCP `call_tool`, destructive browser actions) normally prompt for approval. Optional **`files`** rules gate `write`/`edit` when configured. Permission presets let you **allow**, **ask**, or **deny** by pattern.\n\n**Config** (project patterns append to global; **last matching rule wins**):\n\n| Scope | Path |\n|-------|------|\n| Global | `~/.agent-dev/settings.json` → `permissions` |\n| Project | `<workdir>/.agent-dev/permissions.json` |\n\nExample `permissions.json`:\n\n```json\n{\n  "bash": {\n    "*": "ask",\n    "npm test": "allow",\n    "npm test *": "allow",\n    "rm *": "deny"\n  },\n  "git": {\n    "commit": "ask",\n    "push *": "deny"\n  },\n  "database": { "*": "ask", "SELECT *": "allow" },\n  "mcp": { "call_tool": "ask" },\n  "browser": { "*": "ask" },\n  "files": { "*": "ask", ".agent-dev/plans/*": "allow" }\n}\n```\n\n`verify` uses the same **`bash`** permission rules (e.g. `npm test: allow` applies to both `bash` and `verify`).\n\nThe **`files`** category is optional — without `files` rules, `write` and `edit` are allowed without prompting. Add `files` rules for paranoid setups.\n\nShorthand: `"bash": "ask"` expands to `{ "*": "ask" }`. Put `"*": "ask"` first, then more specific patterns after.\n\nUse `/permissions` to inspect merged rules. `/settings` shows a rule count summary.\n\nRead-only git commands and `SELECT` queries stay allowed regardless of rules.\n\n## Agent modes\n\n### Build and Plan\n\nSwitch between **Build** and **Plan** mode:\n\n| Mode | Toggle | Behavior |\n|------|--------|----------|\n| **Build** (default) | Tab / `/build` | Full tool access — edit files, run shell, verify |\n| **Plan** | Tab / `/plan` | Read-only — explore code, research, write plans to `.agent-dev/plans/*.md` |\n\n- Current mode is shown in the prompt footer (`Build` or `Plan`)\n- Plan mode blocks write/edit/bash/verify/database/MCP; git write actions are denied\n- Switch Plan → Build before implementing; the agent gets a reminder to execute the plan\n\n### Boss orchestrator (opt-in)\n\nBoss mode adds a **hierarchical orchestrator** on top of the normal agent loop. The boss plans work, delegates to specialized workers sequentially, monitors their progress, and synthesizes a final answer.\n\nEnable with `--boss` or `/boss`. The footer shows **BOSS** in purple when active.\n\n```\nUser → Boss (plan + delegate)\n         ├─ explore worker   (read-only research)\n         ├─ implement worker (code changes)\n         ├─ shell worker     (commands & tests)\n         └─ plan worker      (architecture docs)\n```\n\n| Worker | Role | Tools |\n|--------|------|-------|\n| `explore` | Read-only codebase research | read, grep, git, docs, browser |\n| `implement` | Focused code changes | read, write, edit, diff, grep, verify |\n| `shell` | Commands and tests | bash, exec, verify |\n| `plan` | Planning documents | plan, read, grep |\n\nThe boss only has `plan` and `delegate` tools — it does not edit files or run shell commands directly. Worker activity is streamed in the TUI and logged to `~/.agent-dev/traces/<sessionId>/<runId>.jsonl`. Use `/trace` to find the latest log.\n\nBoss mode uses the same model you select in `/model`. Workers run in isolated contexts with scoped task briefs.\n\n## Tools\n\nThe agent has **20 built-in tools** (`delegate` is boss-only; 19 are available in normal mode):\n\n| Tool | Description |\n|------|-------------|\n| `read` | Read a file in the project directory |\n| `list_dir` | List files and directories (use instead of shell `ls`) |\n| `write` | Create or overwrite a file |\n| `edit` | Replace text in a file |\n| `diff` | Preview unified diff before applying changes |\n| `grep` | Search codebase (ripgrep; on Windows uses **findstr**, then PowerShell) |\n| `git` | Git status, diff, log, commit, etc. (writes need approval) |\n| `bash` | Run a shell command — **requires approval** |\n| `exec` | Structured shell command (`cmd` array) — **requires approval** |\n| `web_search` | Search the internet (DuckDuckGo / Google News) |\n| `docs` | Look up npm READMEs, MDN, or fetch a docs URL |\n| `memory` | Store/recall long-term facts in `~/.agent-dev/memory.json` |\n| `plan` | Create and track multi-step task plans (supports assignee, parent task, run id) |\n| `delegate` | **Boss only** — spawn a worker agent for a focused subtask |\n| `database` | Run SQL on SQLite files (mutations need approval) |\n| `verify` | Auto-run tests/build from `package.json` scripts |\n| `mcp` | Call tools from MCP servers (see below) |\n| `skill` | Load a skill by name from `available_skills` |\n| `schedule` | Schedule Telegram reminders and daily recurring tasks (gateway must be running) |\n| `browser` | Control a real Chromium browser (navigate, click, extract, screenshot) |\n\nFile operations are restricted to the current working directory. Shell commands, git writes, SQL mutations, MCP tool calls, and destructive browser actions prompt for approval (`y` / `n`). In boss mode, approval prompts show which worker requested the action.\n\n### Browser automation\n\nRequires a one-time browser install:\n\n```bash\nnpx playwright install chromium\n```\n\nThe browser runs **visible by default** so you can watch the agent. Session state (tabs, cookies) persists across tool calls within a chat session.\n\n| Action | Description |\n|--------|-------------|\n| `open` | Launch browser and open URL in a new tab |\n| `goto` | Navigate active tab to URL |\n| `click` / `type` / `select` / `check` | Interact with page elements (CSS selectors) |\n| `waitFor` | Wait for selector to appear |\n| `getPageContent` | Inspect page — URL, text, interactive elements |\n| `extract` | Read text/value from a selector |\n| `screenshot` | Save PNG to `~/.agent-dev/screenshots/` |\n| `listTabs` / `switchTab` / `newTab` / `closeTab` | Multi-tab control |\n| `waitForUser` | Pause for CAPTCHA, OTP, or manual payment |\n| `close` | Close browser |\n\nOptional settings in `~/.agent-dev/settings.json`:\n\n```json\n{\n  "browser": {\n    "headless": false,\n    "actionTimeoutMs": 30000\n  }\n}\n```\n\n**Safety:** Purchases, booking confirmations, and payment steps require approval or manual user action. The agent pauses automatically on CAPTCHA/OTP/payment fields. Load the `browser-automation` skill for multi-step workflows.\n\n**Plan mode:** Read-only browser actions only (`goto`, `extract`, `getPageContent`, `screenshot`). Form interactions require Build mode.\n\n### MCP configuration\n\nAdd servers to `~/.agent-dev/mcp.json`:\n\n```json\n{\n  "servers": {\n    "filesystem": {\n      "command": "npx",\n      "args": ["-y", "@modelcontextprotocol/server-filesystem", "D:/projects"]\n    }\n  }\n}\n```\n\nUse the `mcp` tool with `list_servers`, `list_tools`, and `call_tool` actions.\n\n### Skills\n\nSkills use the [Vercel Agent Skills](https://vercel.com/docs/agent-resources/skills) ecosystem (same format as Cursor).\n\n**Install skills:**\n\n```bash\nagent skills add vercel-labs/agent-skills\nagent skills add vercel-labs/agent-skills -g          # global\nagent skills find react\nagent skills list\n```\n\nIn the TUI, run `/skills` and press `a` to install from a repo (press `o` to open the catalog in your browser).\n\n**Browse what\'s available:**\n\n- [skills.sh](https://skills.sh) — searchable directory of community + Vercel skills\n- [Vercel Agent Skills docs](https://vercel.com/docs/agent-resources/skills) — official curated list\n- `agent skills find <query>` — search from the terminal\n\n**Discovery paths** (later entries override same name):\n\n| Scope | Path |\n|-------|------|\n| Global (Vercel CLI) | `~/.config/agents/skills/` |\n| Global (compat) | `~/.agents/skills/` |\n| Project | `.agents/skills/` (walk up to git root) |\n| Agent config | `~/.agent-dev/skills/` |\n| Custom | `skills.paths` in `settings.json` |\n\nThe agent sees an `<available_skills>` catalog in its system prompt and loads full instructions with the `skill` tool (or `/skill <name>` in chat).\n\nFilter skills in `~/.agent-dev/settings.json`:\n\n```json\n{\n  "skills": {\n    "enabled": ["vercel-react-best-practices"],\n    "disabled": ["canvas"],\n    "paths": ["~/team-skills"]\n  }\n}\n```\n\n## Configuration\n\nAll config lives under `~/.agent-dev/` (override with `AGENT_DEV_DIR`):\n\n| Path | Purpose |\n|------|---------|\n| `settings.json` | Default provider/model, thinking level, agent mode, orchestrator mode, API keys, skills, permissions, project rules |\n| `sessions/*.jsonl` | Chat history (one file per session) |\n| `last-session.json` | Pointer to resume with `-c` |\n| `memory.json` | Cross-session memory |\n| `plan.json` | Active task plan |\n| `mcp.json` | MCP server definitions |\n| `traces/<sessionId>/` | Boss worker trace logs (JSONL) |\n| `telegram-sessions.json` | Telegram chat → session id mapping |\n| `schedules.json` | Active reminders and daily scheduled tasks |\n\nExample `settings.json`:\n\n```json\n{\n  "defaultProvider": "free",\n  "defaultModel": "meta-llama/llama-3.3-70b-instruct:free",\n  "thinkingLevel": "off",\n  "agentMode": "build",\n  "orchestratorMode": "off",\n  "compaction": {\n    "enabled": true,\n    "reserveTokens": 16384,\n    "keepRecentTokens": 20000\n  },\n  "permissions": {\n    "bash": { "*": "ask", "npm test *": "allow" }\n  },\n  "projectRules": {\n    "enabled": true\n  }\n}\n```\n\nSet `orchestratorMode` to `"boss"` to enable boss mode by default.\n\n**Thinking level** (`thinkingLevel` in settings or `/settings`) enables extended reasoning on supported models: Claude Sonnet/Opus 4+, OpenAI o3/o4-mini, and Gemini 2.5+. Other providers ignore it.\n\n### Environment variables\n\n| Variable | Description |\n|----------|-------------|\n| `OPENROUTER_API_KEY` | OpenRouter (free tier models) |\n| `OPENAI_API_KEY` | OpenAI |\n| `ANTHROPIC_API_KEY` | Anthropic (Claude) |\n| `GROQ_API_KEY` | Groq |\n| `GEMINI_API_KEY` / `GOOGLE_API_KEY` | Google Gemini |\n| `AGENT_DEV_DIR` | Config directory (default `~/.agent-dev`) |\n| `AGENT_MAX_TOOL_ROUNDS` | Max tool-call rounds per turn (default `50`) |\n| `AGENT_MAX_DELEGATIONS` | Max worker delegations per boss turn (default `10`) |\n| `AGENT_COMPACTION_ENABLED` | `0`/`false` to disable auto-compaction |\n| `AGENT_COMPACTION_RESERVE_TOKENS` | Tokens reserved for model response (default `16384`) |\n| `AGENT_NO_PROJECT_RULES` | `1` to disable project rules injection |\n| `TELEGRAM_BOT_TOKEN` | Telegram bot token (overrides settings) |\n| `TELEGRAM_ALLOWED_USER_IDS` | Comma-separated Telegram user IDs |\n\n## Architecture\n\nagent-dev is a single-agent **ReAct loop** — no LangGraph or external agent framework. The core loop streams an LLM response, executes tool calls, and repeats until done.\n\nBoss mode nests additional `runAgentLoop` instances inside the `delegate` tool, following the [orchestrator-workers](https://www.anthropic.com/engineering/building-effective-agents) pattern: the boss dynamically decomposes tasks and delegates to workers with isolated context.\n\n```\nsrc/\n├── agent/\n│   ├── loop.ts              # Core ReAct loop\n│   ├── session.ts           # Session state, events, boss routing\n│   ├── orchestrator/        # Boss prompt, workers, traces\n│   └── tools/               # Built-in tool implementations\n├── gateway/\n│   ├── telegram/            # Telegram bot daemon (grammY)\n│   └── scheduler.ts         # Fires due reminders and daily tasks\n├── providers/               # OpenAI, Groq, Gemini, OpenRouter\n├── ui/                      # Ink TUI\n└── modes/print-mode.ts      # Headless / CI output\n```\n\n## License\n\nMIT\n';
const toc = parseHeadings(readme);
function DocsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 border-b border-dashed border-border pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "[docs]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-2xl font-bold tracking-tight sm:text-3xl", children: "documentation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 max-w-2xl text-sm text-muted-foreground", children: [
          "Full reference for installing, configuring, and using agent-dev — synced from the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/Devang0907/agent-dev", target: "_blank", rel: "noreferrer", className: "text-primary hover:underline", children: "official README" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,16.5rem)_minmax(0,1fr)] xl:gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsSidebar, { items: toc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MarkdownDoc, { content: readme })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  DocsPage as component
};
