import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import friendsReducer from "./friendsReducer";

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

window.store = store;

export default store;
