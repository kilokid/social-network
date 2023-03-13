import { useEffect } from 'react';
import { connect } from 'react-redux';
import { followActionCreator, ulfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setIsFetchingActionCreator, setFollowingInProgressActionCreator } from '../../redux/usersReducer';

import Users from './Users';
import Loader from '../Commons/Loader/Loader';

import { getUserRequest } from '../../api/api';

const UsersApiContainer = (props) => {
    const getUsers = (currentPage) => {
        props.setIsFetching(true);
        getUserRequest(currentPage, props.pageSize)
        .then(data => {
            props.setUsers(data.items);
            props.setTotalUsersCount(data.totalCount)
            props.setIsFetching(false);
        });
    }

    useEffect(() => {
        getUsers(props.currentPage);
        // eslint-disable-next-line
    }, [props.currentPage])

    const {users, pageSize, pageNumber, totalUsersCount, currentPage, setCurrentPage, followUser, unfollowUser, setIsFollowing, isFollowingProgress} = props;

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
                    setIsFollowing={setIsFollowing}
                    isFollowingProgress={isFollowingProgress}
                />
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        isFollowingProgress: state.users.followingInProgress,
    }
}

const UsersContainer = connect(mapStateToProps, {
    followUser: followActionCreator,
        unfollowUser: ulfollowActionCreator,
        setUsers: setUsersActionCreator,
        setCurrentPage: setCurrentPageActionCreator,
        setTotalUsersCount: setTotalUsersCountActionCreator,
        setIsFetching: setIsFetchingActionCreator,
        setIsFollowing: setFollowingInProgressActionCreator,
})(UsersApiContainer);

export default UsersContainer;