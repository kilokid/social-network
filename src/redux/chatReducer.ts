import { chatApi } from "../api/chatApi";
import { ChatMessageType } from "../pages/Chat/ChatPage";
import { AppStateType, InferActionsTypes } from "./reduxStore";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";

const initialState = {
    messages: [] as ChatMessageType[],
}

export type InitialStateType = typeof initialState;

const chatReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'MESSAGES_RECEVIED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload]
            }
        default:
            return state;
    }
};

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    messagesReceivedActionCreator: (messages: ChatMessageType[]) => ({
        type: 'MESSAGES_RECEVIED', payload: messages,
    } as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceivedActionCreator(messages));
        }
    }    

    return _newMessageHandler;
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.start();
    chatApi.subscribe(newMessageHandlerCreator(dispatch));
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.unsubscribe(newMessageHandlerCreator(dispatch));
    chatApi.stop();
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatApi.sendMessage(message);
}

export default chatReducer;