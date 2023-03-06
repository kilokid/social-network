import s from './User.module.css';

const User = ({user, unfollowUser, followUser, setUsers}) => {
    return (
        <li className={s.user}>
            <div className={s.avatar_block}>
                <span className={s.ava}></span>
                {user.followed ?
                    <button
                        onClick={() => unfollowUser(user.id)}
                        className={s.btn}
                    >Unfollow</button> : 
                    <button
                        onClick={() => followUser(user.id)}
                        className={s.btn}
                    >Follow</button>}
            </div>
            <div className={s.user_info}>
                <h3>{user.name}</h3>
                <div className={s.location}>
                    <span>Test Country,</span>
                    <span>Test city</span>
                </div>
                <p className={s.status}>{user.status}</p>
            </div>
        </li>
    )
}

export default User;