import axios from "axios";
import React, { useEffect, useState } from "react";
import './Characters.css'

const Characters = () => {
    const [charactersDetails, setCharactersDetails]= useState([])
    
    useEffect(() => {
        const characterURL='https://api.tvmaze.com/shows/82/cast'
        axios
        .get(characterURL)
        .then(res => setCharactersDetails(res.data))
    }, [])
    
    let charList = charactersDetails.map((char, index) => {
        return(
            <div className='char-main-container' key={index}>
                <div className='char-container'>
                <img className='char-img' src={char.character.image.medium} alt='' ></img>
                <a href={char.character.url}><h3>{char.character.name}</h3></a>
                </div>
            </div>
        )
    })
    return(
        <div className='char-real-container'>{charList}</div>
    )
}

export default Characters