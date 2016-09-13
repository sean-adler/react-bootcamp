import React, { PropTypes } from 'react';

const CommentForm = ({comment, onSave, onChange, isSaving}) => {
  return (
    <div className="commentForm">
      <form className="commentForm" onSubmit={onSave}>
        <input
          className="commentInput"
          name="author"
          onChange={onChange}
          placeholder="Your name..."
          type="text"
          value={comment.author} />

        <input
          className="commentInput"
          name="message"
          onChange={onChange}
          placeholder="Your message..."
          type="text"
          value={comment.message} />

        <button
          className="commentButton"
          disabled={isSaving}
          type="submit">
          {isSaving? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  comment: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CommentForm;
