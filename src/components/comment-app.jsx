import React from 'react';

import CommentBox from './comment-box';
import '../styles/comment-app.css';

class CommentApp extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { comments: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  handleSubmit(comment) {
    const comments = this.state.comments.concat([comment]);

    this.setState({ comments });
  }

  fetchData() {
    fetch('/data/comments.json')
      .then((res) => res.json())
      .then((comments) => this.setState({ comments }))
      .catch(() => console.error('CommentApp: Could not fetch data.'));
  }

  render() {
    return (
      <div className="commentApp">
        <CommentBox handleSubmit={this.handleSubmit} comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentApp;
