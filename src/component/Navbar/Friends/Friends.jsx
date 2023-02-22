import s from './Friends.module.css';

const Friends = () => {
    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            <ul>
                <li>
                    <span></span>
                    <p>Name</p>
                </li>
                <li>
                    <span></span>
                    <p>Name</p>
                </li>
                <li>
                    <span></span>
                    <p>Name</p>
                </li>
            </ul>
        </div>
    );
}

export default Friends;