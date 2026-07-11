export type ProjectStatus =
  | "Live"
  | "Prototype"
  | "Paid MVP"
  | "Pilot-ready"
  | "Concept"
  | "Paused"
  | "Partner Discovery"
  | "MVP";

export type Project = {
  name: string;
  slug: string;
  url?: string;
  tagline: string;
  description: string;
  category: string;
  status: ProjectStatus;
  needs?: string;
  featured?: boolean;
  accent: "green" | "pink" | "amber" | "blue" | "violet" | "orange" | "cyan";
};

export const projects: Project[] = [
  {
    name: "Ask Tom",
    slug: "ask-tom",
    url: "https://beatviral.github.io/Ask-Tom/",
    tagline: "Send a photo. Ask in your own words. Get plain-English guidance.",
    description:
      "A private photo guidance assistant for everyday questions, designed to work through WhatsApp.",
    category: "AI / WhatsApp / Everyday Guidance",
    status: "Paid MVP",
    needs: "Pilot users and paid feedback loops.",
    featured: true,
    accent: "green",
  },
  {
    name: "31 Seats",
    slug: "31-seats",
    url: "https://beatviral.github.io/31-Seats/",
    tagline: "Every artist carries a 31-seat venue in their pocket.",
    description:
      "A micro-venue concept for intimate artist-to-fan live moments through private digital rooms.",
    category: "Music / Live Experiences / WhatsApp",
    status: "Prototype",
    needs: "Artist test cohort and room mechanics.",
    accent: "pink",
  },
  {
    name: "Truth Sachet",
    slug: "truth-sachet",
    url: "https://beatviral.github.io/Truth-Sachet/",
    tagline: "A household trust layer for the powders families use every day.",
    description:
      "A micro-test sachet concept for checking everyday powders and supplements with simple visual tests.",
    category: "Physical Product / Consumer Trust / Supplements",
    status: "Partner Discovery",
    needs: "Testing partners and manufacturing advice.",
    featured: true,
    accent: "amber",
  },
  {
    name: "Law On Demand",
    slug: "law-on-demand",
    url: "https://beatviral.github.io/Law-On-Demand/",
    tagline: "Tap an available lawyer and start a video call.",
    description:
      "A legal access product connecting users to available local attorneys for instant video consultations.",
    category: "Legaltech / Marketplace",
    status: "Pilot-ready",
    needs: "Local attorneys and compliance review.",
    featured: true,
    accent: "blue",
  },
  {
    name: "Hey It's Me",
    slug: "hey-its-me",
    url: "https://beatviral.github.io/hey-its-me/",
    tagline: "An answering machine for the next generation.",
    description:
      "An AI voice assistant that can handle calls and conversations in the user's own voice, then send summaries.",
    category: "AI Voice / WhatsApp / Social Presence",
    status: "Prototype",
    needs: "Voice safety constraints and demo flows.",
    accent: "violet",
  },
  {
    name: "Reverse Car Market",
    slug: "reverse-car-market",
    url: "https://beatviral.github.io/Reverse-Car-Market/",
    tagline: "A new way to buy a car.",
    description:
      "A reverse car marketplace where buyers post what they want and sellers/dealers respond.",
    category: "Marketplace / Automotive",
    status: "Pilot-ready",
    needs: "Dealer-side supply and suburb launch test.",
    accent: "orange",
  },
  {
    name: "Founder Pocket",
    slug: "founder-pocket",
    url: "https://beatviral.github.io/Founder-Pocket/",
    tagline: "Turn your expertise into a startup-ready product.",
    description:
      "An AI founder tool that turns observations and rough ideas into structured startup dossiers.",
    category: "SaaS / Founder Tools / AI",
    status: "MVP",
    needs: "Onboarding polish and repeat-use workflows.",
    featured: true,
    accent: "violet",
  },
  {
    name: "Vibe Coder Marketplace",
    slug: "vibe-coder-marketplace",
    url: "https://beatviral.github.io/VIBE-CODER-MARKETPLACE/",
    tagline: "Where domain beats syntax.",
    description:
      "A marketplace concept for domain-first builders who use AI to create useful software from lived experience.",
    category: "Marketplace / AI Builders",
    status: "Prototype",
    needs: "Supply definitions and buyer trust signals.",
    accent: "cyan",
  },
  {
    name: "PHATSO",
    slug: "phatso",
    tagline: "Record like the pros without learning sound engineering.",
    description:
      "Audio tools for creators who want professional-sounding vocals without becoming engineers.",
    category: "Music / Audio Plugin / Creator Tools",
    status: "Live",
    needs: "Editable URL once the live page is confirmed.",
    accent: "cyan",
  },
  {
    name: "SupperTable",
    slug: "suppertable",
    url: "https://beatviral.github.io/Suppertable/",
    tagline: "Monetize your kitchen.",
    description:
      "A compliance-first home dining marketplace for small verified local dining experiences.",
    category: "Food / Marketplace / Local",
    status: "Concept",
    needs: "Regulatory checklist and host verification model.",
    accent: "orange",
  },
  {
    name: "MeMarket",
    slug: "memarket",
    tagline: "Turn a messy WhatsApp message into a personal marketplace page.",
    description:
      "A WhatsApp-first tool that helps local vendors and multi-skilled people create simple offer pages.",
    category: "WhatsApp / Marketplace / Local Business",
    status: "Concept",
    needs: "Editable URL once the live page is confirmed.",
    accent: "green",
  },
];

export const founder = {
  name: "Mahmood Matloob",
  email: "mahmoodkhanteam@gmail.com",
  github: "https://github.com/beatviral",
};
