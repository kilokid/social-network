import { useEffect } from 'react';
import { connect } from 'react-redux';
import { actions, getUsersThunkCreator, followOnUserThunkCreator, unFollowOnUserThunkCreator } from '../../redux/usersReducer.tsx';
import { getUsers, getPageSize, getCurrentPage, getIsFetching, getIsFollowingProgress, getTotalUsersCount } from '../../redux/userSelector.tsx';

import { AppStateType } from '../../redux/reduxStore';

import Users from './Users.tsx';
import Loader from '../Commons/Loader/Loader';

type MapStatePropsType = {
    
}

type DispatchPropsType = {

}

type OwnPropsType = {

}

type PropsType = MapStatePropsType & DispatchPropsType & OwnPropsType;


const UsersApiContainer = (props) => {
    const getUsers = (currentPage) => {
        props.getUsersRequest(currentPage, props.pageSize);
    }

    useEffect(() => {
        getUsers(props.currentPage);
        // eslint-disable-next-line
    }, [props.currentPage])

    const {users, pageSize, pageNumber, totalUsersCount, currentPage, setCurrentPage, followUser, unfollowUser, isFollowingProgress} = props;

    return (
        <>
            {
                props.isFetching ? 
                <Loader /> : 
                <Users 
                    users={users}
                    pageSize={pageSize}
                    pageNumber={pageNumber}
                    totalUsersCount={totalUsersCount}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    followUser={followUser}
                    unfollowUser={unfollowUser}
                    isFollowingProgress={isFollowingProgress}
                />
            }
        </>
    );
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingProgress: getIsFollowingProgress(state),
    }
}

const UsersContainer = connect(mapStateToProps, {
    followUser: followOnUserThunkCreator,
    unfollowUser: unFollowOnUserThunkCreator,
    setCurrentPage: actions.setCurrentPageActionCreator,
    getUsersRequest: getUsersThunkCreator,
})(UsersApiContainer);

export default UsersContainer;