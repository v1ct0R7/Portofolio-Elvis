function Footer() {
  return (
    <footer className="site-footer page-width">
      <span>© {new Date().getFullYear()} Elvis Murati</span>
      <a
        href="#top"
        onClick={(event) => {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Back to top ↑
      </a>
    </footer>
  );
}

export default Footer;
