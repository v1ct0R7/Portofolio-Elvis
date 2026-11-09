import { skills } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function Skills() {
  return (
    <section className="skills section-block" id="skills">
      <div className="page-width">
        <SectionHeading
          eyebrow="What I work with"
          title="Core skills"
          description="A practical toolkit built over years of shipping software."
        />
        <div className="skills-list">
          {skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
        </div>
      </div>
    </section>
  );
}

export default Skills;
