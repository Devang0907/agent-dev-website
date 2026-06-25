import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-2">
          <span className="text-primary">▮</span>
          <span>agent-dev — MIT — built with OpenTUI + SolidJS</span>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href="https://github.com/Devang0907/agent-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            github
          </a>
          <a
            href="https://www.npmjs.com/package/@devang0907/agent-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            npm
          </a>
          <a href="/#install" className="hover:text-foreground">
            install
          </a>
          <Link to="/docs" className="hover:text-foreground">
            docs
          </Link>
          <a
            href="https://github.com/Devang0907/agent-dev/issues/new"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            feedback
          </a>
        </div>
      </div>
    </footer>
  );
}
