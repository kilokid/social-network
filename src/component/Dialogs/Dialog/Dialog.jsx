import { Link, useParams } from 'react-router-dom';

import s from './Dialog.module.css';

const Dialog = ({name, message, id}) => {
    return (
        <li className={s.dialog}>
            <Link to={`/dialogs/${id}`}>
                <span></span>
                <div>
                    <p className={s.name}>{name}</p>
                    <p className={s.message}>{message}</p>
                </div>
            </Link>
        </li>
    );
}

export default Dialog;