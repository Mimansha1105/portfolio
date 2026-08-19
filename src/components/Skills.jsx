import { skillCategories } from '../data/skills.js';

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-eyebrow">skills</div>
        <h2 className="section-title">What I <span className="dim">work with</span></h2>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div className="skill-card" key={cat.module}>
              <div className="import-line">
                <span>import</span> {'{ '}{cat.module}{' }'} from './stack'
              </div>
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.items.map((item) => (
                  <span className="skill-tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;