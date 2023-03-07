import { useEffect } from 'react';

import axios from 'axios';

import User from './User/User';

import s from './User.module.css';

const Users = ({users, ...props}) => {
    const getUsers = () => {
        if (users.length <= 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
            .then(response => {
                props.setUsers(response.data.items);
            });

            // props.setUsers(
            // [
            //     {
            //         id: 1,
            //         fullName: 'Artem L.',
            //         location: {
            //             country: 'Russia',
            //             city: 'Saint P.',
            //         },
            //         status: 'i\'m dead inside, bro',
            //         avatar: '',
            //         followed: true,
            //     },
            //     {
            //         id: 2,
            //         fullName: 'Pavel D.',
            //         location: {
            //             country: 'Belarus',
            //             city: 'Minsk',
            //         },
            //         status: 'i\'m too, bro',
            //         avatar: '',
            //         followed: false,
            //     },
            //     {
            //         id: 3,
            //         fullName: 'Vladimir Z.',
            //         location: {
            //             country: 'Ukraine',
            //             city: 'Kyiv',
            //         },
            //         status: 'lol, downs',
            //         avatar: '',
            //         followed: true,
            //     }
            // ]
            // )
        }
    }

    useEffect(() => {
        getUsers();

        // eslint-disable-next-line
    }, [])

    const elements = users.map(user => {
        return <User 
            key={user.id}
            user={user}
            unfollowUser={props.unfollowUser}
            followUser={props.followUser}
            setUsers={props.setUsers}
        />
    })

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <h2 className={s.title}>Users</h2>
            <ul className={s.users}>
                {elements}
            </ul>
            <ul className={s.pages}>
                {
                    pages.map(page => {
                        return <li key={page} className={page === props.currentPage ? s.currentPage : ''}>
                            <button onClick={() => props.setCurrentPage(page)} type='button'>{page}</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Users;