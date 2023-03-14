import { NavLink } from 'react-router-dom';

import s from './User.module.css';

const User = ({user, unfollowUser, followUser, isFollowingProgress}) => {
    const follow = (userID) => {
        followUser(userID);
    }

    const unfollow = (userID) => {
        unfollowUser(userID);
    }

    const btnClass = isFollowingProgress.some(id => id === user.id) ? `${s.btn} ${s.disable}` : s.btn;

    return (
        <li className={s.user}>
            <div className={s.avatar_block}>
                <NavLink to={`/profile/${user.id}`} className={s.user_link}>
                    <span className={s.ava}></span>
                </NavLink>
                {user.followed ?
                    <button
                        onClick={() => unfollow(user.id)}
                        className={btnClass}
                    >Unfollow</button> : 
                    <button
                        onClick={() => follow(user.id)}
                        className={btnClass}
                    >Follow</button>}
            </div>
            <div className={s.user_info}>
                <NavLink to={`/profile/${user.id}`} className={s.user_info_link}>
                    <h3>{user.name}</h3>
                    <div className={s.location}>
                        <span>Test Country,</span>
                        <span>Test city</span>
                    </div>
                    <p className={s.status}>{user.status}</p>
                </NavLink>
            </div>
        </li>
    )
}

export default User;