import React from "react";
import "../css/Card.css";
import "../css/Card-two.css";

const Card = ({translations, selectedLanguage, image, type}) => {

    const translation = translations[selectedLanguage];

    return(
        <>

            <div className="card">
                <div className="side-img">
                <img className="dis-pic" src={image}/>
                </div>

                <div className="main-text">
                    <h1 className="h1-text">{selectedLanguage === 'select'} {translation}</h1>
                    <h2 className="h2-text">{type}</h2>
                </div>

            </div>

        </>
    )
}

export default Card;