import { FC, lazy, Suspense, useEffect } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import HeaderContainer from './component/Header/HeaderContainer';
import Navbar from './component/Navbar/Navbar';
import Loader from './component/Commons/Loader/Loader';

import './App.css';

const ProfileContainer = lazy(() => import('./component/Profile/ProfileContainer'));
const Dialogs = lazy(() => import('./component/Dialogs/Dialogs'));
const UsersContainer = lazy(() => import('./component/Users/UsersContainer'));
const MusicContainer = lazy(() => import('./component/Music/MusicContainer'));
const ChatPage = lazy(() => import('./pages/Chat/ChatPage'));
const Login = lazy(() => import('./component/Login/Login'));
const News = lazy(() => import('./component/News/News'));

type PropsType = {
  setInitialLoad: () => void,
  initialLoad: boolean,
}

const App: FC<PropsType> = ({setInitialLoad, initialLoad}) => {
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
              <Route path="/" element={<Navigate to="/profile" />} />
              <Route path="/dialogs" element={ <Dialogs /> } />
              <Route path="/profile" element={ <ProfileContainer /> } />
              <Route path="/profile/:userId?" element={ <ProfileContainer /> } />
              <Route path="/users" element={ <UsersContainer /> } />
              <Route path="/news" element={ <News /> } />
              <Route path="/music" element={ <MusicContainer /> } />
              <Route path="/chat" element={ <ChatPage /> } />
              <Route path="/login" element={ <Login /> } />
            </Routes>
          </Suspense>
        </div>
      </div>
  );
}

export default App;
