import { NavLink } from 'react-router-dom';

import Friends from './Friends/Friends';

import s from './Navbar.module.css';

import {FriendType} from '../../types/types';
import { FC } from 'react';

type PropsType = {
    friends: Array<FriendType>,
}

const Navbar: FC<PropsType> = ({friends}) => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink style={({isActive}) => ({fontWeight: isActive ? '700' : '500'})} to="/profile">Profile</NavLink></li>
                <li><NavLink style={({isActive}) => ({fontWeight: isActive ? '700' : '500'})} to="/dialogs">Messages</NavLink></li>
                <li><NavLink style={({isActive}) => ({fontWeight: isActive ? '700' : '500'})} to="/users">Users</NavLink></li>
                <li><NavLink style={({isActive}) => ({fontWeight: isActive ? '700' : '500'})} to="/news">News</NavLink></li>
                <li><NavLink style={({isActive}) => ({fontWeight: isActive ? '700' : '500'})} to="/music">Music</NavLink></li>
                <li><NavLink style={({isActive}) => ({fontWeight: isActive ? '700' : '500'})} to="/chat">Chat</NavLink></li>
            </ul>
            {/* <Friends friends={friends} /> */}
        </nav>
    );
}

export default Navbar;