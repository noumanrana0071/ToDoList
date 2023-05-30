import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import ToDo from './components/ToDo';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToDo />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
