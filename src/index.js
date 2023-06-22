import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from './App/store';
//import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
    <App />
    </Provider>
  </Router>
);
