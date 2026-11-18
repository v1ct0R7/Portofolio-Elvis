import { skills } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function Skills() {
  const groups = skills.flatMap((skillGroups) => Object.entries(skillGroups));

  return (
    <section className="skills section-block" id="skills">
      <div className="page-width skills-layout">
        <SectionHeading
          eyebrow="What I work with"
          title="Core skills"
          description="A practical toolkit built over years of shipping software."
        />
        <dl className="skills-list">
          {groups.map(([category, categorySkills]) => (
            <div className="skill-group" key={category}>
              <dt className="skill-group-title">{category}</dt>
              <dd className="skill-group-tags">
                {categorySkills.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Skills;
