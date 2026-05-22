import { SectionShell } from "@/components/primitives/SectionShell";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Card } from "@/components/primitives/Card";

/**
 * "Built as a mission, not a product." — homepage section that
 * frames the project's posture: donation-funded, pilot-first,
 * gathering trusted partners before deeper protection layers.
 */
export function MissionNotProduct() {
  return (
    <SectionShell size="md" className="border-b border-border">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <Eyebrow>Built as a mission, not a product</Eyebrow>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Donation-funded by design.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/85">
            Strong Tower is donation-based because protection and recovery
            should not be locked behind payment. The first step is building
            a trusted pilot community of individuals, parents, churches,
            accountability partners, donors, and technical volunteers.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <h3 className="font-display text-lg tracking-tight text-foreground">
              The founding pilot
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">
              We are gathering a small founding pilot before building deeper
              protection layers. The pilot helps us understand real device
              needs, family concerns, church workflows, accountability
              expectations, and the technical gaps that ordinary blocker
              apps leave open.
            </p>
          </Card>
          <Card>
            <h3 className="font-display text-lg tracking-tight text-foreground">
              What we promise today
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">
              A clear public mission, honest language about what is and
              isn&rsquo;t live, a private place to register pilot and
              support interest, and a refusal to overclaim. The deeper
              protection platform follows — carefully, openly, and with
              the people we are building it for.
            </p>
          </Card>
        </div>
      </div>
    </SectionShell>
  );
}
