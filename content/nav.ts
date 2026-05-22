export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: NavItem[] = [
  { label: "Mission", href: "/mission" },
  { label: "Approach", href: "/approach" },
  { label: "Recovery", href: "/recovery" },
  { label: "Pilot", href: "/pilot" },
  { label: "Support", href: "/support" },
];

export const fullNav: { group: string; items: NavItem[] }[] = [
  {
    group: "The mission",
    items: [
      { label: "Mission", href: "/mission" },
      { label: "The problem", href: "/problem" },
      { label: "Why blockers fail", href: "/why-blockers-fail" },
      { label: "The Strong Tower approach", href: "/approach" },
      { label: "Technical vision", href: "/technical-vision" },
    ],
  },
  {
    group: "For you",
    items: [
      { label: "For individuals", href: "/for-individuals" },
      { label: "For parents", href: "/for-parents" },
      { label: "For churches", href: "/for-churches" },
      { label: "Accountability partners", href: "/accountability" },
    ],
  },
  {
    group: "Recovery",
    items: [{ label: "Gospel-centred recovery", href: "/recovery" }],
  },
  {
    group: "Get involved",
    items: [
      { label: "Join the pilot", href: "/pilot" },
      { label: "Support the mission", href: "/support" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy promise", href: "/privacy" },
    ],
  },
];
