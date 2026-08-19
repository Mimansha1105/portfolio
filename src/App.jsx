import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Project from './components/Project.jsx';
import Achievement from './components/Achievement.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const SECTIONS = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];

function App() {
  const [active, setActive] = useState('hero');
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar active={active} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Achievement />
      <Contact />
      <Footer />
    </>
  );
}

export default App;