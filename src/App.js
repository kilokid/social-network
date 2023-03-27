import {Routes, Route} from 'react-router-dom';

import HeaderContainer from './component/Header/HeaderContainer';
import Navbar from './component/Navbar/Navbar';
import ProfileContainer from './component/Profile/ProfileContainer';
import DialogsContainer from './component/Dialogs/DialogsContainer';
import UsersContainer from './component/Users/UsersContainer';
import MusicContainer from './component/Music/MusicContainer';
import LoginContainer from './component/Login/LoginContainer';
import Loader from './component/Commons/Loader/Loader';

import './App.css';

const App = (props) => {
  
  if (!props.initialLoad) {
    return <Loader />
  }

  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs" element={ <DialogsContainer /> } />
            <Route path="/profile" element={ <ProfileContainer /> } />
            <Route path="/profile/:userId?" element={ <ProfileContainer /> } />
            <Route path="/users" element={ <UsersContainer /> } />
            <Route path="/music" element={ <MusicContainer /> } />
            <Route path="/login" element={ <LoginContainer /> } />
          </Routes>
        </div>
      </div>
  );
}

export default App;
