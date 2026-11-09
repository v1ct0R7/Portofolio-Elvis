import { projects } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function Projects() {
  return (
    <section className="projects section-block" id="projects">
      <div className="page-width">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="A few examples of products and industries I’ve worked on."
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className={`project-image project-image-${index + 1}`}>
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="project-number">0{index + 1}</span>
              </div>
              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tags" aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
