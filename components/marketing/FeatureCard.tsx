import { type LucideIcon } from "lucide-react";
import { Card } from "@/components/primitives/Card";

type Props = {
  icon?: LucideIcon;
  title: string;
  body: React.ReactNode;
};

export function FeatureCard({ icon: Icon, title, body }: Props) {
  return (
    <Card interactive className="flex h-full flex-col gap-4">
      {Icon && (
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-gold bg-gold/10 text-gold">
          <Icon size={18} aria-hidden />
        </div>
      )}
      <h3 className="font-display text-xl tracking-tight text-foreground">
        {title}
      </h3>
      <div className="text-[15px] leading-relaxed text-foreground/75">
        {body}
      </div>
    </Card>
  );
}
