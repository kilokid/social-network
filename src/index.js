import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/reduxStore';
import {Provider} from './StoreContext';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <App/>
          </Provider>
        </BrowserRouter>
      </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
  const state = store.getState();
  rerenderEntireTree(state);
});