import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/brand-mark";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-card/70">
      <div className="editorial-shell py-14">
        <div className="grid gap-10 border-b border-border/60 pb-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <BrandMark />
              <span>agent-dev</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              The terminal coding agent for autonomous development workflows. Open source,
              scriptable, and built to keep coding fast inside your terminal.
            </p>
            <p className="editorial-label mt-4 text-muted-foreground">
              MIT licensed · built with Ink
            </p>
          </div>
          <div>
            <p className="editorial-label mb-4 text-muted-foreground">Product</p>
            <div className="space-y-2 text-sm">
              <a href="/#install" className="block text-muted-foreground hover:text-foreground">
                install
              </a>
              <a href="/#features" className="block text-muted-foreground hover:text-foreground">
                features
              </a>
              <Link to="/docs" className="block text-muted-foreground hover:text-foreground">
                docs
              </Link>
            </div>
          </div>
          <div>
            <p className="editorial-label mb-4 text-muted-foreground">Community</p>
            <div className="space-y-2 text-sm">
              <a
                href="https://github.com/Devang0907/agent-dev"
                target="_blank"
                rel="noreferrer"
                className="block text-muted-foreground hover:text-foreground"
              >
                github
              </a>
              <a
                href="https://www.npmjs.com/package/@devang0907/agent-dev"
                target="_blank"
                rel="noreferrer"
                className="block text-muted-foreground hover:text-foreground"
              >
                npm
              </a>
              <a
                href="https://github.com/Devang0907/agent-dev/issues/new"
                target="_blank"
                rel="noreferrer"
                className="block text-muted-foreground hover:text-foreground"
              >
                feedback
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} agent-dev. Built for terminal-first development.</p>
          <p className="editorial-label text-muted-foreground">Open source · ship from terminal</p>
        </div>
      </div>
    </footer>
  );
}
