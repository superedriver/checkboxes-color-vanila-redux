import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './css/index.css';
import { store } from './store'

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
