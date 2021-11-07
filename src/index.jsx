import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.css';
import Api from './Api';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Api />
  </React.StrictMode>,
  document.getElementById('root')
);