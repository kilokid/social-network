import {Routes, Route} from 'react-router-dom';

import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Dialogs from './component/Dialogs/Dialogs';

import './App.css';

function App(props) {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar friends={props.state.friends} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route exact path="dialogs" element={ <Dialogs messages={props.state.dialogsData} /> } />
            <Route exact path="profile" element={ <Profile posts={props.state.profilePage.postsData} addPost={props.addPost} onChangeText={props.onChangeText} inputText={props.state.profilePage.postText} /> } />
          </Routes>
        </div>
      </div>
  );
}

export default App;
