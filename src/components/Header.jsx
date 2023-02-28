import React from 'react'
import Head from './Head/Head'
import Navbar from './NavBar/Navbar'
import Search from './Search/Search'
import { BrowserRouter as Router, Routes} from 'react-router-dom'

const Header = () => {
  return (
    <>
    
      <Head />
      <Search />
      <Navbar />
     
    
    </>
  )
}

export default Header