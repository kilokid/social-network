import Dialog from './Dialog/Dialog';
import DialogWindow from './DialogWindow/DialogWindow';

import s from './Dialogs.module.css';
import { Navigate } from 'react-router-dom';

const Dialogs = ({messages, sendMessage, isAuth}) => {
    const onSendMessage = (data) => {
        sendMessage(data)
    }

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                {messages.map( ({id, name, messages}) => {
                    return <Dialog key={id} name={name} message={messages[messages.length - 1]} id={id} />
                } )}
            </ul>
            <DialogWindow sendMessage={onSendMessage} />
        </div>
    );
}

export default Dialogs;