import { Tags } from "@/components/Tags";
import { Project as ProjectType } from "./data";
import { ExternalLink } from "lucide-react";
import { Highlights } from "@/components/Highlights";

type Props = {
  project: ProjectType;
};

export const Project = ({ project }: Props) => {
  return (
    <article className="card flex flex-col">
      <div>
        <div className="flex flex-row justify-between">
          <h2 className="card-header">{project.title}</h2>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              <ExternalLink
                size={18}
                className="text-muted hover:text-foreground"
              />
            </a>
          )}
        </div>

        <p className="card-text mt-1">
          {project.company} · {project.period}
        </p>
      </div>

      <p className="card-description mt-4">{project.description}</p>

      <Highlights items={project.highlights} />

      <Tags items={project.stack} />
    </article>
  );
};
