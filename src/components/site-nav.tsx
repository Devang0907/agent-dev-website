import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link to="/" className="flex items-center gap-2 text-sm font-bold tracking-tight">
          <span className="text-primary">▮</span>
          <span>agent-dev</span>
        </Link>
        <nav className="hidden items-center gap-5 text-xs text-muted-foreground lg:flex">
          <Link to="/docs" className="hover:text-foreground">
            docs
          </Link>
          <a href="/#install" className="hover:text-foreground">
            install
          </a>
          <a href="/#modes" className="hover:text-foreground">
            modes
          </a>
          <a href="/#tools" className="hover:text-foreground">
            tools
          </a>
          <a href="/#providers" className="hover:text-foreground">
            providers
          </a>
          <a href="/#telegram" className="hover:text-foreground">
            telegram
          </a>
          <a href="/#browser" className="hover:text-foreground">
            browser
          </a>
          <a href="/#commands" className="hover:text-foreground">
            commands
          </a>
          <a href="/#skills" className="hover:text-foreground">
            skills
          </a>
          <a
            href="https://github.com/Devang0907/agent-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            github ↗
          </a>
          <a
            href="https://github.com/Devang0907/agent-dev/issues/new"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            feedback ↗
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://github.com/Devang0907/agent-dev/issues/new"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 items-center justify-center rounded-sm border border-border px-2.5 text-xs transition-colors hover:bg-secondary lg:hidden"
          >
            feedback
          </a>
          <a
            href="https://www.npmjs.com/package/@devang0907/agent-dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            $ install
          </a>
        </div>
      </div>
    </header>
  );
}
