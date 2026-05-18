import { Tags } from "@/components/Tags";
import { Job } from "./data";
import { Highlights } from "@/components/Highlights";

type Props = {
  job: Job;
};

export const JobCard = ({ job }: Props) => {
  return (
    <article key={job.company} className="card">
      <div className="responsive-layout md:justify-between gap-3">
        <div>
          <h2 className="card-header">{job.role}</h2>

          <p className="mt-1">{job.company}</p>
        </div>

        <p>{job.period}</p>
      </div>

      <p className="card-description mt-6">{job.description}</p>

      <div className="responsive-layout mt-6">
        <div>
          <h3 className="card-subheader">Highlights</h3>
          <Highlights items={job.highlights} />
        </div>

        <div>
          <h3 className="card-subheader">Technologies</h3>

          <Tags items={job.stack} />
        </div>
      </div>
    </article>
  );
};
