import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const postsData = [
    {
        id: '0',
        text: 'why nobody love me?',
        likes: '14'
    },
    {
        id: '1',
        text: 'Fuck all.',
        likes: '234'
    },
    {
        id: '2',
        text: 'Where a u??',
        likes: '2'
    }
];

const dialogsData = [
    {
        id: "0",
        name: 'Artem',
        message: 'Hi bro'
    },
    {
        id: '1',
        name: 'Vanya',
        message: 'What`s up?'
    },
    {
        id: '2',
        name: 'Egor',
        message: 'How a u?'
    },
    {
        id: '3',
        name: 'Nastya',
        message: 'I love u'
    },
    {
        id: '4',
        name: 'Danya',
        message: 'Fuck u man'
    },
    {
        id: '5',
        name: 'Tanya',
        message: 'I miss u'
    }
];

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={postsData} messages={dialogsData} />
    </BrowserRouter>
  </React.StrictMode>
);
