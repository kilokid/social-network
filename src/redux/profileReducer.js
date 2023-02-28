const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        if ( !state.postText ) return;

        const newPosts = {
            id: '3',
            text: state.postText,
            likes: '0'
        }

        state.postsData.push(newPosts);
        state.postText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.postText = action.newText;
    }

    return state;
}

export default profileReducer;