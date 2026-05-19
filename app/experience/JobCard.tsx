import { Tags } from "@/components/Tags";
import { Job } from "./data";
import { Highlights } from "@/components/Highlights";

type Props = {
  job: Job;
};

export const JobCard = ({ job }: Props) => {
  return (
    <article className="card">
      <div className="responsive-layout md:justify-between gap-3">
        <div>
          <h2 className="card-header">{job.role}</h2>
          <p className="card-text">{job.company}</p>
        </div>

        <p>{job.period}</p>
      </div>

      <p className="card-description">{job.description}</p>

      <div className="responsive-layout">
        <div>
          <h3 className="card-subheader">Highlights</h3>
          <Highlights items={job.highlights} />
        </div>

        <div className="space-y-2">
          <h3 className="card-subheader">Technologies</h3>
          <Tags items={job.stack} />
        </div>
      </div>
    </article>
  );
};
