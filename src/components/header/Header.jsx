import React from 'react'
import './header.css'
import Medicine from '../../assets/images/Medicine.svg'
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  window.addEventListener("scroll", function() {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })
  window.scrollTo({ top: document.body.scrollHeight, behaviour: "smooth"})
  
  return (
    <header className='header'>
    <div className="scontainer flex">
      <div className="logo">
        <img src={Medicine} alt="Medicine" />
      </div>
      <div className="search flex">
        < AiOutlineSearch className='searchIcon'/>
        <input type="text" placeholder='Search' />
      </div>
    </div>
  </header>
  )
}

export default Header