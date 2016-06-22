import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

var initialState = {
  todos: [{
    id: '0',
    completed: false,
    text: 'Learn how to use nodejs and gulp'
  }]
}

var store = require('../redux/store')(initialState);

render(
  <Provider store={ store }>
  <App></App>
  </Provider>,
  document.getElementById('app')
);
