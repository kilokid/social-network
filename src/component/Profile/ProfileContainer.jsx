import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';

import Profile from './Profile';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        inputText: state.profilePage.postText
    }
}

const ProfileContainer = connect(mapStateToProps, {
    changePost: updateNewPostTextActionCreator,
    onCreatePost: addPostActionCreator
})(Profile);

export default ProfileContainer;