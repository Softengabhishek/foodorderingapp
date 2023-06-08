import React from 'react'
import logo from "../images/logo_big.png"

const Footer = () => {
  return (
    <footer>
        <div className="footer_logo"><img src={logo} alt="" /></div>
        <div className="col1">
            <h2 className="contact">Contact Us</h2>
            <ul>
                <li>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</li>
                <li>example2020@gmail.com</li>
                <li>(904) 443-0343</li>
            </ul>
        </div>
        <div className="col2">
            <h2 className="more">More</h2>
            <ul>
                <li>About us</li>
                <li>Products</li>
                <li>Career</li>
                <li>Blogs</li>

            </ul>
        </div>
        <div className="col3">
            <h2 className="sociallinks">Social Links</h2>
            <h5>&#169; 2022 Food Truck Example</h5>
        </div>
    </footer>
  )
}

export default Footer