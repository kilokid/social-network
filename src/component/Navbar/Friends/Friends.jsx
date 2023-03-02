import StoreContext from '../../../StoreContext';
import s from './Friends.module.css';

const Friends = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const items = store.getState().friends.map(friend => {
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
            }
        </StoreContext.Consumer>
    );
}

export default Friends;