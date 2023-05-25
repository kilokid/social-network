import Dialog from './Dialog/Dialog';
import DialogWindow from './DialogWindow/DialogWindow';

import { actions } from '../../redux/dialogsReducer.ts';

import s from './Dialogs.module.css';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';

type MessagesType = {
    id: number,
    name: string,
    messages: Array<string>,
}

const Dialogs: FC = () => {
    const messages = useSelector((state: AppStateType) => state.dialogsPage.dialogsData)
    const dispatch = useDispatch();

    const onSendMessage = (data: string) => {
        dispatch(actions.sendNewMessageActionCreator(data));
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