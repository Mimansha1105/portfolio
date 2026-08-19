import { projects } from '../data/projects.js';

function Project() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-eyebrow">projects</div>
        <h2 className="section-title">Things I've <span className="dim">built</span></h2>

        <div className="proj-grid">
          {projects.map((p) => (
            <div className="proj-card" key={p.id}>
              <div className="proj-top">
                <div className="proj-name">{p.name}</div>
                <div className="proj-links">
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} GitHub`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.42.36.78 1.08.78 2.18v3.23c0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/>
                    </svg>
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.name} live demo`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <path d="M15 3h6v6"/><path d="M10 14 21 3"/>
                    </svg>
                  </a>
                </div>
              </div>
              <p className="proj-desc">{p.description}</p>
              <ul className="proj-points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="proj-stack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;