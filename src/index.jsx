import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.css';
import ListaDeUsuarios from './ListaDeUsuarios';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ListaDeUsuarios />
  </React.StrictMode>,
  document.getElementById('root')
);