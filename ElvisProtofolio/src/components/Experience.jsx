import { experience } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function Experience() {
  return (
    <section className="experience section-block" id="experience">
      <div className="page-width experience-layout">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          description="Roles and teams that have shaped my work."
        />
        <div className="experience-list">
          {experience.map((job) => (
            <article className="experience-item" key={`${job.company}-${job.period}`}>
              <div className="experience-period">{job.period}</div>
              <div>
                <h3>{job.role}</h3>
                <p className="experience-company">{job.company}</p>
                <p className="experience-details">{job.details}</p>
              </div>
              <span className="experience-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
