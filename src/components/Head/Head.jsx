import React from 'react'
import "./Head.css"

const Head = () => {
  return (
    <>
    <section className="head">
        <div className="container d_flex">
            <div className="left row">
                <i className="fa fa-phone"></i>
                <label>08089566069</label>
                <i className="fa fa-envelope"></i>
                <label>somto565@gmail.com</label>
             </div>
             <div className="right row  Rtext">
                <label>Theme FAQ's</label>
                <label>Need Help</label>
                <span>🏧</span>
                <label htmlFor="">EN</label>
                <span>💰</span>
                <label htmlFor="">USD</label>
             </div>
        </div>
    </section>
    </>
  )
}

export default Head