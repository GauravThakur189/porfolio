import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home />
    <About/>
    <SocialLinks/>
    <div className="font-bold">App</div>
    </>
  )
}

export default App