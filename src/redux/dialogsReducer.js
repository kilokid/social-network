const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_NEW_MESSAGE: {
            return {
                ...state,
                newMessagesBody: action.text.newMessage
            }
        }
        default: 
            return state;
    }
}

export const sendNewMessageActionCreator = (data) => {
    return {
        type: SEND_NEW_MESSAGE,
        text: {...data}
    }
}

export default dialogsReducer;