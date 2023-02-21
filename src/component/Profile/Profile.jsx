import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = ({posts}) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts posts={posts} />
      </div>
    );
}

export default Profile;