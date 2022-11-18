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
        <div className='quote-container'>
            <div>
                <button className='random-quote-btn' onClick={handleClick}>Get Random Quote</button>
            </div>
            <div className='random-quote-container'>
                <img className='quote-img' src={require(`./images/${randomQuote.character.slug}.webp`)} alt=''></img>
                <div className='quote-content'>'{randomQuote.sentence}'</div>
                <div className='quote-author-house'>{randomQuote.character.house.name}</div>
                <div className='quote-author'>{randomQuote.character.name}</div>
            </div>
        </div>
    )
}

export default Quotes