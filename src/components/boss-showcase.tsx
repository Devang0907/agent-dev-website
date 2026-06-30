import { useEffect, useLayoutEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { cn } from "@/lib/utils";

type TerminalBlock = {
  id: string;
  content: ReactNode;
};

type DemoStep =
  | { kind: "boot"; ms: number }
  | { kind: "user-task"; ms: number }
  | { kind: "boss-plan"; ms: number }
  | { kind: "approval"; ms: number }
  | { kind: "approval-yes"; ms: number }
  | { kind: "spawn-worker"; ms: number }
  | { kind: "worker-progress"; ms: number }
  | { kind: "worker-error"; ms: number }
  | { kind: "boss-intervene"; ms: number }
  | { kind: "worker-recover"; ms: number }
  | { kind: "deliver"; ms: number }
  | { kind: "pause"; ms: number };

const DEMO_STEPS: DemoStep[] = [
  { kind: "boot", ms: 900 },
  { kind: "user-task", ms: 1100 },
  { kind: "boss-plan", ms: 2200 },
  { kind: "approval", ms: 1800 },
  { kind: "approval-yes", ms: 700 },
  { kind: "spawn-worker", ms: 1000 },
  { kind: "worker-progress", ms: 2600 },
  { kind: "worker-error", ms: 1600 },
  { kind: "boss-intervene", ms: 2200 },
  { kind: "worker-recover", ms: 2400 },
  { kind: "deliver", ms: 2800 },
  { kind: "pause", ms: 1400 },
];

function TerminalLine({ children }: { children: ReactNode }) {
  return <div className="leading-relaxed">{children}</div>;
}

function BossShowcaseShell({
  className,
  badge,
  hint,
  children,
  showCursor,
  viewportRef,
}: {
  className?: string;
  badge: string;
  hint: string;
  children: ReactNode;
  showCursor?: boolean;
  viewportRef?: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      className={cn(
        "flex h-full min-h-0 flex-col overflow-hidden rounded-lg bg-terminal text-terminal-foreground sm:rounded-xl",
        className,
      )}
      aria-hidden
    >
      <div className="flex h-8 shrink-0 items-center justify-between gap-2 border-b border-white/10 px-2.5 sm:h-9 sm:px-3">
        <div className="flex shrink-0 gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/80 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/80 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-green-400/80 sm:h-2.5 sm:w-2.5" />
        </div>
        <span className="hidden min-w-0 truncate text-[9px] text-white/40 sm:inline sm:text-[10px]">
          ~/projects/api — agent-dev
        </span>
        <span className="shrink-0 text-[9px] text-purple-400 sm:text-[10px]">{badge}</span>
      </div>

      <div
        ref={viewportRef}
        className="boss-demo-viewport min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-none scrollbar-none"
      >
        <pre className="terminal-mono terminal-selectable whitespace-pre-wrap px-3 py-3 text-[9px] leading-relaxed sm:px-4 sm:py-4 sm:text-[10px]">
          {children}
          {showCursor ? (
            <>
              {"\n"}
              <span className="text-primary">›</span> <span className="blink pointer-events-none select-none" />
            </>
          ) : null}
        </pre>
      </div>

      <div className="shrink-0 border-t border-white/10 px-3 py-1.5 text-[9px] text-white/40 sm:text-[10px]">
        {hint}
      </div>
    </div>
  );
}

export function BossShowcase({ className }: { className?: string }) {
  const [blocks, setBlocks] = useState<TerminalBlock[]>([]);
  const [hint, setHint] = useState("Starting boss orchestrator…");
  const [showApproval, setShowApproval] = useState(false);
  const [approvalPicked, setApprovalPicked] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const viewportRef = useRef<HTMLDivElement>(null);
  const blockIdRef = useRef(0);

  const addBlock = (content: ReactNode) => {
    blockIdRef.current += 1;
    setBlocks((prev) => [...prev, { id: String(blockIdRef.current), content }]);
  };

  const scrollToBottom = () => {
    const el = viewportRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  };

  useLayoutEffect(() => {
    scrollToBottom();
    const frame = requestAnimationFrame(scrollToBottom);
    return () => cancelAnimationFrame(frame);
  }, [blocks, showApproval, approvalPicked, showCursor]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const blockScroll = (event: Event) => event.preventDefault();
    el.addEventListener("wheel", blockScroll, { passive: false });
    el.addEventListener("touchmove", blockScroll, { passive: false });

    return () => {
      el.removeEventListener("wheel", blockScroll);
      el.removeEventListener("touchmove", blockScroll);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
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

    const runStep = async (step: DemoStep) => {
      if (cancelled) return;

      switch (step.kind) {
        case "boot":
          setHint("Boss mode active");
          addBlock(
            <>
              <TerminalLine>
                <span className="text-white/50">$ </span>agent --boss
              </TerminalLine>
              <TerminalLine>
                <span className="text-primary">◆</span> agent{" "}
                <span className="text-white/40">free/llama-3.3-70b · BOSS</span>
              </TerminalLine>
            </>,
          );
          break;
        case "user-task":
          setHint("User submitted a coding task");
          addBlock(
            <TerminalLine>
              <span className="text-primary">›</span>{" "}
              <span className="text-white/80">add refresh token rotation to the auth API</span>
            </TerminalLine>,
          );
          break;
        case "boss-plan":
          setHint("Boss is drafting a plan…");
          addBlock(
            <>
              <TerminalLine>
                <span className="text-purple-400">boss</span>{" "}
                <span className="text-white/60">planning refresh token rotation</span>
              </TerminalLine>
              <TerminalLine>
                <span className="text-white/40"> 1. read src/auth/refresh.ts + token store</span>
              </TerminalLine>
              <TerminalLine>
                <span className="text-white/40"> 2. rotate refresh tokens in Redis</span>
              </TerminalLine>
              <TerminalLine>
                <span className="text-white/40"> 3. add integration tests</span>
              </TerminalLine>
              <TerminalLine>
                <span className="text-white/40"> 4. run npm test</span>
              </TerminalLine>
            </>,
          );
          break;
        case "approval":
          setHint("Waiting for build approval…");
          addBlock(
            <TerminalLine>
              <span className="text-yellow-300">approve?</span>{" "}
              <span className="text-white/60">execute plan with implement worker</span>
            </TerminalLine>,
          );
          setShowApproval(true);
          break;
        case "approval-yes":
          setApprovalPicked(true);
          await wait(400);
          if (cancelled) return;
          setShowApproval(false);
          addBlock(
            <TerminalLine>
              <span className="text-white/60"> ✓ approved</span>
            </TerminalLine>,
          );
          setHint("Plan approved");
          break;
        case "spawn-worker":
          setHint("Spawning implement worker…");
          addBlock(
            <TerminalLine>
              <span className="text-purple-400">boss</span>{" "}
              <span className="text-white/60">delegate → implement worker</span>
            </TerminalLine>,
          );
          break;
        case "worker-progress":
          setHint("Worker implementing changes…");
          addBlock(
            <>
              <TerminalLine>
                <span className="text-green-400">read</span>{" "}
                <span className="text-white/60">src/auth/refresh.ts</span>
              </TerminalLine>
              <TerminalLine>
                <span className="text-green-400">edit</span>{" "}
                <span className="text-white/60">src/auth/refresh.ts</span>{" "}
                <span className="text-white/40">(+31 -8)</span>
              </TerminalLine>
              <TerminalLine>
                <span className="text-green-400">edit</span>{" "}
                <span className="text-white/60">src/auth/store.ts</span>{" "}
                <span className="text-white/40">(+18 -2)</span>
              </TerminalLine>
              <TerminalLine>
                <span className="text-green-400">bash</span>{" "}
                <span className="text-white/60">npm test</span>
              </TerminalLine>
            </>,
          );
          break;
        case "worker-error":
          setHint("Worker hit a test failure");
          addBlock(
            <TerminalLine>
              <span className="text-red-400"> ✗ auth.refresh.test.ts</span>{" "}
              <span className="text-white/50">— old refresh token still valid after rotation</span>
            </TerminalLine>,
          );
          break;
        case "boss-intervene":
          setHint("Boss correcting the worker…");
          addBlock(
            <>
              <TerminalLine>
                <span className="text-purple-400">boss</span>{" "}
                <span className="text-white/60">→ implement worker:</span>
              </TerminalLine>
              <TerminalLine>
                <span className="text-white/50">
                  {" "}
                  revoke old refresh token in DB before issuing the new one
                </span>
              </TerminalLine>
              <TerminalLine>
                <span className="text-white/40"> see src/auth/store.ts:88 — add revokeRefreshToken()</span>
              </TerminalLine>
            </>,
          );
          break;
        case "worker-recover":
          setHint("Worker applying fix…");
          addBlock(
            <>
              <TerminalLine>
                <span className="text-green-400">edit</span>{" "}
                <span className="text-white/60">src/auth/store.ts</span>{" "}
                <span className="text-white/40">(+12 -1)</span>
              </TerminalLine>
              <TerminalLine>
                <span className="text-green-400">bash</span>{" "}
                <span className="text-white/60">npm test</span>
              </TerminalLine>
              <TerminalLine>
                <span className="text-white/60"> ✓ 44 passed</span>
              </TerminalLine>
            </>,
          );
          break;
        case "deliver":
          setShowCursor(false);
          setHint("Task delivered to user");
          addBlock(
            <>
              <TerminalLine>
                <span className="text-purple-400">boss</span>{" "}
                <span className="text-white/60">worker complete → summarizing</span>
              </TerminalLine>
              <TerminalLine>
                <span className="text-white/80">
                  Refresh token rotation shipped. Old tokens revoked on rotate. Tests green.
                </span>
              </TerminalLine>
              <TerminalLine>
                <span className="text-white/40"> trace: </span>
                <span className="text-yellow-300">/trace boss-run-a8f2</span>
              </TerminalLine>
            </>,
          );
          break;
        case "pause":
          break;
      }

      await wait(step.ms);
    };

    const runLoop = async () => {
      while (!cancelled) {
        reset();
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

  return (
    <BossShowcaseShell
      className={className}
      badge="BOSS · Build"
      hint={hint}
      showCursor={showCursor}
      viewportRef={viewportRef}
    >
      <div>
        {blocks.map((block) => (
          <div key={block.id} className="mb-2 last:mb-0">
            {block.content}
          </div>
        ))}
        {showApproval ? (
          <div className="mt-2 flex gap-2">
            {(["y", "n"] as const).map((key) => (
              <span
                key={key}
                className={cn(
                  "rounded border px-2 py-0.5 text-[9px] font-medium transition-colors sm:text-[10px]",
                  key === "y" && approvalPicked
                    ? "border-purple-400 bg-purple-400/20 text-purple-300"
                    : "border-white/15 text-white/40",
                )}
              >
                {key}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </BossShowcaseShell>
  );
}
