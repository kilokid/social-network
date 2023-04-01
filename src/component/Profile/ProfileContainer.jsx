import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { addPostActionCreator, getUserProfileThunkCreator, deletePostActionCreator, getProfileStatusThunkCreator, setProfileStatusThunkCreator } from '../../redux/profileReducer';

import Profile from './Profile';
import WithAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const ProfileApiContainer = (props) => {
    let userId = props.router.params.userId;

    if (!userId)
    {
        if (props.isAuth) {
            userId = props.userId;
        }
    }

    const getProfile = () => {
        props.getUserProfile(userId)
    }

    const getStatus = () => {
        props.getProfileStatus(userId)
    }

    useEffect(() => {
        getProfile();
        getStatus();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Profile {...props} profile={props.profile} />
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
        onCreatePost: addPostActionCreator,
        onDeletePost: deletePostActionCreator,
        getUserProfile: getUserProfileThunkCreator,
        getProfileStatus: getProfileStatusThunkCreator,
        setProfileStatus: setProfileStatusThunkCreator,
    })
)(WithUrlRouteProfileComponent);