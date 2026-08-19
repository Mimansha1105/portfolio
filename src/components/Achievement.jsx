const ACHIEVEMENTS = [
  'Global Rank 2927 in LeetCode Weekly Contest 509 (top 11.78% worldwide)',
  'Solved 500+ DSA problems across LeetCode, GeeksforGeeks, and Coding Ninjas',
  'Secured Top 3 position at Tink-Her-Girls Hackathon',
  'Finalist at Code Clash 2024, Model Engineering College, Kochi',
];

function Achievement() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="section-eyebrow">achievements</div>
        <h2 className="section-title">Track <span className="dim">record</span></h2>

        <div className="ach-grid">
          <div className="ach-highlight">
            <div className="big">1786</div>
            <div className="cap">Peak LeetCode Contest Rating</div>
            <div className="sub">Top 11.78% of competitors globally</div>
          </div>

          <div className="ach-list">
            {ACHIEVEMENTS.map((a) => (
              <div className="ach-item" key={a}>
                <span className="mark">✓</span>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievement;