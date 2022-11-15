import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import './Houses.css'

const Houses = () =>{
    const[housesDetails, setHousesDetails] = useState([]) 
    
    useEffect(() => {
        const housesURL='https://api.gameofthronesquotes.xyz/v1/houses'
        axios
        .get(housesURL)
        .then( res => 
            setHousesDetails(res.data))
    }, [])
    
console.log(housesDetails)

    let housesList = housesDetails.map((house, index) => {
        return(
            <div className="houses-container" key={index}>
                <div className="indi-house-container">
                <img src={require(`./images/${house.slug}.svg`)} className="house-img"></img>
                <h2>{house.name}</h2>
                </div>
            </div>
        )
    })

    return(
        <div>
        <div><Header /></div>
        <div className="houses-list">{housesList}</div>
        </div>
    )

}
export default Houses