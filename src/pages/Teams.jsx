import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { teams } from '../data'
import { useApp } from '../context/AppContext'

export default function Teams(){
  const [searchParams]=useSearchParams()
  const initialQ = searchParams.get('search')||''
  const [q,setQ]=useState(initialQ)
  const [league,setLeague]=useState('All')
  const [country,setCountry]=useState('All')
  const { isFavTeam, toggleTeam } = useApp()

  const leagues = ['All', ...new Set(teams.map(t=>t.league))]
  const countries = ['All', ...new Set(teams.map(t=>t.country))]

  const filtered = useMemo(()=> teams.filter(t=>{
    const mQ = !q || t.name.toLowerCase().includes(q.toLowerCase()) || t.stadium.toLowerCase().includes(q.toLowerCase())
    const mL = league==='All' || t.league===league
    const mC = country==='All' || t.country===country
    return mQ && mL && mC
  }),[q,league,country])

  return (
    <div className="container page">
      <div className="page-head">
        <h1>Teams <span>— {filtered.length} / 100</span></h1>
        <div className="filters">
          <input placeholder="Search team or stadium..." value={q} onChange={e=>setQ(e.target.value)} />
          <select value={league} onChange={e=>setLeague(e.target.value)}>{leagues.map(l=><option key={l}>{l}</option>)}</select>
          <select value={country} onChange={e=>setCountry(e.target.value)}>{countries.map(c=><option key={c}>{c}</option>)}</select>
        </div>
      </div>
      <div className="teams-grid">
        {filtered.map(t=>(
          <div key={t.id} className="team-card">
            <button className={`fav-btn ${isFavTeam(t.id)?'active':''}`} onClick={()=>toggleTeam(t.id)} title="Favorite">{isFavTeam(t.id)?'★':'☆'}</button>
            <Link to={`/teams/${t.id}`}>
              <img src={t.logo} alt="" className="team-logo"/>
              <h3>{t.name}</h3>
              <p className="meta">{t.country} • {t.league}</p>
              <p className="muted">{t.stadium} • {t.founded}</p>
            </Link>
          </div>
        ))}
      </div>
      {filtered.length===0 && <p className="empty">Hech narsa topilmadi.</p>}
    </div>
  )
}
