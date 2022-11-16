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
    
    console.log(randomQuote)

    const handleClick = (event) =>{
        event.preventDefault();
        getRandomQuote();
    }

    return(
        <div>
            <button onClick={handleClick}>Get Random Quote</button>
            <div className='random-quote-container'>

            </div>
        </div>
    )
}

export default Quotes