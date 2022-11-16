import React, { useState } from "react";



const CommentBox = () => {
    const[showComments, SetShowComments] = useState(false)
    const[comments, SetComments] = useState([
        {id: 1, author: "landiggity", body: "This is my first comment on this forum so don't be a dick"},
        {id: 2, author: "scarlett-jo", body: "That's a mighty fine comment you've got there my good looking fellow..."},
        {id: 3, author: "rosco", body: "What is the meaning of all of this 'React' mumbo-jumbo?"}
    ]
    )


    return(
        <div className="comment-box">
            <h2>Join the Discussion!</h2>
            
        </div>
    )
}

export default CommentBox
