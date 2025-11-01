import React from 'react'
import Hero from '../components/Hero.jsx'
import Bannerimg from '../components/Bannerimg.jsx'
import About from './About.jsx'
import Projects from '../components/projects.jsx'
import Skils from '../components/Skils.jsx'

const Home = () => {
  return (
    <div className=''>
        <Hero />
        <Bannerimg/>
        <Skils/>
        <Projects/>
        
    </div>
  )
}

export default Home