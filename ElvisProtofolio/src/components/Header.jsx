import { useState } from "react";
import { Link } from "../router.jsx";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" to="/#home" onClick={closeMenu} aria-label="Elvis Murati, home">
        <img src="/images/personal.logo.png" alt="" width="42" height="42" />
        <span>Elvis Murati</span>
      </Link>
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
        <Link to="/#about" onClick={closeMenu}>About</Link>
        <Link to="/#skills" onClick={closeMenu}>Skills</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/#experience" onClick={closeMenu}>Experience</Link>
        <Link to="/#certifications" onClick={closeMenu}>Education</Link>
        <Link className="nav-contact" to="/#contact" onClick={closeMenu}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
