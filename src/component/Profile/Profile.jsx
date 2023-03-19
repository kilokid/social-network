import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = ({profile, posts, inputText, changePost, onCreatePost, setProfileStatus, status}) => {
    return (
      <div>
        <ProfileInfo profile={profile} setStatus={setProfileStatus} status={status} />
        <MyPosts
          posts={posts}
          inputText={inputText}
          changePost={changePost}
          onCreatePost={onCreatePost} />
      </div>
    );
}

export default Profile;