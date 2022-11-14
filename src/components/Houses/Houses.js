import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";

const Houses = () =>{
    const[housesDetails, setHousesDetails] = useState([]) 
    
    useEffect(() => {
        const housesURL='https://api.gameofthronesquotes.xyz/v1/houses'
        axios
        .get(housesURL)
        .then( res => 
            setHousesDetails(res.data))
    }, [])
    
    let housesList = housesDetails.map((house) => {
        return(
            <div>
                <h2>{house.name}</h2>
            </div>
        )
    })

    return(
        <div>
        <Header />
        <div>{housesList}</div>
        </div>
    )

}
export default Houses