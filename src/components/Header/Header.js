import React from "react";
import './Header.css'
import { Link } from 'react-router-dom'

const Header = ({getHousesDetails}) => {
    return(
        <div className='main-header'>
            <div className="first-header">
            Game of Thrones
            </div>
            <div className='nav-bar'>
                <div onClick={getHousesDetails} className="nav-btn">Houses</div>
                <div className="nav-btn">Characters</div>
                <div className="nav-btn">Episodes</div>
                <div className="nav-btn">About</div>
                <div className="nav-btn">Search</div>
            </div>
        </div>
    )
}

export default Header