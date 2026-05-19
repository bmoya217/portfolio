import { projects } from "./data";
import { Project } from "./project";

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
          <Project project={project} key={project.title} />
        ))}
      </section>
    </main>
  );
};

export default Projects;
