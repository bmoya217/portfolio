export type Project = {
  title: string;
  company: string;
  period: string;
  stack: string[];
  description: string;
  highlights: string[];
  status?: string;
  link?: string;
};

export const projects = [
  {
    title: "Drops (Raid Loot Optimization Tool)",
    company: "Personal Project",
    period: "2022 – Present",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "MUI",
      "Google Sheets API",
    ],
    status:
      "Built for and actively used by a progression raid team. Currently in demo mode between tiers.",
    description:
      "A data aggregation and visualization tool that collects player simulation report URLs via Google Forms, fetches and validates the underlying data from an external API, and presents it as filterable grouped views for loot priority decisions during raid preparation.",
    highlights: [
      "Players submit simulation report URLs weekly through a Google Form; the app pulls all submissions from a connected Google Sheet and fetches each report through Next.js API routes",
      "Validates and filters reports before they reach the UI — bad or misconfigured sims are discarded silently",
      "Normalizes external JSON payloads into boss-grouped and player-grouped rows with table, list, and chart views",
      "UI state managed with Redux Toolkit; theme and data-view preferences persisted via local storage and cookies so server-rendered defaults match the client",
      "Boss and encounter data updated each content tier to keep the tool current",
    ],
    link: "https://trk-drops.vercel.app/",
  },

  {
    title: "MyViasat / ManageBilling",
    company: "Viasat",
    period: "Web & Mobile",
    stack: [
      "React",
      "GraphQL",
      "REST",
      "Micro Frontends",
      "Payment Integration",
    ],
    description:
      "Billing and payment management microfrontend used across MyViasat web, mobile, and Salesforce support workflows.",
    highlights: [
      "Built billing dashboard flows for balance, payment history, and account payment actions",
      "Integrated secure payments through an embedded third-party iframe system",
      "Supported customer-facing and internal-agent experiences from the same product surface",
      "Collaborated with a separate payment security team on compliant transaction handling",
    ],
  },

  {
    title: "Phoenix GCCS-J Prototype",
    company: "Moebius Solutions",
    period: "Geospatial Prototype",
    stack: ["TypeScript", "React", "Leaflet", "Cesium", "GraphQL", "Express"],
    description:
      "Web-based geospatial visualization platform built on top of CTM data, enabling operators to move between 2D and 3D mapping views.",
    highlights: [
      "Integrated CTM backend data into a modern web visualization layer",
      "Built 2D map interactions with Leaflet and 3D visualization with Cesium",
      "Created GraphQL and Express services for user overlays and preference storage",
      "Helped modernize defense-oriented situational awareness workflows in the browser",
    ],
  },

  {
    title: "PAC Customer Self Care",
    company: "Viasat",
    period: "Enterprise Systems",
    stack: ["GraphQL", "REST APIs", "Internal Backend Systems"],
    description:
      "Backend integration layer for customer self-service systems during a transition away from external BEP storage and toward internal services.",
    highlights: [
      "Built REST-to-backend service layer between frontend clients and internal GraphQL systems",
      "Handled customer flows such as addon purchase, cart creation, and account linking",
      "Supported a migration away from legacy external data storage systems",
      "Worked across frontend and backend boundaries to keep account workflows reliable",
    ],
  },

  {
    title: "Common Track Manager",
    company: "Moebius Solutions",
    period: "Early Career",
    stack: ["Java"],
    description:
      "Track management system built for the U.S. Navy used to manage and organize operational tracking data.",
    highlights: [
      "Built core tracking workflows for operational data management",
      "Focused on reliability and structured data handling in Java systems",
    ],
  },

  {
    title: "This Portfolio",
    company: "Personal Project",
    period: "Current",
    stack: ["Next.js", "React", "Tailwind CSS", "Accessibility"],
    description:
      "Personal portfolio website showcasing product-minded engineering work, practical UI systems, and full stack experience.",
    highlights: [
      "Built a responsive App Router site with reusable project, experience, and tag components",
      "Focused the content around shipped work, technical judgment, and recruiter-friendly navigation",
      "Added accessibility details, theme support, metadata, and concise conversion paths",
    ],
  },
];
