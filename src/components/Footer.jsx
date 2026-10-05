export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>⚽ FOOTBALLHUB</h4>
          <p>Professional futbol platformasi. Live scores, transfers, standings.</p>
          <div className="socials">
            <a href="#">𝕏</a><a href="#">▶</a><a href="#">◎</a><a href="#">f</a>
          </div>
        </div>
        <div>
          <h4>Leagues</h4>
          <ul><li>Premier League</li><li>La Liga</li><li>Serie A</li><li>Bundesliga</li><li>Ligue 1</li></ul>
        </div>
        <div>
          <h4>Platform</h4>
          <ul><li>Live Matches</li><li>Transfers</li><li>Standings</li><li>News</li></ul>
        </div>
        <div>
          <h4>Subscribe</h4>
          <div className="sub-row"><input placeholder="Email"/><button>→</button></div>
          <p className="muted">Get latest news weekly.</p>
        </div>
      </div>
      <div className="footer-bottom container">© 2026 FootballHub — Barcha huquqlar himoyalangan. 100 teams • 500 players</div>
    </footer>
  )
}
