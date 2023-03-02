import {Routes, Route} from 'react-router-dom';

import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import ProfileContainer from './component/Profile/ProfileContainer';
import DialogsContainer from './component/Dialogs/DialogsContainer';

import './App.css';

function App() {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route exact path="dialogs" element={ <DialogsContainer /> } />
            <Route exact path="profile" element={ <ProfileContainer /> } />
          </Routes>
        </div>
      </div>
  );
}

export default App;
