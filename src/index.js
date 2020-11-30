import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
// REDUX
import { createStore } from 'redux'
import { Provider } from 'react-redux'

let listInitialState = {
  list: []
}

// The return value of reducer becomes our global state!!! Doesn't get merged to global state, it becomes the global state (ie: setState)
const listReducer = (state = listInitialState, action) => {
  switch(action.type){
    case "SET_ALL_LIST":
      return {
        ...state,
        list: action.payload
      }
    default: 
      return state
  }
}

let theListObject = createStore(
  listReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


// BrowserRouter can be used as well either within Provider or outside Provider (ORDER DOES NOT MATTER)
ReactDOM.render(
  <BrowserRouter>
    <Provider store={theListObject}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);