import { useState, useMemo } from 'react'
import { transfers } from '../data'

export default function Transfers(){
  const [q,setQ]=useState('')
  const [status,setStatus]=useState('All')
  const filtered = useMemo(()=> transfers.filter(t=>{
    const mQ = !q || t.player.toLowerCase().includes(q.toLowerCase()) || t.from.toLowerCase().includes(q.toLowerCase()) || t.to.toLowerCase().includes(q.toLowerCase())
    const mS = status==='All' || t.status===status
    return mQ && mS
  }),[q,status])

  // repeat to have more items
  const all = [...transfers, ...transfers.map(t=>({...t,id:t.id+100, fee: t.fee}))].filter(t=>{
    const mQ = !q || t.player.toLowerCase().includes(q.toLowerCase())
    const mS = status==='All' || t.status===status
    return mQ && mS
  })

  return (
    <div className="container page">
      <div className="page-head">
        <h1>Transfer Market</h1>
        <div className="filters">
          <input placeholder="Search player or club..." value={q} onChange={e=>setQ(e.target.value)}/>
          <select value={status} onChange={e=>setStatus(e.target.value)}>
            <option>All</option><option>Completed</option><option>Rumour</option>
          </select>
        </div>
      </div>
      <div className="transfer-grid">
        {all.map(tr=>(
          <div key={tr.id} className="transfer-card">
            <img src={tr.image} alt=""/>
            <div className="tr-info">
              <b>{tr.player} <span className="pos">{tr.position}</span></b>
              <span className="clubs">{tr.from} <em>→</em> {tr.to}</span>
            </div>
            <div className="tr-meta">
              <span className={`badge ${tr.status==='Completed'?'done':'rumour'}`}>{tr.status}</span>
              <b className="fee">{tr.fee}</b>
            </div>
          </div>
        ))}
      </div>
      {filtered.length===0 && <p className="empty">No transfers.</p>}
    </div>
  )
}
