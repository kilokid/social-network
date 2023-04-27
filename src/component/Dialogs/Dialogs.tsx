import Dialog from './Dialog/Dialog';
import DialogWindow from './DialogWindow/DialogWindow';

import s from './Dialogs.module.css';
import { FC } from 'react';

type MessagesType = {
    id: number,
    name: string,
    messages: Array<string>,
}

type PropsType = {
    messages: Array<MessagesType>,
    sendMessage: (messageText: string) => void,
};

const Dialogs: FC<PropsType> = ({messages, sendMessage}) => {
    const onSendMessage = (data: string) => {
        sendMessage(data)
    }

    return (
        <>
        <div className={s.notice}>❗️Section under development</div>
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                {messages.map( ({id, name, messages}) => {
                    return <Dialog key={id} name={name} message={messages[messages.length - 1]} id={id} />
                } )}
            </ul>
            <DialogWindow sendMessage={onSendMessage} />
        </div>
        </>
    );
}

export default Dialogs;