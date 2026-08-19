import { useEffect, useRef, useState } from 'react';

const ROLES = [
  'Full-Stack Developer',
  'GenAI / RAG Engineer',
  'Competitive Programmer',
];

function useTypewriter(words) {
  const [text, setText] = useState('');
  const idx = useRef(0);
  const char = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setText(words[0]);
      return;
    }

    const tick = () => {
      const word = words[idx.current];
      if (!deleting.current) {
        char.current += 1;
        setText(word.slice(0, char.current));
        if (char.current === word.length) {
          deleting.current = true;
          return 1400;
        }
        return 70;
      } else {
        char.current -= 1;
        setText(word.slice(0, char.current));
        if (char.current === 0) {
          deleting.current = false;
          idx.current = (idx.current + 1) % words.length;
        }
        return 35;
      }
    };

    let timeout;
    const loop = () => {
      const delay = tick();
      timeout = setTimeout(loop, delay);
    };
    timeout = setTimeout(loop, 500);
    return () => clearTimeout(timeout);
  }, [words]);

  return text;
}

function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-eyebrow">// welcome to my portfolio</div>
          <h1 className="hero-name">Mimansha Mishra</h1>
          <div className="hero-role">
            {role}
            <span className="cursor">&nbsp;</span>
          </div>
          <p className="hero-desc">
            B.Tech IT student at CUSAT building full-stack products and
            GenAI-powered tools — with 500+ DSA problems solved along the way.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </button>
            <button className="btn btn-ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get in Touch
            </button>
          </div>

          <div className="hero-social">
            <a href="https://github.com/Mimansha1105" aria-label="GitHub" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.42.36.78 1.08.78 2.18v3.23c0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mimansha-mishra-9a9b152b1/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
              </svg>
            </a>
            <a href="mailto:mimansha.clg@gmail.com" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="term">
          <div className="term-bar">
            <span className="term-dot r" /><span className="term-dot y" /><span className="term-dot g" />
            <span className="term-title">profile.js</span>
          </div>
          <div className="term-body">
            <div><span className="tk-kw">const</span> developer <span className="tk-punc">=</span> <span className="tk-punc">{'{'}</span></div>
            <div>&nbsp;&nbsp;<span className="tk-key">name</span><span className="tk-punc">:</span> <span className="tk-str">"Mimansha Mishra"</span><span className="tk-punc">,</span></div>
            <div>&nbsp;&nbsp;<span className="tk-key">based</span><span className="tk-punc">:</span> <span className="tk-str">"Kochi, Kerala"</span><span className="tk-punc">,</span></div>
            <div>&nbsp;&nbsp;<span className="tk-key">education</span><span className="tk-punc">:</span> <span className="tk-str">"B.Tech IT, CUSAT"</span><span className="tk-punc">,</span></div>
            <div>&nbsp;&nbsp;<span className="tk-key">cgpa</span><span className="tk-punc">:</span> <span className="tk-str">9.45</span><span className="tk-punc">,</span></div>
            <div>&nbsp;&nbsp;<span className="tk-key">focus</span><span className="tk-punc">:</span> <span className="tk-punc">[</span><span className="tk-str">"MERN"</span><span className="tk-punc">,</span> <span className="tk-str">"RAG"</span><span className="tk-punc">,</span> <span className="tk-str">"DSA"</span><span className="tk-punc">]</span></div>
            <div><span className="tk-punc">{'}'}</span><span className="tk-punc">;</span></div>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">9.45</div>
              <div className="label">CGPA</div>
            </div>
            <div className="hero-stat">
              <div className="num">1786</div>
              <div className="label">LeetCode Rating</div>
            </div>
            <div className="hero-stat">
              <div className="num">500+</div>
              <div className="label">DSA Solved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;