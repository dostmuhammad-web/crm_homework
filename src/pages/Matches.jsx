import { useState, useMemo } from 'react'
import { matches } from '../data'

export default function Matches(){
  const [filter,setFilter]=useState('all')
  const [q,setQ]=useState('')
  const filtered = useMemo(()=> matches.filter(m=>{
    const s = filter==='all' || m.status===filter
    const mq = !q || m.homeTeam.name.toLowerCase().includes(q.toLowerCase()) || m.awayTeam.name.toLowerCase().includes(q.toLowerCase())
    return s && mq
  }),[filter,q])

  const live = filtered.filter(m=>m.status==='live')
  const scheduled = filtered.filter(m=>m.status==='scheduled')
  const finished = filtered.filter(m=>m.status==='finished')

  const group = (arr,title)=> arr.length? (
    <>
      <h3 className="match-group">{title} — {arr.length}</h3>
      <div className="matches-grid">
        {arr.map(m=>(
          <div key={m.id} className={`match-card ${m.status}`}>
            <div className="match-league">{m.league} • {m.date} {m.time} {m.status==='live'&&<span className="live-tag">LIVE {m.minute}</span>}</div>
            <div className="match-teams large">
              <div className="mt"><img src={m.homeTeam.logo} alt=""/><span>{m.homeTeam.name}</span>{m.scoreHome!==null && <b>{m.scoreHome}</b>}</div>
              <div className="mt"><img src={m.awayTeam.logo} alt=""/><span>{m.awayTeam.name}</span>{m.scoreAway!==null && <b>{m.scoreAway}</b>}</div>
            </div>
            <div className="match-footer">
              <span>{m.stadium}</span>
              <span className={`status ${m.status}`}>{m.status}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  ): null

  return (
    <div className="container page">
      <div className="page-head">
        <h1>Matches</h1>
        <div className="filters">
          <input placeholder="Search team..." value={q} onChange={e=>setQ(e.target.value)}/>
          <select value={filter} onChange={e=>setFilter(e.target.value)}>
            <option value="all">All status</option>
            <option value="live">Live</option>
            <option value="scheduled">Upcoming</option>
            <option value="finished">Finished</option>
          </select>
        </div>
      </div>
      {filtered.length===0? <p className="empty">No matches.</p> :(
        <>
          {group(live,'🔴 Live')}
          {group(scheduled,'Upcoming')}
          {group(finished,'Finished')}
        </>
      )}
    </div>
  )
}
