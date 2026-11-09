function Hero() {
  return (
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
          <a className="button button-secondary" href="/files/CV-Elvis-Murati.pdf" target="_blank" rel="noreferrer">Download CV</a>
        </div>
        <div className="hero-links" aria-label="Social profiles">
          <a href="https://github.com/v1ct0R7" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/elvis-murati-735b40157/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="hero-portrait">
        <img src="/images/pic.jpeg" alt="Elvis Murati" fetchPriority="high" />
        <div className="portrait-caption">
          <span className="portrait-mark" aria-hidden="true">EM</span>
          <span><strong>Elvis Murati</strong><small>Full-stack developer</small></span>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span aria-hidden="true">↓</span> Scroll to explore</a>
    </section>
  );
}

export default Hero;
