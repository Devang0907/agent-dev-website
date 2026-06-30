import { createFileRoute } from "@tanstack/react-router";
import { DocsSearch } from "@/components/docs-search";
import { DocsSidebar } from "@/components/docs-sidebar";
import { MarkdownDoc } from "@/components/markdown-doc";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { parseHeadings } from "@/lib/parse-headings";
import { buildSeoHead, documentationPageJsonLd } from "@/lib/seo";
import readme from "../../../content/docs/readme.md?raw";

const toc = parseHeadings(readme);

export const Route = createFileRoute("/docs/")({
  head: () => ({
    ...buildSeoHead({
      title: "Documentation — agent-dev",
      description:
        "Install, configure, and use agent-dev. Terminal coding agent with Ink TUI, MCP, skills, Telegram gateway, and boss orchestrator.",
      path: "/docs",
    }),
    scripts: [documentationPageJsonLd()],
  }),
  component: DocsPage,
});

function DocsPage() {
  return (
    <div className="min-h-screen bg-[#f3f2ee] text-foreground">
      <SiteNav />
      <main className="nav-offset mx-2 pb-8 sm:mx-4 sm:pb-14 lg:mx-auto lg:max-w-[1130px] lg:px-16">
        <div className="mb-6 flex flex-col gap-4 border-b border-dashed border-border pb-6 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:pb-8">
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">[docs]</p>
            <h1 className="mt-2 text-xl font-bold tracking-tight sm:text-3xl">documentation</h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Full reference for installing, configuring, and using agent-dev — synced from the{" "}
              <a
                href="https://github.com/Devang0907/agent-dev"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                official README
              </a>
              .
            </p>
          </div>
          <DocsSearch items={toc} className="shrink-0 sm:ml-auto" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,16.5rem)_minmax(0,1fr)] xl:gap-12">
          <DocsSidebar items={toc} />
          <MarkdownDoc content={readme} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
