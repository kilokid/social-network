import { NavLink } from 'react-router-dom';

import Friends from './Friends/Friends';

import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink style={({isActive}) => ({color: isActive ? 'white' : 'inherit'})} to="/profile">Profile</NavLink></li>
                <li><NavLink style={({isActive}) => ({color: isActive ? 'white' : 'inherit'})} to="/dialogs">Messages</NavLink></li>
                <li><NavLink style={({isActive}) => ({color: isActive ? 'white' : 'inherit'})} to="/users">Users</NavLink></li>
                <li><NavLink style={({isActive}) => ({color: isActive ? 'white' : 'inherit'})} to="/news">News</NavLink></li>
                <li><NavLink style={({isActive}) => ({color: isActive ? 'white' : 'inherit'})} to="/music">Music</NavLink></li>
            </ul>
            {/* <Friends friends={friends} /> */}
        </nav>
    );
}

export default Navbar;