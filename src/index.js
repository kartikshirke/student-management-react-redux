import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import postReducer from './postReducer';

const store = createStore(postReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log('hello',store);

export default store;

ReactDOM.render(
<Provider store={store}>
<BrowserRouter><App /></BrowserRouter>
</Provider>, document.getElementById('root'));