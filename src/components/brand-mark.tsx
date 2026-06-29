import { cn } from "@/lib/utils";

const LOGO_SRC = "/agent-dev-logo.png";

type BrandMarkProps = {
  className?: string;
  /** Invert to white — for dark backgrounds only */
  inverted?: boolean;
};

export function BrandMark({ className, inverted = false }: BrandMarkProps) {
  return (
    <img
      src={LOGO_SRC}
      alt=""
      aria-hidden
      className={cn("h-7 w-7 shrink-0 object-contain", inverted && "invert", className)}
    />
  );
}
