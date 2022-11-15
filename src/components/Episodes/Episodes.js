import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import './Episodes.css'



const Episodes = () => {
    const[getEpisodes, setGetEpisodes] = useState([]);

    useEffect(() =>{
        axios
        .get('https://api.tvmaze.com/shows/82/episodes')
        .then(res => setGetEpisodes(res.data))
    }, [])

    console.log(getEpisodes)

    let listOfEpisodes = getEpisodes.map((episode, index) => {
        return(
            <div className='main-container-episode' key={`${episode.id}_{episode.name}`}>
                <div className='episode-container'>
                    <h2>Season {episode.season}</h2>
                    <h3>{episode.name}</h3>
                    <h4>Airdate: {episode.airdate}</h4>
                    <img src={episode.image.medium} className='episode-image'></img>
                </div>
            </div>
            
        )
    })
    return(
        <div>
            <Header />
            {listOfEpisodes}
        </div>
    )
}

export default Episodes