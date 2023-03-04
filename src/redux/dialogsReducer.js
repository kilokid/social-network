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
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessagesBody: action.newMessage, 
            }
        }
        case SEND_NEW_MESSAGE: {
            console.log('qq');
            // const newState = {
            //     ...state,
            //     dialogsData: {
            //         ...state.dialogsData,
            //         messages: [...state.dialogsData.message],
            //     }
            // };
            // const message = state.newMessagesBody;

            // if ( action.id === state.dialogsData.id ) {
            //     newState.dialogsData[action.id].messages.push(message);
            // }
            return {
                ...state,
                newMessagesBody: '',
            }
        }
        default: 
            return state;
    }
}

export const sendNewMessageActionCreator = (id) => {
    return {
        type: SEND_NEW_MESSAGE
    }
}

export const updateNewMessageActionCreator = (messageText) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessage: messageText
    }
}

export default dialogsReducer;