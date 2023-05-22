import { ChatMessageType } from "../pages/Chat/ChatPage";

type SubscriberType = (messages: ChatMessageType[]) => void;

let subscribers = [] as Array<SubscriberType>;

let wsChannel: WebSocket | null = null;

const closeHandler = () => {
    setTimeout(createChannel, 3000);
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);

    subscribers.forEach(s => s(newMessages));
}

function createChannel() {
    wsChannel?.removeEventListener('close', closeHandler);
    wsChannel?.close();

    wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

    wsChannel?.addEventListener('close', closeHandler);
    wsChannel?.addEventListener('message', messageHandler);
}

export const chatApi = {
    subscribe(callback: SubscriberType) {
        subscribers.push(callback);
        
        return () => {
            subscribers = subscribers.filter(s => s !== callback);
        }
    },
    unsubscribe(callback: SubscriberType) {
        subscribers = subscribers.filter(s => s !== callback);
    },
    sendMessage(message: string) {
        wsChannel?.send(message);
    },
    start() {
        createChannel();
    },
    stop() {
        subscribers = [];
        wsChannel?.close();
        wsChannel?.removeEventListener('close', closeHandler);
        wsChannel?.removeEventListener('message', messageHandler);
    }
};