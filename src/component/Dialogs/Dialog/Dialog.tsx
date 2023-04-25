import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

import s from './Dialog.module.css';

type PropsType = {
    name: string,
    message: string,
    id: number
}

const Dialog: FC<PropsType> = ({name, message, id}) => {
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