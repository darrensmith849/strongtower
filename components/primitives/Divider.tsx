import { cn } from "@/lib/cn";

type Props = {
  className?: string;
};

export function Divider({ className }: Props) {
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn("divider-hairline w-full", className)}
    />
  );
}
