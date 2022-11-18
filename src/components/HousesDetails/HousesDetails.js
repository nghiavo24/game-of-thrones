import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './HousesDetails.css'

const HousesDetails = () => {
   const {houseName} = useParams();
   const [indepthHouseDetail, setIndepthHouseDetail] = useState([])

    useEffect (() =>{
        axios
        .get('https://agotapi.herokuapp.com/api/house')
        .then(res => setIndepthHouseDetail(res.data))
    }, [])

   let housesIndepth = indepthHouseDetail.filter((element) => 
   {return element.name === houseName})

    let renderedHouses = housesIndepth.map((item, index) =>{
        return(
            <div key="index" className='houses-detail-single-container'>
                <img src={require(`./images/${houseName}.svg`)} alt='' className="house-detail-img"></img>
                <div className="details">
                    <div className='details-sub-heading'>House {item.name}</div>
                    <div className='details-sub-heading'>Founder:</div>
                    <div className='details-sub-content'>{item.founder}</div>
                    <div className='details-sub-heading'>Location:</div>
                    <div className='details-sub-content'>{item.region}</div>
                    <div className='details-sub-heading'>City:</div>
                    <div className='details-sub-content'>{item.seat}</div>
                    <div className='details-sub-heading'>Sigil:</div>
                    <div className='details-sub-content'>{item.sigil}</div>
                    <div className='details-sub-heading'>Words:</div>
                    <div className='details-sub-content'>{item.words}</div>
                </div>
            </div>
        )
    })
    return(
        <div className='houses-detail-main-container'>{renderedHouses}</div>
    )
}

export default HousesDetails;