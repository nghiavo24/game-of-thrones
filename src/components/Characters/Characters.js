import axios from "axios";
import React, { useEffect, useState } from "react";
import './Characters.css'

const Characters = () => {
    const [charactersDetails, setCharactersDetails]= useState([])
    
    useEffect(() => {
        const characterURL='https://api.tvmaze.com/shows/82/cast'
        axios
        .get(characterURL)
        .then( res => setCharactersDetails(res.data))
    }, [])
    
    console.log (charactersDetails)
    let charList = charactersDetails.map((char, index) => {
        return(
            <div className='char-main-container' key={index}>
                <div className='char-container'>
                <img src={char.character.image.medium} ></img>
                <a href={char.character.url}><h2>{char.character.name}</h2></a>
                </div>
            </div>
        )
    })
    return(
        <div>
            <div>{charList}</div>
        </div>
    )
}

export default Characters