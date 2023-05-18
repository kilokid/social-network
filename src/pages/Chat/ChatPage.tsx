import { FC, useEffect, useState } from "react";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

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
    return (
        <div>
            <Messages />
            <AddMessageForm />
        </div>
    )
}

const Messages: FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            setMessages(JSON.parse(e.data));
        })
    }, [])
    
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
            <br />
            <h3>{message.userName}</h3>
            {message.message}
            <hr />
        </div>
    )
}

const AddMessageForm: FC = () => {
    return (
        <div>
            <textarea></textarea>
            <button>send</button>
        </div>
    )
}

export default ChatPage;