import React, { useEffect, useState } from "react";
import './Quotes.css'
import axios from "axios";

const Quotes = () => {
    const[randomQuote, setRandomQuote] = useState();

    const getRandomQuote = () => {
    axios
    .get('https://api.gameofthronesquotes.xyz/v1/random')
    .then(res => setRandomQuote(res.data))
    }

    useEffect((onClick) =>{
        getRandomQuote()
    }, [])
    

    const handleClick = (event) =>{
        event.preventDefault();
        getRandomQuote();
    }
    console.log(randomQuote)
    if(randomQuote)
    return(
        <div>
            <button onClick={handleClick}>Get Random Quote</button>
            <div className='random-quote-container'>
                <img alt=''></img>
                <h3>'{randomQuote.sentence}'</h3>
                <h4>by {randomQuote.character.name}</h4>
                
            </div>
        </div>
    )
}

export default Quotes