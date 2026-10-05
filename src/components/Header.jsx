import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Header(){
  const [open,setOpen]=useState(false)
  const [q,setQ]=useState('')
  const nav = useNavigate()
  const onSearch = e=>{
    e.preventDefault()
    if(!q.trim()) return
    // simple: go to teams with query param? we handle via state
    nav(`/teams?search=${encodeURIComponent(q)}`)
    setQ('')
    setOpen(false)
  }
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">⚽</span>
          <span>FOOTBALL<span className="logo-accent">HUB</span></span>
          <span className="logo-badge">PRO</span>
        </Link>

        <nav className={`nav ${open?'open':''}`}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/matches">Matches</NavLink>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/players">Players</NavLink>
          <NavLink to="/standings">Standings</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/transfers">Transfers</NavLink>
          <NavLink to="/favorites" className="fav-link">★ Favorites</NavLink>
        </nav>

        <div className="header-actions">
          <form onSubmit={onSearch} className="search-form">
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search teams, players..." />
            <button type="submit">🔍</button>
          </form>
          <button className="burger" onClick={()=>setOpen(!open)} aria-label="menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      {open && <div className="mobile-overlay" onClick={()=>setOpen(false)}></div>}
    </header>
  )
}
