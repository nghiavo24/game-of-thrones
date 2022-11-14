import React from "react";
import './Header.css'
import { Link } from 'react-router-dom'

const Header = ({getHousesDetails}) => {
    return(
        <div className='main-header'>
            <Link to='/'><div className="first-header">Game of Thrones</div></Link>
            <div className='nav-bar'>
                <Link to='/houses' ><div onClick={getHousesDetails} className="nav-btn">Houses</div></Link>
                <Link to='/characters' ><div className="nav-btn">Characters</div></Link>
                <div className="nav-btn">Episodes</div>
                <div className="nav-btn">About</div>
                <div className="nav-btn">Search</div>
            </div>
        </div>
    )
}

export default Header