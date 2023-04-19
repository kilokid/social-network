import { memo } from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo.tsx';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = memo(({profile, posts, onCreatePost, onDeletePost, setProfileStatus, status, isOwner, savePhotos, saveProfileInfo, userId}) => {
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
        <MyPosts
          posts={posts}
          onCreatePost={onCreatePost}
          onDeletePost={onDeletePost}
        />
      </div>
    );
})

export default Profile;