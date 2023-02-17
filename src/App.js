import Header from './component/Header';
import Navbar from './component/Navbar';
import Profile from './component/Profile';

import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
