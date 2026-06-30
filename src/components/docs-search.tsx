import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { scrollToDocHeading } from "@/lib/docs-navigation";
import type { TocItem } from "@/lib/parse-headings";
import { cn } from "@/lib/utils";

type DocsSearchProps = {
  items: TocItem[];
  className?: string;
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

function isMac() {
  return typeof navigator !== "undefined" && /Mac|iPhone|iPad|iPod/.test(navigator.platform);
}

export function DocsSearch({ items, className }: DocsSearchProps) {
  const [open, setOpen] = useState(false);
  const groups = useMemo(() => groupTocItems(items), [items]);
  const shortcutLabel = isMac() ? "⌘K" : "Ctrl+K";

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const goTo = (id: string) => {
    scrollToDocHeading(id);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex h-9 w-full items-center gap-2 rounded-md border border-border bg-card px-3 text-sm text-muted-foreground shadow-sm transition-colors hover:border-foreground/20 hover:text-foreground sm:w-56 lg:w-64",
          className,
        )}
        aria-label="Search documentation"
      >
        <Search className="h-4 w-4 shrink-0 opacity-60" />
        <span className="flex-1 truncate text-left text-xs sm:text-sm">Search docs…</span>
        <kbd className="hidden shrink-0 rounded border border-border bg-secondary/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">
          {shortcutLabel}
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search documentation…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {groups.map((group) => (
            <CommandGroup key={group.section.id} heading={group.section.text}>
              <CommandItem
                value={group.section.text}
                onSelect={() => goTo(group.section.id)}
              >
                {group.section.text}
              </CommandItem>
              {group.children.map((child) => (
                <CommandItem
                  key={child.id}
                  value={`${group.section.text} ${child.text}`}
                  onSelect={() => goTo(child.id)}
                  className="pl-6"
                >
                  {child.text}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
        <div className="flex items-center justify-end border-t border-border px-3 py-2">
          <CommandShortcut className="text-[10px]">{shortcutLabel} to open</CommandShortcut>
        </div>
      </CommandDialog>
    </>
  );
}
