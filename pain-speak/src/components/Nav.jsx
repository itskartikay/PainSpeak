import React from "react";
import logo from "../assets/Logo.png"
import "../css/Nav.css"
import "../css/Nav-two.css"

const Nav = () => {
    return(
        <>
            <div className="Navbar">
                <img className="logo" src={logo} alt="Logo" />
            </div>
        </>

    )
}

export default Nav;