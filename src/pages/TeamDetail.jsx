import { useParams, Link } from 'react-router-dom'
import { teams, players } from '../data'
import { useApp } from '../context/AppContext'

export default function TeamDetail(){
  const { id }=useParams()
  const team = teams.find(t=> String(t.id)===id)
  const { isFavTeam, toggleTeam }=useApp()
  if(!team) return <div className="container page"><p>Team not found</p><Link to="/teams">Back</Link></div>
  const squad = players.filter(p=> p.teamId===team.id)
  return (
    <div className="container page">
      <Link to="/teams" className="back">← All teams</Link>
      <div className="team-hero">
        <img src={team.logo} alt=""/>
        <div>
          <h1>{team.name} <button className={`fav-btn inline ${isFavTeam(team.id)?'active':''}`} onClick={()=>toggleTeam(team.id)}>{isFavTeam(team.id)?'★ Favorited':'☆ Add favorite'}</button></h1>
          <p>{team.country} • {team.league} • {team.stadium}</p>
          <p className="muted">Founded {team.founded} • Squad {squad.length} players</p>
        </div>
      </div>
      <div className="info-grid">
        <div className="info-box"><b>Stadium</b><span>{team.stadium}</span></div>
        <div className="info-box"><b>League</b><span>{team.league}</span></div>
        <div className="info-box"><b>Country</b><span>{team.country}</span></div>
        <div className="info-box"><b>Founded</b><span>{team.founded}</span></div>
      </div>
      <h2>Squad</h2>
      <div className="squad-grid">
        {squad.map(p=>(
          <Link key={p.id} to={`/players/${p.id}`} className="squad-card">
            <img src={p.photo} alt=""/>
            <b>{p.name} <span className="num">#{p.number}</span></b>
            <span>{p.position} • {p.age}y • {p.nationality}</span>
            <span className="stats-mini">{p.stats.goals}G {p.stats.assists}A • {p.stats.rating}★</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
