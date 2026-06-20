import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Footer from '../components/Footer'

const Mainhome = () => {
  return (
    <div className="font-serif">
        <Home/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Mainhome