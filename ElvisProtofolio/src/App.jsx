import { useEffect } from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Certifications from "./components/Certifications.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import Skills from "./components/Skills.jsx";
import { useLocation } from "./router.jsx";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </>
  );
}

function App() {
  const { pathname, hash } = useLocation();
  const isProjectsPage = pathname === "/projects";

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    document.title = isProjectsPage ? "Projects | Elvis Murati" : "Elvis Murati | Portfolio";
  }, [isProjectsPage]);

  return (
    <>
      <Header />
      <main>{isProjectsPage ? <ProjectsPage /> : <HomePage />}</main>
      <Footer />
    </>
  );
}

export default App;
