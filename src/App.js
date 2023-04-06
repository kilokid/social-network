import { lazy, Suspense, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';

import HeaderContainer from './component/Header/HeaderContainer';
import Navbar from './component/Navbar/Navbar';
import Loader from './component/Commons/Loader/Loader';

import './App.css';

const ProfileContainer = lazy(() => import('./component/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('./component/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./component/Users/UsersContainer'));
const MusicContainer = lazy(() => import('./component/Music/MusicContainer'));
const LoginContainer = lazy(() => import('./component/Login/LoginContainer'));

const App = ({setInitialLoad, initialLoad}) => {
  useEffect(() => {
      setInitialLoad();

       // eslint-disable-next-line
  }, []);
  
  if (!initialLoad) {
    return <Loader />
  }

  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/dialogs" element={ <DialogsContainer /> } />
              <Route path="/profile" element={ <ProfileContainer /> } />
              <Route path="/profile/:userId?" element={ <ProfileContainer /> } />
              <Route path="/users" element={ <UsersContainer /> } />
              <Route path="/music" element={ <MusicContainer /> } />
              <Route path="/login" element={ <LoginContainer /> } />
            </Routes>
          </Suspense>
        </div>
      </div>
  );
}

export default App;
