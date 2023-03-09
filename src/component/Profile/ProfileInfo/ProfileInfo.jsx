import s from './ProfileInfo.module.css';

// oldNftAva https://static.prinseps.com/media/uploads/cryptopunk6278.png

const ProfileInfo = (props) => {
  console.log(props);
    return (
       <div className={s.content}>
        <div className={s.hero_block}>
          <img src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg' />
        </div>
        <div className={s.main_info}>
          <img src={props.photos.large} alt={props.fullName} />
          <div>
            <h3>{props.fullName}</h3>
            <ul>
              <li>Date of Birth: 1 january</li>
              <li>City: Kyiv</li>
              <li>Education: University of Cambridge</li>
              <li>Web Site: <a href="https://apple.com">apple.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default ProfileInfo;