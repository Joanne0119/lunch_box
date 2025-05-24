import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { setUser, logout as logoutAction} from "./redux/userSlice";

//css
import './App.css'
//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catlog from './pages/Catlog'
import Make from './pages/Make'
import Profile from './pages/Profile'
import Login from './pages/Login'
import DarkmodeBtn from './components/DarkmodeBtn'
import CatlogDetail from './pages/CatlogDetail'
import MakeModel from './pages/MakeModel'

function App() {
  // login and logout
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ uid: user.uid, email: user.email }));
        if (window.location.pathname === '/login') {
          
          // navigate('/'); 
        }
      } else {
        dispatch(logoutAction());
        if (window.location.pathname !== '/login') {
          
          // navigate('/login'); 
        }
      }
      console.log('onAuthStateChanged user:', user); 
    });
    return () => unsubscribe();
  }, [dispatch]);

  // theme
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'caramellatte';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'caramellatte' ? 'coffee' : 'caramellatte'));
  };

  return (
    <BrowserRouter>
      <Navbar theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make" element={<Make />} />
        <Route path="/makeresult" element={<MakeModel />} />
        <Route path="/catlog" element={<Catlog />} />
        <Route path="/catlog/:ingredientType" element={<CatlogDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login theme={theme} />} />
      </Routes>
      <DarkmodeBtn toggleTheme={toggleTheme} theme={theme} />
      <Footer theme={theme} />
    </BrowserRouter>
  )
}

export default App
