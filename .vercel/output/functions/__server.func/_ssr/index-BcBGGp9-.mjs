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
const SEARCH_QUERY = "wireless mouse";
const STEP_MS = 3e3;
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
function measureCursorPos(target, container, targetId, caretEl) {
  const cr = container.getBoundingClientRect();
  if (caretEl) {
    const tr2 = caretEl.getBoundingClientRect();
    return {
      x: tr2.right - cr.left + 1,
      y: tr2.top - cr.top + tr2.height / 2
    };
  }
  const tr = target.getBoundingClientRect();
  let x = tr.left - cr.left + tr.width / 2;
  let y = tr.top - cr.top + tr.height / 2;
  if (targetId === "search-input") {
    x = tr.left - cr.left + tr.width * 0.82;
    y = tr.top - cr.top + tr.height / 2;
  }
  return { x, y };
}
const POINTER_IMAGE = "/pointer.png";
const POINTER_CURSOR_SIZE = 30;
const POINTER_HOTSPOT = { x: 192 / 512, y: 2 / 512 };
function ArrowCursor() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "18", height: "22", viewBox: "0 0 18 22", fill: "none", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      d: "M1 1L1 16.5L5.5 12.5L9 21L12 19.5L8.5 11.5L14.5 11.5L1 1Z",
      fill: "white",
      stroke: "#111",
      strokeWidth: "1.15"
    }
  ) });
}
function PointerCursor() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: POINTER_IMAGE,
      alt: "",
      width: POINTER_CURSOR_SIZE,
      height: POINTER_CURSOR_SIZE,
      draggable: false,
      className: "block select-none"
    }
  );
}
function DemoCursor({ pos, visible }) {
  const transform = pos.pointer ? pos.clicking ? `translate(${-11.25}px, ${-0.1171875}px) scale(0.92)` : `translate(${-11.25}px, ${-0.1171875}px)` : pos.clicking ? "scale(0.92)" : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "browser-demo-cursor pointer-events-none absolute z-30 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        !visible && "opacity-0"
      ),
      style: {
        left: pos.x,
        top: pos.y,
        transform,
        transformOrigin: pos.pointer ? `${POINTER_HOTSPOT.x * 100}% ${POINTER_HOTSPOT.y * 100}%` : "0 0"
      },
      children: pos.pointer ? /* @__PURE__ */ jsxRuntimeExports.jsx(PointerCursor, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowCursor, {})
    }
  );
}
function BrowserShowcase({ className }) {
  const [step, setStep] = reactExports.useState(0);
  const [typedText, setTypedText] = reactExports.useState("");
  const [cursorPos, setCursorPos] = reactExports.useState({
    x: 0,
    y: 0,
    pointer: false,
    clicking: false
  });
  const [cursorReady, setCursorReady] = reactExports.useState(false);
  const contentRef = reactExports.useRef(null);
  const targetsRef = reactExports.useRef({});
  const caretAnchorRef = reactExports.useRef(null);
  const current = STEPS[step];
  const isTypingStep = step === 0 && current.target === "search-input";
  const searchDisplayText = isTypingStep ? typedText : SEARCH_QUERY;
  const registerTarget = reactExports.useCallback((id, el) => {
    if (el) targetsRef.current[id] = el;
    else delete targetsRef.current[id];
  }, []);
  const updateCursor = reactExports.useCallback(() => {
    const container = contentRef.current;
    const target = targetsRef.current[current.target];
    if (!container || !target) return;
    const caretEl = isTypingStep ? caretAnchorRef.current : null;
    const { x, y } = measureCursorPos(target, container, current.target, caretEl);
    setCursorPos({ x, y, pointer: current.pointer, clicking: false });
    setCursorReady(true);
  }, [current.target, current.pointer, isTypingStep]);
  reactExports.useLayoutEffect(() => {
    setCursorReady(false);
    const frame = requestAnimationFrame(() => {
      updateCursor();
      requestAnimationFrame(updateCursor);
    });
    return () => cancelAnimationFrame(frame);
  }, [updateCursor, step, current.scene, typedText]);
  reactExports.useEffect(() => {
    if (!isTypingStep) {
      setTypedText("");
      return;
    }
    setTypedText("");
    let index = 0;
    const timers = [];
    const typeNext = () => {
      if (index >= SEARCH_QUERY.length) return;
      index += 1;
      setTypedText(SEARCH_QUERY.slice(0, index));
      const char = SEARCH_QUERY[index - 1];
      const delay = char === " " ? 420 : index === 8 ? 320 : 145 + index % 3 * 18;
      timers.push(window.setTimeout(typeNext, delay));
    };
    timers.push(window.setTimeout(typeNext, 520));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [isTypingStep, step]);
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
    }, STEP_MS);
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
                    searchDisplayText,
                    isTypingStep ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref: caretAnchorRef, className: "inline-flex align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "browser-demo-caret ml-px inline-block h-3 w-px bg-black/70" }) }) : null
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
const DEMO_STEPS$2 = [
  { kind: "boot", ms: 900 },
  { kind: "user-task", ms: 1100 },
  { kind: "boss-plan", ms: 2200 },
  { kind: "approval", ms: 1800 },
  { kind: "approval-yes", ms: 700 },
  { kind: "spawn-worker", ms: 1e3 },
  { kind: "worker-progress", ms: 2600 },
  { kind: "worker-error", ms: 1600 },
  { kind: "boss-intervene", ms: 2200 },
  { kind: "worker-recover", ms: 2400 },
  { kind: "deliver", ms: 2800 },
  { kind: "pause", ms: 1400 }
];
function TerminalLine$1({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "leading-relaxed", children });
}
function BossShowcaseShell({
  className,
  badge,
  hint,
  children,
  showCursor,
  viewportRef
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex h-full min-h-0 flex-col overflow-hidden rounded-lg bg-terminal text-terminal-foreground sm:rounded-xl",
        className
      ),
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-8 shrink-0 items-center justify-between gap-2 border-b border-white/10 px-2.5 sm:h-9 sm:px-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-red-400/80 sm:h-2.5 sm:w-2.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-yellow-400/80 sm:h-2.5 sm:w-2.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-green-400/80 sm:h-2.5 sm:w-2.5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden min-w-0 truncate text-[9px] text-white/40 sm:inline sm:text-[10px]", children: "~/projects/api — agent-dev" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-[9px] text-purple-400 sm:text-[10px]", children: badge })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: viewportRef,
            className: "boss-demo-viewport min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-none scrollbar-none",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: "terminal-mono terminal-selectable whitespace-pre-wrap px-3 py-3 text-[9px] leading-relaxed sm:px-4 sm:py-4 sm:text-[10px]", children: [
              children,
              showCursor ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                "\n",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "›" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink pointer-events-none select-none" })
              ] }) : null
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 border-t border-white/10 px-3 py-1.5 text-[9px] text-white/40 sm:text-[10px]", children: hint })
      ]
    }
  );
}
function BossShowcase({ className }) {
  const [blocks, setBlocks] = reactExports.useState([]);
  const [hint, setHint] = reactExports.useState("Starting boss orchestrator…");
  const [showApproval, setShowApproval] = reactExports.useState(false);
  const [approvalPicked, setApprovalPicked] = reactExports.useState(false);
  const [showCursor, setShowCursor] = reactExports.useState(true);
  const viewportRef = reactExports.useRef(null);
  const blockIdRef = reactExports.useRef(0);
  const addBlock = (content) => {
    blockIdRef.current += 1;
    setBlocks((prev) => [...prev, { id: String(blockIdRef.current), content }]);
  };
  const scrollToBottom = () => {
    const el = viewportRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  };
  reactExports.useLayoutEffect(() => {
    scrollToBottom();
    const frame = requestAnimationFrame(scrollToBottom);
    return () => cancelAnimationFrame(frame);
  }, [blocks, showApproval, approvalPicked, showCursor]);
  reactExports.useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const blockScroll = (event) => event.preventDefault();
    el.addEventListener("wheel", blockScroll, { passive: false });
    el.addEventListener("touchmove", blockScroll, { passive: false });
    return () => {
      el.removeEventListener("wheel", blockScroll);
      el.removeEventListener("touchmove", blockScroll);
    };
  }, []);
  reactExports.useEffect(() => {
    let cancelled = false;
    const timers = [];
    const wait = (ms) => new Promise((resolve) => {
      timers.push(window.setTimeout(resolve, ms));
    });
    const reset = () => {
      setBlocks([]);
      setHint("Starting boss orchestrator…");
      setShowApproval(false);
      setApprovalPicked(false);
      setShowCursor(true);
      blockIdRef.current = 0;
      requestAnimationFrame(() => {
        if (viewportRef.current) viewportRef.current.scrollTop = 0;
      });
    };
    const runStep = async (step) => {
      if (cancelled) return;
      switch (step.kind) {
        case "boot":
          setHint("Boss mode active");
          addBlock(
            /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine$1, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "$ " }),
                "agent --boss"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine$1, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "◆" }),
                " agent",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "free/llama-3.3-70b · BOSS" })
              ] })
            ] })
          );
          break;
        case "user-task":
          setHint("User submitted a coding task");
          addBlock(
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine$1, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "›" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: "add refresh token rotation to the auth API" })
            ] })
          );
          break;
        case "boss-plan":
          setHint("Boss is drafting a plan…");
          addBlock(
            /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine$1, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-400", children: "boss" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "planning refresh token rotation" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalLine$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: " 1. read src/auth/refresh.ts + token store" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalLine$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: " 2. rotate refresh tokens in Redis" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalLine$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: " 3. add integration tests" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalLine$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: " 4. run npm test" }) })
            ] })
          );
          break;
        case "approval":
          setHint("Waiting for build approval…");
          addBlock(
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine$1, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: "approve?" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "execute plan with implement worker" })
            ] })
          );
          setShowApproval(true);
          break;
        case "approval-yes":
          setApprovalPicked(true);
          await wait(400);
          if (cancelled) return;
          setShowApproval(false);
          addBlock(
            /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalLine$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ approved" }) })
          );
          setHint("Plan approved");
          break;
        case "spawn-worker":
          setHint("Spawning implement worker…");
          addBlock(
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine$1, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-400", children: "boss" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "delegate → implement worker" })
            ] })
          );
          break;
        case "worker-progress":
          setHint("Worker implementing changes…");
          addBlock(
            /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine$1, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "read" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "src/auth/refresh.ts" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine$1, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "edit" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "src/auth/refresh.ts" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "(+31 -8)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine$1, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "edit" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "src/auth/store.ts" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "(+18 -2)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine$1, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "bash" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "npm test" })
              ] })
            ] })
          );
          break;
        case "worker-error":
          setHint("Worker hit a test failure");
          addBlock(
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine$1, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400", children: " ✗ auth.refresh.test.ts" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "— old refresh token still valid after rotation" })
            ] })
          );
          break;
        case "boss-intervene":
          setHint("Boss correcting the worker…");
          addBlock(
            /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine$1, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-400", children: "boss" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "→ implement worker:" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalLine$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/50", children: [
                " ",
                "revoke old refresh token in DB before issuing the new one"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalLine$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: " see src/auth/store.ts:88 — add revokeRefreshToken()" }) })
            ] })
          );
          break;
        case "worker-recover":
          setHint("Worker applying fix…");
          addBlock(
            /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine$1, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "edit" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "src/auth/store.ts" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "(+12 -1)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine$1, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "bash" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "npm test" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalLine$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ 44 passed" }) })
            ] })
          );
          break;
        case "deliver":
          setShowCursor(false);
          setHint("Task delivered to user");
          addBlock(
            /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine$1, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-400", children: "boss" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "worker complete → summarizing" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalLine$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: "Refresh token rotation shipped. Old tokens revoked on rotate. Tests green." }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine$1, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: " trace: " }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: "/trace boss-run-a8f2" })
              ] })
            ] })
          );
          break;
      }
      await wait(step.ms);
    };
    const runLoop = async () => {
      while (!cancelled) {
        reset();
        for (const step of DEMO_STEPS$2) {
          if (cancelled) return;
          await runStep(step);
        }
      }
    };
    runLoop();
    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    BossShowcaseShell,
    {
      className,
      badge: "BOSS · Build",
      hint,
      showCursor,
      viewportRef,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        blocks.map((block) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 last:mb-0", children: block.content }, block.id)),
        showApproval ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex gap-2", children: ["y", "n"].map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "rounded border px-2 py-0.5 text-[9px] font-medium transition-colors sm:text-[10px]",
              key === "y" && approvalPicked ? "border-purple-400 bg-purple-400/20 text-purple-300" : "border-white/15 text-white/40"
            ),
            children: key
          },
          key
        )) }) : null
      ] })
    }
  );
}
const DEMO_STEPS$1 = [
  { kind: "boot", ms: 900 },
  { kind: "install-skill", ms: 1500 },
  { kind: "skill-command", ms: 1100 },
  { kind: "skill-active", ms: 1300 },
  { kind: "mcp-connect", ms: 1600 },
  { kind: "switch-figma", ms: 600 },
  { kind: "mcp-figma", ms: 1200 },
  { kind: "skill-apply", ms: 1400 },
  { kind: "figma-phase", phase: 1, ms: 1200 },
  { kind: "figma-phase", phase: 2, ms: 1200 },
  { kind: "figma-phase", phase: 3, ms: 1200 },
  { kind: "figma-phase", phase: 4, ms: 2400 },
  { kind: "done", ms: 2200 },
  { kind: "pause", ms: 1200 }
];
function TerminalLine({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "leading-relaxed", children });
}
function FigmaCanvas({ phase }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full min-h-0 items-center justify-center overflow-hidden bg-[#f5f5f5] p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full max-h-[360px] w-full max-w-[300px] overflow-hidden rounded-lg border border-black/8 bg-white shadow-md sm:max-h-none sm:max-w-[340px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn(
            "flex items-center justify-between border-b border-black/6 px-3 py-2.5 transition-opacity duration-700",
            phase >= 1 ? "opacity-100" : "opacity-0"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-14 rounded-full bg-black/10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-10 rounded-full bg-black/8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-10 rounded-full bg-black/8" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "px-3 pt-4 transition-all duration-700",
            phase >= 2 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          ),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-linear-to-br from-[#6366f1] to-[#8b5cf6] px-3 py-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-2.5 w-24 rounded-full bg-white/90" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-2.5 h-2 w-32 rounded-full bg-white/50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "mx-auto mt-4 inline-block rounded-full bg-white px-4 py-1.5 transition-opacity duration-500",
                  phase >= 3 ? "opacity-100" : "opacity-0"
                ),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold text-[#6366f1]", children: "Get started" })
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "grid grid-cols-3 gap-2 px-3 py-3 transition-all duration-700",
            phase >= 3 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          ),
          children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-black/6 bg-[#fafafa] p-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1.5 h-5 w-5 rounded bg-[#6366f1]/15" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full rounded-full bg-black/10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-1 w-2/3 rounded-full bg-black/6" })
          ] }, i))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "border-t border-black/6 px-3 py-2.5 transition-opacity duration-700",
            phase >= 4 ? "opacity-100" : "opacity-0"
          ),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-20 rounded-full bg-black/10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-[#6366f1] px-3 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-medium text-white", children: "Sign up" }) })
          ] })
        }
      )
    ] }),
    phase >= 4 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-4 rounded-md bg-[#0acf83] px-2.5 py-1 text-[9px] font-semibold text-white shadow-sm sm:bottom-6 sm:right-6 sm:text-[10px]", children: "✓ Design skill applied" }) : null
  ] });
}
function McpShowcase({ className }) {
  const [blocks, setBlocks] = reactExports.useState([]);
  const [hint, setHint] = reactExports.useState("Loading skills & MCP…");
  const [figmaPhase, setFigmaPhase] = reactExports.useState(0);
  const [view, setView] = reactExports.useState("terminal");
  const blockIdRef = reactExports.useRef(0);
  const addBlock = (content) => {
    blockIdRef.current += 1;
    setBlocks((prev) => [...prev, { id: String(blockIdRef.current), content }]);
  };
  reactExports.useEffect(() => {
    let cancelled = false;
    const timers = [];
    const wait = (ms) => new Promise((resolve) => {
      timers.push(window.setTimeout(resolve, ms));
    });
    const reset = () => {
      setBlocks([]);
      setHint("Loading skills & MCP…");
      setFigmaPhase(0);
      setView("terminal");
      blockIdRef.current = 0;
    };
    const runStep = async (step) => {
      if (cancelled) return;
      switch (step.kind) {
        case "boot":
          setHint("Agent ready");
          addBlock(
            /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "$ " }),
                "agent"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "◆" }),
                " agent",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "claude-sonnet-4 · Build" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "›" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: "design a landing page for our SaaS" })
              ] })
            ] })
          );
          break;
        case "install-skill":
          setHint("Installing design skill…");
          addBlock(
            /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "skill" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "installing design-system…" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalLine, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ design-system skill loaded" }) })
            ] })
          );
          break;
        case "skill-command":
          setHint("Activating skill via slash command…");
          addBlock(
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "›" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: "/skill design-system" })
            ] })
          );
          break;
        case "skill-active":
          setHint("Design skill active");
          addBlock(
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "skill" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "active — typography, layout, color tokens ready" })
            ] })
          );
          break;
        case "mcp-connect":
          setHint("Connecting MCP server…");
          addBlock(
            /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TerminalLine, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "mcp" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "connecting figma…" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalLine, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: " ✓ figma MCP server connected" }) })
            ] })
          );
          break;
        case "switch-figma":
          setView("figma");
          setHint("Opening Figma in browser…");
          break;
        case "mcp-figma":
          setHint('Creating frame "SaaS Landing Page"…');
          break;
        case "skill-apply":
          setHint("Applying design-system tokens to Figma…");
          break;
        case "figma-phase":
          setFigmaPhase(step.phase);
          setHint(
            step.phase === 4 ? "Landing page template complete" : `Building UI in Figma (${step.phase}/4)…`
          );
          break;
        case "done":
          setHint("✓ Beautiful SaaS landing template created in Figma");
          break;
      }
      await wait(step.ms);
    };
    const runLoop = async () => {
      while (!cancelled) {
        reset();
        for (const step of DEMO_STEPS$1) {
          if (cancelled) return;
          await runStep(step);
        }
      }
    };
    runLoop();
    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn("relative h-full min-h-0 overflow-hidden rounded-lg sm:rounded-xl", className),
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "absolute inset-0 flex flex-col overflow-hidden bg-terminal text-terminal-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              view === "terminal" ? "z-10 translate-y-0 opacity-100" : "z-0 -translate-y-2 opacity-0 pointer-events-none"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-8 shrink-0 items-center justify-between gap-2 border-b border-white/10 px-2.5 sm:h-9 sm:px-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-red-400/80 sm:h-2.5 sm:w-2.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-yellow-400/80 sm:h-2.5 sm:w-2.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-green-400/80 sm:h-2.5 sm:w-2.5" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden min-w-0 truncate text-[9px] text-white/40 sm:inline sm:text-[10px]", children: "~/projects/app — agent-dev" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-[9px] text-emerald-400 sm:text-[10px]", children: "Build · MCP" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-0 flex-1 flex-col justify-end overflow-hidden px-3 py-3 sm:px-4 sm:py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: "terminal-mono terminal-selectable whitespace-pre-wrap text-[9px] leading-relaxed sm:text-[10px]", children: [
                blocks.map((block) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 last:mb-0", children: block.content }, block.id)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "›" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink pointer-events-none select-none" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 border-t border-white/10 px-3 py-1.5 text-[9px] text-white/40 sm:text-[10px]", children: view === "terminal" ? hint : "Connecting to Figma…" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "absolute inset-0 flex flex-col overflow-hidden bg-[#ebebeb] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              view === "figma" ? "z-10 translate-y-0 opacity-100" : "z-0 translate-y-2 opacity-0 pointer-events-none"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-2 border-b border-black/8 bg-[#ebebeb] px-3 py-2 sm:px-3.5 sm:py-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1 truncate rounded-md bg-white px-2.5 py-1 text-[9px] text-black/55 sm:text-[10px]", children: "https://www.figma.com/design/saas-landing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-[9px] font-semibold text-[#0acf83] sm:text-[10px]", children: "Figma" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative min-h-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FigmaCanvas, { phase: figmaPhase }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 border-t border-black/8 bg-white/80 px-3 py-1.5 text-[9px] text-black/45 sm:text-[10px]", children: hint })
            ]
          }
        )
      ]
    }
  );
}
const PERMISSION_OPTIONS = ["Approve", "Deny"];
const DEMO_STEPS = [
  { kind: "user", text: "Hi", ms: 900 },
  { kind: "typing", ms: 700 },
  { kind: "agent", text: "Hey! How can I help you today?", ms: 1400 },
  { kind: "user", text: "Create an Uber clone", ms: 1100 },
  { kind: "typing", ms: 900 },
  { kind: "approval-prompt", ms: 2200 },
  { kind: "approval-pick", option: "Approve", ms: 700 },
  { kind: "typing", ms: 800 },
  { kind: "building", ms: 2400 },
  { kind: "agent", text: "✅ Your website is created!\n\n🚀 uber-clone.vercel.app", ms: 2200 },
  { kind: "user", text: "Remind me to drink water in 5 mins", ms: 1200 },
  { kind: "typing", ms: 700 },
  { kind: "agent", text: "⏰ Reminder set — I'll ping you in 5 minutes.", ms: 1600 },
  { kind: "time-skip", ms: 1400 },
  { kind: "notification", text: "💧 Time to drink water!", ms: 2800 },
  { kind: "pause", ms: 1200 }
];
function formatTime(date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 6e4);
}
function TypingIndicator() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-3 py-2.5 shadow-sm", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "telegram-typing-dot h-1.5 w-1.5 rounded-full bg-[#8e98a4]",
      style: { animationDelay: `${i * 0.18}s` }
    },
    i
  )) }) });
}
function MessageBubble({ message }) {
  const isUser = message.from === "user";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex", isUser ? "justify-end" : "justify-start"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "max-w-[88%] px-2.5 py-1.5 shadow-sm sm:max-w-[85%]",
        isUser ? "rounded-2xl rounded-br-sm bg-[#effdde] text-[#0f1419]" : "rounded-2xl rounded-bl-sm bg-white text-[#0f1419]"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap text-[11px] leading-snug sm:text-[12px]", children: message.text }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("mt-0.5 text-right text-[9px]", isUser ? "text-[#5fb05f]" : "text-[#8e98a4]"), children: message.time })
      ]
    }
  ) });
}
function ApprovalKeyboard({
  selected,
  picking
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid w-full max-w-[92%] grid-cols-2 gap-1 sm:max-w-[88%]", children: PERMISSION_OPTIONS.map((option) => {
    const isSelected = selected === option;
    const isPicking = picking === option;
    const isApprove = option === "Approve";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "rounded-lg border px-2.5 py-1.5 text-center text-[10px] font-medium transition-all duration-300 sm:text-[11px]",
          isSelected ? isApprove ? "border-[#3390ec] bg-[#3390ec] text-white shadow-sm" : "border-[#c8d1da] bg-[#eef1f5] text-[#8e98a4]" : isPicking ? "border-[#3390ec] bg-[#e8f4fd] text-[#3390ec] scale-[0.98]" : "border-[#c8d1da] bg-white text-[#3390ec]"
        ),
        children: option
      },
      option
    );
  }) }) });
}
function ReminderNotification({
  text,
  time,
  visible
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "pointer-events-none absolute inset-x-2 top-2 z-20 transition-all duration-500 sm:inset-x-3 sm:top-3",
        visible ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 rounded-xl border border-black/6 bg-white/95 p-2.5 shadow-lg backdrop-blur-md sm:p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3390ec] text-[11px] font-bold text-white", children: "A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold text-[#0f1419] sm:text-[11px]", children: "agent-dev bot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[10px] leading-snug text-[#3d4852] sm:text-[11px]", children: text }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[9px] text-[#8e98a4]", children: time })
        ] })
      ] })
    }
  );
}
function TelegramShowcase({ className }) {
  const [messages, setMessages] = reactExports.useState([]);
  const [typing, setTyping] = reactExports.useState(false);
  const [building, setBuilding] = reactExports.useState(false);
  const [showApproval, setShowApproval] = reactExports.useState(false);
  const [selectedPermission, setSelectedPermission] = reactExports.useState(null);
  const [pickingPermission, setPickingPermission] = reactExports.useState(null);
  const [showTimeSkip, setShowTimeSkip] = reactExports.useState(false);
  const [notification, setNotification] = reactExports.useState(null);
  const [notificationTime, setNotificationTime] = reactExports.useState("");
  const [hint, setHint] = reactExports.useState("Chatting with agent-dev on Telegram…");
  const scrollRef = reactExports.useRef(null);
  const stepRef = reactExports.useRef(0);
  const msgIdRef = reactExports.useRef(0);
  const reminderSetAtRef = reactExports.useRef(null);
  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  };
  reactExports.useEffect(() => {
    scrollToBottom();
  }, [messages, typing, building, showApproval, showTimeSkip, notification]);
  reactExports.useEffect(() => {
    let cancelled = false;
    const timers = [];
    const reset = () => {
      setMessages([]);
      setTyping(false);
      setBuilding(false);
      setShowApproval(false);
      setSelectedPermission(null);
      setPickingPermission(null);
      setShowTimeSkip(false);
      setNotification(null);
      setNotificationTime("");
      setHint("Chatting with agent-dev on Telegram…");
      msgIdRef.current = 0;
      reminderSetAtRef.current = null;
    };
    const addMessage = (from, text, at) => {
      msgIdRef.current += 1;
      setMessages((prev) => [
        ...prev,
        {
          id: String(msgIdRef.current),
          from,
          text,
          time: formatTime(at ?? /* @__PURE__ */ new Date())
        }
      ]);
    };
    const wait = (ms) => new Promise((resolve) => {
      timers.push(window.setTimeout(resolve, ms));
    });
    const runStep = async (step) => {
      if (cancelled) return;
      switch (step.kind) {
        case "user":
          setTyping(false);
          setBuilding(false);
          setHint("You sent a message");
          addMessage("user", step.text);
          break;
        case "typing":
          setBuilding(false);
          setHint("agent-dev is typing…");
          setTyping(true);
          break;
        case "agent":
          setTyping(false);
          setBuilding(false);
          if (step.text.startsWith("⏰ Reminder set")) {
            reminderSetAtRef.current = /* @__PURE__ */ new Date();
          }
          addMessage("agent", step.text);
          setHint("agent-dev replied");
          break;
        case "approval-prompt":
          setTyping(false);
          addMessage(
            "agent",
            "Can I create the project in D:/projects directory with name uber-clone?"
          );
          setShowApproval(true);
          setHint("Approve or deny…");
          break;
        case "approval-pick":
          setTyping(false);
          setPickingPermission(step.option);
          await wait(320);
          if (cancelled) return;
          setPickingPermission(null);
          setSelectedPermission(step.option);
          setShowApproval(false);
          addMessage("user", step.option);
          setHint(`${step.option}d from phone`);
          break;
        case "building":
          setTyping(false);
          setHint("Building your Uber clone…");
          setBuilding(true);
          addMessage("agent", "On it — creating uber-clone in D:/projects…");
          break;
        case "time-skip":
          setShowTimeSkip(true);
          setHint("5 minutes later…");
          break;
        case "notification": {
          setShowTimeSkip(false);
          const reminderAt = reminderSetAtRef.current ? addMinutes(reminderSetAtRef.current, 5) : addMinutes(/* @__PURE__ */ new Date(), 5);
          const reminderTimeLabel = formatTime(reminderAt);
          setNotification(step.text);
          setNotificationTime(reminderTimeLabel);
          addMessage("agent", step.text, reminderAt);
          setHint("Reminder delivered");
          break;
        }
      }
      await wait(step.ms);
    };
    const runLoop = async () => {
      while (!cancelled) {
        reset();
        stepRef.current = 0;
        for (const step of DEMO_STEPS) {
          if (cancelled) return;
          await runStep(step);
        }
      }
    };
    runLoop();
    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "relative flex h-full min-h-0 flex-col overflow-hidden rounded-lg bg-[#d6dfea] sm:rounded-xl",
        className
      ),
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-2.5 border-b border-[#c8d1da] bg-white px-3 py-2 sm:px-3.5 sm:py-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3390ec] text-xs font-bold text-white sm:h-9 sm:w-9", children: "A" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[12px] font-semibold text-[#0f1419] sm:text-[13px]", children: "agent-dev bot" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-[#3390ec] sm:text-[11px]", children: typing || building ? "typing…" : "online" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ReminderNotification,
            {
              text: notification ?? "",
              time: notificationTime,
              visible: Boolean(notification)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ref: scrollRef,
              className: "telegram-chat-scroll absolute inset-0 overflow-y-auto overflow-x-hidden px-2 py-3 sm:px-3 sm:py-4",
              style: {
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8c5d1' fill-opacity='0.22'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-full flex-col gap-2", children: [
                messages.map((message) => /* @__PURE__ */ jsxRuntimeExports.jsx(MessageBubble, { message }, message.id)),
                showApproval ? /* @__PURE__ */ jsxRuntimeExports.jsx(ApprovalKeyboard, { selected: selectedPermission, picking: pickingPermission }) : null,
                typing ? /* @__PURE__ */ jsxRuntimeExports.jsx(TypingIndicator, {}) : null,
                building ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "telegram-build-spinner h-3.5 w-3.5 rounded-full border-2 border-[#3390ec]/25 border-t-[#3390ec]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-[#3d4852] sm:text-[11px]", children: "Generating project files…" })
                ] }) }) }) : null,
                showTimeSkip ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-[#c8d1da]/80 px-3 py-1 text-[9px] font-medium uppercase tracking-wide text-[#5d6d7e] sm:text-[10px]", children: "5 minutes later" }) }) : null
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 border-t border-[#c8d1da] bg-[#eef1f5] px-2 py-2 sm:px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-[#c8d1da] bg-white px-3 py-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-[10px] text-[#8e98a4] sm:text-[11px]", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#3390ec] text-[10px] text-white", children: "↑" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-[#c8d1da] bg-white/80 px-3 py-1.5 text-[9px] text-[#5d6d7e] sm:text-[10px]", children: hint })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-sky-200/20 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-2 sm:inset-4 md:inset-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full overflow-hidden rounded-xl bg-white/92 p-1.5 shadow-lg backdrop-blur-md sm:rounded-2xl sm:p-2", children: active === "boss" ? /* @__PURE__ */ jsxRuntimeExports.jsx(BossShowcase, { className: "h-full" }) : active === "browser" ? /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserShowcase, { className: "h-full" }) : active === "telegram" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TelegramShowcase, { className: "h-full" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(McpShowcase, { className: "h-full" }) }) })
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
  const copy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  if (isHero) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex h-11 w-full max-w-lg items-stretch overflow-hidden rounded-lg bg-foreground sm:w-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-0 flex-1 items-center overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "terminal-mono terminal-selectable whitespace-nowrap px-4 text-left text-xs font-normal normal-case tracking-normal text-background", children: [
        "$ ",
        cmd
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: copy, className: "shrink-0 border-l border-background/15 px-4 text-xs font-semibold uppercase tracking-[0.08em] text-background/70 transition-colors hover:bg-background/10 hover:text-background", children: copied ? "Copied ✓" : "Copy" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group inline-flex h-11 max-w-full items-center gap-2 overflow-x-auto rounded-full bg-foreground px-4 text-xs font-semibold uppercase tracking-[0.08em] text-background sm:gap-3 sm:px-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "terminal-mono terminal-selectable whitespace-nowrap font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-background/60", children: "$" }),
      " ",
      cmd
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: copy, className: "shrink-0 text-[10px] text-background/60 transition-colors hover:text-background", children: copied ? "copied ✓" : "copy" })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "terminal-mono terminal-selectable whitespace-pre px-3 py-3 text-[11px] leading-relaxed sm:px-4 sm:py-4 sm:text-xs", children: lines.join("\n") }) })
  ] });
}
export {
  Index as component
};
