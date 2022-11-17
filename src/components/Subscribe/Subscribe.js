import React, {useState} from "react";
import mailbox from './images/mailbox.gif';
import received from './images/receiving-mail.gif'
import './Subscribe.css';

const Subscribe = ({openWindow, setOpenWindow}) => {
    

    return(
        <div className='main-container'>
            <div className='message-container'>
                <img className="mailbox-image" src={mailbox} />

            </div>

        </div>
    )
}

export default Subscribe;