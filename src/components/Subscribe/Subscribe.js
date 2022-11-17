import React, {useState} from "react";
import mailbox from './images/mailbox.gif';
import received from './images/receiving-mail.gif'
import './Subscribe.css';

const Subscribe = ({openWindow, setOpenWindow}) => {
    

    return(
        <div className='main-container'>
            <div className='message-container'>
                <img className="mailbox-image" src={mailbox} style={{ height: '15vh'}}/>
                <h3 className='message-header'>Subscribe to our newsletter</h3>
                <div className='message-content'>
                <p>An email will be sent to you monthly. The email contains
                    news about the shows, its cast members and related information.
                </p>
                </div>
                <div className='email-input-label'>
                    <label className='email-input-text'></label>
                    <input
                    placeholder="Enter your email address"
                    label={'Input'}
                    type="email"
                    className='email-input'
                    />
                </div>
                <div>
                <button className="message-footer-button message-btn-send" >
                Send</button>
                <button className="message-footer-button message-btn-cancel" onClick={() => {
                    setOpenWindow(false);
                }}
                 >
                Cancel</button>
                </div>
            </div>

        </div>
    )
}

export default Subscribe;