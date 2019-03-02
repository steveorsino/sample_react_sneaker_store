import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import middleware from './middleware';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';

const store = createStore(reducer, middleware)

ReactDOM.render(
<Provider store={store}>
<Router>
  <App />
</Router>
</Provider>
, document.getElementById('root'));


