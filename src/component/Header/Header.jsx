import { NavLink } from 'react-router-dom';

import s from './Header.module.css';

const Header = ({login, isAuth, logoutUser}) => {
    return (
        <header className={s.header}>
            <img src="https://cdn-icons-png.flaticon.com/512/183/183595.png" alt="" />
            <div className={s.login_block}>
                {isAuth ? 
                    <div>
                        <p>{login}</p>
                        <button onClick={logoutUser}>Logout</button>
                    </div> :
                    <NavLink to="/login">Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;