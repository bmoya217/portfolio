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
    period: "Dragonflight",
    stack: [
      "Next.js",
      "React",
      "Google Forms API",
      "Raidbots",
      "World of Warcraft",
      "Data Visualization",
    ],
    status:
      "Used by a World of Warcraft raid team during active progression; no longer used after the team consolidated preparation work in WoW Utils.",
    description:
      "Loot planning tool built to turn World of Warcraft player simulation data into practical item-priority decisions for a Hall of Fame raid team.",
    highlights: [
      "Collected player simulation data through Google Forms and mapped it into boss, slot, and upgrade views",
      "Reduced manual spreadsheet upkeep by auto-mapping simulation data across raid tiers",
      "Built mobile-first filtering and comparison flows for quick decisions during raid prep",
      "Replaced by a broader WoW Utils workflow covering roster planning, assignments, loot comparisons, cooldowns, and other raid preparation",
      "Kept old tier data usable when Raidbots purged sims and manual refreshes were needed",
    ],
    link: "https://drops-vercel-flax.vercel.app/",
  },

  {
    title: "MyViasat / ManageBilling",
    company: "Viasat",
    period: "Web & Mobile",
    stack: ["React", "GraphQL", "REST", "Micro Frontends", "Payment Integration"],
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
