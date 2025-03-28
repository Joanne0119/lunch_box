import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Catlog from './pages/Catlog'
import Make from './pages/Make'
import Profile from './pages/Profile'
import Login from './pages/Login'
import DarkmodeBtn from './components/DarkmodeBtn'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/make" element={<Make />} />
          <Route path="/catlog" element={<Catlog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      <DarkmodeBtn />
      <Footer />
    </BrowserRouter>
  )
}

export default App
