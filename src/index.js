import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App
            state={state}
            dispatch={store.dispatch.bind(store)}
           />
        </BrowserRouter>
      </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);