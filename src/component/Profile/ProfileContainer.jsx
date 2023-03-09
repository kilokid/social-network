import { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { addPostActionCreator, updateNewPostTextActionCreator, setUserProfileActionCreator } from '../../redux/profileReducer';

import Profile from './Profile';

const ProfileApiContainer = (props) => {
    const getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response => {
            props.setUserProfile(response.data);
        });
    }

    useEffect(() => {
        getUsers();
        // eslint-disable-next-line
    }, [])

    return (
        <Profile {...props} profile={props.profile} />
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        inputText: state.profilePage.postText,
        profile: state.profilePage.profile,
    }
}

const ProfileContainer = connect(mapStateToProps, {
    changePost: updateNewPostTextActionCreator,
    onCreatePost: addPostActionCreator,
    setUserProfile: setUserProfileActionCreator,
})(ProfileApiContainer);

export default ProfileContainer;