import { j as e, r as i, L as x } from "./index-Bt-2xMU-.js";
import { S as m, a as p } from "./site-nav-CXOhri2k.js";
function y() {
  return e.jsxs("div", {
    className: "min-h-screen bg-[#f3f2ee] text-foreground",
    children: [
      e.jsx(m, { variant: "landing" }),
      e.jsx(h, {}),
      e.jsx(u, {}),
      e.jsxs("main", {
        className: "editorial-shell",
        children: [e.jsx(b, {}), e.jsx(f, {}), e.jsx(N, {}), e.jsx(v, {})],
      }),
      e.jsx(p, {}),
    ],
  });
}
function h() {
  return e.jsx("section", {
    className: "mx-3 mt-3 sm:mx-4 lg:mx-5",
    children: e.jsxs("div", {
      className:
        "hero-frame editorial-shadow relative min-h-[calc(100svh-0.75rem)] overflow-hidden",
      children: [
        e.jsx("img", {
          src: "/new%20bg.png",
          alt: "",
          className: "absolute inset-0 h-full w-full object-cover object-center",
        }),
        e.jsx("div", {
          className: "absolute inset-0 bg-linear-to-b from-white/25 via-transparent to-black/5",
        }),
        e.jsxs("div", {
          className:
            "relative flex min-h-[calc(100svh-0.75rem)] flex-col items-center justify-center px-6 pb-16 pt-24 text-center sm:px-10 sm:pb-20 sm:pt-28",
          children: [
            e.jsxs("h1", {
              className: "nature-hero-title max-w-3xl text-foreground",
              children: [
                "Autopilot for your terminal workflow.",
                e.jsx("span", { className: "block", children: "Scale effortlessly." }),
              ],
            }),
            e.jsxs("p", {
              className:
                "mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/65 sm:text-lg",
              children: [
                e.jsx("span", { className: "font-medium text-foreground", children: "agent-dev" }),
                " reads and edits code, runs shell commands with approval, and delegates complex tasks through boss orchestration.",
              ],
            }),
            e.jsxs("div", {
              className: "mt-9 flex flex-wrap items-center justify-center gap-3",
              children: [
                e.jsx(d, { cmd: "npm i -g @devang0907/agent-dev", variant: "hero" }),
                e.jsx("a", {
                  href: "https://github.com/Devang0907/agent-dev",
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "inline-flex h-11 items-center rounded-full border border-foreground/15 bg-white/60 px-5 text-xs font-medium uppercase tracking-[0.06em] text-foreground backdrop-blur-sm transition-colors hover:bg-white",
                  children: "view on github ↗",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const l = [
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
];
function u() {
  const [s, a] = i.useState("boss"),
    t = l.find((r) => r.id === s) ?? l[0];
  return e.jsx("section", {
    className: "mx-3 pt-10 pb-8 sm:mx-4 sm:pt-14 lg:mx-5",
    children: e.jsxs("div", {
      className: "hero-frame ref-sky-bg editorial-shadow overflow-hidden",
      children: [
        e.jsx("div", {
          className: "border-b border-black/8 px-4 pt-6 sm:px-8",
          children: e.jsx("div", {
            className: "flex gap-6 overflow-x-auto pb-0 sm:gap-10",
            children: l.map((r) =>
              e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => a(r.id),
                  className: `shrink-0 border-b-2 pb-4 text-left transition-colors ${s === r.id ? "border-foreground text-foreground" : "border-transparent text-foreground/45 hover:text-foreground/70"}`,
                  children: [
                    e.jsx("span", { className: "block text-sm font-medium", children: r.label }),
                    e.jsx("span", {
                      className: "mt-0.5 block text-[11px] text-foreground/50",
                      children: r.subtitle,
                    }),
                  ],
                },
                r.id,
              ),
            ),
          }),
        }),
        e.jsxs("div", {
          className: "grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12",
          children: [
            e.jsxs("div", {
              className: "flex flex-col justify-center",
              children: [
                e.jsx("h2", { className: "ref-section-title text-foreground", children: t.title }),
                e.jsx("p", {
                  className: "mt-5 max-w-md text-base leading-relaxed text-foreground/65",
                  children: t.body,
                }),
                e.jsx("a", {
                  href: t.href,
                  className:
                    "mt-8 inline-flex w-fit items-center rounded-lg bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-90",
                  children: t.cta,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "relative min-h-[320px] overflow-hidden rounded-[20px] sm:min-h-[380px]",
              children: [
                e.jsx("img", {
                  src: "/new%20bg%202.png",
                  alt: "",
                  className: "absolute inset-0 h-full w-full object-cover",
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-sky-200/20",
                }),
                e.jsx("div", {
                  className: "absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6",
                  children: e.jsx("div", {
                    className: "rounded-2xl bg-white/92 p-2 shadow-lg backdrop-blur-md",
                    children: e.jsx(g, { compact: !0 }),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function d({ cmd: s, variant: a = "default" }) {
  const [t, r] = i.useState(!1),
    n = a === "hero";
  return e.jsx("button", {
    onClick: () => {
      (navigator.clipboard.writeText(s), r(!0), setTimeout(() => r(!1), 1400));
    },
    className: n
      ? "group inline-flex h-11 items-center gap-2 rounded-lg bg-foreground px-6 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-90"
      : "group inline-flex h-11 items-center gap-3 rounded-full bg-foreground px-5 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-transform hover:scale-[1.02]",
    children: n
      ? e.jsx("span", { children: t ? "Copied ✓" : "Get started" })
      : e.jsxs(e.Fragment, {
          children: [
            e.jsx("span", { children: "$" }),
            e.jsx("span", { children: s }),
            e.jsx("span", {
              className: "ml-2 text-[10px] text-background/60 group-hover:text-background",
              children: t ? "copied ✓" : "copy",
            }),
          ],
        }),
  });
}
function g({ compact: s = !1 }) {
  return e.jsxs("div", {
    className: `overflow-hidden bg-terminal text-terminal-foreground ${s ? "rounded-xl" : "rounded-[18px] sm:rounded-[20px]"}`,
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between border-b border-white/10 px-3 py-2",
        children: [
          e.jsxs("div", {
            className: "flex gap-1.5",
            children: [
              e.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-400/80" }),
              e.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-400/80" }),
              e.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-400/80" }),
            ],
          }),
          e.jsx("span", {
            className: "text-[10px] text-white/40",
            children: "~/projects/app — agent-dev",
          }),
          e.jsx("span", { className: "text-[10px] text-purple-400", children: "BOSS · Build" }),
        ],
      }),
      e.jsxs("pre", {
        className: `terminal-mono overflow-x-auto leading-relaxed ${s ? "px-4 py-4 text-[10px]" : "px-6 py-6 text-[12px]"}`,
        children: [
          e.jsx("span", { className: "text-white/50", children: "$ " }),
          "agent --boss",
          `
`,
          e.jsx("span", { className: "text-primary", children: "◆" }),
          " agent",
          " ",
          e.jsx("span", { className: "text-white/40", children: "free/llama-3.3-70b · BOSS" }),
          `

`,
          e.jsx("span", { className: "text-primary", children: "›" }),
          " refactor auth module and run tests",
          `

`,
          e.jsx("span", { className: "text-purple-400", children: "boss" }),
          " ",
          e.jsx("span", { className: "text-white/60", children: "delegate → explore worker" }),
          `
`,
          e.jsx("span", { className: "text-green-400", children: "grep" }),
          " ",
          e.jsx("span", { className: "text-white/60", children: "auth middleware patterns" }),
          `
`,
          e.jsx("span", { className: "text-purple-400", children: "boss" }),
          " ",
          e.jsx("span", { className: "text-white/60", children: "delegate → implement worker" }),
          `
`,
          e.jsx("span", { className: "text-green-400", children: "edit" }),
          " ",
          e.jsx("span", { className: "text-white/60", children: "src/auth.ts" }),
          " ",
          e.jsx("span", { className: "text-white/40", children: "(+24 -11)" }),
          `
`,
          e.jsx("span", { className: "text-purple-400", children: "boss" }),
          " ",
          e.jsx("span", { className: "text-white/60", children: "delegate → shell worker" }),
          `
`,
          e.jsx("span", { className: "text-green-400", children: "verify" }),
          " ",
          e.jsx("span", { className: "text-white/60", children: "npm test" }),
          `
`,
          e.jsx("span", { className: "text-white/60", children: " ✓ 42 passed" }),
          `

`,
          e.jsx("span", {
            className: "text-white/80",
            children: "Auth refactor complete. Trace: ",
          }),
          e.jsx("span", { className: "text-yellow-300", children: "/trace" }),
          `

`,
          e.jsx("span", { className: "text-primary", children: "›" }),
          " ",
          e.jsx("span", { className: "blink" }),
        ],
      }),
    ],
  });
}
function f() {
  return e.jsxs(c, {
    id: "install",
    label: "01",
    title: "quick start",
    children: [
      e.jsxs("div", {
        className: "grid gap-6 lg:grid-cols-2",
        children: [
          e.jsx(o, {
            title: "from source",
            lines: [
              "$ git clone https://github.com/Devang0907/agent-dev.git",
              "$ cd agent-dev && npm install",
              "$ npm run dev",
            ],
          }),
          e.jsx(o, {
            title: "global install",
            lines: ["$ npm i -g @devang0907/agent-dev", "$ agent"],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "editorial-card mt-6 p-6 text-xs",
        children: [
          e.jsx("div", {
            className: "editorial-label mb-3 text-muted-foreground",
            children: "# set at least one API key · requires Node.js 20+",
          }),
          e.jsx("pre", {
            className: "terminal-mono overflow-x-auto leading-relaxed text-muted-foreground",
            children: `export OPENROUTER_API_KEY=sk-or-...   # free models (default)
export OPENAI_API_KEY=sk-...          # ChatGPT
export ANTHROPIC_API_KEY=sk-ant-...   # Claude
export GROQ_API_KEY=gsk_...           # Groq
export GEMINI_API_KEY=...             # Google Gemini`,
          }),
        ],
      }),
    ],
  });
}
function b() {
  const s = ["OpenAI", "Anthropic", "Google Gemini", "Meta Llama", "DeepSeek"];
  return e.jsxs("section", {
    className: "border-y border-border/60 py-12",
    children: [
      e.jsx("p", {
        className: "editorial-label mb-8 text-center text-muted-foreground",
        children: "powering autonomous development with",
      }),
      e.jsx("div", {
        className:
          "flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground sm:gap-x-16",
        children: s.map((a) => e.jsx("span", { children: a }, a)),
      }),
    ],
  });
}
const j = [
  {
    title: "Build · Plan · Boss",
    desc: "Switch between full tool access, read-only exploration, or a boss orchestrator that delegates to specialized workers.",
    href: "/docs#agent-modes",
    color: "text-purple-500",
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
    color: "text-sky-500",
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
    color: "text-sky-500",
  },
  {
    title: "Compaction & rules",
    desc: "Auto-compact long sessions, inject project rules from AGENTS.md, and configure permission presets.",
    href: "/docs#context-compaction",
    color: "text-muted-foreground",
  },
];
function N() {
  return e.jsxs(c, {
    id: "features",
    label: "02",
    title: "features",
    children: [
      e.jsx("div", {
        className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
        children: j.map((s) =>
          e.jsxs(
            "div",
            {
              className: "editorial-card p-7",
              children: [
                e.jsx("h3", { className: `text-sm font-bold ${s.color}`, children: s.title }),
                e.jsx("p", {
                  className: "mt-2 text-sm leading-relaxed text-muted-foreground",
                  children: s.desc,
                }),
                e.jsx("a", {
                  href: s.href,
                  className:
                    "mt-5 inline-block text-xs uppercase tracking-[0.08em] text-foreground hover:underline",
                  children: "read docs →",
                }),
              ],
            },
            s.title,
          ),
        ),
      }),
      e.jsx("p", {
        className: "mt-6 text-center text-sm text-muted-foreground",
        children: e.jsx(x, {
          to: "/docs",
          className: "text-primary hover:underline",
          children: "full documentation →",
        }),
      }),
    ],
  });
}
function v() {
  return e.jsx("section", {
    className: "editorial-card my-16 p-8 sm:p-12",
    children: e.jsxs("div", {
      className: "flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx("h2", {
              className: "editorial-section-title text-3xl",
              children: "stop context-switching.",
            }),
            e.jsx("p", {
              className: "mt-3 text-sm text-muted-foreground",
              children: "ship code without leaving the terminal.",
            }),
          ],
        }),
        e.jsx(d, { cmd: "npm i -g @devang0907/agent-dev" }),
      ],
    }),
  });
}
function c({ id: s, label: a, title: t, children: r }) {
  return e.jsxs("section", {
    id: s,
    className: "editorial-section border-t border-border/60",
    children: [
      e.jsxs("div", {
        className: "mb-8 flex items-baseline gap-4",
        children: [
          e.jsxs("span", {
            className: "editorial-label text-muted-foreground",
            children: ["[", a, "]"],
          }),
          e.jsx("h2", { className: "editorial-section-title text-3xl sm:text-5xl", children: t }),
        ],
      }),
      r,
    ],
  });
}
function o({ title: s, lines: a }) {
  return e.jsxs("div", {
    className: "editorial-card overflow-hidden",
    children: [
      e.jsx("div", {
        className: "editorial-label border-b border-border/70 px-5 py-3 text-muted-foreground",
        children: s,
      }),
      e.jsx("pre", {
        className: "terminal-mono overflow-x-auto px-5 py-5 text-xs leading-relaxed",
        children: a.map((t) => e.jsx("div", { children: t }, t)),
      }),
    ],
  });
}
export { y as component };
