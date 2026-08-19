function Contact() {
  return (
    <section className="section" id="contact" style={{ border: 'none' }}>
      <div className="container">
        <div className="contact-wrap">
          <div className="section-eyebrow">contact</div>
          <h2 className="contact-title">Let's build something <span>great</span></h2>
          <p className="contact-desc">
            Open to internships, collaborations, and interesting problems.
            Reach out — I usually reply within a day.
          </p>

          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:mimansha.clg@gmail.com">
              Email Me
            </a>
            <a className="btn btn-ghost" href="https://www.linkedin.com/in/mimansha-mishra-9a9b152b1/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-ghost" href="https://github.com/Mimansha1105" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>

          <div className="contact-meta">
            <a href="mailto:mimansha.clg@gmail.com">mimansha.clg@gmail.com</a>
            <span>+91 7209236099</span>
            <span>Kochi, Kerala</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;