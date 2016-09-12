import { createStore, applyMiddleware, compose } from 'redux';
import commentsReducer from '../reducers/commentsReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    commentsReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
