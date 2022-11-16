import React from "react";

const Comment = () => {
    const deleteComment = (e) =>{
        e.preventDefault();
        alert("Delete Comment feature comming soon")
    }

    return(
        <div className="comment">
            <p className="comment-header"></p>
            <p className="comment-body"></p>
            <div className="comment-footer">
            <div className="comment-footer">
                <a href="#" onClick={deleteComment}>Delete Comment</a>
            </div>
        </div>
    )
}

export default Comment;