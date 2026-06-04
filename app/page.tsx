import Link from "next/link";
import { projects } from "./projects/data";
import { ProjectCard } from "./projects/ProjectCard";
import { Tags } from "@/components/Tags";
import { Stat } from "@/components/Stat";
import { ArrowRight, Download, ExternalLink } from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux",
  "Tailwind",
  "GraphQL",
  "SQL",
  "REST APIs",
];

const strengths = [
  {
    title: "Product-minded UI",
    text: "I like interfaces that make complex work feel obvious: clear states, useful defaults, and flows that hold up under real use.",
  },
  {
    title: "Systems integration",
    text: "Comfortable connecting React apps to GraphQL, REST APIs, Java services, payment systems, and internal platforms.",
  },
  {
    title: "Practical delivery",
    text: "Experience shipping billing, customer self-service, geospatial, and data-heavy tools where reliability matters.",
  },
];

const proofPoints = [
  "Built billing and account tools used across web, mobile, and support workflows.",
  "Created geospatial visualization features with React, Leaflet, Cesium, GraphQL, and Java services.",
  "Shipped Drops for World of Warcraft raid loot planning during active progression, then kept old tier data usable later.",
];

const project = projects.find((project) => project.title.startsWith("Drops"));

const Home = () => {
  return (
    <main className="page-container">
      <section className="responsive-layout md:items-center max-w-6xl">
        <div className="page-intro flex-2">
          <p className="section-title">Full Stack Developer</p>

          <h1 className="section-header">
            I build practical web apps where clean interfaces meet real backend
            systems.
          </h1>

          <p className="section-description">
            I am Branden Moya, a full stack developer focused on React,
            TypeScript, GraphQL, REST APIs, internal tools, billing flows, and
            geospatial visualization.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className="button-primary">
              View projects
              <ArrowRight size={16} />
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              Resume
              <Download size={16} />
            </a>
          </div>
        </div>

        <aside className="card flex-1">
          <div>
            <p className="card-kicker">Currently</p>
            <h2 className="card-header">Frontend-focused full stack work</h2>
          </div>

          <div className="flex flex-row gap-4">
            <Stat label="Years experience" value={"5+"} />
            <Stat label="Featured projects" value={"6"} />
          </div>

          <div>
            <p className="card-subheader">Core stack</p>
            <Tags items={skills} />
          </div>

          <p className="card-description">
            Open to roles involving modern React ecosystems, product
            engineering, internal tooling, or platform-facing UI.
          </p>
        </aside>
      </section>

      {project && (
        <section>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-title">Featured Case Study</p>
              <h2 className="section-subheader">
                A real tool from a real workflow.
              </h2>
            </div>

            <Link
              href="/projects"
              className="link hidden md:flex flex-row text-sm font-medium items-center gap-1"
            >
              View all
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-8">
            <ProjectCard project={project} />
          </div>
        </section>
      )}

      <section className="card">
        <div>
          <p className="card-kicker">Proof of Work</p>
          <h2 className="card-header">Things I have actually shipped</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {proofPoints.map((point) => (
            <p key={point} className="proof-item">
              {point}
            </p>
          ))}
        </div>
      </section>

      <section className="responsive-layout">
        {strengths.map((item) => (
          <div key={item.title} className="card flex-1">
            <h3 className="card-subheader">{item.title}</h3>
            <p className="card-description">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="responsive-layout md:items-center md:justify-between">
        <div className="page-intro">
          <p className="section-title">Next Step</p>
          <h2 className="section-subheader">Want the short version?</h2>
          <p className="section-description">
            The projects page has the proof, the experience page has the work
            history, and the resume is ready if you want the tidy one-page
            version.
          </p>
        </div>

        <Link href="/contact" className="button-primary md:self-end">
          Contact me
          <ExternalLink size={16} />
        </Link>
      </section>
    </main>
  );
};

export default Home;
