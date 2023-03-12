import { NavLink } from 'react-router-dom';

import { followUserRequest, unfollowUserRequest } from '../../../api/api';

import s from './User.module.css';

const User = ({user, unfollowUser, followUser, setUsers}) => {
    const follow = (userID) => {
        followUserRequest(userID)
        .then(data => {
            if (data.resultCode === 0) {
                followUser(user.id);
            }
        });
    }

    const unfollow = (userID) => {
        unfollowUserRequest(userID)
        .then(data => {
            if (data.resultCode === 0) {
                unfollowUser(user.id);
            }
        });
    }

    return (
        <li className={s.user}>
            <div className={s.avatar_block}>
                <NavLink to={`/profile/${user.id}`} className={s.user_link}>
                    <span className={s.ava}></span>
                </NavLink>
                {user.followed ?
                    <button
                        onClick={() => unfollow(user.id)}
                        className={s.btn}
                    >Unfollow</button> : 
                    <button
                        onClick={() => follow(user.id)}
                        className={s.btn}
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