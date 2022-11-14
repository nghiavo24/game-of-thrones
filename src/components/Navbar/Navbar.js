import React from "react";
import './Navbar.css'

const Navbar = () => {
    return(
        <div className='nav-bar'>
            <div className="nav-btn">Houses</div>
            <div className="nav-btn">Characters</div>
            <div className="nav-btn">Episodes</div>
            <div className="nav-btn">About</div>
            <div className="nav-btn">Search</div>
        </div>
    )
}

export default Navbar