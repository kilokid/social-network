let rerenderEntriesTree = () => {
    console.log('change state');
} 

const state = {
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
};

export const addPost = () => {
    if ( !state.profilePage.postText ) return;

    const newPosts = {
        id: '3',
        text: state.profilePage.postText,
        likes: '0'
    }

    state.profilePage.postsData.push(newPosts);
    state.profilePage.postText = '';
    rerenderEntriesTree(state);
}

export const onChangeText = (text) => {
    state.profilePage.postText = text;
    rerenderEntriesTree(state);
}

export const subscribe = (observer) => {
    rerenderEntriesTree = observer;
}

// const store = {
//     _state: {
//         dialogsData: [
//             {
//                 id: "0",
//                 name: 'Artem',
//                 message: 'Hi bro'
//             },
//             {
//                 id: '1',
//                 name: 'Vanya',
//                 message: 'What`s up?'
//             },
//             {
//                 id: '2',
//                 name: 'Egor',
//                 message: 'How a u?'
//             },
//             {
//                 id: '3',
//                 name: 'Nastya',
//                 message: 'I love u'
//             },
//             {
//                 id: '4',
//                 name: 'Danya',
//                 message: 'Fuck u man'
//             },
//             {
//                 id: '5',
//                 name: 'Tanya',
//                 message: 'I miss u'
//             }
//         ],
//         profilePage: {
//             postsData: [
//                 {
//                     id: '0',
//                     text: 'why nobody love me?',
//                     likes: '14'
//                 },
//                 {
//                     id: '1',
//                     text: 'Fuck all.',
//                     likes: '234'
//                 },
//                 {
//                     id: '2',
//                     text: 'Where a u??',
//                     likes: '2'
//                 }
//             ],
//             postText: ''
//         },
//         friends: [
//             {
//                 id: '0',
//                 name: 'Me'
//             },
//             {
//                 id: '1',
//                 name: 'You'
//             },
//             {
//                 id: '2',
//                 name: 'We'
//             }
//         ]
//     },
//     getState: () => {
//         console.log(this._state);
//     },
//     addPost: () => {
//         if ( !this._state.profilePage.postText ) return;

//         const newPosts = {
//             id: '3',
//             text: state.profilePage.postText,
//             likes: '0'
//         }

//         this._state.profilePage.postsData.push(newPosts);
//         this._state.profilePage.postText = '';
//         this.rerenderEntriesTree(state);
//     },
//     onChangeText: (text) => {
//         this._state.profilePage.postText = text;
//         this.rerenderEntriesTree(this._state);
//     },
//     subscribe: (observer) => {
//         this.rerenderEntriesTree = observer;
//     },
//     rerenderEntriesTree: () => {
//         console.log('change state');
//     }
// }

export default state;