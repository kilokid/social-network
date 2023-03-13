import User from './User/User';

import s from './User.module.css';

const Users = ({users, ...props}) => {
    const elements = users.map(user => {
        return <User 
            key={user.id}
            user={user}
            unfollowUser={props.unfollowUser}
            followUser={props.followUser}
            setUsers={props.setUsers}
            setIsFollowing={props.setIsFollowing}
            isFollowingProgress={props.isFollowingProgress}
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