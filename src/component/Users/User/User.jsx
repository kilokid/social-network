import axios from 'axios';
import { NavLink } from 'react-router-dom';

import s from './User.module.css';

const User = ({user, unfollowUser, followUser, setUsers}) => {
    const follow = (userID) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': '9675b145-b3c3-4bd1-be1b-e370f493e960',
            }
        })
        .then(response => {
            if (response.data.resultCode === 0) {
                followUser(user.id);
            }
        });
    }

    const unfollow = (userID) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {
            withCredentials: true,
            headers: {
                'API-KEY': '9675b145-b3c3-4bd1-be1b-e370f493e960',
            }
        })
        .then(response => {
            if (response.data.resultCode === 0) {
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