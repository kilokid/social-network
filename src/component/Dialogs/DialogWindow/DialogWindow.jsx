import { createRef } from 'react';

import { updateNewMessageActionCreator, sendNewMessageActionCreator } from '../../../redux/state';

import s from './DialogWindow.module.css';

const DialogWindow = ({newMessageText, dispatch}) => {
    const inputRef = createRef();

    const onNewMessageChange = () => {
        const text = inputRef.current.value;
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
                ref={inputRef}
                placeholder='Enter your message'
            />
        </div>
    );
}

export default DialogWindow;