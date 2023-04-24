import profileReducer, { addPostActionCreator, deletePostActionCreator } from "./profileReducer.tsx";

const state = {
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
    ]
};

it('length of posts should be incremented', () => {
    const action = addPostActionCreator({postText: 'open the door, bitch'});

    const newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(4);
});

it('message of new post should be "open the door, bitch"', () => {
    const action = addPostActionCreator({postText: 'open the door, bitch'});

    const newState = profileReducer(state, action);

    expect(newState.postsData[3].text).toBe('open the door, bitch');
});

it('after deleting length of messages should be decrement', () => {
    const action = deletePostActionCreator(100);

    const newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(3);
})