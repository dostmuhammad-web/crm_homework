import { Link } from 'react-router-dom'
import { teams, players } from '../data'
import { useApp } from '../context/AppContext'

export default function Favorites(){
  const { favorites, toggleTeam, togglePlayer } = useApp()
  const favTeams = teams.filter(t=> favorites.teams.includes(t.id))
  const favPlayers = players.filter(p=> favorites.players.includes(p.id))
  return (
    <div className="container page">
      <h1>Favorites <span>★</span></h1>
      <p className="muted">Sevimli jamoa va futbolchilaringiz — localStorage da saqlanadi.</p>

      <h2>Teams — {favTeams.length}</h2>
      {favTeams.length===0? <p className="empty">Hali jamoa tanlanmagan. <Link to="/teams">Teams →</Link></p> : (
        <div className="teams-grid">
          {favTeams.map(t=>(
            <div key={t.id} className="team-card">
              <button className="fav-btn active" onClick={()=>toggleTeam(t.id)}>★</button>
              <Link to={`/teams/${t.id}`}><img src={t.logo} alt=""/><h3>{t.name}</h3><p className="meta">{t.league}</p></Link>
            </div>
          ))}
        </div>
      )}

      <h2 style={{marginTop:32}}>Players — {favPlayers.length}</h2>
      {favPlayers.length===0? <p className="empty">Hali futbolchi tanlanmagan. <Link to="/players">Players →</Link></p> : (
        <div className="players-grid">
          {favPlayers.map(p=>(
            <div key={p.id} className="player-card">
              <button className="fav-btn active" onClick={()=>togglePlayer(p.id)}>★</button>
              <Link to={`/players/${p.id}`}><img src={p.photo} alt=""/><h3>{p.name}</h3><p className="meta">{p.club} • {p.position}</p></Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
