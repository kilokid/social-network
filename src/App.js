import {Routes, Route} from 'react-router-dom';

import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Dialogs from './component/Dialogs/Dialogs';

import './App.css';

function App({posts, messages, friends}) {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar friends={friends} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route exact path="dialogs" element={ <Dialogs messages={messages} /> } />
            <Route exact path="profile" element={ <Profile posts={posts} /> } />
          </Routes>
        </div>
      </div>
  );
}

export default App;
