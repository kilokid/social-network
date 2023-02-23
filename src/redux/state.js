import { render } from "../render";

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

export const addPost = (postText) => {
    const newPosts = {
        id: '3',
        text: postText,
        likes: '0'
    }

    state.postsData.push(newPosts);
    render(state);
}

export default state;