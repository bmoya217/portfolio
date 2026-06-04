import type { Metadata } from "next";
import Link from "next/link";
import { Tags } from "@/components/Tags";
import { Download, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Branden Moya for frontend-focused full stack software engineering roles and projects.",
};

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "GraphQL",
  "REST APIs",
  "Node.js",
  "Frontend Systems",
  "UI Engineering",
];

const Contact = () => {
  return (
    <main className="page-container">
      <section className="page-intro">
        <p className="section-title">Contact</p>

        <h1 className="section-header">Let&apos;s build something useful.</h1>

        <p className="section-description">
          I am open to frontend-focused full stack roles, especially work around
          React product surfaces, internal tooling, platform UI, and systems
          that need thoughtful integration.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="mailto:bmoya217@gmail.com" className="button-primary">
            Email me
            <Mail size={16} />
          </a>

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
      </section>

      <section className="responsive-layout">
        <div className="card flex-1">
          <h2 className="card-header">Get in touch</h2>

          <div>
            <p className="card-link-label">Email</p>

            <a href="mailto:bmoya217@gmail.com" className="card-link">
              bmoya217@gmail.com
            </a>
          </div>

          <div>
            <p className="card-link-label">LinkedIn</p>

            <a
              href="https://linkedin.com/in/branden-moya"
              target="_blank"
              rel="noreferrer"
              className="card-link"
            >
              linkedin.com/in/branden-moya
            </a>
          </div>

          <div>
            <p className="card-link-label">GitHub</p>

            <a
              href="https://github.com/bmoya217"
              target="_blank"
              rel="noreferrer"
              className="card-link"
            >
              github.com/bmoya217
            </a>
          </div>
        </div>

        <div className="card flex-1">
          <div>
            <p className="card-kicker">Current fit</p>
            <h2 className="card-header">Frontend-heavy full stack work</h2>
          </div>

          <Tags items={skills} />

          <p className="card-description">
            I am strongest where UI quality and backend reality have to meet:
            customer portals, billing/account workflows, operational tools,
            dashboards, and internal product surfaces.
          </p>

          <Link href="/projects" className="link inline-flex items-center">
            Review selected projects
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contact;
