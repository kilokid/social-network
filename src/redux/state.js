const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const store = {
    _state: {
        dialogsData: [
            {
                id: "0",
                name: 'Artem',
                message: 'Hi bro'
            },
            {
                id: '1',
                name: 'Vanya',
                message: 'What`s up?'
            },
            {
                id: '2',
                name: 'Egor',
                message: 'How a u?'
            },
            {
                id: '3',
                name: 'Nastya',
                message: 'I love u'
            },
            {
                id: '4',
                name: 'Danya',
                message: 'Fuck u man'
            },
            {
                id: '5',
                name: 'Tanya',
                message: 'I miss u'
            }
        ],
        profilePage: {
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
        },
        friends: [
            {
                id: '0',
                name: 'Me'
            },
            {
                id: '1',
                name: 'You'
            },
            {
                id: '2',
                name: 'We'
            }
        ]
    },
    _callSubscriber: () => {
        console.log('change state');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
             if ( !this._state.profilePage.postText ) return;

            const newPosts = {
                id: '3',
                text: this._state.profilePage.postText,
                likes: '0'
            }

            this._state.profilePage.postsData.push(newPosts);
            this._state.profilePage.postText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.postText = action.newText;
            this._callSubscriber(this._state);
        }
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

window.store = store;

export default store;
