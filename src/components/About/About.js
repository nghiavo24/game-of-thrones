import React, { useEffect, useState } from "react";
import axios from "axios";
import backgroundImg from '../../images/background-img.jpg'
import './About.css'


const About = () =>{
    const[aboutTheShow, setAboutTheShow] = useState([]) 
    const summary ="Based on the bestselling book series A Song of Ice and Fire by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the Game of Thrones, you either win or you die."
    useEffect(() => {
        const showURL='https://api.tvmaze.com/shows/82'
        axios
        .get(showURL)
        .then(res => setAboutTheShow(res.data))
    }, [])
    
    if(aboutTheShow.image) // conditional rendering

    return(
        <div 
        className='about-page-container'>
            <div className='about-content'>
                <img className='poster-img' src={aboutTheShow.image.original} alt=''></img>
                <h1>{aboutTheShow.name}</h1>
                <h4 className="about-summary">Summary: {summary}</h4>
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