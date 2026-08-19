const TABS = [
  { id: 'hero', label: 'index.jsx' },
  { id: 'about', label: 'About.jsx' },
  { id: 'skills', label: 'Skills.jsx' },
  { id: 'experience', label: 'Experience.jsx' },
  { id: 'projects', label: 'Project.jsx' },
  { id: 'contact', label: 'Contact.jsx' },
];

function Navbar({ active }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-brand">mimansha/</span>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`nav-tab ${active === tab.id ? 'active' : ''}`}
            onClick={() => scrollTo(tab.id)}
          >
            <span className="dot" />
            {tab.label}
          </button>
        ))}
        <a className="nav-resume" href="/newest.pdf" download>
          ↓ resume.pdf
        </a>
      </div>
    </nav>
  );
}

export default Navbar;