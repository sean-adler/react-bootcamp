import React from 'react';

import CommentBox from './comment-box';
import '../styles/comment-app.css';

class CommentApp extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {comments: []};
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="commentApp">
        <CommentBox comments={this.state.comments} />
      </div>
    );
  }

  fetchData() {
    const data = require('../data/comments');
  }
}

export default CommentApp;
