import { projects } from "../data/portfolio.js";
import { Link } from "../router.jsx";
import SectionHeading from "./SectionHeading.jsx";

const previewImages = projects
  .map((project) => project.images?.[0] ?? (project.image && { src: project.image, alt: project.alt }))
  .filter(Boolean)
  .slice(0, 3);

function Projects() {
  return (
    <section className="projects section-block" id="projects">
      <div className="page-width projects-teaser">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="Products and platforms I’ve designed, built and shipped."
        />
        <Link className="projects-cta" to="/projects">
          <span className="projects-cta-previews" aria-hidden="true">
            {previewImages.map((image) => (
              <img key={image.src} src={image.src} alt="" loading="lazy" />
            ))}
          </span>
          <span className="projects-cta-copy">
            <span className="projects-cta-count">{String(projects.length).padStart(2, "0")} projects</span>
            <strong>Check all projects made</strong>
          </span>
          <span className="projects-cta-arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
