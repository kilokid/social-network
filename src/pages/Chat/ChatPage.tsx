import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startMessagesListening, stopMessagesListening, sendMessage } from "../../redux/chatReducer";

import { AppStateType } from "../../redux/reduxStore";

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string,
}

const ChatPage: FC = () => {
    return (
        <div>
            <Chat />
        </div>
    )
}

const Chat: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startMessagesListening());

        return () => {
            dispatch(stopMessagesListening());
        }
    }, []);

    return (
        <div>
            <Messages />
            <AddMessageForm />
        </div>
    )
}

const Messages: FC = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages);
    
    return (
        <div style={{height: '400px', overflowY: 'auto'}}>
            {messages.map((m: any, index) => <Message message={m} key={index} />)}
        </div>
    )
}

const Message: FC<{message: ChatMessageType}> = ({message}) => {
    return (
        <div>
            <img src={message.photo} alt="" />
            <h3>{message.userName}</h3>
            {message.message}
        </div>
    )
}

const AddMessageForm: FC = () => {
    const [message, setMessage] = useState('');
    const [isReady, setIsReady] = useState<'pending' | 'ready'>('pending');

    const dispatch = useDispatch();

    const sendMessageHandler = () => {
        if (!message) return;

        dispatch(sendMessage(message));
        setMessage('');
    }

    return (
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            <button disabled={false} onClick={sendMessageHandler}>send</button>
        </div>
    )
}

export default ChatPage;