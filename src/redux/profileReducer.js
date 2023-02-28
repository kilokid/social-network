const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const initialState = {
    postsData: [
        {
            id: '0',
            text: 'why nobody love me?',
            likes: '14'
        },
        {
            id: '1',
            text: 'Fuck all.',
            likes: '234'
        },
        {
            id: '2',
            text: 'Where a u??',
            likes: '2'
        }
    ],
    postText: ''
};

const profileReducer = (state = initialState, action) => {
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

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export default profileReducer;