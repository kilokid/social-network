import { useState } from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);

    const activeEditMode = () => setEditMode(true);

    const disableEditMode = () => setEditMode(false);

    return (
        <li>
            {!editMode ?
                <span onClick={activeEditMode}>{props.status}</span> :
                <input autoFocus onBlur={disableEditMode} value={props.status} />
            }
        </li>
    )
}

export default ProfileStatus;