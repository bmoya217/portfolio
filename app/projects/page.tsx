import type { Metadata } from "next";
import { projects } from "./data";
import { ProjectCard } from "./ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects from Branden Moya across React, TypeScript, GraphQL, billing systems, geospatial visualization, and internal tooling.",
};

const Projects = () => {
  return (
    <main className="page-container">
      <section className="page-intro">
        <p className="section-title">Projects</p>

        <h1 className="section-header">
          Selected engineering work across frontend, backend, and product
          systems.
        </h1>

        <p className="section-description">
          A mix of professional systems, enterprise customer platforms,
          geospatial tools, and personal projects built with modern web
          technologies.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </section>
    </main>
  );
};

export default Projects;
