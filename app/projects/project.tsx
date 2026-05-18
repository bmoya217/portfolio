import { Tags } from "@/components/Tags";
import { Project as ProjectType } from "./data";
import { ExternalLink } from "lucide-react";

type Props = {
  project: ProjectType;
};

export const Project = ({ project }: Props) => {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-muted hover:shadow-md">
      <div>
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              <ExternalLink
                size={18}
                className="text-muted hover:text-foreground"
              />
            </a>
          )}
        </div>

        <p className="text-sm text-muted mt-1">
          {project.company} · {project.period}
        </p>
      </div>

      <p className="text-sm leading-6 text-muted mt-4">{project.description}</p>

      <ul className="text-sm space-y-2 mt-5">
        {project.highlights.slice(0, 3).map((highlight) => (
          <li key={highlight} className="flex gap-2 text-muted">
            <span className="text-foreground">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <Tags tags={project.stack} />
    </article>
  );
};
