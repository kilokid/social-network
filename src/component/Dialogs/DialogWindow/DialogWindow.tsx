import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import s from './DialogWindow.module.css';
import { FC } from 'react';

type PropsType = {
    sendMessage: (textMessage: string) => void,
}

const DialogWindow: FC<PropsType> = ({sendMessage}) => {
    const {dialogId} = useParams();

    const onSubmit = (data: string) => {
        sendMessage(data)
    }

    return (
        <div>
           <DialogForm onSubmit={onSubmit} />
        </div>
    );
}

type DialogFormPropsType = {
    onSubmit: () => void,
}

const DialogForm: FC<DialogFormPropsType> = ({onSubmit}) => {
    const {register, handleSubmit} = useForm();

    return (
        <form className={s.dialog_window} onSubmit={handleSubmit(onSubmit)}>
            <textarea
                   className={s.message_input}
                   {...register('newMessage')}
                   type='text'
                   placeholder='Enter your message'
               />
               <button>Send</button>
        </form>
    )
}

export default DialogWindow;