import Dialog from './Dialog/Dialog';
import DialogWindow from './DialogWindow/DialogWindow';

import s from './Dialogs.module.css';

const Dialogs = ({messages, newMessageText, sendMessage, changeMessage}) => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                {messages.map( ({id, name, messages}) => {
                    return <Dialog key={id} name={name} message={messages[messages.length - 1]} id={id} />
                } )}
            </ul>
            {/* <DialogWindow newMessageText={newMessageText} sendMessage={sendMessage} changeMessage={changeMessage} /> */}
        </div>
    );
}

export default Dialogs;