import React from 'react'
import './Search.css'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'


const Search = () => {
  return (
    <>
    <section className="search">
      <div className="container c_flex">
        <div className="logo width">
          <img src={logo} alt="" />
        </div>

        <div className="search-box f_flex">
          <i className="fa fa-search">
            <input type="text" placeholder='Search and hit enter...' />
            <span>All Category</span>
          </i>
        </div>

        <div className="icon f_flex width">
          <i className="fa fa-user icon_circle">
            <div className="cart">
              <Link to='/cart'>
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>0</span>
              </Link>
            </div>
          </i>
        </div>
      </div>
    </section>
    </>
  )
}

export default Search