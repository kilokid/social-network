import { useEffect } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { followActionCreator, ulfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator } from '../../redux/usersReducer';

import Users from './Users';

const UsersApiContainer = (props) => {
    const getUsers = (currentPage) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${props.pageSize}`)
        .then(response => {
            props.setUsers(response.data.items);
            props.setTotalUsersCount(response.data.totalCount)
        });
    }

    useEffect(() => {
        getUsers(props.currentPage);
        // eslint-disable-next-line
    }, [props.currentPage])

    const {users, pageSize, pageNumber, totalUsersCount, currentPage, setCurrentPage, followUser, unfollowUser} = props;

    return (
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
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollowUser: (userId) => {
            dispatch(ulfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber));
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setTotalUsersCountActionCreator(usersCount));
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer);

export default UsersContainer;