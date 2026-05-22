import { cn } from "@/lib/cn";

type Props = {
  className?: string;
};

export function ShieldMark({ className }: Props) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <path
        d="M16 2.5L4 6.5v9c0 7.5 5.4 12.7 12 14 6.6-1.3 12-6.5 12-14v-9l-12-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 11v8M12 15h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
