import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../Header/Header";
import axios from "axios";
import './Houses.css'

const Houses = () =>{
    const[housesDetails, setHousesDetails] = useState([]) 
    
    useEffect(() => {
        const housesURL='https://agotapi.herokuapp.com/api/house'
        axios
        .get(housesURL)
        .then( res => 
            setHousesDetails(res.data))
    }, [])
    
    let housesList = housesDetails.map((house, index) => {
        return(
            <div className="houses-container" key={index}>
                <Link to={'/houses/' + house.name} >
                <div className="indi-house-container">
                <img src={require(`./images/${house.name}.svg`)} className="house-img"></img>
                <h2>House {house.name}</h2>
                </div>
                </Link>
            </div>
        )
    })

    return(
        <div>
        <div className="houses-list">{housesList}</div>
        </div>
    )

}
export default Houses