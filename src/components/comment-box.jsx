import React, { PropTypes } from 'react';

import CommentForm from './comment-form';
import CommentList from './comment-list';

const CommentBox = (props) => (
  <div className="commentBox">
    <h1>Comments</h1>
    <CommentList comments={props.comments} />
    <CommentForm />
  </div>
);

CommentBox.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    message: PropTypes.string,
  })),
};

export default CommentBox;
