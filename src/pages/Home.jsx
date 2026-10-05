import { Link } from 'react-router-dom'
import { teams, players, matches, news, transfers, getStandings } from '../data'

export default function Home(){
  const live = matches.filter(m=>m.status==='live').slice(0,4)
  const upcoming = matches.filter(m=>m.status==='scheduled').slice(0,4)
  const popular = teams.slice(0,8)
  const topPlayers = [...players].sort((a,b)=> b.stats.rating - a.stats.rating).slice(0,4)
  const featuredNews = news.filter(n=>n.featured).slice(0,3)
  const latestNews = news.slice(0,4)

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero-section container">
        <div className="hero-main">
          <span className="badge">🔴 LIVE • Premier League Matchday 24</span>
          <h1>Football <span className="accent">is life</span>.<br/>Everything else<br/>is details.</h1>
          <p>100+ jamoa • 500+ futbolchi • Live scores • Transfers — professional platforma.</p>
          <div className="hero-btns">
            <Link to="/matches" className="btn primary">Live Matches →</Link>
            <Link to="/teams" className="btn outline">Explore Teams</Link>
          </div>
          <div className="hero-stats">
            <div><b>60</b><span>Matches</span></div>
            <div><b>100</b><span>Teams</span></div>
            <div><b>500</b><span>Players</span></div>
          </div>
        </div>
        <div className="hero-featured">
          {featuredNews.map(n=>(
            <article key={n.id} className="hero-card">
              <img src={n.image} alt=""/>
              <div className="hero-card-body">
                <span className="cat">{n.category}</span>
                <h3>{n.title}</h3>
                <span className="time">{n.time}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LIVE MATCHES */}
      <section className="container section">
        <div className="section-head"><h2>🔴 Live Matches</h2><Link to="/matches">View all →</Link></div>
        <div className="live-grid">
          {live.map(m=>(
            <div key={m.id} className="match-card live">
              <div className="match-league">{m.league} • {m.minute} <span className="live-dot"></span></div>
              <div className="match-teams">
                <div className="mt"><img src={m.homeTeam.logo} alt=""/>{m.homeTeam.name}<b>{m.scoreHome}</b></div>
                <div className="mt"><img src={m.awayTeam.logo} alt=""/>{m.awayTeam.name}<b>{m.scoreAway}</b></div>
              </div>
              <div className="match-stadium">{m.stadium}</div>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING */}
      <section className="container section">
        <div className="section-head"><h2>Upcoming Matches</h2><Link to="/matches">Full calendar →</Link></div>
        <div className="upcoming-grid">
          {upcoming.map(m=>(
            <div key={m.id} className="up-card">
              <div className="up-date">{m.date} • {m.time}</div>
              <div className="up-vs">
                <span><img src={m.homeTeam.logo} alt=""/>{m.homeTeam.name}</span>
                <em>vs</em>
                <span><img src={m.awayTeam.logo} alt=""/>{m.awayTeam.name}</span>
              </div>
              <div className="up-league">{m.league}</div>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR TEAMS & TOP PLAYERS */}
      <section className="container two-col">
        <div className="section">
          <div className="section-head"><h2>Popular Teams</h2><Link to="/teams">All 100 →</Link></div>
          <div className="pop-grid">
            {popular.map(t=>(
              <Link key={t.id} to={`/teams/${t.id}`} className="pop-card">
                <img src={t.logo} alt=""/>
                <b>{t.name}</b><span>{t.league}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="section">
          <div className="section-head"><h2>Top Players</h2><Link to="/players">All 500 →</Link></div>
          <div className="top-list">
            {topPlayers.map(p=>(
              <Link key={p.id} to={`/players/${p.id}`} className="top-row">
                <img src={p.photo} alt=""/>
                <div><b>{p.name}</b><span>{p.position} • {p.club}</span></div>
                <div className="rating">{p.stats.rating} ★</div>
                <div className="goals">{p.stats.goals} G</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST NEWS + TRANSFERS */}
      <section className="container two-col">
        <div className="section">
          <div className="section-head"><h2>Latest News</h2><Link to="/news">More news →</Link></div>
          <div className="news-list">
            {latestNews.map(n=>(
              <article key={n.id} className="news-row">
                <img src={n.image} alt=""/>
                <div>
                  <span className="cat small">{n.category} • {n.time}</span>
                  <h4>{n.title}</h4>
                  <p>{n.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="section transfers-home">
          <div className="section-head"><h2>Latest Transfers</h2><Link to="/transfers">Transfer market →</Link></div>
          {transfers.slice(0,4).map(tr=>(
            <div key={tr.id} className="tr-row">
              <img src={tr.image} alt=""/>
              <div><b>{tr.player}</b><span>{tr.from} → {tr.to}</span></div>
              <span className={`fee ${tr.status==='Completed'?'done':'rumour'}`}>{tr.fee}</span>
            </div>
          ))}
        </div>
      </section>

      {/* STANDINGS PREVIEW */}
      <section className="container section">
        <div className="section-head"><h2>League Table — Premier League</h2><Link to="/standings">Full tables →</Link></div>
        <div className="table-wrap mini">
          <StandingsPreview />
        </div>
      </section>
    </div>
  )
}

function StandingsPreview(){
  const rows = getStandings('Premier League').slice(0,5)
  return (
    <table>
      <thead><tr><th>#</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>Pts</th></tr></thead>
      <tbody>
        {rows.map(r=>(
          <tr key={r.team.id}><td>{r.pos}</td><td className="team-cell"><img src={r.team.logo} alt=""/>{r.team.name}</td><td>{r.P}</td><td>{r.W}</td><td>{r.D}</td><td>{r.L}</td><td>{r.GD}</td><td><b>{r.Pts}</b></td></tr>
        ))}
      </tbody>
    </table>
  )
}
