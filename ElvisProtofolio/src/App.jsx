import { useState } from "react";

const experience = [
  {
    role: "Senior Software Developer",
    company: "Tech Rational",
    period: "Jul 2022 – Dec 2023",
    details: "Built web and mobile applications with Angular, Ionic and TypeScript.",
  },
  {
    role: "Senior Software Analyst & Developer",
    company: "WebApp Technology",
    period: "2020 – Jun 2022",
    details: "Worked on web and mobile products using Angular, Node.js and databases.",
  },
  {
    role: "MEAN / LAMP Stack Developer",
    company: "Trinity Infocom",
    period: "Mar 2019 – Dec 2020",
    details: "Developed booking, entry-pass and market-information applications.",
  },
];

const projects = [
  {
    name: "FoodChe",
    type: "Food delivery platform",
    description: "A food delivery product with customer, driver and admin experiences.",
    image: "/project-1.png",
    alt: "FoodChe project preview",
    technologies: ["PWA", "Node.js", "Mobile"],
  },
  {
    name: "MyTrade",
    type: "Market information",
    description: "A web application for viewing market indices and related information.",
    image: "/trade.jpg",
    alt: "MyTrade project preview",
    technologies: ["Angular", "Node.js", "MongoDB"],
  },
  {
    name: "Mobile & web apps",
    type: "Product development",
    description: "Experience across community, fitness, booking and education products.",
    image: "/project-2.png",
    alt: "Mobile and web application project preview",
    technologies: ["Ionic", "Angular", "TypeScript"],
  },
];

const skills = [
  "Angular",
  "Ionic",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "PHP",
  "CodeIgniter",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "Git",
  "Docker",
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Elvis Murati, home">
        <img src="/personal.logo.png" alt="" width="42" height="42" />
        <span>Elvis Murati</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        className={`main-nav${menuOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero page-width" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
            <h1>Full-stack developer building useful digital products.</h1>
            <p className="hero-description">
              I’m Elvis, a software developer with 20+ years of experience across
              web and mobile applications.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View my work <span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href="/CV-Elvis-Murati.pdf" target="_blank" rel="noreferrer">Download CV</a>
            </div>
            <div className="hero-links" aria-label="Social profiles">
              <a href="https://github.com/v1ct0R7" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href="https://www.linkedin.com/in/elvis-murati-735b40157/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-portrait">
            <img src="/pic.jpeg" alt="Elvis Murati" fetchPriority="high" />
            <div className="portrait-caption">
              <span className="portrait-mark" aria-hidden="true">EM</span>
              <span><strong>Elvis Murati</strong><small>Full-stack developer</small></span>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span aria-hidden="true">↓</span> Scroll to explore</a>
        </section>

        <section className="about section-block" id="about">
          <div className="page-width about-layout">
            <SectionHeading eyebrow="A little about me" title="Experience that turns ideas into working products." />
            <div className="about-copy">
              <p>
                I build web and mobile applications from idea to release. I enjoy
                solving practical problems, working with a team and writing code
                that is easy to maintain.
              </p>
              <p>
                My background spans frontend, backend and mobile development,
                with a focus on Angular, Ionic, Node.js and PHP.
              </p>
              <a className="text-link" href="#experience">See my experience <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="skills section-block" id="skills">
          <div className="page-width">
            <SectionHeading eyebrow="What I work with" title="Core skills" description="A practical toolkit built over years of shipping software." />
            <div className="skills-list">
              {skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section className="projects section-block" id="projects">
          <div className="page-width">
            <SectionHeading eyebrow="Selected work" title="Projects" description="A few examples of products and industries I’ve worked on." />
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

        <section className="experience section-block" id="experience">
          <div className="page-width experience-layout">
            <SectionHeading eyebrow="Career" title="Experience" description="Roles and teams that have shaped my work." />
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

        <section className="contact section-block" id="contact">
          <div className="page-width contact-panel">
            <div>
              <p className="eyebrow">Let’s work together</p>
              <h2>Have a role or project in mind?</h2>
              <p className="contact-description">I’m open to new opportunities. Get in touch and let’s talk.</p>
            </div>
            <a className="button button-light" href="mailto:elvismurati15@gmail.com">
              elvismurati15@gmail.com <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer page-width">
        <span>© {new Date().getFullYear()} Elvis Murati</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
