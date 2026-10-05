import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { players, teams } from '../data'
import { useApp } from '../context/AppContext'

export default function Players(){
  const [q,setQ]=useState('')
  const [pos,setPos]=useState('All')
  const [club,setClub]=useState('All')
  const [sort,setSort]=useState('rating')
  const { isFavPlayer, togglePlayer }=useApp()
  const positions = ['All','GK','CB','LB','RB','CDM','CM','CAM','LW','RW','ST','CF']

  const filtered = useMemo(()=>{
    let arr = players.filter(p=>{
      const mQ = !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.club.toLowerCase().includes(q.toLowerCase())
      const mP = pos==='All' || p.position===pos
      const mC = club==='All' || p.club===club
      return mQ && mP && mC
    })
    if(sort==='rating') arr.sort((a,b)=> b.stats.rating - a.stats.rating)
    if(sort==='goals') arr.sort((a,b)=> b.stats.goals - a.stats.goals)
    if(sort==='age') arr.sort((a,b)=> a.age - b.age)
    return arr
  },[q,pos,club,sort])

  return (
    <div className="container page">
      <div className="page-head">
        <h1>Players <span>— {filtered.length} / 500</span></h1>
        <div className="filters wrap">
          <input placeholder="Search player or club..." value={q} onChange={e=>setQ(e.target.value)} />
          <select value={pos} onChange={e=>setPos(e.target.value)}>{positions.map(p=><option key={p}>{p}</option>)}</select>
          <select value={club} onChange={e=>setClub(e.target.value)}>
            <option value="All">All Clubs</option>
            {teams.map(t=><option key={t.id} value={t.name}>{t.name}</option>)}
          </select>
          <select value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="rating">Sort: Rating</option>
            <option value="goals">Sort: Goals</option>
            <option value="age">Sort: Age</option>
          </select>
        </div>
      </div>
      <div className="players-grid">
        {filtered.slice(0,120).map(p=>(
          <div key={p.id} className="player-card">
            <button className={`fav-btn ${isFavPlayer(p.id)?'active':''}`} onClick={()=>togglePlayer(p.id)}>{isFavPlayer(p.id)?'★':'☆'}</button>
            <Link to={`/players/${p.id}`}>
              <img src={p.photo} alt=""/>
              <span className="pos-badge">{p.position}</span>
              <h3>{p.name} <span className="num">#{p.number}</span></h3>
              <p className="meta">{p.club} • {p.nationality} • {p.age}y</p>
              <div className="p-stats"><span>{p.stats.goals}G</span><span>{p.stats.assists}A</span><span>{p.stats.rating}★</span><span>{p.marketValue}</span></div>
            </Link>
          </div>
        ))}
      </div>
      {filtered.length>120 && <p className="muted center">Showing 120 of {filtered.length} — use filters to narrow.</p>}
    </div>
  )
}
