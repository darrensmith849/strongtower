export type Scripture = {
  reference: string;
  text: string;
  theme?: string;
};

export const scriptures: Scripture[] = [
  {
    reference: "Proverbs 18:10",
    text: "The name of the LORD is a strong tower; the righteous run to it and are safe.",
    theme: "Refuge",
  },
  {
    reference: "Romans 12:2",
    text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind.",
    theme: "Renewing the mind",
  },
  {
    reference: "James 5:16",
    text: "Confess your sins to each other and pray for each other so that you may be healed.",
    theme: "Confession",
  },
  {
    reference: "1 Corinthians 10:13",
    text: "God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it.",
    theme: "Way out",
  },
  {
    reference: "Galatians 5:1",
    text: "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery.",
    theme: "Freedom",
  },
  {
    reference: "2 Corinthians 10:5",
    text: "We demolish arguments and every pretension that sets itself up against the knowledge of God, and we take captive every thought to make it obedient to Christ.",
    theme: "Captive thoughts",
  },
  {
    reference: "Psalm 101:3",
    text: "I will not look with approval on anything that is vile.",
    theme: "Guarding the eyes",
  },
  {
    reference: "Matthew 5:8",
    text: "Blessed are the pure in heart, for they will see God.",
    theme: "Purity of heart",
  },
];

export function scriptureByRef(reference: string): Scripture | undefined {
  return scriptures.find((s) => s.reference === reference);
}
