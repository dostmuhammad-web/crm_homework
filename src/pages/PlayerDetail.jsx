import { useParams, Link } from 'react-router-dom'
import { players, teams } from '../data'
import { useApp } from '../context/AppContext'

export default function PlayerDetail(){
  const { id }=useParams()
  const p = players.find(x=> String(x.id)===id)
  const { isFavPlayer, togglePlayer }=useApp()
  if(!p) return <div className="container page"><p>Player not found</p><Link to="/players">Back</Link></div>
  const team = teams.find(t=> t.id===p.teamId)
  return (
    <div className="container page">
      <Link to="/players" className="back">← All players</Link>
      <div className="player-hero">
        <img src={p.photo} alt="" className="ph-photo"/>
        <div className="ph-info">
          <h1>{p.name} <span className="pos-badge big">{p.position}</span> <button className={`fav-btn inline ${isFavPlayer(p.id)?'active':''}`} onClick={()=>togglePlayer(p.id)}>{isFavPlayer(p.id)?'★':'☆'} Favorite</button></h1>
          <p>{p.club} • #{p.number} • {p.nationality} • {p.age} years • {p.foot} foot</p>
          <p className="muted">Market value: <b>{p.marketValue}</b> • Joined {team?.founded}</p>
          {team && <Link to={`/teams/${team.id}`} className="team-link"><img src={team.logo} alt=""/>{team.name}</Link>}
        </div>
        <div className="ph-stats">
          <div><b>{p.stats.goals}</b><span>Goals</span></div>
          <div><b>{p.stats.assists}</b><span>Assists</span></div>
          <div><b>{p.stats.appearances}</b><span>Apps</span></div>
          <div><b>{p.stats.rating}</b><span>Rating</span></div>
        </div>
      </div>

      <div className="detail-grid">
        <div className="card">
          <h3>Statistics 2025/26</h3>
          <div className="stat-bars">
            <div className="stat-row"><span>Goals</span><div className="bar"><i style={{width: Math.min(100, p.stats.goals*4)+'%'}}></i></div><b>{p.stats.goals}</b></div>
            <div className="stat-row"><span>Assists</span><div className="bar"><i style={{width: Math.min(100, p.stats.assists*5)+'%'}}></i></div><b>{p.stats.assists}</b></div>
            <div className="stat-row"><span>Minutes</span><div className="bar"><i style={{width: Math.min(100, p.stats.minutes/30)+'%'}}></i></div><b>{p.stats.minutes}</b></div>
            <div className="stat-row"><span>Rating</span><div className="bar"><i style={{width: p.stats.rating*10+'%'}}></i></div><b>{p.stats.rating}</b></div>
          </div>
        </div>
        <div className="card">
          <h3>Info</h3>
          <ul className="info-list">
            <li><span>Full name</span><b>{p.name}</b></li>
            <li><span>Age</span><b>{p.age}</b></li>
            <li><span>Nationality</span><b>{p.nationality}</b></li>
            <li><span>Position</span><b>{p.position}</b></li>
            <li><span>Club</span><b>{p.club}</b></li>
            <li><span>Number</span><b>#{p.number}</b></li>
            <li><span>Foot</span><b>{p.foot}</b></li>
            <li><span>Yellow / Red</span><b>{p.stats.yellow} / {p.stats.red}</b></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
