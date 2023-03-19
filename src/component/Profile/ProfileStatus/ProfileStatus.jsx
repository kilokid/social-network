import { useState } from "react";

import s from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);

    const activeEditMode = () => setEditMode(true);

    const disableEditMode = () => setEditMode(false);

    return (
        <li className={s.status_wrapper}>
            {!editMode ?
                <span onClick={activeEditMode}>{props.status}</span> :
                <input autoFocus onBlur={disableEditMode} value={props.status} />
            }
        </li>
    )
}

export default ProfileStatus;