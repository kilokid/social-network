import { ChatMessageType } from "../pages/Chat/ChatPage";

type SubscriberType = (messages: ChatMessageType[]) => void;

// let subscribers = [] as Array<SubscriberType>;

let wsChannel: WebSocket | null = null;

const subscribers = {
    'messages-recevied': [] as MessageReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[],
}

const closeHandler = () => {
    notifySubscribersAboutStatus('pending');
    console.log('RECONNECT');
    setTimeout(createChannel, 3000);
}

const notifySubscribersAboutStatus = (status: StatusChangedSubscriberType) => {
    // @ts-ignore
    subscribers['status-changed'].forEach(s => s(status));
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);

    subscribers['messages-recevied'].forEach(s => s(newMessages));
}

const openHandler = () => {
    notifySubscribersAboutStatus('ready');
}

const errorHandler = () => {
    notifySubscribersAboutStatus('error');
    console.error('REFRESH PAGE');
}

const cleanUp = () => {
    wsChannel?.removeEventListener('close', closeHandler);
    wsChannel?.removeEventListener('message', messageHandler);
    wsChannel?.removeEventListener('open', openHandler);
    wsChannel?.removeEventListener('error', errorHandler);
}

function createChannel() {
    cleanUp();
    wsChannel?.close();

    wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    notifySubscribersAboutStatus('pending');
    wsChannel?.addEventListener('close', closeHandler);
    wsChannel?.addEventListener('message', messageHandler);
    wsChannel?.addEventListener('open', openHandler);
    wsChannel?.addEventListener('error', errorHandler);
}

export const chatApi = {
    subscribe(eventName, callback: MessageReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[eventName].push(callback);
        
        return () => {
            // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback);
        }
    },
    unsubscribe(eventName, callback: MessageReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback);
    },
    sendMessage(message: string) {
        wsChannel?.send(message);
    },
    start() {
        createChannel();
    },
    stop() {
        subscribers['messages-recevied'] = [];
        subscribers['status-changed'] = [];
        wsChannel?.close();
        cleanUp();
    }
};

type MessageReceivedSubscriberType = SubscriberType;
type StatusChangedSubscriberType = 'pending' | 'ready' | 'error';