import axios from "axios";
import { useEffect, useState } from "react";
import './Episodes.css';

const Episodes = () => {
    const[getEpisodes, setGetEpisodes] = useState([]);

    useEffect(() =>{
        axios
        .get('https://api.tvmaze.com/shows/82/episodes')
        .then(res => setGetEpisodes(res.data))
    }, [])

    let listOfEpisodes = getEpisodes.map((episode, index) => {
        return(
            <div className='main-container-episode' key={`${episode.id}_{episode.name}`}>
                <div className='episode-container'>
                    <h2>Season {episode.season} - Episode {episode.number}</h2>
                    <a href={episode.url} ><h3>{episode.name}</h3></a>
                    <h5>(Click the link above to see more details)</h5>
                    <img src={episode.image.medium} alt='' className='episode-image'></img>
                </div>
            </div>
            
        )
    })
    return(
        <div className="episode-body-container">{listOfEpisodes}</div>
    )
}

export default Episodes