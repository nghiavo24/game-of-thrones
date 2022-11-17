import React, {useState} from "react";

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
                <div key={index} className="comment-container" >{text}</div>
            ))}
            <div className="comment-flexbox">
            <h3>Comment</h3>
            <textarea 
            value={comment}
            onChange={handleChange}
            className="input-box"
            placeholder="Enter your comment here ..."/>
            <button onClick={handleClick} className="comment-button">Submit</button>
            </div>
        </div>
    )
}

export default CommentBox