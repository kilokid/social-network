const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        const newState = {...state};

        newState.newMessagesBody = action.newMessage;

        return newState;
    } else if (action.type === SEND_NEW_MESSAGE) {
        const newState = {...state};
        newState.dialogsData = {...state.dialogsData};
        newState.dialogsData.message = [...state.dialogsData.message];
        const message = state.newMessagesBody;

        if ( action.id === state.dialogsData.id ) {
            newState.dialogsData[action.id].messages.push(message);
        }

        return newState;
    }

    return state;
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

export default dialogsReducer;