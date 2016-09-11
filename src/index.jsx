import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

import './styles/comment-app.css';
import CommentApp from './components/comment-app';

/* global document */
ReactDOM.render(<CommentApp />, document.querySelector('.app'));
