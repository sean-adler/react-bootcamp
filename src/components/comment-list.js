import React, { PropTypes } from 'react';

import Comment from './comment';

const CommentList = (props) => {
  const renderedComments = props.comments.map((comment, i) => (
    <Comment author={comment.author} key={i}>
      <span>{comment.text}</span>
    </Comment>
  ));

  return renderedComments.length ? (
    <div className="commentList">
      {renderedComments}
    </div>
  ) : (
    <div className="commentLoading">
      <span>Loading comments...</span>
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    message: PropTypes.string,
  })),
};

export default CommentList;
