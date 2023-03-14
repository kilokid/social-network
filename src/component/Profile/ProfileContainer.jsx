import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { addPostActionCreator, updateNewPostTextActionCreator, getUserProfileThunkCreator } from '../../redux/profileReducer';

import Profile from './Profile';

const ProfileApiContainer = (props) => {
    let userId = props.router.params.userId;

    if (!userId)
    {
        userId = '28291';
    }

    const getProfile = () => {
        props.getUserProfile(userId)
    }

    useEffect(() => {
        getProfile();
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

const WithUrlRouteProfileComponent = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return <ProfileApiContainer {...props} router={{ location, navigate, params }} />;
}

const ProfileContainer = connect(mapStateToProps, {
    changePost: updateNewPostTextActionCreator,
    onCreatePost: addPostActionCreator,
    getUserProfile: getUserProfileThunkCreator,
})(WithUrlRouteProfileComponent);

export default ProfileContainer;