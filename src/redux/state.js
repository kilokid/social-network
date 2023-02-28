import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import friendsReducer from "./friendsReducer";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

const store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {
                    id: "0",
                    name: 'Artem',
                    messages: [
                        'Hi bro',
                    ]
                },
                {
                    id: '1',
                    name: 'Vanya',
                    messages: [
                        'What`s up?',
                    ]
                },
                {
                    id: '2',
                    name: 'Egor',
                    messages: [
                        'How a u?',
                    ]
                },
                {
                    id: '3',
                    name: 'Nastya',
                    messages: [
                        'I love u',
                    ]
                },
                {
                    id: '4',
                    name: 'Danya',
                    messages: [
                        'Fuck u man',
                    ]
                },
                {
                    id: '5',
                    name: 'Tanya',
                    messages: [
                        'I miss u',
                    ]
                }
            ],
            newMessagesBody: '',  
        },
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
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.friends = friendsReducer(this._state.friends, action);

        this._callSubscriber(this._state);
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

export const sendNewMessageActionCreator = (id) => {
    return {
        type: SEND_NEW_MESSAGE,
        id
    }
}

export const updateNewMessageActionCreator = (messageText) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessage: messageText
    }
}

window.store = store;

export default store;
