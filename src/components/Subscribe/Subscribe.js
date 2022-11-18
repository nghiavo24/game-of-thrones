import React, {useState} from "react";
import mailbox from './images/mailbox.gif';
import received from './images/receiving-mail.gif'
import './Subscribe.css';

const Subscribe = ({openWindow, setOpenWindow}) => {
    const [input, setInput] = useState('')
    const [emailSend, setEmailSend] = useState(false)

    const sendEmail =() =>{
        setEmailSend(true);
        setTimeout(() =>{ //set timer for Subscribe window to close 3 seconds after the use hit Send button
            setOpenWindow(false);
        }, 3000)
    }
    return(
        <div className="subs-container">
        {!emailSend &&
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
                    <label className='email-input-text'>Your email address</label>
                    <input
                    onChange={(input) => setInput(input.target.value)}
                    placeholder="Enter your email address"
                    label={'Input'}
                    type="email"
                    className='email-input'
                
                    />
                </div>
                <div>
                <button className="message-footer-button message-btn-send" 
                onClick={sendEmail}
                >
                Send</button>
                <button className="message-footer-button message-btn-cancel" onClick={() => {
                    setOpenWindow(false);
                }}
                 >
                Cancel</button>
                </div>
            </div>
        </div>
        }

        {emailSend && <div className='email-container-sent'>
            <img className='sent-email-img' src={received} style={{ height: '15vh'}}/>
            <h3>Email Received!</h3>
        </div>
        }
     </div>
    )
}

export default Subscribe;