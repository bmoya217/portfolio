import type { Metadata } from "next";
import { Jobs } from "./data";
import { JobCard } from "./JobCard";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional software engineering experience for Branden Moya across React, GraphQL, billing systems, geospatial tools, and backend integrations.",
};

const Experience = () => {
  return (
    <main className="page-container">
      <section className="page-intro">
        <p className="section-title">Experience</p>

        <h1 className="section-header">
          Building full stack applications, internal tools, and customer-facing
          systems.
        </h1>

        <p className="section-description">
          Around 5 years of professional experience across frontend development,
          backend services, enterprise integrations, geospatial visualization,
          and cloud-connected systems.
        </p>
      </section>

      <section className="card">
        <p className="card-kicker">Currently</p>
        <h2 className="card-header">
          Focused on frontend-heavy full stack roles
        </h2>
        <p className="card-description">
          After taking time away from full-time engineering for family
          responsibilities, I'm focused on returning to product engineering,
          internal tooling, and platform UI work where React and backend
          integration both matter. I've used part of this time to sharpen this
          portfolio and revisit projects like Drops.
        </p>
      </section>

      <section className="cards-container">
        {Jobs.map((job) => (
          <JobCard job={job} key={job.company} />
        ))}
      </section>
    </main>
  );
};

export default Experience;
