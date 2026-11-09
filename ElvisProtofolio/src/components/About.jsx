import SectionHeading from "./SectionHeading.jsx";

function About() {
  return (
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
  );
}

export default About;
