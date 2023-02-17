import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1000px-Adidas_Logo.svg.png" />
      </header>
      <nav className='nav'>
        <ul>
          <li>Profile</li>
          <li>Messages</li>
          <li>News</li>
          <li>Music</li>
        </ul>
      </nav>
      <div className='content'>
        <div>
          <img src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg' />
        </div>
        <div>
          <img src="" />
        </div>
        <div>My posts</div>
      </div>
    </div>
  );
}

export default App;
