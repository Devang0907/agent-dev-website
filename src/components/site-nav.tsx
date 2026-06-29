import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 24;

type SiteNavProps = {
  variant?: "default" | "landing";
};

type NavTone = "light" | "dark";

function NavLinks({ tone }: { tone: NavTone }) {
  const isOnDocs = useRouterState({
    select: (state) => state.location.pathname.startsWith("/docs"),
  });

  const linkClass = (active: boolean) =>
    cn(
      "transition-colors",
      tone === "light"
        ? active
          ? "font-medium text-foreground"
          : "hover:opacity-100"
        : active
          ? "font-medium text-primary-foreground"
          : "hover:text-primary-foreground",
    );

  return (
    <>
      <Link to="/docs" className={linkClass(isOnDocs)}>
        docs
      </Link>
      <a href="/#install" className={linkClass(false)}>
        install
      </a>
      <a href="/#features" className={linkClass(false)}>
        features
      </a>
      <a
        href="https://github.com/Devang0907/agent-dev"
        target="_blank"
        rel="noreferrer"
        className={linkClass(false)}
      >
        github ↗
      </a>
      <a
        href="https://github.com/Devang0907/agent-dev/issues/new"
        target="_blank"
        rel="noreferrer"
        className={linkClass(false)}
      >
        feedback ↗
      </a>
    </>
  );
}

export function SiteNav({ variant = "default" }: SiteNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const isOnDocs = useRouterState({
    select: (state) => state.location.pathname.startsWith("/docs"),
  });
  const isLanding = variant === "landing";
  const isCompact = scrolled || !isLanding;
  const showHeroNav = isLanding && !scrolled && !isOnDocs;
  const showLightCompactNav = isOnDocs;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 z-40 transition-[top] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isCompact ? "top-6" : "top-0",
      )}
    >
      <div
        className={cn(
          "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isCompact ? "editorial-shell" : "w-full px-4 sm:px-6 lg:px-10",
        )}
      >
        {showHeroNav ? (
          <div className="relative flex h-[72px] items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
            >
              <BrandMark />
              <span>agent-dev</span>
            </Link>

            <nav className="editorial-shadow absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 rounded-full border border-white/60 bg-white/90 px-6 py-2.5 text-[11px] uppercase tracking-[0.08em] text-foreground/70 backdrop-blur-md lg:flex">
              <NavLinks tone="light" />
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Devang0907/agent-dev/issues/new"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center justify-center rounded-full border border-border px-3 text-[11px] uppercase tracking-[0.08em] text-foreground/80 transition-colors hover:bg-secondary lg:hidden"
              >
                feedback
              </a>
              <a
                href="https://www.npmjs.com/package/@devang0907/agent-dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center rounded-full border border-foreground/15 bg-white/90 px-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground backdrop-blur-sm transition-transform hover:scale-[1.02]"
              >
                try agent-dev
              </a>
            </div>
          </div>
        ) : showLightCompactNav ? (
          <div className="editorial-shadow flex h-[68px] items-center justify-between rounded-full border border-white/60 bg-white/90 px-5 text-foreground backdrop-blur-md sm:px-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
            >
              <BrandMark />
              <span>agent-dev</span>
            </Link>
            <nav className="hidden items-center gap-6 text-[11px] uppercase tracking-[0.08em] text-foreground/70 lg:flex">
              <NavLinks tone="light" />
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Devang0907/agent-dev/issues/new"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center justify-center rounded-full border border-border px-3 text-[11px] uppercase tracking-[0.08em] text-foreground/80 transition-colors hover:bg-secondary lg:hidden"
              >
                feedback
              </a>
              <a
                href="https://www.npmjs.com/package/@devang0907/agent-dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center rounded-full border border-foreground/15 bg-white/90 px-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground backdrop-blur-sm transition-transform hover:scale-[1.02]"
              >
                try agent-dev
              </a>
            </div>
          </div>
        ) : (
          <div
            className={cn(
              "flex h-[68px] items-center justify-between border border-white/5 bg-primary text-primary-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isCompact
                ? "editorial-shadow rounded-full px-5 sm:px-8"
                : "rounded-none border-x-0 border-t-0 px-6 shadow-none sm:px-10 lg:px-16",
            )}
          >
            <Link to="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
              <BrandMark inverted />
              <span>agent-dev</span>
            </Link>
            <nav className="hidden items-center gap-6 text-[11px] uppercase tracking-[0.08em] text-primary-foreground/70 lg:flex">
              <NavLinks tone="dark" />
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Devang0907/agent-dev/issues/new"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center justify-center rounded-md border border-primary-foreground/20 px-3 text-[11px] uppercase tracking-[0.08em] text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground lg:hidden"
              >
                feedback
              </a>
              <a
                href="https://www.npmjs.com/package/@devang0907/agent-dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-1.5 rounded-full bg-primary-foreground px-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary transition-transform hover:scale-[1.02]"
              >
                try agent-dev
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
