import { Link } from 'react-router-dom';

import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/dialogs">Messages</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/music">Music</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;