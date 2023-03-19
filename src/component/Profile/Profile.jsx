import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = ({profile, posts, inputText, changePost, onCreatePost, setProfileStatus}) => {
    return (
      <div>
        <ProfileInfo profile={profile} setStatus={setProfileStatus} />
        <MyPosts
          posts={posts}
          inputText={inputText}
          changePost={changePost}
          onCreatePost={onCreatePost} />
      </div>
    );
}

export default Profile;