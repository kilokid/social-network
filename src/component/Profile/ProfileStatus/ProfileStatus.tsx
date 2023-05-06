import { useState, useEffect, ChangeEvent, FC } from "react";

import s from './ProfileStatus.module.css';

type PropsType = {
    storeStatus: string,
    updateStoreStatus: (status: string) => void,
    isOwner: boolean,
}

const ProfileStatus: FC<PropsType> = ({storeStatus, updateStoreStatus, isOwner}) => {
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
                <span onClick={isOwner ? activeEditMode : null}>{storeStatus ? storeStatus : isOwner ? 'Set your status' : 'No status'}</span> :
                <input onChange={onChangeStatus} autoFocus onBlur={disableEditMode} value={status} />
            }
        </li>
    )
}

export default ProfileStatus;