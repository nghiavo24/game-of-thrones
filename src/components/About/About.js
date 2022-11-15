import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";

const About = () =>{
    const[aboutTheShow, setAboutTheShow] = useState([]) 
    
    useEffect(() => {
        const showURL='https://api.tvmaze.com/shows/82'
        axios
        .get(showURL)
        .then(res => setAboutTheShow(res.data))
    }, [])
    
    console.log(aboutTheShow)

    if(aboutTheShow.image) // conditional rendering

    return(
        <div>
            <div>
                <img style={{ width: '60vw', height: '60vh'}} src={aboutTheShow.image.original}></img>
                <h1>{aboutTheShow.name}</h1>
                <h4>Summary: {aboutTheShow.summary}</h4>
                <h4>Premiered: {aboutTheShow.premiered}</h4>
                <h4>Ended: {aboutTheShow.ended}</h4>
                <h4>Official Site: {aboutTheShow.officialSite}</h4>
                <h4>Genres: {aboutTheShow.genres[0]}, {aboutTheShow.genres[1]}, {aboutTheShow.genres[2]}</h4>
                <h4>Language: {aboutTheShow.language}</h4>
                <h4>Rating: {aboutTheShow.rating.average}/10</h4>
            </div>
        </div>
    )
}
export default About