import React from 'react';

import CommentBox from './comment-box';

class CommentApp extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div className="commentApp">
        <CommentBox />
      </div>
    );
  }
}

export default CommentApp;
