import s from './Profile.module.css';

const Profile = () => {
    return (
       <div className={s.content}>
        <div>
          <img src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg' />
        </div>
        <div>
          {/* <img src="" /> */}
          Ava + description
        </div>
        <div>My posts</div>
      </div>
    );
}

export default Profile;