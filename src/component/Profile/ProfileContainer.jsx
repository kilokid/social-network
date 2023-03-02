import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';
import StoreContext from '../../StoreContext.js';

import Profile from './Profile';

const ProfileContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();

                    const onCreatePost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    const onChangePost = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text))
                    }

                    return (
                        <Profile
                            posts={state.profilePage.postsData}
                            inputText={state.profilePage.postText}
                            changePost={onChangePost}
                            onCreatePost={onCreatePost}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
        
    );
}

export default ProfileContainer;