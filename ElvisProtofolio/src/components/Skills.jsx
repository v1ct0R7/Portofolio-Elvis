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
          {skills.flatMap((skillGroups) =>
            Object.entries(skillGroups).map(([category, categorySkills]) => (
              <div className="skill-group" key={category}>
                <h3 className="skill-group-title">{category}</h3>
                <div className="skill-group-tags">
                  {categorySkills.map((skill) => (
                    <span className="skill-tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;
