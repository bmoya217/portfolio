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
    period: "Oct 2021 – Jul 2023",
    description:
      "Worked on customer billing and account management systems supporting both customer-facing applications and internal operational tools.",
    stack: ["React", "GraphQL", "REST APIs", "Kibana", "Micro Frontends"],
    highlights: [
      "Developed billing micro-frontend systems for customers and internal Salesforce agents",
      "Built and maintained backend integrations for customer account systems",
      "Participated in production issue triage and operational support rotations",
      "Used Kibana to investigate production errors and performance bottlenecks",
    ],
  },

  {
    company: "Kforce (Contractor at Viasat)",
    role: "Software Engineer",
    period: "May 2020 – Oct 2021",
    description:
      "Contributed to customer account and billing platforms for satellite internet services across both web and mobile environments.",
    stack: ["React", "React Native", "REST APIs", "Node.js", "GraphQL"],
    highlights: [
      "Developed customer self-service functionality for MyViasat applications",
      "Worked on PAC Customer Self Care backend systems",
      "Improved API reliability and response efficiency",
      "Supported internal customer account workflows across multiple teams",
    ],
  },

  {
    company: "Moebius Solutions",
    role: "Jr. Software Engineer II",
    period: "Jul 2018 – May 2020",
    description:
      "Worked on geospatial visualization systems, cloud-connected services, and frontend modernization projects in defense and enterprise environments.",
    stack: [
      "TypeScript",
      "Java",
      "React",
      "GraphQL",
      "Apollo Server",
      "Express",
      "OpenShift",
    ],
    highlights: [
      "Built geospatial visualization features for Phoenix Prototype",
      "Developed GraphQL microservices with dynamic TypeScript queries",
      "Contributed to GCCS-J Mod situational awareness systems",
      "Represented engineering team during Agile planning conferences",
    ],
  },
];
