import { certifications } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function Certifications() {
  return (
    <section className="certifications section-block" id="certifications">
      <div className="page-width">
        <SectionHeading
          eyebrow="Learning"
          title="Education & Certifications"
          description="Professional training and ongoing studies."
        />
        <div className="certification-grid">
          {certifications.map((certification) => (
            <article className="certification-card" key={certification.name}>
              <div className="certification-card-heading">
                <p className="certification-organization">{certification.organization}</p>
                <span
                  className={`certification-status${certification.status === "Completed" ? " is-completed" : ""}`}
                >
                  {certification.status}
                </span>
              </div>
              <h3>{certification.name}</h3>
              <p className="certification-details">{certification.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
