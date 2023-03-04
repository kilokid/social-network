const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let idNumber = 3;

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
    switch(action.type) {
        case ADD_POST: {
            if ( !state.postText ) return;

            const newPosts = {
                id: idNumber,
                text: state.postText,
                likes: '0'
            }

            idNumber++;

            return {
                ...state,
                postsData: [...state.postsData, newPosts],
                postText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                postText: action.newText,
            }
        }
        default:
            return state;
    }
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