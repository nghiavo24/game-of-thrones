import React, {useState} from "react";
import './CommentBox.css'

const CommentBox = () => {
const [comment, setComment] = useState("");
const [listOfComments, setListOfComments] = useState([]);

const handleChange = (e) => {
    setComment(e.target.value);
};

const handleClick = () => {
    setListOfComments((listOfComments) => [...listOfComments, comment]);
    setComment("")
}


    return(
        <div className="main-container">
            {listOfComments.map((text, index)=> (
                <div key={index} className="comment-text" >{text}</div>
            ))}
            <div className="comment-flexbox">
            <h2>Comment</h2>
            <textarea 
            value={comment}
            onChange={handleChange}
            className="input-box"
            placeholder="Enter your comment here ..."/><br/>
            <button onClick={handleClick} className="submit-btn">Submit</button>
            </div>
        </div>
    )
}

export default CommentBox