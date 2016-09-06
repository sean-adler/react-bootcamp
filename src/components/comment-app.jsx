import React from 'react';

import '../styles/comment-app.css';

class CommentApp extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {
    return (
      <div>
        Hello Comment App!
      </div>
    );
  }
}

export default CommentApp;
