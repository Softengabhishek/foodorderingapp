import React from "react";
import Cards from '../components/cards.jsx'

const Article = () => {
    return (
        <div className="articles_section">
            <div className="latest_article"><h2>Latest Articles</h2></div>
            <Cards />

        </div>
    )
}

export default Article
