import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type TerminalBlock = {
  id: string;
  content: ReactNode;
};

type FigmaPhase = 0 | 1 | 2 | 3 | 4;
type ViewMode = "terminal" | "figma";

type DemoStep =
  | { kind: "boot"; ms: number }
  | { kind: "install-skill"; ms: number }
  | { kind: "skill-command"; ms: number }
  | { kind: "skill-active"; ms: number }
  | { kind: "mcp-connect"; ms: number }
  | { kind: "switch-figma"; ms: number }
  | { kind: "mcp-figma"; ms: number }
  | { kind: "skill-apply"; ms: number }
  | { kind: "figma-phase"; phase: FigmaPhase; ms: number }
  | { kind: "done"; ms: number }
  | { kind: "pause"; ms: number };

const DEMO_STEPS: DemoStep[] = [
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
  { kind: "pause", ms: 1200 },
];

function TerminalLine({ children }: { children: ReactNode }) {
  return <div className="leading-relaxed">{children}</div>;
}

function FigmaCanvas({ phase }: { phase: FigmaPhase }) {
  return (
    <div className="relative flex h-full min-h-0 items-center justify-center overflow-hidden bg-[#f5f5f5] p-4 sm:p-6">
      <div className="h-full max-h-[360px] w-full max-w-[300px] overflow-hidden rounded-lg border border-black/8 bg-white shadow-md sm:max-h-none sm:max-w-[340px]">
        <div
          className={cn(
            "flex items-center justify-between border-b border-black/6 px-3 py-2.5 transition-opacity duration-700",
            phase >= 1 ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="h-2.5 w-14 rounded-full bg-black/10" />
          <div className="flex gap-2">
            <div className="h-2 w-10 rounded-full bg-black/8" />
            <div className="h-2 w-10 rounded-full bg-black/8" />
          </div>
        </div>

        <div
          className={cn(
            "px-3 pt-4 transition-all duration-700",
            phase >= 2 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
          )}
        >
          <div className="rounded-lg bg-linear-to-br from-[#6366f1] to-[#8b5cf6] px-3 py-6 text-center">
            <div className="mx-auto h-2.5 w-24 rounded-full bg-white/90" />
            <div className="mx-auto mt-2.5 h-2 w-32 rounded-full bg-white/50" />
            <div
              className={cn(
                "mx-auto mt-4 inline-block rounded-full bg-white px-4 py-1.5 transition-opacity duration-500",
                phase >= 3 ? "opacity-100" : "opacity-0",
              )}
            >
              <span className="text-[9px] font-semibold text-[#6366f1]">Get started</span>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "grid grid-cols-3 gap-2 px-3 py-3 transition-all duration-700",
            phase >= 3 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
          )}
        >
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-md border border-black/6 bg-[#fafafa] p-2">
              <div className="mb-1.5 h-5 w-5 rounded bg-[#6366f1]/15" />
              <div className="h-1.5 w-full rounded-full bg-black/10" />
              <div className="mt-1 h-1 w-2/3 rounded-full bg-black/6" />
            </div>
          ))}
        </div>

        <div
          className={cn(
            "border-t border-black/6 px-3 py-2.5 transition-opacity duration-700",
            phase >= 4 ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="flex items-center justify-between">
            <div className="h-2 w-20 rounded-full bg-black/10" />
            <div className="rounded-full bg-[#6366f1] px-3 py-1">
              <span className="text-[8px] font-medium text-white">Sign up</span>
            </div>
          </div>
        </div>
      </div>

      {phase >= 4 ? (
        <div className="absolute bottom-4 right-4 rounded-md bg-[#0acf83] px-2.5 py-1 text-[9px] font-semibold text-white shadow-sm sm:bottom-6 sm:right-6 sm:text-[10px]">
          ✓ Design skill applied
        </div>
      ) : null}
    </div>
  );
}

export function McpShowcase({ className }: { className?: string }) {
  const [blocks, setBlocks] = useState<TerminalBlock[]>([]);
  const [hint, setHint] = useState("Loading skills & MCP…");
  const [figmaPhase, setFigmaPhase] = useState<FigmaPhase>(0);
  const [view, setView] = useState<ViewMode>("terminal");

  const blockIdRef = useRef(0);

  const addBlock = (content: ReactNode) => {
    blockIdRef.current += 1;
    setBlocks((prev) => [...prev, { id: String(blockIdRef.current), content }]);
  };

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });

    const reset = () => {
      setBlocks([]);
      setHint("Loading skills & MCP…");
      setFigmaPhase(0);
      setView("terminal");
      blockIdRef.current = 0;
    };

    const runStep = async (step: DemoStep) => {
      if (cancelled) return;

      switch (step.kind) {
        case "boot":
          setHint("Agent ready");
          addBlock(
            <>
              <TerminalLine>
                <span className="text-white/50">$ </span>agent
              </TerminalLine>
              <TerminalLine>
                <span className="text-primary">◆</span> agent{" "}
                <span className="text-white/40">claude-sonnet-4 · Build</span>
              </TerminalLine>
              <TerminalLine>
                <span className="text-primary">›</span>{" "}
                <span className="text-white/80">design a landing page for our SaaS</span>
              </TerminalLine>
            </>,
          );
          break;
        case "install-skill":
          setHint("Installing design skill…");
          addBlock(
            <>
              <TerminalLine>
                <span className="text-emerald-400">skill</span>{" "}
                <span className="text-white/60">installing design-system…</span>
              </TerminalLine>
              <TerminalLine>
                <span className="text-white/60"> ✓ design-system skill loaded</span>
              </TerminalLine>
            </>,
          );
          break;
        case "skill-command":
          setHint("Activating skill via slash command…");
          addBlock(
            <TerminalLine>
              <span className="text-primary">›</span>{" "}
              <span className="text-white/80">/skill design-system</span>
            </TerminalLine>,
          );
          break;
        case "skill-active":
          setHint("Design skill active");
          addBlock(
            <TerminalLine>
              <span className="text-emerald-400">skill</span>{" "}
              <span className="text-white/60">
                active — typography, layout, color tokens ready
              </span>
            </TerminalLine>,
          );
          break;
        case "mcp-connect":
          setHint("Connecting MCP server…");
          addBlock(
            <>
              <TerminalLine>
                <span className="text-emerald-400">mcp</span>{" "}
                <span className="text-white/60">connecting figma…</span>
              </TerminalLine>
              <TerminalLine>
                <span className="text-white/60"> ✓ figma MCP server connected</span>
              </TerminalLine>
            </>,
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
            step.phase === 4
              ? "Landing page template complete"
              : `Building UI in Figma (${step.phase}/4)…`,
          );
          break;
        case "done":
          setHint("✓ Beautiful SaaS landing template created in Figma");
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
    <div
      className={cn("relative h-full min-h-0 overflow-hidden rounded-lg sm:rounded-xl", className)}
      aria-hidden
    >
      {/* Terminal — full view during skill + MCP setup */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col overflow-hidden bg-terminal text-terminal-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          view === "terminal"
            ? "z-10 translate-y-0 opacity-100"
            : "z-0 -translate-y-2 opacity-0 pointer-events-none",
        )}
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
          <span className="shrink-0 text-[9px] text-emerald-400 sm:text-[10px]">Build · MCP</span>
        </div>

        <div className="flex min-h-0 flex-1 flex-col justify-end overflow-hidden px-3 py-3 sm:px-4 sm:py-4">
          <pre className="terminal-mono terminal-selectable whitespace-pre-wrap text-[9px] leading-relaxed sm:text-[10px]">
            {blocks.map((block) => (
              <div key={block.id} className="mb-2 last:mb-0">
                {block.content}
              </div>
            ))}
            <span className="text-primary">›</span> <span className="blink pointer-events-none select-none" />
          </pre>
        </div>

        <div className="shrink-0 border-t border-white/10 px-3 py-1.5 text-[9px] text-white/40 sm:text-[10px]">
          {view === "terminal" ? hint : "Connecting to Figma…"}
        </div>
      </div>

      {/* Figma browser — full view after MCP connects */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col overflow-hidden bg-[#ebebeb] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          view === "figma"
            ? "z-10 translate-y-0 opacity-100"
            : "z-0 translate-y-2 opacity-0 pointer-events-none",
        )}
      >
        <div className="flex shrink-0 items-center gap-2 border-b border-black/8 bg-[#ebebeb] px-3 py-2 sm:px-3.5 sm:py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" />
          </div>
          <div className="min-w-0 flex-1 truncate rounded-md bg-white px-2.5 py-1 text-[9px] text-black/55 sm:text-[10px]">
            https://www.figma.com/design/saas-landing
          </div>
          <span className="shrink-0 text-[9px] font-semibold text-[#0acf83] sm:text-[10px]">Figma</span>
        </div>

        <div className="relative min-h-0 flex-1">
          <FigmaCanvas phase={figmaPhase} />
        </div>

        <div className="shrink-0 border-t border-black/8 bg-white/80 px-3 py-1.5 text-[9px] text-black/45 sm:text-[10px]">
          {hint}
        </div>
      </div>
    </div>
  );
}
