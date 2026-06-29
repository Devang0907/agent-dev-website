import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 24;

type SiteNavProps = {
  variant?: "default" | "landing";
};

type NavTone = "light" | "dark";

const MOBILE_LINKS = [
  { type: "link" as const, to: "/docs" as const, label: "docs", activeOnDocs: true },
  { type: "anchor" as const, href: "/#install", label: "install" },
  { type: "anchor" as const, href: "/#features", label: "features" },
  {
    type: "external" as const,
    href: "https://github.com/Devang0907/agent-dev",
    label: "github ↗",
  },
  {
    type: "external" as const,
    href: "https://github.com/Devang0907/agent-dev/issues/new",
    label: "feedback ↗",
  },
];

function NavLinks({ tone }: { tone: NavTone }) {
  const isOnDocs = useRouterState({
    select: (state) => state.location.pathname.startsWith("/docs"),
  });

  const linkClass = (active: boolean) =>
    cn(
      "transition-colors whitespace-nowrap text-[11px] uppercase tracking-[0.08em]",
      tone === "light"
        ? active
          ? "font-medium text-foreground"
          : "hover:opacity-100"
        : active
          ? "font-medium text-primary-foreground"
          : "hover:text-primary-foreground",
    );

  return (
    <div
      className={cn(
        "flex items-center gap-5 lg:gap-6",
        tone === "light" ? "text-foreground/70" : "text-primary-foreground/70",
      )}
    >
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
    </div>
  );
}

function TryAgentButton({ tone }: { tone: NavTone }) {
  return (
    <a
      href="https://www.npmjs.com/package/@devang0907/agent-dev"
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex h-9 shrink-0 items-center rounded-full px-3 text-[10px] font-semibold uppercase tracking-[0.08em] transition-transform hover:scale-[1.02] sm:h-10 sm:px-4 sm:text-[11px]",
        tone === "light"
          ? "border border-foreground/15 bg-white/90 text-foreground backdrop-blur-sm"
          : "bg-primary-foreground text-primary",
      )}
    >
      <span className="sm:hidden">try it</span>
      <span className="hidden sm:inline">try agent-dev</span>
    </a>
  );
}

function MobileNavMenu({
  open,
  tone,
  onClose,
}: {
  open: boolean;
  tone: NavTone;
  onClose: () => void;
}) {
  const isOnDocs = useRouterState({
    select: (state) => state.location.pathname.startsWith("/docs"),
  });

  if (!open) return null;

  const itemClass = (active: boolean) =>
    cn(
      "rounded-lg px-3 py-2.5 text-sm uppercase tracking-[0.08em] transition-colors",
      tone === "light"
        ? active
          ? "bg-foreground/8 font-medium text-foreground"
          : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
        : active
          ? "bg-primary-foreground/12 font-medium text-primary-foreground"
          : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground",
    );

  return (
    <nav
      className={cn(
        "absolute inset-x-0 top-[calc(100%+0.5rem)] flex flex-col gap-0.5 rounded-2xl border p-2 shadow-lg backdrop-blur-md lg:hidden",
        tone === "light"
          ? "border-black/8 bg-white/95 text-foreground"
          : "border-white/10 bg-primary text-primary-foreground",
      )}
    >
      {MOBILE_LINKS.map((link) => {
        const active = link.type === "link" && link.activeOnDocs && isOnDocs;

        if (link.type === "link") {
          return (
            <Link key={link.label} to={link.to} onClick={onClose} className={itemClass(active)}>
              {link.label}
            </Link>
          );
        }

        if (link.type === "anchor") {
          return (
            <a key={link.label} href={link.href} onClick={onClose} className={itemClass(false)}>
              {link.label}
            </a>
          );
        }

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
            className={itemClass(false)}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}

function NavBar({ tone, invertedLogo = false }: { tone: NavTone; invertedLogo?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="relative">
      <div
        className={cn(
          "flex h-14 items-center justify-between gap-2 sm:h-[68px]",
          tone === "light"
            ? "rounded-full border border-white/60 bg-white/90 px-3 text-foreground backdrop-blur-md sm:px-5"
            : "rounded-full border border-white/5 bg-primary px-3 text-primary-foreground sm:px-5",
          tone === "light" && "editorial-shadow",
          tone === "dark" && "editorial-shadow",
        )}
      >
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <BrandMark inverted={invertedLogo} />
          <span className="truncate">agent-dev</span>
        </Link>

        <nav className="hidden shrink-0 lg:flex">
          <NavLinks tone={tone} />
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <TryAgentButton tone={tone} />
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-full border lg:hidden",
              tone === "light"
                ? "border-border text-foreground"
                : "border-primary-foreground/20 text-primary-foreground",
            )}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <MobileNavMenu open={mobileOpen} tone={tone} onClose={() => setMobileOpen(false)} />
    </div>
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
        isCompact ? "top-3 sm:top-6" : "top-0",
      )}
    >
      <div
        className={cn(
          "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isCompact ? "editorial-shell px-3 sm:px-0" : "w-full px-3 sm:px-6 lg:px-10",
        )}
      >
        {showHeroNav ? (
          <HeroNavBar />
        ) : showLightCompactNav ? (
          <NavBar tone="light" />
        ) : (
          <NavBar tone="dark" invertedLogo />
        )}
      </div>
    </header>
  );
}

function HeroNavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="relative flex h-14 items-center justify-between sm:h-[72px]">
      <Link
        to="/"
        className="flex min-w-0 items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
      >
        <BrandMark />
        <span className="truncate">agent-dev</span>
      </Link>

      <nav className="editorial-shadow absolute left-1/2 hidden -translate-x-1/2 rounded-full border border-white/60 bg-white/90 px-6 py-2.5 backdrop-blur-md lg:flex">
        <NavLinks tone="light" />
      </nav>

      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        <TryAgentButton tone="light" />
        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <MobileNavMenu open={mobileOpen} tone="light" onClose={() => setMobileOpen(false)} />
    </div>
  );
}
