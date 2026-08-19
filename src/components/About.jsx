function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-eyebrow">about</div>
        <h2 className="section-title">Who I <span className="dim">am</span></h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm an Information Technology undergraduate at{' '}
              <strong>Cochin University of Science and Technology</strong>,
              building projects across the stack — from React frontends to
              FastAPI backends to RAG pipelines powered by LangChain and
              ChromaDB.
            </p>
            <p>
              I split my time between shipping real applications and
              sharpening fundamentals: I've solved <strong>500+ Data
              Structures & Algorithms problems</strong> and hold a peak
              LeetCode contest rating of <strong>1786</strong>, placing me in
              the top 11.78% globally.
            </p>
            <p>
              Outside of coursework, I've worked as a frontend developer for
              a research lab at NIT Patna and my college's photography club,
              and I compete regularly in hackathons and coding contests.
            </p>
          </div>

          <div className="edu-card">
            <div className="file-label">education.json</div>
            <h3>Cochin University of Science and Technology</h3>
            <div className="sub">B.Tech, Information Technology</div>
            <div className="edu-meta">
              <span className="cgpa">CGPA: 9.45 / 10</span>
              <span>Expected Apr 2027</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;