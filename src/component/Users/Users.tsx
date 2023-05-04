import { FC, useState } from 'react';

import {UserType} from '../../types/types';

import User from './User/User';

import s from './User.module.css';

type UsePropsType = {
    users: Array<UserType>,
}

type OwnPropsType = {
    unfollowUser: () => void,
    followUser: () => void,
    setCurrentPage: (page: number) => void,
    isFollowingProgress: Array<number>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    portionSize?: number
}

type PropsType = UsePropsType & OwnPropsType;

const Users: FC<PropsType> = ({users, portionSize = 10, ...props}) => {
    const elements = users.map(user => {
        return <User 
            key={user.id}
            user={user}
            unfollowUser={props.unfollowUser}
            followUser={props.followUser}
            isFollowingProgress={props.isFollowingProgress}
        />
    })

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;
    
    return (
        <div>
            <h2 className={s.title}>Users</h2>
            <ul className={s.users}>
                {elements}
            </ul>
            <ul className={s.pages}>
                {
                    portionNumber > 1 &&
                    <button className={s.pagBtn + ' ' + s.prev} onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>
                }
                {
                    pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map(page => {
                        return <li key={page} className={page === props.currentPage ? s.currentPage : ''}>
                            <button onClick={() => props.setCurrentPage(page)} type='button'>{page}</button>
                        </li>
                    })
                }
                {
                    portionCount > portionNumber &&
                    <button className={s.pagBtn + ' ' + s.next} onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>
                }
            </ul>
        </div>
    )
}

export default Users;