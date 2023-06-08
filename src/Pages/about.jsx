import React from 'react'
import AboutImage from "../images/about_image.png"

const About = () => {
  return (
    <div className='about_section'>
            <div className="about_image">
                <img src={AboutImage} alt="" />
            </div>
            <div className="about_content">
                <div className="about_title"><h2>About Us</h2></div>
                <div className="about_desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
                </div>
                <div className="button">Read More</div>
            </div>
    </div>
  )
}

export default About