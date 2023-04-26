import { useState } from 'react';

import Loader from '../../Commons/Loader/Loader';
import ProfileStatus from '../ProfileStatus/ProfileStatus.tsx';
import ProfileDataForm from '../ProfileDataForm/ProfileDataForm';

import { ProfileType } from '../../../types/types';

import s from './ProfileInfo.module.css';

type PropsType = {
  profile: ProfileType,
  setStatus: () => void,
  status: string,
  isOwner: boolean,
  savePhotos: (arg0:string) => void,
  saveProfileInfo: (arg0:Object, arg1:number) => void,
  userId: number
}

const ProfileInfo: React.FC<PropsType> = ({profile, setStatus, status, isOwner, savePhotos, saveProfileInfo, userId}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Loader />
  }

  const onSaveNewAvatarPhoto = (e: any) => {
    if (e.target.files.length) {
      savePhotos(e.target.files[0]);
    }
  }

  const onSubmit = (formData: any) => {
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
        <picture>
          <img src={profile.photos.large ? profile.photos.large : withOutAvatar} alt={profile.fullName} />
          {isOwner && <input className={s.change_input} type="file" onChange={onSaveNewAvatarPhoto} />}
        </picture>
        <div className={s.main_info_profile}>
          <h3>{profile.fullName}</h3>
          <ProfileStatus updateStoreStatus={setStatus} storeStatus={status} isOwner={isOwner} />
        </div>
        <div className={s.contacts}>
          {editMode ? <ProfileDataForm profile={profile} onSubmit={onSubmit} /> : <ProfileData editProfileInfo={() => setEditMode(true)} profile={profile} setStatus={setStatus} status={status} />}
        </div>
      </div>
    </div>
  );
}

const ProfileData = ({profile, editProfileInfo}) => {
  return (
    <>
        <ul>
          <li>About me: {profile.aboutMe}</li>
          { profile.lookingForAJob && <li>Looking for a job</li>}
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