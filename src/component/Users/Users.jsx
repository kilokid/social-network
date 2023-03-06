import { useEffect } from 'react';

import axios from 'axios';

import User from './User/User';

import s from './User.module.css';

const Users = ({users, ...props}) => {
    const getUsers = () => {
        if (users.users.length <= 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
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
    }, [])

    const elements = users.users.map(user => {
        return <User 
            key={user.id}
            user={user}
            unfollowUser={props.unfollowUser}
            followUser={props.followUser}
            setUsers={props.setUsers}
        />
    })

    return (
        <div>
            <h2 className={s.title}>Users</h2>
            <ul className={s.users}>
                {elements}
            </ul>
        </div>
    )
}

export default Users;