import { chatApi } from "../api/chatApi";
import { ChatMessageType } from "../pages/Chat/ChatPage";
import { AppStateType, InferActionsTypes } from "./reduxStore";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";

type StatusType = 'pending' | 'ready';

const initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType,
}

export type InitialStateType = typeof initialState;

const chatReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'MESSAGES_RECEVIED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload]
            }
        case 'STATUS_CHANGED':
            return {
                ...state,
                status: action.payload,
            }
        default: 
            return state;
    }
};

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    messagesReceivedActionCreator: (messages: ChatMessageType[]) => ({
        type: 'MESSAGES_RECEVIED', payload: messages,
    } as const),
    changeStatusActionCreator: (status: StatusType) => ({
        type: 'STATUS_CHANGED', payload: status,
    } as const),
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

let _statusChangedHandler: ((status: StatusType) => void) | null = null;
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if ( _statusChangedHandler  === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.changeStatusActionCreator(status));
        }
    }    

    return _statusChangedHandler;
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.start();
    chatApi.subscribe('messages-recevied', newMessageHandlerCreator(dispatch));
    chatApi.subscribe('status-changed', statusChangedHandlerCreator(dispatch));
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.unsubscribe('messages-recevied', newMessageHandlerCreator(dispatch));
    chatApi.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch));
    chatApi.stop();
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatApi.sendMessage(message);
}

export default chatReducer;