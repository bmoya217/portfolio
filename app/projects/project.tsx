import { Tags } from "@/components/Tags";
import { Project as ProjectType } from "./data";
import { ExternalLink } from "lucide-react";
import { Highlights } from "@/components/Highlights";

type Props = {
  project: ProjectType;
};

export const Project = ({ project }: Props) => {
  return (
    <article className="card">
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="card-header">{project.title}</h2>
          <p className="card-text">
            {project.company} · {project.period}
          </p>
        </div>

        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer">
            <ExternalLink size={18} className="link" />
          </a>
        )}
      </div>

      <div>
        <p className="card-description">{project.description}</p>
        <Highlights items={project.highlights} />
      </div>

      <Tags items={project.stack} />
    </article>
  );
};
