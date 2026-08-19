const EXPERIENCE = [
  {
    hash: 'jun-2025',
    title: 'Frontend Developer Intern',
    org: 'Next-Generation Adaptive System Lab (NASL), NIT Patna',
    points: [
      'Developed the official NASL website using HTML, CSS, and JavaScript',
      'Integrated REST APIs for dynamic laboratory and research data',
      'Built responsive UI components, improving accessibility and UX',
    ],
  },
  {
    hash: 'aug-2025',
    title: 'Frontend Developer',
    org: 'CUCEK Photography Club',
    points: [
      'Developed scalable frontend applications using React.js and JavaScript',
      'Integrated REST APIs using Axios for efficient data handling',
      'Created reusable UI components and optimized rendering performance',
    ],
  },
];

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-eyebrow">experience</div>
        <h2 className="section-title">Where I've <span className="dim">worked</span></h2>

        <div className="log">
          {EXPERIENCE.map((job) => (
            <div className="log-entry" key={job.hash}>
              <span className="log-node" />
              <div className="log-content">
                <div className="log-hash">commit · {job.hash}</div>
                <div className="log-title">{job.title}</div>
                <div className="log-org"><span>@</span> {job.org}</div>
                <ul className="log-points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;