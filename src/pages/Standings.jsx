import { useState } from 'react'
import { getStandings, allLeagues } from '../data'
import { Link } from 'react-router-dom'

export default function Standings(){
  const [league,setLeague]=useState(allLeagues[0])
  const rows = getStandings(league)
  return (
    <div className="container page">
      <div className="page-head">
        <h1>League Table</h1>
        <select value={league} onChange={e=>setLeague(e.target.value)} className="league-select">
          {allLeagues.map(l=> <option key={l} value={l}>{l}</option>)}
        </select>
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Pos</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>Pts</th></tr></thead>
          <tbody>
            {rows.map(r=>(
              <tr key={r.team.id} className={r.pos<=4?'cl': r.pos>=rows.length-2?'rel':''}>
                <td>{r.pos}</td>
                <td className="team-cell"><Link to={`/teams/${r.team.id}`}><img src={r.team.logo} alt=""/>{r.team.name}</Link></td>
                <td>{r.P}</td><td>{r.W}</td><td>{r.D}</td><td>{r.L}</td><td>{r.GF}</td><td>{r.GA}</td><td>{r.GD>0?`+${r.GD}`:r.GD}</td><td><b>{r.Pts}</b></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="legend"><span className="cl-dot"></span> Champions League <span className="rel-dot"></span> Relegation</div>
    </div>
  )
}
