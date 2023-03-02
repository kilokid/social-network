import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';

const Profile = ({posts, dispatch, inputText}) => {
    return (
      <div>
        <ProfileInfo />
        <MyPostsContainer posts={posts} dispatch={dispatch} inputText={inputText} />
      </div>
    );
}

export default Profile;