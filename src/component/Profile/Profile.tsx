import { FC, memo } from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import Loader from '../Commons/Loader/Loader';

import { ProfileType } from '../../types/types';

type PropsType = {
  profile: ProfileType,
  posts: [],
  onDeletePost: () => void,
  onCreatePost: () => void,
  setProfileStatus: () => void,
  status: string,
  isOwner: boolean,
  savePhotos: () => void,
  saveProfileInfo: () => void,
  userId: number,
}

const Profile: FC<PropsType> = memo(({profile, posts, onCreatePost, onDeletePost, setProfileStatus, status, isOwner, savePhotos, saveProfileInfo, userId}) => {
  if (!profile) {
    return <Loader />
  }  
  
  return (
      <div>
        <ProfileInfo
          profile={profile}
          setStatus={setProfileStatus}
          status={status}
          isOwner={isOwner}
          savePhotos={savePhotos}
          saveProfileInfo={saveProfileInfo}
          userId={userId}
        />
        {isOwner && 
          <MyPosts
            posts={posts}
            profile={profile}
            onCreatePost={onCreatePost}
            onDeletePost={onDeletePost}
          />
        }
      </div>
    );
})

export default Profile;