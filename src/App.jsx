import React, { useState, useEffect} from 'react'
import './App.css'
import HomeSpline from './components/Home/HomeSpline'
import Hero from './components/Home/Hero'
import Navbar from './components/Navbar'
import About from './components/Home/About'
import Footer from './components/Footer'
import Feature from './components/Home/Feature'

function App() {
  const [lastScroll, setLastScroll] = useState(0);
  const scrollStep = 500; // 每次滾動的距離

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 如果滾動超過上次紀錄的點 + 300px，則再滾動 500px
      if (scrollY > lastScroll + 200) {
        window.scrollTo({ top: scrollY + scrollStep, behavior: "smooth" });
        setLastScroll(scrollY + scrollStep);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div>
      <Navbar />
      <HomeSpline />
      <Hero />
      <About />
      <Feature />
      <Footer />
    </div>
  )
}

export default App
