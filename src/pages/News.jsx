import { useState, useMemo } from 'react'
import { news } from '../data'

export default function News(){
  const [cat,setCat]=useState('All')
  const [q,setQ]=useState('')
  const cats = ['All', ...new Set(news.map(n=>n.category))]
  const filtered = useMemo(()=> news.filter(n=>{
    const mC = cat==='All' || n.category===cat
    const mQ = !q || n.title.toLowerCase().includes(q.toLowerCase())
    return mC && mQ
  }),[cat,q])

  return (
    <div className="container page">
      <div className="page-head">
        <h1>Latest News</h1>
        <div className="filters">
          <input placeholder="Search news..." value={q} onChange={e=>setQ(e.target.value)}/>
          <select value={cat} onChange={e=>setCat(e.target.value)}>{cats.map(c=><option key={c}>{c}</option>)}</select>
        </div>
      </div>
      <div className="news-grid">
        {filtered.map(n=>(
          <article key={n.id} className={`news-card ${n.featured?'feat':''}`}>
            <img src={n.image} alt=""/>
            <div className="news-body">
              <span className="cat">{n.category} • {n.time}</span>
              <h3>{n.title}</h3>
              <p>{n.excerpt}</p>
              <button className="readmore">Read more →</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
