const ProfileStatus = (props) => {
    return (
        <li>
            <span>{props.status}</span>
            <input value={props.status} />
        </li>
    )
}

export default ProfileStatus;