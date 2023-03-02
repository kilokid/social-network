import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';

import Profile from './Profile';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        inputText: state.profilePage.postText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePost: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        onCreatePost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;