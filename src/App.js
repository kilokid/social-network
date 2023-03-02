import {Routes, Route} from 'react-router-dom';

import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import DialogsContainer from './component/Dialogs/DialogsContainer';

import './App.css';

function App(props) {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar friends={props.state.friends} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route exact path="dialogs" element={ <DialogsContainer messages={props.state.dialogsPage.dialogsData} newMessageText={props.state.dialogsPage.newMessagesBody} dispatch={props.dispatch} /> } />
            <Route exact path="profile" element={ <Profile posts={props.state.profilePage.postsData} dispatch={props.dispatch} inputText={props.state.profilePage.postText} /> } />
          </Routes>
        </div>
      </div>
  );
}

export default App;
