import React from "react";

const CommentForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form className='comment-form'>
            <div className="comment-form-fields">
                <input placeholder="Your Name" required ref={} ></input><br />
                <textarea placeholder="Leave a comment" rows="4" required ref={}></textarea>
            </div>
            <div className="comment-form-actions">
                <button type="Submit">Post Comment</button>
            </div>
        </form>
    )
}

export default CommentForm;