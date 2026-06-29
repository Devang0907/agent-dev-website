import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteNav, a as SiteFooter, c as cn } from "./site-nav-Bpy8w57-.mjs";
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
import "../_libs/lucide-react.mjs";
const STEPS = [
  {
    url: "amazon.com/s?k=wireless+mouse",
    hint: "Typing in search…",
    scene: "search",
    target: "search-input",
    pointer: false
  },
  {
    url: "amazon.com/s?k=wireless+mouse",
    hint: "Selecting a product…",
    scene: "search",
    target: "product-tile",
    pointer: true
  },
  {
    url: "amazon.com/dp/B09XYZ",
    hint: "Adding to cart…",
    scene: "product",
    target: "add-to-cart",
    pointer: true
  },
  {
    url: "amazon.com/cart",
    hint: "Proceeding to checkout…",
    scene: "cart",
    target: "checkout",
    pointer: true
  },
  {
    url: "amazon.com/checkout",
    hint: "Awaiting payment approval…",
    scene: "approve",
    target: "approve-btn",
    pointer: true
  }
];
function measureCursorPos(target, container, targetId) {
  const cr = container.getBoundingClientRect();
  const tr = target.getBoundingClientRect();
  let x = tr.left - cr.left + tr.width / 2;
  let y = tr.top - cr.top + tr.height / 2;
  if (targetId === "search-input") {
    x = tr.left - cr.left + tr.width * 0.82;
    y = tr.top - cr.top + tr.height / 2;
  }
  return { x, y };
}
function ArrowCursor() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "18", height: "22", viewBox: "0 0 18 22", fill: "none", "aria-hidden": true, className: "drop-shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      d: "M1 1L1 16.5L5.5 12.5L9 21L12 19.5L8.5 11.5L14.5 11.5L1 1Z",
      fill: "white",
      stroke: "black",
      strokeWidth: "1.2"
    }
  ) });
}
function PointerCursor() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "22", viewBox: "0 0 20 22", fill: "none", "aria-hidden": true, className: "drop-shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      d: "M7.02 2.5c-.4-.4-1.05-.12-1.05.45v6.1L4.1 7.42a.75.75 0 0 0-1.17.94l3.2 4.05-1.4 3.22a.75.75 0 0 0 1.12.86l2.9-2.2 4.55 1.38a.75.75 0 0 0 .87-1.02l-1.35-2.38 3.1-1.05a.75.75 0 0 0 .35-1.18l-6.15-5.14Z",
      fill: "white",
      stroke: "black",
      strokeWidth: "1.1",
      strokeLinejoin: "round"
    }
  ) });
}
function DemoCursor({ pos, visible }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "browser-demo-cursor pointer-events-none absolute z-30 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        pos.clicking && "scale-[0.88]",
        !visible && "opacity-0"
      ),
      style: {
        left: pos.x,
        top: pos.y,
        transform: pos.pointer ? "translate(-3px, -2px)" : "translate(0, 0)"
      },
      children: pos.pointer ? /* @__PURE__ */ jsxRuntimeExports.jsx(PointerCursor, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowCursor, {})
    }
  );
}
function BrowserShowcase({ className }) {
  const [step, setStep] = reactExports.useState(0);
  const [cursorPos, setCursorPos] = reactExports.useState({
    x: 0,
    y: 0,
    pointer: false,
    clicking: false
  });
  const [cursorReady, setCursorReady] = reactExports.useState(false);
  const contentRef = reactExports.useRef(null);
  const targetsRef = reactExports.useRef({});
  const current = STEPS[step];
  const registerTarget = reactExports.useCallback((id, el) => {
    if (el) targetsRef.current[id] = el;
    else delete targetsRef.current[id];
  }, []);
  const updateCursor = reactExports.useCallback(() => {
    const container = contentRef.current;
    const target = targetsRef.current[current.target];
    if (!container || !target) return;
    const { x, y } = measureCursorPos(target, container, current.target);
    setCursorPos({ x, y, pointer: current.pointer, clicking: false });
    setCursorReady(true);
  }, [current.target, current.pointer]);
  reactExports.useLayoutEffect(() => {
    setCursorReady(false);
    const frame = requestAnimationFrame(() => {
      updateCursor();
      requestAnimationFrame(updateCursor);
    });
    return () => cancelAnimationFrame(frame);
  }, [updateCursor, step, current.scene]);
  reactExports.useEffect(() => {
    const container = contentRef.current;
    if (!container) return;
    const observer = new ResizeObserver(() => updateCursor());
    observer.observe(container);
    window.addEventListener("resize", updateCursor);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateCursor);
    };
  }, [updateCursor]);
  reactExports.useEffect(() => {
    const timer = window.setInterval(() => {
      setStep((s) => (s + 1) % STEPS.length);
    }, 3e3);
    return () => window.clearInterval(timer);
  }, []);
  reactExports.useEffect(() => {
    if (!current.pointer) return;
    const clickTimer = window.setTimeout(() => {
      setCursorPos((prev) => ({ ...prev, clicking: true }));
    }, 2200);
    const releaseTimer = window.setTimeout(() => {
      setCursorPos((prev) => ({ ...prev, clicking: false }));
    }, 2380);
    return () => {
      window.clearTimeout(clickTimer);
      window.clearTimeout(releaseTimer);
    };
  }, [step, current.pointer]);
  const highlight = (target) => current.target === target ? "ring-2 ring-[#ff9900]/70 ring-offset-1" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex h-full min-h-0 flex-col overflow-hidden rounded-lg bg-[#f5f5f5] sm:rounded-xl",
        className
      ),
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-black/8 bg-[#ebebeb] px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#ff5f57]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#febc2e]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#28c840]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 truncate rounded-md bg-white px-2 py-1 text-[9px] text-black/55 sm:text-[10px]", children: [
            "https://www.",
            current.url
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: contentRef, className: "relative flex-1 overflow-hidden p-3 sm:p-4", children: [
          current.scene === "search" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-sm font-bold text-[#ff9900]", children: "amazon" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  ref: (el) => registerTarget("search-input", el),
                  className: cn(
                    "h-7 min-w-0 flex-1 rounded border border-[#ff9900]/40 bg-white px-2 text-[10px] leading-7 text-black/60 transition-shadow",
                    highlight("search-input")
                  ),
                  children: [
                    "wireless mouse",
                    current.target === "search-input" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "browser-demo-caret ml-0.5 inline-block h-3 w-px bg-black/70" }) : null
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 sm:grid-cols-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  ref: (el) => registerTarget("product-tile", el),
                  className: cn(
                    "rounded border border-black/8 bg-white p-2 transition-shadow",
                    highlight("product-tile")
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 aspect-square rounded bg-black/5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-3/4 rounded bg-black/10" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-2 w-1/2 rounded bg-[#ff9900]/30" })
                  ]
                }
              ),
              [2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-black/8 bg-white p-2 opacity-60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 aspect-square rounded bg-black/5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-3/4 rounded bg-black/10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-2 w-1/2 rounded bg-[#ff9900]/30" })
              ] }, n))
            ] })
          ] }),
          current.scene === "product" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-[1fr_1.2fr]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-lg border border-black/8 bg-white" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-full rounded bg-black/10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-4/5 rounded bg-black/10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-[#b12704]", children: "$49.99" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  ref: (el) => registerTarget("add-to-cart", el),
                  className: cn(
                    "inline-flex w-fit rounded-full bg-[#ffd814] px-3 py-1.5 text-[10px] font-semibold text-black/80 transition-shadow sm:text-[11px]",
                    highlight("add-to-cart")
                  ),
                  children: "Add to Cart"
                }
              )
            ] })
          ] }),
          current.scene === "cart" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-black/8 bg-white p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-black/70", children: "Shopping Cart (1 item)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-3 border-t border-black/6 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 shrink-0 rounded bg-black/5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-3/4 rounded bg-black/10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] text-[#b12704]", children: "$49.99" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                ref: (el) => registerTarget("checkout", el),
                className: cn(
                  "mt-3 inline-flex w-fit rounded-full bg-[#ffa41c] px-3 py-1.5 text-[10px] font-semibold text-black/80 transition-shadow sm:text-[11px]",
                  highlight("checkout")
                ),
                children: "Proceed to checkout"
              }
            )
          ] }),
          current.scene === "approve" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-[220px] rounded-xl border border-black/10 bg-white p-4 shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-black/80", children: "Payment approval" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-[10px] leading-relaxed text-black/55", children: [
              "Agent requests to complete checkout for ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$49.99" }),
              " on Amazon."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 rounded-lg bg-black/8 py-1.5 text-center text-[10px] font-medium", children: "Deny" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  ref: (el) => registerTarget("approve-btn", el),
                  className: cn(
                    "flex-1 rounded-lg bg-[#ffd814] py-1.5 text-center text-[10px] font-semibold text-black/80 transition-shadow",
                    highlight("approve-btn")
                  ),
                  children: "Approve"
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DemoCursor, { pos: cursorPos, visible: cursorReady })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-black/8 bg-white/80 px-3 py-1.5 text-[9px] text-black/45 sm:text-[10px]", children: current.hint })
      ]
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#f3f2ee] text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, { variant: "landing" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureSpotlight, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-2 space-y-2 sm:mx-4 sm:space-y-4 lg:mx-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Install, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-2 mt-2 sm:mx-4 sm:mt-3 lg:mx-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-frame editorial-shadow relative min-h-[calc(100svh-0.5rem)] overflow-hidden sm:min-h-[calc(100svh-0.75rem)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/new%20bg.png", alt: "", className: "absolute inset-0 h-full w-full object-cover object-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-b from-white/25 via-transparent to-black/5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex min-h-[calc(100svh-0.5rem)] flex-col items-center justify-center px-4 pb-14 pt-20 text-center sm:min-h-[calc(100svh-0.75rem)] sm:px-10 sm:pb-20 sm:pt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "nature-hero-title max-w-3xl px-1 text-foreground", children: [
        "Autopilot for your terminal workflow.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Scale effortlessly." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-5 max-w-xl px-1 text-sm leading-relaxed text-foreground/65 sm:mt-6 sm:text-base lg:text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "agent-dev" }),
        " reads and edits code, runs shell commands with approval, and delegates complex tasks through boss orchestration."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 px-2 sm:mt-9 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:px-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CopyCmd, { cmd: "npm i -g @devang0907/agent-dev", variant: "hero" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/Devang0907/agent-dev", target: "_blank", rel: "noreferrer", className: "inline-flex h-11 w-full items-center justify-center rounded-full border border-foreground/15 bg-white/60 px-5 text-xs font-medium uppercase tracking-[0.06em] text-foreground backdrop-blur-sm transition-colors hover:bg-white sm:w-auto", children: "view on github ↗" })
      ] })
    ] })
  ] }) });
}
const SHOWCASE_TABS = [{
  id: "boss",
  label: "Boss mode",
  subtitle: "Smart delegation",
  title: "Boss mode",
  body: "Delegate exploration, implementation, and shell work to specialized workers while the boss orchestrator keeps context and approvals in one place.",
  cta: "Read boss docs",
  href: "/docs#agent-modes"
}, {
  id: "browser",
  label: "Browser agent",
  subtitle: "Shop & book with approval",
  title: "Browser automation",
  body: "Let the agent drive a real browser — search Amazon, compare flights, book hotels, and fill checkout flows. Every payment step pauses for your approval before anything is charged.",
  cta: "Browser automation docs",
  href: "/docs#browser-automation"
}, {
  id: "telegram",
  label: "Telegram",
  subtitle: "Chat from anywhere",
  title: "Telegram gateway",
  body: "Approve commands from your phone, schedule daily tasks, and keep long-running agent sessions reachable outside the terminal.",
  cta: "Setup Telegram",
  href: "/docs#telegram-gateway"
}, {
  id: "mcp",
  label: "MCP & skills",
  subtitle: "Extend the agent",
  title: "MCP & skills",
  body: "Connect MCP servers and load Vercel Agent Skills so agent-dev can reach filesystems, APIs, and custom workflows in your stack.",
  cta: "View integrations",
  href: "/docs#skills"
}];
const TERMINAL_DEMOS = {
  boss: {
    badge: "BOSS · Build",
    badgeClass: "text-purple-400",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "bash" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "npm test" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ 42 passed" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: "Auth refactor complete. Trace: " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: "/trace" })
    ] })
  },
  browser: {
    badge: "Build · Browser",
    badgeClass: "text-orange-400",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "$ " }),
      "agent",
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "◆" }),
      " agent",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "claude-sonnet-4 · Build" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "›" }),
      " buy a wireless mouse on Amazon under $50",
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-400", children: "browser" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "goto amazon.com" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-400", children: "browser" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: 'type "wireless mouse" · click search' }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-400", children: "browser" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "click product · add to cart" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: "approve?" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "checkout · pay $49.99" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ approved by user" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-400", children: "browser" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "confirm order" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ order placed" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: "Mouse ordered. Receipt saved." })
    ] })
  },
  telegram: {
    badge: "Telegram · Build",
    badgeClass: "text-blue-400",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "$ " }),
      "agent --telegram",
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "◆" }),
      " agent",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "gateway listening · Build" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "telegram" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "@you: run tests then deploy staging" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "bash" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "npm test" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ 42 passed" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: "approve?" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "bash npm run deploy:staging" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "telegram" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "inline ✅ approved from phone" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "bash" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "npm run deploy:staging" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ deployed staging.agent.dev" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "telegram" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "agent: staging is live 🚀" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "daily task scheduled · 09:00 UTC" })
    ] })
  },
  mcp: {
    badge: "Build · MCP",
    badgeClass: "text-emerald-400",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "$ " }),
      "agent",
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "◆" }),
      " agent",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "gpt-4.1 · Build" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "›" }),
      " check deploy status and load project skills",
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "mcp" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "vercel → list_deployments" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "skill" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "vercel-agent-skills/deploy" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "read" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: ".vercel/project.json" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "mcp" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "filesystem → read AGENTS.md" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "skill" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "cursor-rules → inject rules" }),
      "\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ 2 MCP servers · 4 skills loaded" }),
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: "Production " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "READY" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: " · agent-dev-a3f91c" })
    ] })
  }
};
const PROVIDERS = [{
  name: "OpenAI",
  logo: "/logos/openai.svg",
  color: "#10A37F"
}, {
  name: "Anthropic",
  logo: "/logos/anthropic.svg",
  color: "#CC785C"
}, {
  name: "Google Gemini",
  logo: "/logos/google-gemini.svg",
  color: "#8E75B2"
}, {
  name: "Meta Llama",
  logo: "/logos/meta.svg",
  color: "#0467DF"
}, {
  name: "DeepSeek",
  logo: "/logos/deepseek.svg",
  color: "#4D6BFE"
}];
function LogoTicker() {
  const items = [...PROVIDERS, ...PROVIDERS];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-8 overflow-hidden sm:mb-10", "aria-label": "Supported AI providers", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-[#f3f2ee] to-transparent sm:w-16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-[#f3f2ee] to-transparent sm:w-16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo-ticker-track gap-10 sm:gap-14", children: items.map((provider, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: provider.logo, alt: "", className: "h-7 w-7 object-contain sm:h-8 sm:w-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold tracking-[0.02em] sm:text-base", style: {
        color: provider.color
      }, children: provider.name })
    ] }, `${provider.name}-${i}`)) })
  ] });
}
function FeatureSpotlight() {
  const [active, setActive] = reactExports.useState("boss");
  const tab = SHOWCASE_TABS.find((t) => t.id === active) ?? SHOWCASE_TABS[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-2 pt-8 pb-6 sm:mx-4 sm:pt-14 sm:pb-8 lg:mx-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ref-section-title mb-5 px-2 text-center text-foreground sm:mb-8 sm:px-0", children: "Empowering autonomous development with" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LogoTicker, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-frame ref-sky-bg editorial-shadow overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-black/8 px-3 pt-4 sm:px-8 sm:pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scrollbar-none -mx-1 flex gap-5 overflow-x-auto px-1 pb-0 sm:mx-0 sm:gap-10 sm:px-0", children: SHOWCASE_TABS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setActive(item.id), className: `shrink-0 border-b-2 pb-4 text-left transition-colors ${active === item.id ? "border-foreground text-foreground" : "border-transparent text-foreground/45 hover:text-foreground/70"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-medium", children: item.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 block text-[11px] text-foreground/50", children: item.subtitle })
      ] }, item.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 p-4 sm:gap-8 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ref-section-title text-foreground", children: tab.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm leading-relaxed text-foreground/65 sm:mt-5 sm:text-base", children: tab.body }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: tab.href, className: "mt-6 inline-flex w-full items-center justify-center rounded-lg bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-90 sm:mt-8 sm:w-fit", children: tab.cta })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[300px] overflow-hidden rounded-2xl sm:min-h-[380px] sm:rounded-[20px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/new%20bg%202.png", alt: "", className: "absolute inset-0 h-full w-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-sky-200/20" }),
          active === "browser" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-2 sm:inset-4 md:inset-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full overflow-hidden rounded-xl bg-white/92 p-1.5 shadow-lg backdrop-blur-md sm:rounded-2xl sm:p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserShowcase, { className: "h-full" }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-2 bottom-2 sm:inset-x-4 sm:bottom-4 md:inset-x-6 md:bottom-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-white/92 p-1.5 shadow-lg backdrop-blur-md sm:rounded-2xl sm:p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalDemo, { compact: true, variant: active }) }) })
        ] })
      ] })
    ] })
  ] });
}
function CopyCmd({
  cmd,
  variant = "default"
}) {
  const [copied, setCopied] = reactExports.useState(false);
  const isHero = variant === "hero";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }, className: isHero ? "group inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-6 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-90 sm:w-auto" : "group inline-flex h-11 max-w-full items-center gap-2 overflow-x-auto rounded-full bg-foreground px-4 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-transform hover:scale-[1.02] sm:gap-3 sm:px-5", children: isHero ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copied ? "Copied ✓" : "Get started" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cmd }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[10px] text-background/60 group-hover:text-background", children: copied ? "copied ✓" : "copy" })
  ] }) });
}
function TerminalDemo({
  compact = false,
  variant = "boss"
}) {
  const demo = TERMINAL_DEMOS[variant];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col overflow-hidden bg-terminal text-terminal-foreground ${compact ? "h-[280px] rounded-lg sm:h-[330px] sm:rounded-xl" : "rounded-[18px] sm:rounded-[20px]"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-8 shrink-0 items-center justify-between gap-2 border-b border-white/10 px-2.5 sm:h-9 sm:px-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-red-400/80 sm:h-2.5 sm:w-2.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-yellow-400/80 sm:h-2.5 sm:w-2.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-green-400/80 sm:h-2.5 sm:w-2.5" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden min-w-0 truncate text-[9px] text-white/40 sm:inline sm:text-[10px]", children: "~/projects/app — agent-dev" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `shrink-0 text-[9px] sm:text-[10px] ${demo.badgeClass}`, children: demo.badge })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: `terminal-mono overflow-x-auto overflow-y-hidden ${compact ? "h-[248px] px-3 py-3 text-[9px] leading-relaxed sm:h-[294px] sm:px-4 sm:py-4 sm:text-[10px]" : "overflow-x-auto px-6 py-6 text-[12px] leading-relaxed"}`, children: [
      demo.children,
      "\n\n",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "›" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink" })
    ] })
  ] });
}
function Install() {
  const [method, setMethod] = reactExports.useState("npm");
  const installLines = method === "npm" ? ["$ npm i -g @devang0907/agent-dev", "$ agent"] : ["$ git clone https://github.com/Devang0907/agent-dev.git", "$ cd agent-dev && npm install", "$ npm run dev"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "install", className: "scroll-mt-24 py-8 sm:scroll-mt-28 sm:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-frame ref-sky-bg editorial-shadow overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 p-5 sm:gap-10 sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:p-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center lg:pr-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "editorial-label text-foreground/50", children: "Get started" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ref-section-title mt-3 text-foreground", children: "Quick start" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-foreground/65 sm:text-base", children: "Install in under a minute. Set one API key, open your project, and start coding with the agent in your terminal." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-6 space-y-4", children: [{
        step: "01",
        title: "Install",
        body: "Global npm install or clone the repo for local development."
      }, {
        step: "02",
        title: "Configure",
        body: "Export at least one provider key — OpenRouter works out of the box."
      }, {
        step: "03",
        title: "Launch",
        body: "Run agent in any project folder. Requires Node.js 20+."
      }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "editorial-label mt-0.5 shrink-0 text-foreground/35", children: item.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-sm leading-relaxed text-foreground/55", children: item.body })
        ] })
      ] }, item.step)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 w-full sm:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CopyCmd, { cmd: "npm i -g @devang0907/agent-dev", variant: "hero" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/70 bg-white/65 p-4 backdrop-blur-sm sm:rounded-[20px] sm:p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 border-b border-black/8 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setMethod("npm"), className: `border-b-2 pb-2 text-left transition-colors ${method === "npm" ? "border-foreground text-foreground" : "border-transparent text-foreground/45 hover:text-foreground/70"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-medium", children: "Global install" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 block text-[11px] text-foreground/50", children: "Recommended" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setMethod("source"), className: `border-b-2 pb-2 text-left transition-colors ${method === "source" ? "border-foreground text-foreground" : "border-transparent text-foreground/45 hover:text-foreground/70"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-medium", children: "From source" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 block text-[11px] text-foreground/50", children: "Contributors" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalCodeBlock, { title: method === "npm" ? "terminal" : "from source", lines: installLines, copyText: installLines.join("\n") }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/70 bg-white/65 p-4 backdrop-blur-sm sm:rounded-[20px] sm:p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "API keys" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-foreground/55", children: "Add to ~/.bashrc or ~/.zshrc" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "editorial-label shrink-0 text-foreground/40", children: "Step 02" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalCodeBlock, { title: "environment", lines: ["export OPENROUTER_API_KEY=sk-or-...   # free models", "export OPENAI_API_KEY=sk-...          # ChatGPT", "export ANTHROPIC_API_KEY=sk-ant-...   # Claude", "export GROQ_API_KEY=gsk_...           # Groq", "export GEMINI_API_KEY=...             # Gemini"], copyText: `export OPENROUTER_API_KEY=sk-or-...
export OPENAI_API_KEY=sk-...
export ANTHROPIC_API_KEY=sk-ant-...
export GROQ_API_KEY=gsk_...
export GEMINI_API_KEY=...` })
      ] })
    ] })
  ] }) }) });
}
const FEATURES = [{
  title: "Build · Plan · Boss",
  desc: "Full tool access, read-only exploration, or a boss orchestrator that delegates to specialized workers.",
  href: "/docs#agent-modes",
  tag: "Modes"
}, {
  title: "Browser automation",
  desc: "Shop on Amazon, book flights and hotels, and complete checkouts — with payment approval before anything is charged.",
  href: "/docs#browser-automation",
  tag: "Browser"
}, {
  title: "Bring your own model",
  desc: "OpenRouter free tier, Claude, GPT, Groq, or Gemini. Switch anytime with /model.",
  href: "/docs#providers",
  tag: "Models"
}, {
  title: "Telegram gateway",
  desc: "Chat from your phone with inline approvals, reminders, and daily scheduled tasks.",
  href: "/docs#telegram-gateway",
  tag: "Mobile"
}, {
  title: "Skills & MCP",
  desc: "Load Vercel Agent Skills and connect MCP servers for filesystems, APIs, and custom workflows.",
  href: "/docs#skills",
  tag: "Extend"
}, {
  title: "Compaction & rules",
  desc: "Auto-compact long sessions, inject rules from AGENTS.md, and configure permission presets.",
  href: "/docs#context-compaction",
  tag: "Context"
}];
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "scroll-mt-24 py-8 sm:scroll-mt-28 sm:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-frame ref-sky-bg editorial-shadow overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 p-5 sm:gap-10 sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:p-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center lg:pr-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "editorial-label text-foreground/50", children: "Capabilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ref-section-title mt-3 text-foreground", children: "Everything in one agent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-foreground/65 sm:text-base", children: "One terminal session for reading code, running tests, delegating work, and shipping — without leaving your shell." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-2.5 text-sm text-foreground/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" }),
          "20 tools with approval gates for destructive actions"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" }),
          "Boss orchestration for complex multi-step tasks"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" }),
          "MCP, skills, and Telegram when you need more reach"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs", className: "mt-8 inline-flex w-full items-center justify-center rounded-lg bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-90 sm:w-fit", children: "Full documentation →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: FEATURES.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: f.href, className: "group flex flex-col rounded-2xl border border-white/70 bg-white/65 p-4 backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:shadow-md sm:rounded-[20px] sm:p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "editorial-label text-foreground/40", children: f.tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-sm font-semibold text-foreground", children: f.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 flex-1 text-xs leading-relaxed text-foreground/55 sm:text-sm sm:text-foreground/60", children: f.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-4 text-[10px] font-medium uppercase tracking-[0.08em] text-foreground/45 transition-colors group-hover:text-foreground", children: "read docs →" })
    ] }, f.title)) })
  ] }) }) });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-8 pt-2 sm:pb-16 sm:pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-frame editorial-shadow relative min-h-[240px] overflow-hidden sm:min-h-[300px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/hero-sky-landscape.jpg", alt: "", className: "absolute inset-0 h-full w-full object-cover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-r from-white/85 via-white/70 to-white/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full min-h-[240px] flex-col items-start justify-center gap-5 p-6 sm:min-h-[300px] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ref-section-title text-foreground", children: "Stop context-switching." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-md text-sm leading-relaxed text-foreground/65 sm:text-base", children: "Ship code without leaving the terminal." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CopyCmd, { cmd: "npm i -g @devang0907/agent-dev", variant: "hero" }) })
    ] })
  ] }) });
}
function TerminalCodeBlock({
  title,
  lines,
  copyText
}) {
  const [copied, setCopied] = reactExports.useState(false);
  const textToCopy = copyText ?? lines.join("\n");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl bg-terminal text-terminal-foreground shadow-lg sm:rounded-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 border-b border-white/10 px-3 py-2 sm:px-4 sm:py-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.08em] text-white/40", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
          navigator.clipboard.writeText(textToCopy);
          setCopied(true);
          setTimeout(() => setCopied(false), 1400);
        }, className: "text-[10px] uppercase tracking-[0.06em] text-white/35 transition-colors hover:text-white/70", children: copied ? "copied ✓" : "copy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-red-400/80 sm:h-2.5 sm:w-2.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-yellow-400/80 sm:h-2.5 sm:w-2.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-green-400/80 sm:h-2.5 sm:w-2.5" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "terminal-mono overflow-x-auto px-3 py-3 text-[11px] leading-relaxed sm:px-4 sm:py-4 sm:text-xs", children: lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: l }, l)) })
  ] });
}
export {
  Index as component
};
