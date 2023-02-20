import { NavLink } from 'react-router-dom';

import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                <li className={s.dialog}>
                    <NavLink to="0">
                        <span></span>
                        <div>
                            <p className={s.name}>Artem</p>
                            <p className={s.message}>Hi bro</p>
                        </div>
                    </NavLink>
                </li>
                <li className={s.dialog}>
                    <NavLink to="1">
                        <span></span>
                        <div>
                            <p className={s.name}>Vanya</p>
                            <p className={s.message}>Wat's up</p>
                        </div>
                    </NavLink>
                </li>
                <li className={s.dialog}>
                    <NavLink to="2">
                        <span></span>
                        <div>
                            <p className={s.name}>Egor</p>
                            <p className={s.message}>How a u?</p>
                        </div>
                    </NavLink>
                </li>
                <li className={s.dialog}>
                    <NavLink to="3">
                        <span></span>
                        <div>
                            <p className={s.name}>Nastya</p>
                            <p className={s.message}>I love you</p>
                        </div>
                    </NavLink>
                </li>
                <li className={s.dialog}>
                    <NavLink to="4">
                        <span></span>
                        <div>
                            <p className={s.name}>Danya</p>
                            <p className={s.message}>Fuck you</p>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Dialogs;