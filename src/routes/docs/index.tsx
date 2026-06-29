import { createFileRoute } from "@tanstack/react-router";
import { DocsSidebar } from "@/components/docs-sidebar";
import { MarkdownDoc } from "@/components/markdown-doc";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { parseHeadings } from "@/lib/parse-headings";
import readme from "../../../content/docs/readme.md?raw";

const toc = parseHeadings(readme);

export const Route = createFileRoute("/docs/")({
  head: () => ({
    meta: [
      { title: "Documentation — agent-dev" },
      {
        name: "description",
        content: "How to install, configure, and use agent-dev.",
      },
      { property: "og:title", content: "Documentation — agent-dev" },
      {
        property: "og:description",
        content: "How to install, configure, and use agent-dev.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/docs" },
    ],
    links: [{ rel: "canonical", href: "/docs" }],
  }),
  component: DocsPage,
});

function DocsPage() {
  return (
    <div className="min-h-screen bg-[#f3f2ee] text-foreground">
      <SiteNav />
      <main className="nav-offset mx-2 pb-8 sm:mx-4 sm:pb-14 lg:mx-auto lg:max-w-[1130px] lg:px-16">
        <div className="mb-6 border-b border-dashed border-border pb-6 sm:mb-8 sm:pb-8">
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

        <div className="grid gap-6 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,16.5rem)_minmax(0,1fr)] xl:gap-12">
          <DocsSidebar items={toc} />
          <MarkdownDoc content={readme} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
