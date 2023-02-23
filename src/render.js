import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { addPost, onChangeText } from './redux/state';

import './index.css';
import App from './App';

export const render = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
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
