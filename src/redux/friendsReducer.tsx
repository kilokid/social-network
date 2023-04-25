const initialState = [
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
];

export type InitialStateType = typeof initialState;

const friendsReducer = (state = initialState, action: any): InitialStateType => {
    return state;
}

export default friendsReducer;