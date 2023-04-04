import Loader from '../../Commons/Loader/Loader';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

import s from './ProfileInfo.module.css';


const ProfileInfo = ({profile, setStatus, status}) => {
  if (!profile) {
    return <Loader />
  }

  const withOutAvatar =  'https://static.prinseps.com/media/uploads/cryptopunk6278.png';

  return (
      <div className={s.content}>
      <div className={s.hero_block}>
        <img src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg' />
      </div>
      <div className={s.main_info}>
        <img src={profile.photos.large ? profile.photos.large : withOutAvatar} alt={profile.fullName} />
        <div>
          <h3>{profile.fullName}</h3>
          <ul>
            <li>Date of Birth: 1 january</li>
            <li>City: Kyiv</li>
            <li>Education: University of Cambridge</li>
            <li>Web Site: <a href="https://apple.com">apple.com</a></li>
            <ProfileStatus updateStoreStatus={setStatus} storeStatus={status} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;