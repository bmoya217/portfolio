import { experience } from "./data";

type Props = {
  job: (typeof experience)[0];
};

export const JobCard = ({ job }: Props) => {
  return (
    <article key={job.company} className="card">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{job.role}</h2>

          <p className="text-muted mt-1">{job.company}</p>
        </div>

        <p className="text-sm text-muted">{job.period}</p>
      </div>

      <p className="max-w-3xl leading-7 text-muted mt-6">{job.description}</p>

      <div className="flex flex-row md:flex-col gap-6 mt-6">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">
            Highlights
          </h3>

          <ul className="text-sm text-muted space-y-3 mt-3">
            {job.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="text-foreground">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">
            Technologies
          </h3>

          <div className="flex flex-wrap gap-2 mt-3">
            {job.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1 text-sm text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
