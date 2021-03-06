import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
