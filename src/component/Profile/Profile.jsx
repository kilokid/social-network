import { memo } from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo.tsx';
import MyPosts from './MyPosts/MyPosts.jsx';
import Loader from '../Commons/Loader/Loader';

const Profile = memo(({profile, posts, onCreatePost, onDeletePost, setProfileStatus, status, isOwner, savePhotos, saveProfileInfo, userId}) => {
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