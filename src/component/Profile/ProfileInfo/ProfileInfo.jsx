import { useState } from 'react';

import Loader from '../../Commons/Loader/Loader';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileDataForm from '../ProfileDataForm/ProfileDataForm';

import s from './ProfileInfo.module.css';


const ProfileInfo = ({profile, setStatus, status, isOwner, savePhotos, saveProfileInfo, userId}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Loader />
  }

  const onSaveNewAvatarPhoto = (e) => {
    if (e.target.files.length) {
      savePhotos(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfileInfo(formData, userId);
    setEditMode(false);
  }

  const withOutAvatar =  'https://static.prinseps.com/media/uploads/cryptopunk6278.png';

  return (
      <div className={s.content}>
      <div className={s.hero_block}>
        <img src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg' />
      </div>
      <div className={s.main_info}>
        <img src={profile.photos.large ? profile.photos.large : withOutAvatar} alt={profile.fullName} />
        {isOwner && <input type="file" onChange={onSaveNewAvatarPhoto} />}
        <div>
          {editMode ? <ProfileDataForm profile={profile} onSubmit={onSubmit} /> : <ProfileData editProfileInfo={() => setEditMode(true)} profile={profile} setStatus={setStatus} status={status} />}
        </div>
      </div>
    </div>
  );
}

const ProfileData = ({profile, setStatus, status, editProfileInfo}) => {
  return (
    <>
      <h3>{profile.fullName}</h3>
        <ul>
          <ProfileStatus updateStoreStatus={setStatus} storeStatus={status} />
          <li>About me: {profile.aboutMe}</li>
          <li>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</li>
          {profile.lookingForAJob && <li>Job Description: {profile.lookingForAJobDescription}</li>}
          {Object.keys(profile.contacts).map(key => {
            return <li key={key}>{key}: {profile.contacts[key]}</li>
          })}
        </ul>
        <button onClick={editProfileInfo}>Edit</button>
    </>
  )
}

export default ProfileInfo;