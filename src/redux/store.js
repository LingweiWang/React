import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducers';
import logger from 'reducer-logger';

var finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore);

var configureStore = function(initialState) {
  initialState = initialState || {todos: []};
  return finalCreateStore(reducer, initialState);
};

module.exports = configureStore;
