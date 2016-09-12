import delay from './delay';
import uuid from 'uuid-v4';

let comments = [
  {
      "id": '0e176b93-1f6f-4005-b777-3ad69cddf4cc',
      "author": "Pete Hunt",
      "message": "Hey there!"
  },
  {
      "id": '6412d313-a2b2-4c72-bee9-34cdbe0f04ef',
      "author": "Paul O’Shannessy",
      "message": "React is *great*!"
  },
];

class CommentAPI {
  static getAllComments() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], comments));
      }, delay);
    });
  }

  static saveComment(comment) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        comment.id = uuid();
        comments.push(comment);
        resolve(Object.assign({}, comment));
      }, delay);
    });
  }
}

export default CommentAPI;
