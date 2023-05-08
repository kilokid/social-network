import s from './Friends.module.css';

import {FriendType} from '../../types/types';
import { FC } from 'react';

type PropsType = {
    friends: Array<FriendType>,
}

const Friends: FC<PropsType> = ({friends}) => {
    const items = friends.map(friend => {
        return (
            <li key={friend.id}>
                <span></span>
                <p>{friend.name}</p>
            </li>
        )
    })

    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            <ul>
                {items}
            </ul>
        </div>
    )
}

export default Friends;