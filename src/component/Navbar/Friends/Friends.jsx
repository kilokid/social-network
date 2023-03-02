import s from './Friends.module.css';

const Friends = ({friends}) => {
    const items = friends.map(friend => {
        return (
            <li key={friend.id}>
                <span></span>
                <p>{friend.name}</p>
            </li>
        )
    })

    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            <ul>
                {items}
            </ul>
        </div>
    )
}

export default Friends;