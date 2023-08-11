import React from "react";
import "./Card.css";

const Card = (props) => {
    return(
        <>

            <div className="card">
                <div className="side-img">
                <img className="dis-pic" src={props.imgsrc}/>
                </div>

                <div className="main-text">
                    <h1 className="h1-text">{props.rusn}</h1>
                    <h2 className="h2-text">{props.engn}</h2>
                </div>

            </div>

        </>
    )
}

export default Card;