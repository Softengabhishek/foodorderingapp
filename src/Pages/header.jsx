import React from 'react'
import logo from "../images/logo_small.png"
import redvector from "../images/red_vector.png"

const Header = () => {
  return (
    <div className='header'>
        <div className='left_header'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="header_title">
                <h2>Discover the <span className='header_title_mid'>Best</span> Food and Drinks</h2>
                </div>
                <div className="header_desc">
                <p>Naturally made Healthcare Products for the better care & support of your body</p>
                </div>
                <div className="button">Explore Now!</div>
        </div>
        <div className='right_header'>
                <img src={redvector} alt="pizza" />
        </div>
    </div>
  )
}

export default Header