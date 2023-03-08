import Dialog from './Dialog/Dialog';
import DialogWindow from './DialogWindow/DialogWindow';

import s from './Dialogs.module.css';

const Dialogs = ({messages, newMessageText, sendMessage, changeMessage}) => {
    const onSendMessage = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage()
        }
    }

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                {messages.map( ({id, name, messages}) => {
                    return <Dialog key={id} name={name} message={messages[messages.length - 1]} id={id} />
                } )}
            </ul>
            {/* <DialogWindow newMessageText={newMessageText} sendMessage={onSendMessage} changeMessage={changeMessage} /> */}
        </div>
    );
}

export default Dialogs;