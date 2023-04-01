import { memo } from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = memo(({profile, posts, onCreatePost, setProfileStatus, status}) => {
    return (
      <div>
        <ProfileInfo profile={profile} setStatus={setProfileStatus} status={status} />
        <MyPosts
          posts={posts}
          onCreatePost={onCreatePost} />
      </div>
    );
})

export default Profile;