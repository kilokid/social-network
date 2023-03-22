import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import s from './DialogWindow.module.css';

const DialogWindow = ({sendMessage}) => {
    const {dialogId} = useParams();

    const onSubmit = (data) => {
        sendMessage(data)
    }

    return (
        <div className={s.dialog_window}>
           <DialogForm onSubmit={onSubmit} />
        </div>
    );
}

const DialogForm = ({onSubmit}) => {
    const {register, handleSubmit} = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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