import React, {useState} from "react";

const CommentBox = () => {
const [comment, setComment] = useState("");

const handleChange = (e) => {
    setComment(e.target.value);
};

    return(
        <div className="main-container">
            <div className="comment-container" >{comment}</div>
            <div className="comment-flexbox">
            <h3 >Comment</h3>
            <textarea 
            value={comment}
            onChange={handleChange}
            className="input-box"
            />
            <button className="comment-button">Submit</button>
            </div>
        </div>
    )
}

export default CommentBox