import React, { PropTypes } from 'react';

const CommentForm = ({comment, onSave, onChange, isSaving}) => {
  return (
    <div className="commentForm">
      <form>
        <input
          name="author"
          onChange={onChange}
          placeholder="Your name..."
          type="text"
          value={comment.author} />

        <input
          name="message"
          onChange={onChange}
          placeholder="Your message..."
          type="text"
          value={comment.message} />

        <input
          type="submit"
          disabled={isSaving}
          value={isSaving? 'Saving...' : 'Save'}
          onClick={onSave} />
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
