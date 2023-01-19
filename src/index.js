import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';

// import {createStore,applyMiddleware} from 'redux';
// import {Provider} from 'react-redux'
// import {composeWithDevTools} from 'redux-devtools-extension'
// import thunk from 'redux-thunk';
// const middleware =[thunk];
// const store = createStore(allReducer,composeWithDevTools(applyMiddleware(...middleware)));

import {createStore} from 'redux'
import allReducer from './reducers';
import {Provider} from 'react-redux'

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

if(false) {
// STORE -> GLOBALIZED STATE

// ACTION INCREMENT
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

// REDUCER
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

// Display in console
store.subscribe(() => console.log(store.getState())); 

// DISPATCH
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);