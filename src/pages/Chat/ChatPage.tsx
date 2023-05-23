import { React, FC, useEffect, useRef, useState } from "react";
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
    const [autoScrollActive, setAutoScrollActive] = useState(true);
    const messagesAnchorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (autoScrollActive)
        {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'});
        }
    }, [messages]);

    const scrollHandler = (e: React.UIEventHandler<HTMLDivElement>) => {
        const element = e.currentTarget;

        if (Math.abs( (element.scrollHeight - element.scrollTop) - element.clientHeight ) < 300) {
            !autoScrollActive && setAutoScrollActive(true);
        } else {
            autoScrollActive && setAutoScrollActive(false);
        }
    }
    
    return (
        <div style={{height: '400px', overflowY: 'auto'}} onScroll={scrollHandler}>
            {messages.map((m: any, index) => <Message message={m} key={index} />)}
            <div ref={messagesAnchorRef}></div>
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
    const status = useSelector((state: AppStateType) => state.chat.status);

    const dispatch = useDispatch();

    const sendMessageHandler = () => {
        if (!message) return;

        dispatch(sendMessage(message));
        setMessage('');
    }

    return (
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            <button disabled={status !== 'ready'} onClick={sendMessageHandler}>send</button>
        </div>
    )
}

export default ChatPage;