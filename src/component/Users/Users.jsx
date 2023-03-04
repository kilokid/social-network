import User from './User/User';

import s from './User.module.css';

const Users = ({users, ...props}) => {
        if (users.users.length <= 0) {
            props.setUsers(
            [
                {
                    id: 1,
                    fullName: 'Artem L.',
                    location: {
                        country: 'Russia',
                        city: 'Saint P.',
                    },
                    status: 'i\'m dead inside, bro',
                    avatar: '',
                    followed: true,
                },
                {
                    id: 2,
                    fullName: 'Pavel D.',
                    location: {
                        country: 'Belarus',
                        city: 'Minsk',
                    },
                    status: 'i\'m too, bro',
                    avatar: '',
                    followed: false,
                },
                {
                    id: 3,
                    fullName: 'Vladimir Z.',
                    location: {
                        country: 'Ukraine',
                        city: 'Kyiv',
                    },
                    status: 'lol, downs',
                    avatar: '',
                    followed: true,
                }
            ]
        )
    }

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