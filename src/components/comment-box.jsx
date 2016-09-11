import React from 'react';

const CommentBox = (props) => {
    return (
        <div className="commentBox">
            <h1>Comments</h1>
            <CommentList comments={props.comments} />
            <CommentForm />
        </div>
    );
};

export default CommentBox;
