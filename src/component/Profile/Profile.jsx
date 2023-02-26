import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = ({posts, dispatch, inputText}) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts posts={posts} dispatch={dispatch} inputText={inputText} />
      </div>
    );
}

export default Profile;