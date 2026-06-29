import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type DemoTarget = "search-input" | "product-tile" | "add-to-cart" | "checkout" | "approve-btn";

type DemoStep = {
  url: string;
  hint: string;
  scene: "search" | "product" | "cart" | "approve";
  target: DemoTarget;
  pointer: boolean;
};

const STEPS: DemoStep[] = [
  {
    url: "amazon.com/s?k=wireless+mouse",
    hint: "Typing in search…",
    scene: "search",
    target: "search-input",
    pointer: false,
  },
  {
    url: "amazon.com/s?k=wireless+mouse",
    hint: "Selecting a product…",
    scene: "search",
    target: "product-tile",
    pointer: true,
  },
  {
    url: "amazon.com/dp/B09XYZ",
    hint: "Adding to cart…",
    scene: "product",
    target: "add-to-cart",
    pointer: true,
  },
  {
    url: "amazon.com/cart",
    hint: "Proceeding to checkout…",
    scene: "cart",
    target: "checkout",
    pointer: true,
  },
  {
    url: "amazon.com/checkout",
    hint: "Awaiting payment approval…",
    scene: "approve",
    target: "approve-btn",
    pointer: true,
  },
];

type CursorPos = {
  x: number;
  y: number;
  pointer: boolean;
  clicking: boolean;
};

function measureCursorPos(
  target: HTMLElement,
  container: HTMLElement,
  targetId: DemoTarget,
): { x: number; y: number } {
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

const POINTER_CURSOR_SIZE = 30;
const POINTER_HOTSPOT = { x: 185 / 512, y: 85 / 512 };

function ArrowCursor() {
  return (
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" aria-hidden>
      <path
        d="M1 1L1 16.5L5.5 12.5L9 21L12 19.5L8.5 11.5L14.5 11.5L1 1Z"
        fill="white"
        stroke="#111"
        strokeWidth="1.15"
      />
    </svg>
  );
}

const POINTER_MASK = "url(/click.png) center / contain no-repeat";

function PointerCursor() {
  return (
    <div
      aria-hidden
      className="relative block select-none"
      style={{ width: POINTER_CURSOR_SIZE, height: POINTER_CURSOR_SIZE }}
    >
      <div
        className="absolute inset-0 bg-white"
        style={{
          WebkitMask: POINTER_MASK,
          mask: POINTER_MASK,
        }}
      />
      <img
        src="/click.png"
        alt=""
        width={POINTER_CURSOR_SIZE}
        height={POINTER_CURSOR_SIZE}
        draggable={false}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}

function DemoCursor({ pos, visible }: { pos: CursorPos; visible: boolean }) {
  const pointerOffsetX = POINTER_CURSOR_SIZE * POINTER_HOTSPOT.x;
  const pointerOffsetY = POINTER_CURSOR_SIZE * POINTER_HOTSPOT.y;

  const transform = pos.pointer
    ? pos.clicking
      ? `translate(${-pointerOffsetX}px, ${-pointerOffsetY}px) scale(0.92)`
      : `translate(${-pointerOffsetX}px, ${-pointerOffsetY}px)`
    : pos.clicking
      ? "scale(0.92)"
      : undefined;

  return (
    <div
      className={cn(
        "browser-demo-cursor pointer-events-none absolute z-30 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        !visible && "opacity-0",
      )}
      style={{
        left: pos.x,
        top: pos.y,
        transform,
        transformOrigin: pos.pointer
          ? `${POINTER_HOTSPOT.x * 100}% ${POINTER_HOTSPOT.y * 100}%`
          : "0 0",
      }}
    >
      {pos.pointer ? <PointerCursor /> : <ArrowCursor />}
    </div>
  );
}

export function BrowserShowcase({ className }: { className?: string }) {
  const [step, setStep] = useState(0);
  const [cursorPos, setCursorPos] = useState<CursorPos>({
    x: 0,
    y: 0,
    pointer: false,
    clicking: false,
  });
  const [cursorReady, setCursorReady] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const targetsRef = useRef<Partial<Record<DemoTarget, HTMLElement>>>({});

  const current = STEPS[step];

  const registerTarget = useCallback((id: DemoTarget, el: HTMLElement | null) => {
    if (el) targetsRef.current[id] = el;
    else delete targetsRef.current[id];
  }, []);

  const updateCursor = useCallback(() => {
    const container = contentRef.current;
    const target = targetsRef.current[current.target];
    if (!container || !target) return;

    const { x, y } = measureCursorPos(target, container, current.target);
    setCursorPos({ x, y, pointer: current.pointer, clicking: false });
    setCursorReady(true);
  }, [current.target, current.pointer]);

  useLayoutEffect(() => {
    setCursorReady(false);
    const frame = requestAnimationFrame(() => {
      updateCursor();
      requestAnimationFrame(updateCursor);
    });
    return () => cancelAnimationFrame(frame);
  }, [updateCursor, step, current.scene]);

  useEffect(() => {
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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStep((s) => (s + 1) % STEPS.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
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

  const highlight = (target: DemoTarget) =>
    current.target === target ? "ring-2 ring-[#ff9900]/70 ring-offset-1" : "";

  return (
    <div
      className={cn(
        "flex h-full min-h-0 flex-col overflow-hidden rounded-lg bg-[#f5f5f5] sm:rounded-xl",
        className,
      )}
      aria-hidden
    >
      <div className="flex items-center gap-2 border-b border-black/8 bg-[#ebebeb] px-3 py-2">
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-md bg-white px-2 py-1 text-[9px] text-black/55 sm:text-[10px]">
          https://www.{current.url}
        </div>
      </div>

      <div ref={contentRef} className="relative flex-1 overflow-hidden p-3 sm:p-4">
        {current.scene === "search" && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="shrink-0 text-sm font-bold text-[#ff9900]">amazon</span>
              <div
                ref={(el) => registerTarget("search-input", el)}
                className={cn(
                  "h-7 min-w-0 flex-1 rounded border border-[#ff9900]/40 bg-white px-2 text-[10px] leading-7 text-black/60 transition-shadow",
                  highlight("search-input"),
                )}
              >
                wireless mouse
                {current.target === "search-input" ? (
                  <span className="browser-demo-caret ml-0.5 inline-block h-3 w-px bg-black/70" />
                ) : null}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              <div
                ref={(el) => registerTarget("product-tile", el)}
                className={cn(
                  "rounded border border-black/8 bg-white p-2 transition-shadow",
                  highlight("product-tile"),
                )}
              >
                <div className="mb-2 aspect-square rounded bg-black/5" />
                <div className="h-2 w-3/4 rounded bg-black/10" />
                <div className="mt-1 h-2 w-1/2 rounded bg-[#ff9900]/30" />
              </div>
              {[2, 3].map((n) => (
                <div key={n} className="rounded border border-black/8 bg-white p-2 opacity-60">
                  <div className="mb-2 aspect-square rounded bg-black/5" />
                  <div className="h-2 w-3/4 rounded bg-black/10" />
                  <div className="mt-1 h-2 w-1/2 rounded bg-[#ff9900]/30" />
                </div>
              ))}
            </div>
          </div>
        )}

        {current.scene === "product" && (
          <div className="grid gap-3 sm:grid-cols-[1fr_1.2fr]">
            <div className="aspect-square rounded-lg border border-black/8 bg-white" />
            <div className="flex flex-col justify-center space-y-2">
              <div className="h-3 w-full rounded bg-black/10" />
              <div className="h-3 w-4/5 rounded bg-black/10" />
              <p className="text-sm font-semibold text-[#b12704]">$49.99</p>
              <div
                ref={(el) => registerTarget("add-to-cart", el)}
                className={cn(
                  "inline-flex w-fit rounded-full bg-[#ffd814] px-3 py-1.5 text-[10px] font-semibold text-black/80 transition-shadow sm:text-[11px]",
                  highlight("add-to-cart"),
                )}
              >
                Add to Cart
              </div>
            </div>
          </div>
        )}

        {current.scene === "cart" && (
          <div className="rounded-lg border border-black/8 bg-white p-3">
            <p className="text-[11px] font-semibold text-black/70">Shopping Cart (1 item)</p>
            <div className="mt-2 flex items-center gap-3 border-t border-black/6 pt-2">
              <div className="h-10 w-10 shrink-0 rounded bg-black/5" />
              <div className="flex-1">
                <div className="h-2 w-3/4 rounded bg-black/10" />
                <p className="mt-1 text-[10px] text-[#b12704]">$49.99</p>
              </div>
            </div>
            <div
              ref={(el) => registerTarget("checkout", el)}
              className={cn(
                "mt-3 inline-flex w-fit rounded-full bg-[#ffa41c] px-3 py-1.5 text-[10px] font-semibold text-black/80 transition-shadow sm:text-[11px]",
                highlight("checkout"),
              )}
            >
              Proceed to checkout
            </div>
          </div>
        )}

        {current.scene === "approve" && (
          <div className="flex h-full items-center justify-center">
            <div className="w-full max-w-[220px] rounded-xl border border-black/10 bg-white p-4 shadow-xl">
              <p className="text-[11px] font-semibold text-black/80">Payment approval</p>
              <p className="mt-2 text-[10px] leading-relaxed text-black/55">
                Agent requests to complete checkout for <strong>$49.99</strong> on Amazon.
              </p>
              <div className="mt-3 flex gap-2">
                <span className="flex-1 rounded-lg bg-black/8 py-1.5 text-center text-[10px] font-medium">
                  Deny
                </span>
                <span
                  ref={(el) => registerTarget("approve-btn", el)}
                  className={cn(
                    "flex-1 rounded-lg bg-[#ffd814] py-1.5 text-center text-[10px] font-semibold text-black/80 transition-shadow",
                    highlight("approve-btn"),
                  )}
                >
                  Approve
                </span>
              </div>
            </div>
          </div>
        )}

        <DemoCursor pos={cursorPos} visible={cursorReady} />
      </div>

      <div className="border-t border-black/8 bg-white/80 px-3 py-1.5 text-[9px] text-black/45 sm:text-[10px]">
        {current.hint}
      </div>
    </div>
  );
}
