import { Tags } from "@/components/Tags";

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

        <h1 className="section-header">Let’s build something.</h1>

        <p className="section-description">
          Feel free to reach out about software engineering opportunities,
          frontend/full stack development, or interesting projects.
        </p>
      </section>

      <section className="responsive-layout">
        <article className="card flex-1">
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
        </article>

        <article className="card flex-1">
          <h2 className="card-header">Focus Areas</h2>

          <Tags items={skills} />

          <p className="card-description">
            Currently interested in frontend-focused full stack roles involving
            modern React ecosystems, internal tooling, product engineering, or
            platform development.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Contact;
