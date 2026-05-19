import Link from "next/link";
import { projects } from "./projects/data";
import { Project } from "./projects/project";
import { Tags } from "@/components/Tags";
import { Stat } from "@/components/Stat";
import { ArrowRight } from "lucide-react";

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
      <section className="responsive-layout md:items-center max-w-6xl">
        {/* left */}
        <div className="page-intro flex-2">
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

        {/* right */}
        <div className="card flex-1">
          <p className="card-header">Core Stack</p>

          <Tags items={skills} />

          <div className="flex flex-row gap-4">
            <Stat label="Years experience" value={"5+"} />
            <Stat label="Featured projects" value={"6"} />
          </div>
        </div>
      </section>

      {/* drops */}
      {project && (
        <section>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-title">Featured Work</p>
              <h2 className="section-subheader">
                Solving real problems one interface at a time.
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
            <Project project={project} />
          </div>
        </section>
      )}

      {/* strengths */}
      <section className="responsive-layout">
        {strengths.map((item) => (
          <div key={item.title} className="card flex-1">
            <h3 className="card-subheader">{item.title}</h3>
            <p className="card-description">{item.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
