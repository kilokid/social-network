import Dialogs from './Dialogs';

import { updateNewMessageActionCreator, sendNewMessageActionCreator } from '../../redux/dialogsReducer';

const DialogsContainer = ({messages, newMessageText, dispatch}) => {
    const onNewMessageChange = (text) => {
        dispatch(updateNewMessageActionCreator(text))
    }

    const onSendMessageKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('send');
        }
    }

    return (
        <Dialogs
            messages={messages}
            newMessageText={newMessageText}
            sendMessage={onSendMessageKeyDown}
            changeMessage={onNewMessageChange}
        />
    );
}

export default DialogsContainer;