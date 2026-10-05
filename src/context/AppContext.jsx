import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export function AppProvider({ children }){
  const [favorites, setFavorites] = useState(()=>{
    try{ return JSON.parse(localStorage.getItem('fav')||'{"teams":[],"players":[]}') }catch{ return {teams:[],players:[]} }
  })
  useEffect(()=> localStorage.setItem('fav', JSON.stringify(favorites)), [favorites])

  const toggleTeam = (id)=>{
    setFavorites(prev=> {
      const exists = prev.teams.includes(id)
      return {...prev, teams: exists? prev.teams.filter(x=>x!==id): [...prev.teams, id]}
    })
  }
  const togglePlayer = (id)=>{
    setFavorites(prev=> {
      const exists = prev.players.includes(id)
      return {...prev, players: exists? prev.players.filter(x=>x!==id): [...prev.players, id]}
    })
  }
  const isFavTeam = id=> favorites.teams.includes(id)
  const isFavPlayer = id=> favorites.players.includes(id)

  return <AppContext.Provider value={{favorites, toggleTeam, togglePlayer, isFavTeam, isFavPlayer}}>{children}</AppContext.Provider>
}
export const useApp = ()=> useContext(AppContext)
