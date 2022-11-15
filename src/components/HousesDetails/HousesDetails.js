import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './HousesDetails.css'


const HousesDetails = () => {
   const {houseName} = useParams();
   const [indepthHouseDetail, setIndepthHouseDetail] = useState([])
    // let theHouseName = houseName.charAt(0).toUpperCase(0) + houseName.slice(1)

    useEffect (() =>{
        axios
        .get('https://agotapi.herokuapp.com/api/house')
        .then(res => setIndepthHouseDetail(res.data))
    }, [])

   let housesIndepth = indepthHouseDetail.filter((element) => 
   {return element.name === houseName})

    let renderedHouses = housesIndepth.map((item, index) =>{
        return(
            <div key="index">
                <img src={require(`./images/${houseName}.svg`)} className="house-detail-img"></img>
                <div>House {item.name}</div>
                <div>Founder: {item.founder}</div>
                <div>Location: {item.region}</div>
                <div>City: {item.seat}</div>
                <div>Sigil: {item.sigil}</div>
                <div>Words: {item.words}</div>
            </div>
        )
    })

    return(
        <div>
            {renderedHouses}
        </div>
    )
}

export default HousesDetails;