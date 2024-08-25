import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home></Home>
    <div className="font-bold">App</div>
    </>
  )
}

export default App