import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import type { TocItem } from "@/lib/parse-headings";

type DocsSidebarProps = {
  items: TocItem[];
};

type TocGroup = {
  section: TocItem;
  children: TocItem[];
};

function groupTocItems(items: TocItem[]): TocGroup[] {
  const groups: TocGroup[] = [];
  let current: TocGroup | null = null;

  for (const item of items) {
    if (item.level === 2) {
      current = { section: item, children: [] };
      groups.push(current);
    } else if (current) {
      current.children.push(item);
    }
  }

  return groups;
}

function TocLink({
  item,
  activeId,
  nested = false,
  onSelect,
}: {
  item: TocItem;
  activeId: string;
  nested?: boolean;
  onSelect: (id: string) => void;
}) {
  const active = activeId === item.id;

  return (
    <button
      type="button"
      onClick={() => onSelect(item.id)}
      className={cn(
        "docs-toc-link relative w-full rounded-sm text-left transition-colors",
        nested ? "py-1 pl-3 pr-2 text-[11px] leading-snug" : "py-1.5 pl-3 pr-2 text-xs leading-snug",
        active
          ? "bg-primary/10 font-medium text-primary"
          : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute left-0 top-1 bottom-1 w-0.5 rounded-full transition-colors",
          active ? "bg-primary" : "bg-transparent",
        )}
      />
      {item.text}
    </button>
  );
}

export function DocsSidebar({ items }: DocsSidebarProps) {
  const groups = useMemo(() => groupTocItems(items), [items]);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-88px 0px -55% 0px", threshold: 0 },
    );

    for (const heading of headings) {
      observer.observe(heading);
    }

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      <nav className="docs-toc-mobile mb-8 lg:hidden">
        <p className="mb-2 text-[10px] uppercase tracking-wider text-muted-foreground">
          On this page
        </p>
        <div className="docs-toc-mobile-scroll flex gap-2 overflow-x-auto pb-1">
          {groups.map((group) => (
            <button
              key={group.section.id}
              type="button"
              onClick={() => scrollTo(group.section.id)}
              className={cn(
                "shrink-0 rounded-sm border px-2.5 py-1 text-[11px] transition-colors",
                activeId === group.section.id ||
                  group.children.some((child) => child.id === activeId)
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
              )}
            >
              {group.section.text}
            </button>
          ))}
        </div>
      </nav>

      <aside className="hidden lg:block">
        <nav className="docs-toc-panel sticky top-[4.75rem] rounded-md border border-border bg-card">
          <div className="border-b border-border px-4 py-2.5 text-[10px] uppercase tracking-wider text-muted-foreground">
            On this page
          </div>
          <div className="docs-toc-scroll max-h-[calc(100vh-6.5rem)] overflow-y-auto px-2 py-2">
            <ul className="space-y-3">
              {groups.map((group) => (
                <li key={group.section.id}>
                  <TocLink item={group.section} activeId={activeId} onSelect={scrollTo} />
                  {group.children.length > 0 && (
                    <ul className="mt-0.5 space-y-0.5 border-l border-border/80 pl-2">
                      {group.children.map((child) => (
                        <li key={child.id}>
                          <TocLink
                            item={child}
                            activeId={activeId}
                            nested
                            onSelect={scrollTo}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}
