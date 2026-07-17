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
  hot?: boolean;
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
    name: "Not GPT",
    slug: "not-gpt",
    url: "https://beatviral.github.io/Not-GPT/",
    tagline: "Questions sources, repetition, incentives, and uncertainty before showing an answer.",
    description:
      "A clean answer engine and evidence protocol for checking sources, tracing claims, and showing uncertainty before turning the internet into answers.",
    category: "AI / Answer Engine / Evidence",
    status: "Prototype",
    needs: "Search partners, source-quality feedback, and pilot use cases.",
    featured: true,
    accent: "violet",
  },
  {
    name: "Phuture Me",
    slug: "phuture-me",
    url: "https://beatviral.github.io/Phuture-Me/",
    tagline: "Sow clever. Reap well.",
    description:
      "A future-aware human decision companion that helps people compare two plausible paths, explore an aging curve, and leave with a reflective question plus a small reversible experiment.",
    category: "AI / Decision Companion / Future Planning",
    status: "Prototype",
    needs: "User testing, safety review, guided journeys, and partner pilots.",
    hot: true,
    accent: "violet",
  },
  {
    name: "Cognito Performance Path",
    slug: "cognito-performance-path",
    url: "https://beatviral.github.io/cognito-performance-path/docs/",
    tagline: "Turn exam evidence and pressure patterns into a clearer performance plan.",
    description:
      "An education product concept that compares preparation with test conditions, identifies the real performance gap, and helps students recover when pressure disrupts recall.",
    category: "Education / AI / Assessment",
    status: "Prototype",
    needs: "Student pilots, tutor feedback, and assessment validation.",
    hot: true,
    accent: "green",
  },
  {
    name: "City Safety",
    slug: "city-safety",
    url: "https://beatviral.github.io/City-Safety/",
    tagline: "Never enter a city blind.",
    description:
      "A travel-safety product concept that turns natural questions about unfamiliar places, arrival times, routes, and local risks into calm, practical guidance.",
    category: "Travel Safety / AI / Mobile",
    status: "Prototype",
    needs: "Traveler pilots, local-risk datasets, route guidance feedback, and safety copy review.",
    hot: true,
    accent: "cyan",
  },
  {
    name: "Intent to Offer Engine",
    slug: "intent-to-offer-engine",
    url: "https://beatviral.github.io/Intent-to-Offer-Engine/",
    tagline: "Turn messy client needs into clear, evidence-backed response briefs.",
    description:
      "An AI-native mission response engine that interprets client needs, matches verified capabilities, identifies missing confirmations, and creates structured opportunity briefs.",
    category: "SaaS / AI / Sales Ops",
    status: "Prototype",
    needs: "Client workflow pilots, capability library refinement, and response-quality feedback.",
    accent: "blue",
  },
  {
    name: "Messy In, Beautiful Out",
    slug: "messy-in-beautiful-out-tenderfy",
    url: "https://beatviral.github.io/messy-in-beautiful-out-tenderfy/",
    tagline: "Messy tender knowledge becomes structured, submission-ready work.",
    description:
      "A Tenderfy product concept that turns messages, voice notes, documents, and project memory into evidence-backed tender material and reusable product opportunity demos.",
    category: "AI / Tendering / B2B",
    status: "Prototype",
    needs: "Tender teams, workflow feedback, and demo refinement.",
    accent: "amber",
  },
  {
    name: "Messy In, Beautiful Out Home Loans",
    slug: "messy-in-beautiful-out-home-loans",
    url: "https://beatviral.github.io/Messy-In-Beautiful-Out-Home-Loans/",
    tagline: "Messy borrower circumstances become a clear home-loan form draft.",
    description:
      "A home-loan product concept that lets borrowers explain their situation naturally, then turns their story into a clearer draft beside the official form while keeping facts, gaps, and review steps visible.",
    category: "AI / Home Loans / Fintech",
    status: "Prototype",
    needs: "Borrower testing, broker feedback, lender workflow review, and compliance language.",
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
    url: "https://beatviral.github.io/Phatso/",
    tagline: "Live and for sale: record like the pros without learning sound engineering.",
    description:
      "A live audio product for creators who want professional-sounding vocals without becoming engineers.",
    category: "Music / Audio Plugin / Creator Tools",
    status: "Live",
    needs: "Buyer traffic, creator demos, before/after examples, and conversion polish.",
    accent: "cyan",
  },
  {
    name: "NovusVital",
    slug: "novusvital",
    url: "https://beatviral.github.io/NovusVital/",
    tagline: "A premium concierge layer for biohacking and wellness.",
    description:
      "A wellness concierge app that personalizes plans by goals and budget, then helps users discover vetted clinics, treatments, supplements, and retreats.",
    category: "Health/Body / Consumer / Marketplace",
    status: "Prototype",
    needs: "Provider vetting, booking flows, and outcome tracking.",
    accent: "green",
  },
  {
    name: "Law Call",
    slug: "law-call",
    url: "https://beatviral.github.io/Law-Call/",
    tagline: "Protected-driving support for stops, accidents, and attorney connection.",
    description:
      "A roadside legal-safety app for traffic stops, accident records, trusted-contact alerts, and attorney connection.",
    category: "Legaltech / Safety / Mobile",
    status: "Prototype",
    needs: "Jurisdiction review, emergency copy, and trusted-contact testing.",
    accent: "blue",
  },
  {
    name: "Future Score",
    slug: "future-score",
    url: "https://beatviral.github.io/Future-Score/",
    tagline: "A prediction game where accurate forecasts earn status.",
    description:
      "A Forza-style prediction game where users make forecasts, earn credits, collect badges, and unlock marketplace rewards.",
    category: "Gaming / Forecasting / Marketplace",
    status: "Prototype",
    needs: "Scoring rules, reward economy, and market validation.",
    accent: "violet",
  },
  {
    name: "Swap Me Home",
    slug: "swapmehome",
    url: "https://beatviral.github.io/swapmehome/",
    tagline: "See what your current home could turn into.",
    description:
      "A home move options engine that helps owners explore swap, downsize, upgrade, and relocation possibilities from their current home.",
    category: "Real Estate / Marketplace / Consumer",
    status: "Concept",
    needs: "Supply model, suburb data, and transaction pathways.",
    accent: "orange",
  },
  {
    name: "Health Story AI",
    slug: "health-story-ai",
    url: "https://beatviral.github.io/Health-story-AI/",
    tagline: "A private health journal that turns body signals into doctor-ready summaries.",
    description:
      "A local-first health journal for tracking symptoms, stress, medications, allergies, and appointments, then exporting clear summaries.",
    category: "Health/Body / AI / Personal Data",
    status: "Prototype",
    needs: "Export templates, privacy review, and clinician feedback.",
    accent: "green",
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
    name: "Mahmood Khan",
    slug: "mahmoodkhan",
    url: "https://beatviral.github.io/mahmoodkhan/",
    tagline: "Official artist site for music, releases, videos, and story.",
    description:
      "A public artist portfolio for Mahmood Khan, covering releases, media, biography, and the bridge between music, technology, and creator culture.",
    category: "Music / Artist Portfolio / Media",
    status: "Live",
    needs: "Keep releases, press, and media embeds current.",
    accent: "pink",
  },
  {
    name: "Mahmood Khan Media Archive",
    slug: "mahmood-khan-media-archive",
    url: "https://beatviral.github.io/mahmood-khan-media-archive/",
    tagline: "A public archive for artist, founder, and audio technology work.",
    description:
      "A lightweight media archive collecting Mahmood Khan's artist story, founder work, and audio technology history.",
    category: "Music / Archive / Media",
    status: "Live",
    needs: "Archive structure, chronology, and richer media indexing.",
    accent: "pink",
  },
  {
    name: "PHATSO Studio",
    slug: "phatso-studio",
    url: "https://beatviral.github.io/PHATSO-Studio/",
    tagline: "The band, groove, sound, and finish without engineering knowledge.",
    description:
      "A music creation platform concept that gives creators studio-ready musical building blocks without needing deep production skills.",
    category: "Music / Creator Tools / Audio",
    status: "Prototype",
    needs: "Interactive demos, creator workflow, and product packaging.",
    accent: "cyan",
  },
  {
    name: "PHATSO Roar",
    slug: "phatso-roar",
    url: "https://beatviral.github.io/phatso-roar/",
    tagline: "Stop riding the volume knob.",
    description:
      "A branded listening layer for online video and future browser audio leveling, aimed at smoother everyday playback.",
    category: "Audio / Browser Tool / Creator Tools",
    status: "Prototype",
    needs: "Browser feasibility, permissions model, and comparison demos.",
    accent: "cyan",
  },
  {
    name: "The Harmonic Reset",
    slug: "the-harmonic-reset",
    url: "https://beatviral.github.io/The-Harmonic-Reset/",
    tagline: "An eight-minute harmonic nervous system calibration tool.",
    description:
      "A precision harmonic experience designed as a short nervous system reset using audio-led calibration.",
    category: "Health/Body / Music / Wellness",
    status: "Prototype",
    needs: "Evidence framing, user testing, and session packaging.",
    accent: "violet",
  },
  {
    name: "O2O Engine",
    slug: "o2o-engine",
    url: "https://beatviral.github.io/o2o-engine/",
    tagline: "From opportunity to operating system.",
    description:
      "An opportunity-to-operating-system concept for turning ideas into structured systems, assets, and execution paths.",
    category: "SaaS / Founder Tools / Strategy",
    status: "Prototype",
    needs: "Define inputs, outputs, and repeatable operating workflows.",
    accent: "blue",
  },
  {
    name: "PATHFIT",
    slug: "pathfit",
    url: "https://beatviral.github.io/PATHFIT/",
    tagline: "Map how people move, think, and act.",
    description:
      "A behavioral assessment web tool that maps how people move through decisions, action, and work.",
    category: "Assessment / Health/Body / SaaS",
    status: "Prototype",
    needs: "Assessment logic, result language, and validation cohort.",
    accent: "green",
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
