import React, { Fragment } from 'react'
import './App.css'
import Navbarr from './components/header/Navbar'
import Home from './components/header/Home'
import About from './components/header/About'
import { Route, Routes } from 'react-router-dom'
import Folder from './components/header/Folder'

function App() {
  
  return (
   <Fragment>
    {/* <Folder /> */}
    <Routes>
    <Route path="" element={<Navbarr />} />
    < Route path="/home" element={<Home />} />
    < Route path="/about" element={<About />} />
   </Routes>
   </Fragment>
  )
}

export default App