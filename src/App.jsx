import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Matches from './pages/Matches'
import Teams from './pages/Teams'
import TeamDetail from './pages/TeamDetail'
import Players from './pages/Players'
import PlayerDetail from './pages/PlayerDetail'
import Standings from './pages/Standings'
import News from './pages/News'
import Transfers from './pages/Transfers'
import Favorites from './pages/Favorites'

export default function App(){
  return (
    <AppProvider>
      <BrowserRouter>
        <Header/>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/matches" element={<Matches/>}/>
            <Route path="/teams" element={<Teams/>}/>
            <Route path="/teams/:id" element={<TeamDetail/>}/>
            <Route path="/players" element={<Players/>}/>
            <Route path="/players/:id" element={<PlayerDetail/>}/>
            <Route path="/standings" element={<Standings/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/transfers" element={<Transfers/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="*" element={<div className="container page"><h1>404 — Not found</h1></div>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </AppProvider>
  )
}
