import { updateNewMessageActionCreator, sendNewMessageActionCreator } from '../../../redux/state';

import s from './DialogWindow.module.css';

const DialogWindow = ({newMessageText, dispatch}) => {
    const onNewMessageChange = (e) => {
        const text = e.target.value;
        dispatch(updateNewMessageActionCreator(text))
    }

    const onSendMessageKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('send');
        }
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