import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import rootReducer from './reducers/index.js'
import { createStore } from 'redux';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);
