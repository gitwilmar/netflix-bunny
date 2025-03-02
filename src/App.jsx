import React from 'react'
import Home from './pages/Home/Home'
import Player from './pages/Player/Player'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login/login'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/play" element={<Player/>}/>
      </Routes>
      
    </div>
  )
}

export default App