import { updateNewMessageActionCreator, sendNewMessageActionCreator } from '../../../redux/state';

import s from './DialogWindow.module.css';

const DialogWindow = ({newMessageText}) => {
    const onNewMessageChange = () => {
        console.log('change');
    }

    return (
        <div className={s.dialog_window}>
            <textarea
                className={s.message_input}
                value={newMessageText}
                onChange={onNewMessageChange}
                placeholder='Enter your message'
            />
        </div>
    );
}

export default DialogWindow;