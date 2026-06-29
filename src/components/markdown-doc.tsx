import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { cn } from "@/lib/utils";

type MarkdownDocProps = {
  content: string;
  className?: string;
};

const components: Components = {
  a: ({ href, children, ...props }) => {
    const external = href?.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  },
  pre: ({ children }) => (
    <pre className="docs-code-block overflow-x-auto rounded-md border border-border bg-terminal p-4 text-xs leading-relaxed text-terminal-foreground">
      {children}
    </pre>
  ),
  code: ({ className, children, ...props }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code className={cn("font-mono", className)} {...props}>
          {children}
        </code>
      );
    }
    return (
      <code
        className="rounded-sm border border-border bg-secondary/60 px-1 py-0.5 text-[0.9em] text-foreground"
        {...props}
      >
        {children}
      </code>
    );
  },
  table: ({ children }) => (
    <div className="docs-table-wrap overflow-x-auto rounded-md border border-border bg-card">
      <table>{children}</table>
    </div>
  ),
  h2: ({ id, children, ...props }) => (
    <h2 id={id} className="docs-heading docs-h2" {...props}>
      {children}
    </h2>
  ),
  h3: ({ id, children, ...props }) => (
    <h3 id={id} className="docs-heading docs-h3" {...props}>
      {children}
    </h3>
  ),
};

export function MarkdownDoc({ content, className }: MarkdownDocProps) {
  return (
    <article className={cn("docs-prose", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
