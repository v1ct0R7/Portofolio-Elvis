import { projects } from "../data/portfolio.js";
import { Link } from "../router.jsx";
import ProjectCard from "./ProjectCard.jsx";
import SectionHeading from "./SectionHeading.jsx";

function ProjectsPage() {
  return (
    <section className="projects-page section-block">
      <div className="page-width">
        <Link className="back-link" to="/#projects">
          <span aria-hidden="true">←</span> Back to home
        </Link>
        <SectionHeading
          eyebrow={`All work · ${String(projects.length).padStart(2, "0")} projects`}
          title="Projects I’ve made"
          description="A complete look at the products, platforms and research I’ve worked on."
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
