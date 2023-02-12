import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className='header'>
      <div className="container d_flex">
        <div className="categories d_flex">
          <span className="fa-solid fa-border-all"></span>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
        </div>
        <div className="navlink">
          <ul className="nav">
            <li>
              <link to="/">home</link>
            </li>
            <li>
              <link to="/pages">pages</link>
            </li>
            <li>
              <link to="/user">user account</link>
            </li>
            <li>
              <link to="/vendor">vendor account</link>
            </li>
            <li>
              <link to="/track">track my order</link>
            </li>
            <li>
              <link to="/contact">contact</link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    </>
  )
}

export default Navbar