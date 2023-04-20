import { useState, useEffect, ChangeEvent } from "react";

import s from './ProfileStatus.module.css';

type PropsType = {
    storeStatus: string,
    updateStoreStatus: () => void,
}

type StateType = {

}

const ProfileStatus: PropsType = ({storeStatus, updateStoreStatus}) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(storeStatus);

    const activeEditMode = () => setEditMode(true);

    const disableEditMode = () => {
        setEditMode(false);
        updateStoreStatus(status);
    };

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(storeStatus);
    }, [storeStatus])

    return (
        <li className={s.status_wrapper}>
            {!editMode ?
                <span onClick={activeEditMode}>{storeStatus ? storeStatus : 'Set your status'}</span> :
                <input onChange={onChangeStatus} autoFocus onBlur={disableEditMode} value={status} />
            }
        </li>
    )
}

export default ProfileStatus;