import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

import './styles/comment-app.scss';
import CommentApp from './components/comment-app';

/* global document */
ReactDOM.render(<CommentApp />, document.querySelector('.app'));
