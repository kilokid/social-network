import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { actions, getUserProfileThunkCreator, getProfileStatusThunkCreator, setProfileStatusThunkCreator, savePhotosThunkCreator, saveProfileInfoThunkCreator } from '../../redux/profileReducer.ts';

import Profile from './Profile';
import WithAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const ProfileApiContainer = (props) => {
    const refreshProfile = () => {
        let userId = props.router.params.userId;

        if (!userId)
        {
            if (props.isAuth) {
                userId = props.userId;
            }
        }

        getProfile(userId);
        getStatus(userId);
    }

    const getProfile = (userId) => {
        props.getUserProfile(userId)
    }

    const getStatus = (userId) => {
        props.getProfileStatus(userId)
    }

    useEffect(() => {
        refreshProfile();
        // eslint-disable-next-line
    }, [props.router.params.userId])

    return (
        <>
            <Profile {...props} profile={props.profile} userId={props.userId} saveProfileInfo={props.saveProfileInfo} savePhotos={props.savePhotos} isOwner={!props.router.params.userId} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
    }
}

const AuthRedirectContainer = WithAuthRedirect(ProfileApiContainer);

const WithUrlRouteProfileComponent = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return <AuthRedirectContainer {...props} router={{ location, navigate, params }} />;
}

export default compose(
        connect(mapStateToProps, {
        onCreatePost: actions.addPostActionCreator,
        onDeletePost: actions.deletePostActionCreator,
        getUserProfile: getUserProfileThunkCreator,
        getProfileStatus: getProfileStatusThunkCreator,
        setProfileStatus: setProfileStatusThunkCreator,
        savePhotos: savePhotosThunkCreator,
        saveProfileInfo: saveProfileInfoThunkCreator,
    })
)(WithUrlRouteProfileComponent);