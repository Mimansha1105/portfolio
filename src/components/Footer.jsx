function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span><span className="branch">⎇ main</span> · built with React</span>
        <span>© {new Date().getFullYear()} Mimansha Mishra</span>
        <button onClick={scrollTop}>↑ back to top</button>
      </div>
    </footer>
  );
}

export default Footer;