export type FaqItem = {
  question: string;
  answer: string;
};

export const homeFaq: FaqItem[] = [
  {
    question: "Is Strong Tower a blocker app?",
    answer:
      "No. Strong Tower is a Christ-centred nonprofit mission, not an app. The future protection layers we are building are designed to live outside the device — at the network and profile level — so they are harder to bypass than ordinary blocker apps.",
  },
  {
    question: "Why donation-based, and not a paid product?",
    answer:
      "Protection and recovery resources should never be locked behind payment. The people who most need help are often the least able to pay for it. Donations let us build responsibly, stay accountable to a community, and keep the mission free for those who need it.",
  },
  {
    question: "Does the website actually block anything today?",
    answer:
      "No. A website on its own cannot block content on a device. The site is the public front door for the mission, the pilot waitlist, and gospel-centred recovery resources. Actual protection layers — DNS, VPN, router and managed-device profiles — are being developed and tested with pilot participants.",
  },
  {
    question: "Is this only for individuals?",
    answer:
      "No. Strong Tower is being built for individuals, parents, churches, accountability partners, donors, and technical volunteers. Each group has a pathway to get involved.",
  },
  {
    question: "How is my privacy handled?",
    answer:
      "We never log what someone has watched. We collect only what we need to respond to you and walk with you through the pilot. Future accountability tools must be consent-based, non-graphic, and privacy-conscious. See the Privacy promise for detail.",
  },
  {
    question: "Are you affiliated with a particular church or denomination?",
    answer:
      "Strong Tower is an evangelical, gospel-centred mission. We are not the property of any single denomination. We work alongside local churches, pastors, and ministries who share the conviction that lasting freedom is found in Christ.",
  },
  {
    question: "I'm a pastor — how can my church get involved?",
    answer:
      "Visit the For Churches page and register your interest in the church pilot. We are looking for partner churches who want to walk through this with their congregations, especially men's groups, youth leaders, and pastoral care teams.",
  },
  {
    question: "How can I help if I'm not technical?",
    answer:
      "Pray, talk about Strong Tower in your church or family, register as an accountability partner, or support the mission financially when donation pathways open. Many of the most important roles in this work are relational, not technical.",
  },
];
