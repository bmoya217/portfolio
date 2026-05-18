"use client";

import Link from "next/link";
import { projects } from "./projects/data";
import { Project } from "./projects/project";
import { Tags } from "@/components/Tags";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux",
  "Tailwind",
  "GraphQL",
  "REST APIs",
];

const strengths = [
  {
    title: "Frontend polish",
    text: "Responsive layouts, readable UI, clean component structure, and user-focused interactions.",
  },
  {
    title: "Backend integration",
    text: "Experience connecting React apps to GraphQL, REST APIs, Java services, and internal systems.",
  },
  {
    title: "Real product work",
    text: "Worked on billing, customer self-service, geospatial tools, and data-heavy internal workflows.",
  },
];

const project = projects.find((project) => project.title.startsWith("Drops"));

const Home = () => {
  return (
    <main className="page-container">
      <section className="flex flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-2">
          <p className="section-title">Full Stack Developer</p>

          <h1 className="section-header">
            I build clean, practical web apps that connect frontend polish with
            real backend systems.
          </h1>

          <p className="section-description">
            I’m Branden, a full stack developer with experience across React,
            Next.js, TypeScript, GraphQL, REST APIs, Java systems, geospatial
            visualization, billing flows, and internal enterprise tools.
          </p>
        </div>

        <div className="card flex-1">
          <p className="card-header">Core Stack</p>

          <Tags tags={skills} />

          <div className="flex flex-row gap-4 mt-8">
            <div className="flex-1">
              <p className="text-3xl font-bold">5+</p>
              <p className="text-sm text-muted">Years experience</p>
            </div>

            <div className="flex-1">
              <p className="text-3xl font-bold">6</p>
              <p className="text-sm text-muted">Featured projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* featured work */}
      {project && (
        <section className="mt-18">
          <div className="flex items-end justify-between gap-4 mb-8 ">
            <div>
              <p className="section-title">Featured Work</p>
              <h2 className="section-subheader">
                Solving life's problems on line at a time
              </h2>
            </div>

            <Link
              href="/projects"
              className="hidden text-sm font-medium text-muted hover:text-foreground md:block"
            >
              View all →
            </Link>
          </div>
          <Project project={project} />
        </section>
      )}

      {/* strengths */}
      <section className="flex flex-col md:flex-row gap-6 mt-18">
        {strengths.map((item) => (
          <div key={item.title} className="card flex-1">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm leading-6 text-muted mt-3">{item.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
