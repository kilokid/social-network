import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = ({posts, addPost}) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts posts={posts} addPost={addPost} />
      </div>
    );
}

export default Profile;