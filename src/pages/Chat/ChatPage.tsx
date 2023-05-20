import { FC, useEffect, useState } from "react";

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

const Chat: FC= () => {
    const [ws, setWs] = useState<WebSocket | null>(null);

    useEffect(() => {
        let wsChannel: WebSocket;

        const closeHandler = () => {
            setTimeout(createChannel, 3000);
        }

        function createChannel() {
            wsChannel?.removeEventListener('close', closeHandler);
            wsChannel?.close();

            wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

            wsChannel?.addEventListener('close', closeHandler);

            setWs(wsChannel);
        }
        
        createChannel();
    }, []);

    return (
        <div>
            <Messages ws={ws} />
            <AddMessageForm ws={ws} />
        </div>
    )
}

const Messages: FC<{ws: WebSocket | null}> = ({ws}) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);

    useEffect(() => {
        const messageHandler = (e) => {
                setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)]);
        }

        ws?.addEventListener('message', messageHandler);

        return () => {
            ws?.removeEventListener('message', messageHandler)
        }
    }, [ws])
    
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

const AddMessageForm: FC<{ws: WebSocket | null}> = ({ws}) => {
    const [message, setMessage] = useState('');
    const [isReady, setIsReady] = useState<'pending' | 'ready'>('pending');

    useEffect(() => {
        const openHandler = () => {
            setIsReady('ready');
        }

        ws?.addEventListener('open', openHandler);

        return () => {
            ws?.removeEventListener('open', openHandler);
        }
    }, [ws])

    const sendMessage = () => {
        if (!message) return;

        ws?.send(message);
        setMessage('');
    }

    return (
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            <button disabled={ws === null || isReady !== 'ready'} onClick={sendMessage}>send</button>
        </div>
    )
}

export default ChatPage;