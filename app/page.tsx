"use client";

import Link from "next/link";

const Home = () => {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16 md:py-24">
      <section className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">
            Full Stack Developer
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            I build clean, practical web apps that connect frontend polish with
            real backend systems.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            I’m Branden, a full stack developer with experience across React,
            Next.js, TypeScript, GraphQL, REST APIs, Java systems, geospatial
            visualization, billing flows, and internal enterprise tools.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-85"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-border px-5 py-3 text-sm font-medium transition hover:border-muted"
            >
              Contact
            </Link>
          </div>
        </div>

        <aside className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm">
          <p className="text-sm uppercase tracking-widest text-muted">
            Core Stack
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind",
              "GraphQL",
              "REST APIs",
              "Java",
              "Vercel",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border px-3 py-1 text-sm text-muted"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <p className="text-3xl font-bold">5+</p>
              <p className="text-sm text-muted">Years experience</p>
            </div>

            <div>
              <p className="text-3xl font-bold">6</p>
              <p className="text-sm text-muted">Featured projects</p>
            </div>
          </div>
        </aside>
      </section>

      {/* strengths */}
      <section className="mt-24 grid gap-6 md:grid-cols-3">
        {[
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
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
