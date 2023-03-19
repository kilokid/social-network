import { useEffect } from 'react';
import { connect,  } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { addPostActionCreator, updateNewPostTextActionCreator, getUserProfileThunkCreator, getProfileStatusThunkCreator, setProfileStatusThunkCreator } from '../../redux/profileReducer';

import Profile from './Profile';
import WithAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const ProfileApiContainer = (props) => {
    let userId = props.router.params.userId;

    if (!userId)
    {
        userId = '28291';
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
        inputText: state.profilePage.postText,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
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
        changePost: updateNewPostTextActionCreator,
        onCreatePost: addPostActionCreator,
        getUserProfile: getUserProfileThunkCreator,
        getProfileStatus: getProfileStatusThunkCreator,
        setProfileStatus: setProfileStatusThunkCreator,
    })
)(WithUrlRouteProfileComponent);