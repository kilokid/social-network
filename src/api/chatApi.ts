import { ChatMessageType } from "../pages/Chat/ChatPage";

type SubscriberType = (messages: ChatMessageType[]) => void;

const subscribers = [] as Array<SubscriberType>;

export const chatApi = {
    subscribe(callback: SubscriberType) {
        subscribers.push(callback);
    }
};