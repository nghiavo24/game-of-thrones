import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

const Characters = () => {
    const [charactersDetails, setCharactersDetails]= useState([])
    
    useEffect(() => {
        const characterURL='https://api.gameofthronesquotes.xyz/v1/characters'
        axios
        .get(characterURL)
        .then( res => 
            setCharactersDetails(res.data))
    }, [])
    
    let charList = charactersDetails.map((char, index) => {
        return(
            <div key={index}>
                <h2>{char.name}</h2>
            </div>
        )
    })
    return(
        <div>
        <Header />
            <div>{charList}</div>
        </div>
    )
}

export default Characters