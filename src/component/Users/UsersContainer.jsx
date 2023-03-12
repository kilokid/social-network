import { useEffect } from 'react';
import { connect } from 'react-redux';
import { followActionCreator, ulfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setIsFetchingActionCreator } from '../../redux/usersReducer';

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

    const {users, pageSize, pageNumber, totalUsersCount, currentPage, setCurrentPage, followUser, unfollowUser} = props;

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
    }
}

const UsersContainer = connect(mapStateToProps, {
    followUser: followActionCreator,
        unfollowUser: ulfollowActionCreator,
        setUsers: setUsersActionCreator,
        setCurrentPage: setCurrentPageActionCreator,
        setTotalUsersCount: setTotalUsersCountActionCreator,
        setIsFetching: setIsFetchingActionCreator,
})(UsersApiContainer);

export default UsersContainer;