import React from 'react'
import Art1 from "../images/art1.png"
import Art2 from "../images/art2.png"
import Art3 from "../images/art3.png"
import Art4 from "../images/art4.png"
import Art5 from "../images/art5.png"
import Art6 from "../images/art6.png"

const Articles = [
    {
        id: 1,
        image: Art1,
        title: "Grilled  Tomatoes at Home",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
        id: 2,
        image: Art2,
        title: "Snacks for Travel",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
        id: 3,
        image: Art3,
        title: "Post-workout Recipes",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
        id: 4,
        image: Art4,
        title: "How To Grill Corn",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
        id: 5,
        image: Art5,
        title: "Crunchwrap Supreme",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
        id: 6,
        image: Art6,
        title: "Broccoli Cheese Soup",
        desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },

]
const Cards = () => {
    return (
        <div className='cards_row'>
            {Articles.map((data) => {
                return <div className="cards" key={data.id}>
                    <div className="article_image"><img src={data.image} alt="" /></div>
                    <div className="article_title">{data.title}</div>
                    <div className="article_desc"><p>{data.desc}</p></div>
                    <div className="button">Read More</div>
                </div>
            })}
        </div>
    )
}

export default Cards


