import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteNav, a as SiteFooter, c as cn } from "./site-nav-GBb0vVVS.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
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
      { rootMargin: "-120px 0px -55% 0px", threshold: 0 }
    );
    for (const heading of headings) {
      observer.observe(heading);
    }
    return () => observer.disconnect();
  }, [items]);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 116;
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "docs-toc-panel nav-sticky-top sticky rounded-md border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border px-4 py-2.5 text-[10px] uppercase tracking-wider text-muted-foreground", children: "On this page" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "docs-toc-scroll max-h-[calc(100vh-var(--nav-offset)-1rem)] overflow-y-auto px-2 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: groups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TocLink, { item: group.section, activeId, onSelect: scrollTo }),
        group.children.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-0.5 space-y-0.5 border-l border-border/80 pl-2", children: group.children.map((child) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TocLink, { item: child, activeId, nested: true, onSelect: scrollTo }) }, child.id)) })
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "code",
      {
        className: "rounded-sm border border-border bg-secondary/60 px-1 py-0.5 text-[0.9em] text-foreground",
        ...props,
        children
      }
    );
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
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
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
const readme = '# agent-dev\r\n\r\nA minimal terminal coding agent with an Ink TUI. Chat with an AI that can read and edit code, search the web, run git/shell commands (with approval), use MCP servers, load skills, schedule Telegram reminders and daily tasks, and optionally delegate work through a **boss orchestrator** that coordinates specialized worker agents.\r\n\r\n## Quick start\r\n\r\n**From source:**\r\n\r\n```bash\r\ngit clone https://github.com/Devang0907/agent-dev.git\r\ncd agent-dev\r\nnpm install\r\nnpm run dev\r\n```\r\n\r\n**Global install (npm):**\r\n\r\n```bash\r\nnpm install -g @devang0907/agent-dev\r\nagent\r\n```\r\n\r\nSet at least one API key:\r\n\r\n```bash\r\nexport OPENROUTER_API_KEY=sk-or-...   # Free models (default)\r\nexport OPENAI_API_KEY=sk-...          # ChatGPT\r\nexport ANTHROPIC_API_KEY=sk-ant-...   # Claude\r\nexport GROQ_API_KEY=gsk_...           # Groq\r\nexport GEMINI_API_KEY=...             # Google Gemini\r\n```\r\n\r\nRequires **Node.js 20+**.\r\n\r\n## Providers\r\n\r\n| Provider | Env var | Example models |\r\n|----------|---------|----------------|\r\n| OpenAI (ChatGPT) | `OPENAI_API_KEY` | `gpt-4o`, `gpt-4.1`, `o4-mini` |\r\n| Anthropic (Claude) | `ANTHROPIC_API_KEY` | `claude-sonnet-4-6`, `claude-opus-4-8`, `claude-haiku-4-5-20251001` |\r\n| Groq | `GROQ_API_KEY` | `llama-3.3-70b-versatile`, `llama-3.1-8b-instant` |\r\n| Google Gemini | `GEMINI_API_KEY` or `GOOGLE_API_KEY` | `gemini-2.5-pro`, `gemini-2.5-flash` |\r\n| Free (OpenRouter) | `OPENROUTER_API_KEY` | See [free models](#free-models-openrouter) below |\r\n\r\nModel refs use `provider/model-id`, e.g. `anthropic/claude-sonnet-4-6`, `openai/gpt-4.1`, or `free/openrouter/free`.\r\n\r\n### Free models (OpenRouter)\r\n\r\nFree models use the `:free` suffix on OpenRouter. Availability changes often — agent-dev migrates retired slugs and retries fallbacks automatically. If a model fails, use **`/model openrouter/free`** (auto-picks a working free model).\r\n\r\n| Model | Slug |\r\n|-------|------|\r\n| Free auto (recommended) | `openrouter/free` |\r\n| Llama 3.3 70B (free) | `meta-llama/llama-3.3-70b-instruct:free` |\r\n| Qwen3 Coder (free) | `qwen/qwen3-coder:free` |\r\n| Qwen3 Next 80B (free) | `qwen/qwen3-next-80b-a3b-instruct:free` |\r\n| GPT-OSS 120B (free) | `openai/gpt-oss-120b:free` |\r\n| Gemma 4 26B (free) | `google/gemma-4-26b-a4b-it:free` |\r\n\r\nRetired slugs like `deepseek/deepseek-r1:free` and `qwen/qwen3-235b-a22b:free` are remapped automatically on load.\r\n\r\nDefault provider/model: `free/meta-llama/llama-3.3-70b-instruct:free`.\r\n\r\n## CLI\r\n\r\n```bash\r\nnpm run dev                                    # Interactive TUI\r\nnpm run dev -- -p "List files in src"          # Print mode (no TUI)\r\nnpm run dev -- --boss                          # Start in boss orchestrator mode\r\nnpm run dev -- --boss -p "refactor auth module" # Boss mode, print and exit\r\nnpm run dev -- -c                              # Continue last session\r\nnpm run dev -- --model groq/llama-3.3-70b-versatile "hello"\r\nnpm run build && npm start                     # Production build\r\nnpm test                                       # Run test suite\r\nnpm run test:watch                             # Watch mode\r\nnpm run test:coverage                          # Coverage report\r\n```\r\n\r\n| Flag | Description |\r\n|------|-------------|\r\n| `-p`, `--print` | Print response and exit |\r\n| `-c`, `--continue` | Resume the most recent session |\r\n| `--boss` | Enable boss orchestrator mode |\r\n| `--model <ref>` | Provider/model (e.g. `openai/gpt-4o`) |\r\n| `-h`, `--help` | Show help |\r\n\r\n**Skills subcommand:**\r\n\r\n```bash\r\nagent skills add vercel-labs/agent-skills\r\nagent skills add vercel-labs/agent-skills -g    # global\r\nagent skills find react\r\nagent skills list\r\n```\r\n\r\n## Telegram gateway\r\n\r\nChat with agent-dev from your phone via Telegram (OpenClaw-style). The gateway runs on your PC, uses long-polling (no public URL or port forwarding), and forwards DMs to the agent. Shell/git/exec approvals arrive as **Approve / Deny** inline buttons. You can also set **reminders** and **daily tasks** (e.g. morning news) that fire while the gateway is running.\r\n\r\nOn first connect, send `/start` (or any message) to receive a welcome guide with available commands and capabilities.\r\n\r\n### Setup\r\n\r\n1. **Create a bot** — open [@BotFather](https://t.me/BotFather) in Telegram, run `/newbot`, save the token.\r\n\r\n2. **Configure** — use `/connect` in the TUI (recommended), or add to `~/.agent-dev/settings.json` manually:\r\n\r\n```json\r\n{\r\n  "telegram": {\r\n    "botToken": "123456789:ABCdef...",\r\n    "allowedUserIds": [987654321],\r\n    "workdir": "D:/projects/MyRepo"\r\n  }\r\n}\r\n```\r\n\r\nOr use environment variables:\r\n\r\n```bash\r\nexport TELEGRAM_BOT_TOKEN=123456789:ABCdef...\r\nexport TELEGRAM_ALLOWED_USER_IDS=987654321\r\n```\r\n\r\n**TUI setup (`/connect`):** in the interactive agent, run `/connect` to open the gateway setup screen. Choose **Telegram**, paste your `botToken`, enter `allowedUserIds` as comma-separated numbers (e.g. `123456789`), then save. Values are written to `telegram.botToken` and `telegram.allowedUserIds` in `~/.agent-dev/settings.json`. More gateways can be added here later.\r\n\r\n3. **Find your Telegram user ID** — start the gateway, DM your bot, send `/whoami`. If the allowlist is empty, check the gateway console logs for `Rejected message from user <id>`.\r\n\r\n4. **Add your ID** to `allowedUserIds`, then restart the gateway.\r\n\r\n### Run\r\n\r\n```bash\r\nnpm run dev -- telegram --workdir D:/projects/MyRepo\r\n# or after build:\r\nagent telegram --workdir D:/projects/MyRepo\r\nagent telegram --boss --verbose\r\n```\r\n\r\nKeep the process running while you use the bot. While the gateway runs, the terminal shows a live log of Telegram activity:\r\n\r\n```\r\n[user] (123456789) list files in src\r\n[agent] Here are the files in src/...\r\n[tool] Running: grep pattern\r\n[approval] npm test\r\n[approval] Approved\r\n```\r\n\r\nOn Windows, run it in a dedicated terminal, or use Task Scheduler / [pm2](https://pm2.keymetrics.io/) to keep it alive on login.\r\n\r\n### Telegram commands\r\n\r\n| Command | Description |\r\n|---------|-------------|\r\n| `/start` | Welcome guide — commands, tools, project path (first connect) |\r\n| `/help` | Show the welcome guide again |\r\n| `/whoami` | Show your numeric Telegram user ID |\r\n| `/new` | Start a new agent session |\r\n| `/status` | Model, workdir, session id, busy/idle |\r\n| `/stop` | Abort the current turn |\r\n| `/build` | Switch to Build mode (edit files, run shell) |\r\n| `/plan` | Switch to Plan mode (read-only exploration) |\r\n| `/boss` | Toggle boss orchestrator mode |\r\n| `/boss on` / `/boss off` | Enable or disable boss mode |\r\n| `/mode` | Show current mode and available options |\r\n| `/model` | List available models |\r\n| `/model <provider/id>` | Switch model (e.g. `/model groq/llama-3.3-70b-versatile`) |\r\n| `/schedules` | List active reminders and daily tasks for this chat |\r\n| `/compact` | Summarize older messages to free context |\r\n\r\n### Reminders and scheduled tasks\r\n\r\nWhile the Telegram gateway is running, you can ask the agent to remind you later or run recurring tasks (e.g. morning news). The agent uses the built-in **`schedule`** tool; a background scheduler checks every 30 seconds and delivers due items to your chat.\r\n\r\n**One-shot reminders** — simple notifications at a relative or absolute time:\r\n\r\n```\r\nRemind me to drink water in 5 minutes\r\nRemind me to call mom in 2 hours\r\n```\r\n\r\n**Daily recurring tasks** — the agent runs your instruction each day (uses `web_search` for news, etc.):\r\n\r\n```\r\nSend me the top news headlines every morning at 8:00\r\nGive me a daily weather summary at 7:30\r\n```\r\n\r\n| Schedule kind | When it fires |\r\n|---------------|---------------|\r\n| `reminder` | Sends `⏰ Reminder: …` in Telegram |\r\n| `task` | Runs the agent with your message (good for news, reports) |\r\n\r\nTiming options the agent can set: `in_minutes` (e.g. 5), `daily_at` in 24h local time (e.g. `08:00`), or `at` (ISO datetime). Schedules are stored in `~/.agent-dev/schedules.json`. Ask the agent to cancel a schedule by id, or use `/schedules` to list them.\r\n\r\n**Requirements:** the gateway process must stay running (see [Run](#run) above). If a **task** fires while the agent is busy, it retries in about a minute. **Reminders** always send immediately.\r\n\r\nWhile the agent is busy, Telegram accepts **one queued follow-up message** per chat; additional messages get a busy reply until the queue drains.\r\n\r\n### Security\r\n\r\n- Only users in `allowedUserIds` can chat with the agent (except `/whoami` for setup).\r\n- The bot can run shell commands on your PC after you approve them — treat the bot token like a password.\r\n- Do not commit `settings.json` with tokens to git.\r\n\r\n## Interactive commands\r\n\r\n| Command | Description |\r\n|---------|-------------|\r\n| `/model`, `/m [search]` | Open model selector (grouped by provider) |\r\n| `/build` | Switch to Build mode (full tool access) |\r\n| `/plan` | Switch to Plan mode (read-only exploration) |\r\n| `/boss` | Toggle boss orchestrator mode |\r\n| `/tasks` | Show the active task plan |\r\n| `/compact [instructions]` | Summarize older messages to free context (optional focus) |\r\n| `/rules` | List loaded project rule files (`AGENTS.md`, etc.) |\r\n| `/permissions` | Show merged permission presets for this project |\r\n| `/trace` | Show path to the latest worker trace log |\r\n| `/sessions` | Browse and load saved chat sessions |\r\n| `/settings` | Thinking level and API key status |\r\n| `/connect` | Configure gateway connection (Telegram bot token and allowed user IDs) |\r\n| `/skills` | Browse and install skills (Vercel CLI) |\r\n| `/skill <name>` | Load a skill for the current turn |\r\n| `/new` | Start a new session |\r\n| `/quit` | Exit |\r\n\r\n**Keyboard shortcuts:**\r\n\r\n- **Tab** / **Shift+Tab** — cycle Build ↔ Plan when input is empty\r\n- **Esc** — abort a running turn\r\n- **Ctrl+G** — scroll chat to latest\r\n- **Ctrl+U** / **Ctrl+D** — scroll chat up/down\r\n\r\n## Context compaction\r\n\r\nLong sessions can exceed model context limits. agent-dev tracks approximate token usage (footer shows `ctx 42k/128k`) and compacts older history when needed.\r\n\r\n| Trigger | Behavior |\r\n|---------|----------|\r\n| **Auto** | Before each turn when `tokens > contextWindow - reserveTokens` (default reserve 16k) |\r\n| **Overflow** | On provider context errors — compact once and retry the turn |\r\n| **Manual** | `/compact` or `/compact focus on auth changes` |\r\n\r\nCompaction is **lossy for the model** but **non-destructive on disk**: full chat history stays in `sessions/*.jsonl`; a `compaction` entry records the summary and which messages the LLM still sees.\r\n\r\nToggle auto-compaction in `/settings` or `settings.json`:\r\n\r\n```json\r\n{\r\n  "compaction": {\r\n    "enabled": true,\r\n    "reserveTokens": 16384,\r\n    "keepRecentTokens": 20000\r\n  }\r\n}\r\n```\r\n\r\nTelegram: `/compact` (same as TUI).\r\n\r\n## Project rules\r\n\r\nProject rules are markdown instructions injected into the system prompt automatically.\r\n\r\n**Discovery order** (root → specific; all matching files are concatenated):\r\n\r\n| Priority | Path |\r\n|----------|------|\r\n| 1 | `~/.agent-dev/AGENTS.md` |\r\n| 2 | `AGENTS.md` or `CLAUDE.md` from git root down to cwd |\r\n| 3 | `<workdir>/.agent-dev/AGENTS.md` |\r\n| 4 | `<workdir>/.agent-dev/rules/*.md` (sorted by filename) |\r\n\r\nUse `/rules` in the TUI to see which files were loaded. Total injected size is capped (default 32k characters).\r\n\r\nDisable with `AGENT_NO_PROJECT_RULES=1` or in `settings.json`:\r\n\r\n```json\r\n{\r\n  "projectRules": {\r\n    "enabled": false,\r\n    "maxChars": 32768\r\n  }\r\n}\r\n```\r\n\r\nBoss worker sessions do not inherit project rules in v1 (main agent loop only).\r\n\r\n## Permission presets\r\n\r\nGated tools (shell, `verify`, git writes, DB mutations, MCP `call_tool`, destructive browser actions) normally prompt for approval. Optional **`files`** rules gate `write`/`edit` when configured. Permission presets let you **allow**, **ask**, or **deny** by pattern.\r\n\r\n**Config** (project patterns append to global; **last matching rule wins**):\r\n\r\n| Scope | Path |\r\n|-------|------|\r\n| Global | `~/.agent-dev/settings.json` → `permissions` |\r\n| Project | `<workdir>/.agent-dev/permissions.json` |\r\n\r\nExample `permissions.json`:\r\n\r\n```json\r\n{\r\n  "bash": {\r\n    "*": "ask",\r\n    "npm test": "allow",\r\n    "npm test *": "allow",\r\n    "rm *": "deny"\r\n  },\r\n  "git": {\r\n    "commit": "ask",\r\n    "push *": "deny"\r\n  },\r\n  "database": { "*": "ask", "SELECT *": "allow" },\r\n  "mcp": { "call_tool": "ask" },\r\n  "browser": { "*": "ask" },\r\n  "files": { "*": "ask", ".agent-dev/plans/*": "allow" }\r\n}\r\n```\r\n\r\n`verify` uses the same **`bash`** permission rules (e.g. `npm test: allow` applies to both `bash` and `verify`).\r\n\r\nThe **`files`** category is optional — without `files` rules, `write` and `edit` are allowed without prompting. Add `files` rules for paranoid setups.\r\n\r\nShorthand: `"bash": "ask"` expands to `{ "*": "ask" }`. Put `"*": "ask"` first, then more specific patterns after.\r\n\r\nUse `/permissions` to inspect merged rules. `/settings` shows a rule count summary.\r\n\r\nRead-only git commands and `SELECT` queries stay allowed regardless of rules.\r\n\r\n## Agent modes\r\n\r\n### Build and Plan\r\n\r\nSwitch between **Build** and **Plan** mode:\r\n\r\n| Mode | Toggle | Behavior |\r\n|------|--------|----------|\r\n| **Build** (default) | Tab / `/build` | Full tool access — edit files, run shell, verify |\r\n| **Plan** | Tab / `/plan` | Read-only — explore code, research, write plans to `.agent-dev/plans/*.md` |\r\n\r\n- Current mode is shown in the prompt footer (`Build` or `Plan`)\r\n- Plan mode blocks write/edit/bash/verify/database/MCP; git write actions are denied\r\n- Switch Plan → Build before implementing; the agent gets a reminder to execute the plan\r\n\r\n### Boss orchestrator (opt-in)\r\n\r\nBoss mode adds a **hierarchical orchestrator** on top of the normal agent loop. The boss plans work, delegates to specialized workers sequentially, monitors their progress, and synthesizes a final answer.\r\n\r\nEnable with `--boss` or `/boss`. The footer shows **BOSS** in purple when active.\r\n\r\n```\r\nUser → Boss (plan + delegate)\r\n         ├─ explore worker   (read-only research)\r\n         ├─ implement worker (code changes)\r\n         ├─ shell worker     (commands & tests)\r\n         └─ plan worker      (architecture docs)\r\n```\r\n\r\n| Worker | Role | Tools |\r\n|--------|------|-------|\r\n| `explore` | Read-only codebase research | read, grep, git, docs, browser |\r\n| `implement` | Focused code changes | read, write, edit, diff, grep, verify |\r\n| `shell` | Commands and tests | bash, exec, verify |\r\n| `plan` | Planning documents | plan, read, grep |\r\n\r\nThe boss only has `plan` and `delegate` tools — it does not edit files or run shell commands directly. Worker activity is streamed in the TUI and logged to `~/.agent-dev/traces/<sessionId>/<runId>.jsonl`. Use `/trace` to find the latest log.\r\n\r\nBoss mode uses the same model you select in `/model`. Workers run in isolated contexts with scoped task briefs.\r\n\r\n## Tools\r\n\r\nThe agent has **20 built-in tools** (`delegate` is boss-only; 19 are available in normal mode):\r\n\r\n| Tool | Description |\r\n|------|-------------|\r\n| `read` | Read a file in the project directory |\r\n| `list_dir` | List files and directories (use instead of shell `ls`) |\r\n| `write` | Create or overwrite a file |\r\n| `edit` | Replace text in a file |\r\n| `diff` | Preview unified diff before applying changes |\r\n| `grep` | Search codebase (ripgrep; on Windows uses **findstr**, then PowerShell) |\r\n| `git` | Git status, diff, log, commit, etc. (writes need approval) |\r\n| `bash` | Run a shell command — **requires approval** |\r\n| `exec` | Structured shell command (`cmd` array) — **requires approval** |\r\n| `web_search` | Search the internet (DuckDuckGo / Google News) |\r\n| `docs` | Look up npm READMEs, MDN, or fetch a docs URL |\r\n| `memory` | Store/recall long-term facts in `~/.agent-dev/memory.json` |\r\n| `plan` | Create and track multi-step task plans (supports assignee, parent task, run id) |\r\n| `delegate` | **Boss only** — spawn a worker agent for a focused subtask |\r\n| `database` | Run SQL on SQLite files (mutations need approval) |\r\n| `verify` | Auto-run tests/build from `package.json` scripts |\r\n| `mcp` | Call tools from MCP servers (see below) |\r\n| `skill` | Load a skill by name from `available_skills` |\r\n| `schedule` | Schedule Telegram reminders and daily recurring tasks (gateway must be running) |\r\n| `browser` | Control a real Chromium browser (navigate, click, extract, screenshot) |\r\n\r\nFile operations are restricted to the current working directory. Shell commands, git writes, SQL mutations, MCP tool calls, and destructive browser actions prompt for approval (`y` / `n`). In boss mode, approval prompts show which worker requested the action.\r\n\r\n### Browser automation\r\n\r\nRequires a one-time browser install:\r\n\r\n```bash\r\nnpx playwright install chromium\r\n```\r\n\r\nThe browser runs **visible by default** so you can watch the agent. Session state (tabs, cookies) persists across tool calls within a chat session.\r\n\r\n| Action | Description |\r\n|--------|-------------|\r\n| `open` | Launch browser and open URL in a new tab |\r\n| `goto` | Navigate active tab to URL |\r\n| `click` / `type` / `select` / `check` | Interact with page elements (CSS selectors) |\r\n| `waitFor` | Wait for selector to appear |\r\n| `getPageContent` | Inspect page — URL, text, interactive elements |\r\n| `extract` | Read text/value from a selector |\r\n| `screenshot` | Save PNG to `~/.agent-dev/screenshots/` |\r\n| `listTabs` / `switchTab` / `newTab` / `closeTab` | Multi-tab control |\r\n| `waitForUser` | Pause for CAPTCHA, OTP, or manual payment |\r\n| `close` | Close browser |\r\n\r\nOptional settings in `~/.agent-dev/settings.json`:\r\n\r\n```json\r\n{\r\n  "browser": {\r\n    "headless": false,\r\n    "actionTimeoutMs": 30000\r\n  }\r\n}\r\n```\r\n\r\n**Safety:** Purchases, booking confirmations, and payment steps require approval or manual user action. The agent pauses automatically on CAPTCHA/OTP/payment fields. Load the `browser-automation` skill for multi-step workflows.\r\n\r\n**Plan mode:** Read-only browser actions only (`goto`, `extract`, `getPageContent`, `screenshot`). Form interactions require Build mode.\r\n\r\n### MCP configuration\r\n\r\nAdd servers to `~/.agent-dev/mcp.json`:\r\n\r\n```json\r\n{\r\n  "servers": {\r\n    "filesystem": {\r\n      "command": "npx",\r\n      "args": ["-y", "@modelcontextprotocol/server-filesystem", "D:/projects"]\r\n    }\r\n  }\r\n}\r\n```\r\n\r\nUse the `mcp` tool with `list_servers`, `list_tools`, and `call_tool` actions.\r\n\r\n### Skills\r\n\r\nSkills use the [Vercel Agent Skills](https://vercel.com/docs/agent-resources/skills) ecosystem (same format as Cursor).\r\n\r\n**Install skills:**\r\n\r\n```bash\r\nagent skills add vercel-labs/agent-skills\r\nagent skills add vercel-labs/agent-skills -g          # global\r\nagent skills find react\r\nagent skills list\r\n```\r\n\r\nIn the TUI, run `/skills` and press `a` to install from a repo (press `o` to open the catalog in your browser).\r\n\r\n**Browse what\'s available:**\r\n\r\n- [skills.sh](https://skills.sh) — searchable directory of community + Vercel skills\r\n- [Vercel Agent Skills docs](https://vercel.com/docs/agent-resources/skills) — official curated list\r\n- `agent skills find <query>` — search from the terminal\r\n\r\n**Discovery paths** (later entries override same name):\r\n\r\n| Scope | Path |\r\n|-------|------|\r\n| Global (Vercel CLI) | `~/.config/agents/skills/` |\r\n| Global (compat) | `~/.agents/skills/` |\r\n| Project | `.agents/skills/` (walk up to git root) |\r\n| Agent config | `~/.agent-dev/skills/` |\r\n| Custom | `skills.paths` in `settings.json` |\r\n\r\nThe agent sees an `<available_skills>` catalog in its system prompt and loads full instructions with the `skill` tool (or `/skill <name>` in chat).\r\n\r\nFilter skills in `~/.agent-dev/settings.json`:\r\n\r\n```json\r\n{\r\n  "skills": {\r\n    "enabled": ["vercel-react-best-practices"],\r\n    "disabled": ["canvas"],\r\n    "paths": ["~/team-skills"]\r\n  }\r\n}\r\n```\r\n\r\n## Configuration\r\n\r\nAll config lives under `~/.agent-dev/` (override with `AGENT_DEV_DIR`):\r\n\r\n| Path | Purpose |\r\n|------|---------|\r\n| `settings.json` | Default provider/model, thinking level, agent mode, orchestrator mode, API keys, skills, permissions, project rules |\r\n| `sessions/*.jsonl` | Chat history (one file per session) |\r\n| `last-session.json` | Pointer to resume with `-c` |\r\n| `memory.json` | Cross-session memory |\r\n| `plan.json` | Active task plan |\r\n| `mcp.json` | MCP server definitions |\r\n| `traces/<sessionId>/` | Boss worker trace logs (JSONL) |\r\n| `telegram-sessions.json` | Telegram chat → session id mapping |\r\n| `schedules.json` | Active reminders and daily scheduled tasks |\r\n\r\nExample `settings.json`:\r\n\r\n```json\r\n{\r\n  "defaultProvider": "free",\r\n  "defaultModel": "meta-llama/llama-3.3-70b-instruct:free",\r\n  "thinkingLevel": "off",\r\n  "agentMode": "build",\r\n  "orchestratorMode": "off",\r\n  "compaction": {\r\n    "enabled": true,\r\n    "reserveTokens": 16384,\r\n    "keepRecentTokens": 20000\r\n  },\r\n  "permissions": {\r\n    "bash": { "*": "ask", "npm test *": "allow" }\r\n  },\r\n  "projectRules": {\r\n    "enabled": true\r\n  }\r\n}\r\n```\r\n\r\nSet `orchestratorMode` to `"boss"` to enable boss mode by default.\r\n\r\n**Thinking level** (`thinkingLevel` in settings or `/settings`) enables extended reasoning on supported models: Claude Sonnet/Opus 4+, OpenAI o3/o4-mini, and Gemini 2.5+. Other providers ignore it.\r\n\r\n### Environment variables\r\n\r\n| Variable | Description |\r\n|----------|-------------|\r\n| `OPENROUTER_API_KEY` | OpenRouter (free tier models) |\r\n| `OPENAI_API_KEY` | OpenAI |\r\n| `ANTHROPIC_API_KEY` | Anthropic (Claude) |\r\n| `GROQ_API_KEY` | Groq |\r\n| `GEMINI_API_KEY` / `GOOGLE_API_KEY` | Google Gemini |\r\n| `AGENT_DEV_DIR` | Config directory (default `~/.agent-dev`) |\r\n| `AGENT_MAX_TOOL_ROUNDS` | Max tool-call rounds per turn (default `50`) |\r\n| `AGENT_MAX_DELEGATIONS` | Max worker delegations per boss turn (default `10`) |\r\n| `AGENT_COMPACTION_ENABLED` | `0`/`false` to disable auto-compaction |\r\n| `AGENT_COMPACTION_RESERVE_TOKENS` | Tokens reserved for model response (default `16384`) |\r\n| `AGENT_NO_PROJECT_RULES` | `1` to disable project rules injection |\r\n| `TELEGRAM_BOT_TOKEN` | Telegram bot token (overrides settings) |\r\n| `TELEGRAM_ALLOWED_USER_IDS` | Comma-separated Telegram user IDs |\r\n\r\n## Architecture\r\n\r\nagent-dev is a single-agent **ReAct loop** — no LangGraph or external agent framework. The core loop streams an LLM response, executes tool calls, and repeats until done.\r\n\r\nBoss mode nests additional `runAgentLoop` instances inside the `delegate` tool, following the [orchestrator-workers](https://www.anthropic.com/engineering/building-effective-agents) pattern: the boss dynamically decomposes tasks and delegates to workers with isolated context.\r\n\r\n```\r\nsrc/\r\n├── agent/\r\n│   ├── loop.ts              # Core ReAct loop\r\n│   ├── session.ts           # Session state, events, boss routing\r\n│   ├── orchestrator/        # Boss prompt, workers, traces\r\n│   └── tools/               # Built-in tool implementations\r\n├── gateway/\r\n│   ├── telegram/            # Telegram bot daemon (grammY)\r\n│   └── scheduler.ts         # Fires due reminders and daily tasks\r\n├── providers/               # OpenAI, Groq, Gemini, OpenRouter\r\n├── ui/                      # Ink TUI\r\n└── modes/print-mode.ts      # Headless / CI output\r\n```\r\n\r\n## License\r\n\r\nMIT\r\n';
const toc = parseHeadings(readme);
function DocsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "editorial-shell nav-offset pb-10 sm:pb-14", children: [
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
