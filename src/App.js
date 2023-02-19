import {Routes, Route} from 'react-router-dom';

import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Dialogs from './component/Dialogs/Dialogs';

import './App.css';

function App() {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="dialogs" element={ <Dialogs /> } />
            <Route path="profile" element={ <Profile /> } />
          </Routes>
        </div>
      </div>
  );
}

export default App;
