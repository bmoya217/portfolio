import { Jobs } from "./data";
import { JobCard } from "./JobCard";

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

      <section className="cards-container">
        {Jobs.map((job) => (
          <JobCard job={job} key={job.company} />
        ))}
      </section>
    </main>
  );
};

export default Experience;
