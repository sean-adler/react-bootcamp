import React from 'react';

import Comment from './comment';

const CommentList = (props) => {
    const renderedComments = props.comments.map((comment) => {
        return (
            <Comment author={comment.author}>
                {comment.message}
            </Comment>
        );
    });

    return (
        <div className="commentList">
            {renderedComments}
        </div>
    );
};

export default CommentList;
