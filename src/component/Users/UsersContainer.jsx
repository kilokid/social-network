import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCurrentPageActionCreator, getUsersThunkCreator, followOnUserThunkCreator, unFollowOnUserThunkCreator } from '../../redux/usersReducer.tsx';
import { getUsers, getPageSize, getCurrentPage, getIsFetching, getIsFollowingProgress, getTotalUsersCount } from '../../redux/userSelector';

import Users from './Users';
import Loader from '../Commons/Loader/Loader';
import { get } from 'react-hook-form';

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

const mapStateToProps = (state) => {
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
    setCurrentPage: setCurrentPageActionCreator,
    getUsersRequest: getUsersThunkCreator,
})(UsersApiContainer);

export default UsersContainer;