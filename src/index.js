import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import state from './redux/state';
import { addPost, onChangeText, subscribe } from './redux/state';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntriesTree = (state) => {
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App
            posts={state.profilePage.postsData}
            messages={state.dialogsData}
            friends={state.friends}
            addPost={addPost} 
            onChangeText={onChangeText}
            inputText={state.profilePage.postText}
           />
        </BrowserRouter>
      </React.StrictMode>
    );
}

rerenderEntriesTree(state);
subscribe(rerenderEntriesTree);