import s from './Profile.module.css';

const Profile = () => {
    return (
       <div className={s.content}>
        <div className={s.hero_block}>
          <img src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg' />
        </div>
        <div className={s.main_info}>
          <img src="https://static.prinseps.com/media/uploads/cryptopunk6278.png" />
          <div>
            <h3>Your Name</h3>
            <ul>
              <li>Date of Birth: 1 january</li>
              <li>City: Kiev</li>
              <li>Education: University of Cambridge</li>
              <li>Web Site: <a href="https://apple.com">apple.com</a></li>
            </ul>
          </div>
        </div>
        <div className={s.posts_form}>
          <h2>My posts</h2>
          <input type="text" placeholder='Your news...'></input>
          <button type='submit'>Send</button>
        </div>
        <ul className={s.posts}>
          <li>
            <span></span>
            <p>Hey, why nobody love me?</p>
          </li>
          <li>
            <span></span>
            <p>Fuck all.</p>
          </li>
        </ul>
      </div>
    );
}

export default Profile;