import React, { PropTypes } from 'react';

class CommentForm extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      author: '',
      text: '',
    };

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(evt) {
    const author = evt.target.value;

    this.setState({ author });
  }

  handleTextChange(evt) {
    const text = evt.target.value;

    this.setState({ text });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const author = this.state.author;
    const text = this.state.text;

    if (!this.validForm()) {
      return;
    }

    this.props.handleSubmit({ author, text });
    this.clearForm();
  }

  validForm() {
    return this.state.author && this.state.text;
  }

  clearForm() {
    this.setState({
      author: '',
      text: '',
    });
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          className="commentInput"
          onChange={this.handleAuthorChange}
          placeholder="Your name..."
          type="text"
          value={this.state.author}
        />
        <input
          className="commentInput"
          onChange={this.handleTextChange}
          placeholder="Your message..."
          type="text"
          value={this.state.text}
        />
        <button className="commentButton" type="submit">Submit</button>
      </form>
    );
  }
}

CommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
