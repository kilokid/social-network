import { NavLink } from 'react-router-dom';

import s from './Header.module.css';

import logo from '../../assets/images/ufo.svg';
import { FC } from 'react';

type PropsType = {
    login: string,
    isAuth: boolean,
    logoutUser: () => void,
}

const Header: FC<PropsType> = ({login, isAuth, logoutUser}) => {
    return (
        <header className={s.header}>
            <div>
                <img src={logo} alt="" />
                <h3>killer vk 1.0</h3>
            </div>
            <div className={s.login_block}>
                {isAuth ?
                    <div className={s.logout}>
                        <p>{login}</p>
                        <button onClick={logoutUser}>Logout</button>
                    </div> :
                    <NavLink className={s.login_btn} to="/login">Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;