import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { actions, getUsersThunkCreator, followOnUserThunkCreator, unFollowOnUserThunkCreator } from '../../redux/usersReducer';
import { getUsers, getPageSize, getCurrentPage, getIsFetching, getIsFollowingProgress, getTotalUsersCount } from '../../redux/userSelector';

import { AppStateType } from '../../redux/reduxStore';

import {UserType} from '../../types/types';

import Users from './Users';
import Loader from '../Commons/Loader/Loader';

type MapStatePropsType = {
    currentPage: number,
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    isFollowingProgress: Array<number>,
    isFetching: boolean,
}

type DispatchPropsType = {
    setCurrentPage: (pageNumber: number) => void,
    followUser: () => void,
    unfollowUser: () => void,
}

type OwnPropsType = {
    getUsersRequest: (currentPage: number, pageSize: number) => void,
}

type PropsType = MapStatePropsType & DispatchPropsType & OwnPropsType;


const UsersApiContainer: FC<PropsType> = (props) => {
    const getUsers = (currentPage: number) => {
        props.getUsersRequest(currentPage, props.pageSize);
    }

    useEffect(() => {
        getUsers(props.currentPage);
        // eslint-disable-next-line
    }, [props.currentPage])

    const {users, pageSize, totalUsersCount, currentPage, setCurrentPage, followUser, unfollowUser, isFollowingProgress} = props;

    return (
        <>
            {
                props.isFetching ? 
                <Loader /> : 
                <Users 
                    users={users}
                    pageSize={pageSize}
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