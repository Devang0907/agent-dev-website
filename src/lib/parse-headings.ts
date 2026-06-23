import GithubSlugger from "github-slugger";

export type TocItem = {
  level: 2 | 3;
  text: string;
  id: string;
};

function stripMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`]/g, "")
    .trim();
}

export function parseHeadings(markdown: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
  const regex = /^(#{2,3})\s+(.+)$/gm;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(markdown)) !== null) {
    const level = match[1].length as 2 | 3;
    const text = stripMarkdown(match[2]);
    items.push({ level, text, id: slugger.slug(text) });
  }

  return items;
}
