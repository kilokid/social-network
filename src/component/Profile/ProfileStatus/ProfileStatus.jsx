import { useState, useEffect } from "react";

import s from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activeEditMode = () => setEditMode(true);

    const disableEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    return (
        <li className={s.status_wrapper}>
            {!editMode ?
                <span onClick={activeEditMode}>{props.status ? props.status : 'Set your status'}</span> :
                <input onChange={onChangeStatus} autoFocus onBlur={disableEditMode} value={status} />
            }
        </li>
    )
}

export default ProfileStatus;