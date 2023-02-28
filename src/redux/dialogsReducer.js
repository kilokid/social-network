const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessagesBody = action.newMessage;
    } else if (action.type === SEND_NEW_MESSAGE) {
        const message = state.newMessagesBody;

        if ( action.id === state.dialogsData.id ) {
            state.dialogsData[action.id].messages.push(message);
        }
    }

    return state;
}

export default dialogsReducer;