import { CheckCircle2 } from "lucide-react";

type Props = {
  title: string;
  message: string;
};

export function FormSuccess({ title, message }: Props) {
  return (
    <div
      role="status"
      className="flex items-start gap-4 rounded-card border border-border-gold bg-gold/[0.05] p-6"
    >
      <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-gold" aria-hidden />
      <div>
        <h3 className="font-display text-xl tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-foreground/85">
          {message}
        </p>
      </div>
    </div>
  );
}
