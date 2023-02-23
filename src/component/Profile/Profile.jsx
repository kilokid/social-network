import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = ({posts, addPost, onChangeText, inputText}) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts posts={posts} addPost={addPost} onChangeText={onChangeText} inputText={inputText} />
      </div>
    );
}

export default Profile;