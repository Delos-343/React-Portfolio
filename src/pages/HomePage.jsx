import React from 'react'
import { Navbar, Hero, About, Skills, Work, Contact } from '../components/index'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
    </div>
  )
}

export default Home
