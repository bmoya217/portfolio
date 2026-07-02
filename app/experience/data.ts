export type Job = {
  company: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
  highlights: string[];
};

export const Jobs: Job[] = [
  {
    company: "Viasat",
    role: "Software Engineer",
    period: "Oct 2021 - Jul 2023",
    description:
      "Worked on large-scale billing and account management systems during Viasat's transition to a company-wide micro-frontend architecture.",
    stack: [
      "React",
      "TypeScript",
      "GraphQL",
      "REST APIs",
      "Redux",
      "Kibana",
      "Micro Frontends",
    ],
    highlights: [
      "Partnered with another engineer to rebuild the billing micro-frontend as part of a company-wide shift to micro-frontend architecture",
      "Built a GraphQL integration layer for billing workflows, adapting queries as the backend evolved from an external vendor to an internal solution while removing an unnecessary service from the stack",
      "Migrated the billing micro-frontend into a company-wide monorepo, adopting shared Redux state management and styling conventions",
      "Built a post-payment rating prompt for mobile users, contributing to a positive shift in App Store ratings following launch",
      "Rotated on issue triage for the consumer satellite internet division, using Kibana to investigate production issues and resolve account-specific escalations",
    ],
  },
  {
    company: "Kforce (Contractor at Viasat)",
    role: "Software Engineer",
    period: "May 2020 - Oct 2021",
    description:
      "Built and maintained customer-facing tools for managing satellite internet accounts and billing, alongside backend schema and request-processing work on an internal REST API used across multiple teams.",
    stack: [
      "React",
      "React Native",
      "TypeScript",
      "REST APIs",
      "Node.js",
      "GraphQL",
    ],
    highlights: [
      "Developed and maintained a customer-facing web and mobile app for managing satellite internet accounts, billing, and self-service troubleshooting",
      "Owned schema design and request-processing logic for PAC-CSC, an internal REST API built on the company's PAC platform; adoption expanded across teams beyond its original scope, with ongoing maintenance and support frequently routed back to me",
    ],
  },
  {
    company: "Moebius Solutions",
    role: "Jr. Software Engineer",
    period: "Jul 2018 - May 2020",
    description:
      "Built geospatial visualization tools and backend services for defense-focused situational awareness platforms.",
    stack: [
      "TypeScript",
      "Java",
      "React",
      "GraphQL",
      "Redux",
      "Express",
      "Leaflet",
      "Cesium",
    ],
    highlights: [
      "Built geospatial visualization tools for the Phoenix Prototype platform, including interactive map layers and shared API utilities",
      "Built and maintained microservices using Express, Apollo Server, GraphQL, and TypeScript",
      "Contributed to feature development in a legacy Java-based command-and-control subsystem focused on track management and situational awareness",
      "Represented the engineering team during Agile planning conferences, presenting technical progress and implementation context to large cross-functional groups",
    ],
  },
];
