import { useState } from "react";

function ProjectCard({ project, index }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = project.images?.[activeImageIndex];

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? project.images.length - 1 : currentIndex - 1,
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) =>
      (currentIndex + 1) % project.images.length,
    );
  };

  return (
    <article className="project-card">
      <div className={`project-image project-image-${index + 1}`}>
        {activeImage ? (
          <>
            <img src={activeImage.src} alt={activeImage.alt} loading="lazy" />
            <div className="project-carousel-controls">
              <button
                className="project-carousel-button"
                type="button"
                onClick={showPreviousImage}
                aria-label={`Previous ${project.name} image`}
              >
                <span aria-hidden="true">‹</span>
              </button>
              <span className="project-carousel-count" aria-live="polite">
                {String(activeImageIndex + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
              </span>
              <button
                className="project-carousel-button"
                type="button"
                onClick={showNextImage}
                aria-label={`Next ${project.name} image`}
              >
                <span aria-hidden="true">›</span>
              </button>
            </div>
          </>
        ) : project.url ? (
          <a href={project.url} target="_blank" rel="noreferrer">
            <img src={project.image} alt={project.alt} loading="lazy" />
          </a>
        ) : project.image ? (
          <img src={project.image} alt={project.alt} loading="lazy" />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <span>{project.name.charAt(0)}</span>
            <small>In progress</small>
          </div>
        )}
        <span className="project-number">0{index + 1}</span>
        {project.url && <span className="project-live">Live</span>}
      </div>
      <div className="project-content">
        <p className="project-type">{project.type}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        {project.technologies.length > 0 && (
          <ul className="project-tags" aria-label={`${project.name} technologies`}>
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        )}
        {project.url && (
          <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
            View live project <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
