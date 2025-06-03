import React from 'react'
import HomeSpline from '../components/Home/HomeSpline'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Feature from '../components/Home/Feature'
import EndSection from '../components/Home/EndSection'
const Home = () => {
  return (
    <div className="transition-colors duration-500 ease-in-out">
      <HomeSpline />
      <Hero />
      <div className='h-screen'></div>
      <About />
      <Feature />
      <EndSection />
    </div>
  )
}

export default Home
