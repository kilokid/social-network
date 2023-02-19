import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                <li className={s.dialog}>
                    <span></span>
                    <div>
                        <p className={s.name}>Artem</p>
                        <p className={s.message}>Hi bro</p>
                    </div>
                </li>
                <li className={s.dialog}>
                    <span></span>
                    <div>
                        <p className={s.name}>Vanya</p>
                        <p className={s.message}>Wat's up</p>
                    </div>
                </li>
                <li className={s.dialog}>
                    <span></span>
                    <div>
                        <p className={s.name}>Egor</p>
                        <p className={s.message}>How a u?</p>
                    </div>
                </li>
                <li className={s.dialog}>
                    <span></span>
                    <div>
                        <p className={s.name}>Nastya</p>
                        <p className={s.message}>I love you</p>
                    </div>
                </li>
                <li className={s.dialog}>
                    <span></span>
                    <div>
                        <p className={s.name}>Danya</p>
                        <p className={s.message}>Fuck you</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Dialogs;