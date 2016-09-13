import React, { PropTypes } from 'react';

const Comment = (props) => (
  <div className="comment">
    <h2 className="commentAuthor">{props.author}</h2>
    <div className="commentText">{props.children}</div>
  </div>
);

Comment.propTypes = {
  author: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Comment;
