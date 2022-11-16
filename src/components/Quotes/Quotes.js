import React, { useEffect, useState } from "react";
import './Quotes.css'
import axios from "axios";

const Quotes = () => {
    const[randomQuote, setRandomQuote] = useState();

    const getRandomQuote = () => {
        useEffect = (() =>{
            axios
        .get('https://api.gameofthronesquotes.xyz/v1/random')
        .then(res => setRandomQuote(res.data))
    }, [])
    }

    console.log(randomQuote)

    const handleClick = (event) =>{
        event.preventDefault();
        getRandomQuote();
    }
    
    if(randomQuote.character);
    
    return(
        <div>
            <button onClick={handleClick}>Get Random Quote</button>
            <div className='random-quote-container'>
                <img></img>
                <h3>by {randomQuote.character}</h3>
            </div>
        </div>
    )
}

export default Quotes