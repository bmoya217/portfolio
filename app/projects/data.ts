export type Project = {
  title: string;
  company: string;
  period: string;
  stack: string[];
  description: string;
  highlights: string[];
  link?: string;
};

export const projects = [
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
    title: "Phoenix GCCS J Prototype",
    company: "Moebius Solutions",
    period: "Follow-up project",
    stack: ["Typescript", "React", "Leaflet", "Cesium", "GraphQL", "Express"],
    description:
      "Web-based geospatial visualization platform built on top of CTM data, enabling both 2D and 3D mapping views.",
    highlights: [
      "Integrated CTM backend data into web visualization layer",
      "Built 2D mapping interface using Leaflet",
      "Implemented 3D geospatial visualization using Cesium",
      "Created microservices for user overlays and preferences storage",
    ],
  },

  {
    title: "PAC Customer Self Care",
    company: "Viasat",
    period: "Enterprise Systems",
    stack: ["GraphQL", "REST APIs", "Internal Backend Systems"],
    description:
      "Backend integration layer for customer self-service systems during transition from external BEP storage to internal backend services.",
    highlights: [
      "Built REST-to-backend service layer acting as middle-tier between frontend and internal GraphQL systems",
      "Handled flows such as addon purchase, cart creation, and account linking",
      "Supported transition away from legacy external data storage systems",
    ],
  },

  {
    title: "MyViasat / ManageBilling",
    company: "Viasat",
    period: "Web & Mobile",
    stack: ["React", "GraphQL", "REST", "iFrame payment integration"],
    description:
      "Billing and payment management microfrontend for MyViasat web, mobile application and Salesforce customer support.",
    highlights: [
      "Built billing dashboard including balance, payment history, and payment actions",
      "Integrated secure payment flow via embedded third-party iframe system",
      "Worked alongside separate payment security team for compliant transaction handling",
    ],
  },

  {
    title: "Drops (Raid Loot Optimization Tool)",
    company: "Personal Project",
    period: "Ongoing / Iterative",
    stack: ["Next.js", "React", "Google Forms API", "Data Visualization"],
    description:
      "Web tool built for optimizing World of Warcraft raid loot distribution using Raidbots simulation data.",
    highlights: [
      "Built workflow to collect player simulation data via Google Forms",
      "Created dynamic filtering system by boss, item slot, and player performance",
      "Implemented responsive UI with mobile-first table redesign",
      "Evolved system to auto-map simulation data, reducing manual maintenance per raid tier",
    ],
    link: "https://drops-vercel-flax.vercel.app/",
  },

  {
    title: "This Portfolio",
    company: "Personal Project",
    period: "Current",
    stack: ["Next.js", "React", "Tailwind CSS"],
    description:
      "Personal portfolio website showcasing projects, experience, and frontend engineering ability.",
    highlights: [
      "Built responsive UI with modern layout system",
      "Implemented animated hero interactions and navigation system",
      "Focused on clean UX, readability, and performance",
    ],
  },
];
