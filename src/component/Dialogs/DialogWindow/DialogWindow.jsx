import { useParams } from 'react-router-dom';

import s from './DialogWindow.module.css';

const DialogWindow = ({newMessageText, sendMessage, changeMessage}) => {
    const {dialogId} = useParams();

    const onNewMessageChange = (e) => {
        const text = e.target.value;
        changeMessage(text);
    }

    const onSendMessageKeyDown = (e) => {
        sendMessage(e)
    }

    return (
        <div className={s.dialog_window}>
            <textarea
                onKeyDown={onSendMessageKeyDown}
                className={s.message_input}
                value={newMessageText}
                onChange={onNewMessageChange}
                placeholder='Enter your message'
            />
        </div>
    );
}

export default DialogWindow;