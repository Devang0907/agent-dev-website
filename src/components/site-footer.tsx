import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/brand-mark";

export function SiteFooter() {
  return (
    <footer className="mx-3 mt-4 pb-10 sm:mx-4 lg:mx-5">
      <div className="hero-frame border border-black/6 bg-white/50 px-8 py-12 backdrop-blur-sm sm:px-12 sm:py-14">
        <div className="grid gap-10 border-b border-black/8 pb-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground">
              <BrandMark />
              <span>agent-dev</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/60">
              The terminal coding agent for autonomous development workflows. Open source,
              scriptable, and built to keep coding fast inside your terminal.
            </p>
            <p className="editorial-label mt-4 text-foreground/45">
              MIT licensed · built with Ink
            </p>
          </div>
          <div>
            <p className="editorial-label mb-4 text-foreground/45">Product</p>
            <div className="space-y-2 text-sm">
              <a href="/#install" className="block text-foreground/60 transition-colors hover:text-foreground">
                install
              </a>
              <a href="/#features" className="block text-foreground/60 transition-colors hover:text-foreground">
                features
              </a>
              <Link to="/docs" className="block text-foreground/60 transition-colors hover:text-foreground">
                docs
              </Link>
            </div>
          </div>
          <div>
            <p className="editorial-label mb-4 text-foreground/45">Community</p>
            <div className="space-y-2 text-sm">
              <a
                href="https://github.com/Devang0907/agent-dev"
                target="_blank"
                rel="noreferrer"
                className="block text-foreground/60 transition-colors hover:text-foreground"
              >
                github
              </a>
              <a
                href="https://www.npmjs.com/package/@devang0907/agent-dev"
                target="_blank"
                rel="noreferrer"
                className="block text-foreground/60 transition-colors hover:text-foreground"
              >
                npm
              </a>
              <a
                href="https://github.com/Devang0907/agent-dev/issues/new"
                target="_blank"
                rel="noreferrer"
                className="block text-foreground/60 transition-colors hover:text-foreground"
              >
                feedback
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 text-xs text-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} agent-dev. Built for terminal-first development.</p>
          <p className="editorial-label text-foreground/45">Open source · ship from terminal</p>
        </div>
      </div>
    </footer>
  );
}
