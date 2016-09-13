import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as commentActions from '../actions/commentActions';
import CommentForm from './comment-form';
import CommentList from './comment-list';

class CommentBox extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      comment: Object.assign({}, this.props.comment),
      isSaving: false
    };

    this.updateComment = this.updateComment.bind(this);
    this.saveComment = this.saveComment.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadComments();
  }

  updateComment(event) {
    const field = event.target.name;
    let comment = this.state.comment;
    comment[field] = event.target.value;
    this.setState({comment: comment});
  }

  saveComment(event) {
    event.preventDefault();
    this.setState({isSaving: true});

    this.props.actions.saveComment(this.state.comment).then(() => {
      let comment = { author: '', message: '' };
      this.setState({comment, isSaving: false});
    });
  }

  render() {
    const {comments, isLoading} = this.props;

    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList comments={comments} isLoading={isLoading} />
        <CommentForm
          comment={this.state.comment}
          onChange={this.updateComment}
          onSave={this.saveComment}
          isSaving={this.state.isSaving} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let comment = { author: '', message: '' };
  return {
    comment: comment,
    comments: state.comments,
    isLoading: state.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(commentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
