import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import rootReducer from './reducers/index.js'
import { createStore } from 'redux';
import seedData from './ReviewSeedData'
import { Provider } from 'react-redux';

// Note: !!! createStore can take second arg for preloadedData
const store = createStore(rootReducer, {postList: seedData});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
