import { InferActionsTypes } from "./reduxStore";

const initialState = {
    dialogsData: [
        {
            id: "0",
            name: 'Curtis Morales',
            messages: [
                '!)(@(#@',
            ]
        },
        {
            id: '1',
            name: 'Michael Lee',
            messages: [
                '))!*@@& ###$@',
            ]
        },
        {
            id: '2',
            name: 'Timothy Thomas',
            messages: [
                '!@% . *& *(&# . )(* (*#',
            ]
        },
        {
            id: '3',
            name: 'Barbara Valdez',
            messages: [
                '@&#(* #&#(*& )#(* )#*',
            ]
        },
        {
            id: '4',
            name: 'Elizabeth Johnson',
            messages: [
                '@*&^#$&^$^',
            ]
        },
        {
            id: '5',
            name: 'John Lopez',
            messages: [
                '*&@^!^',
            ]
        }
    ],
    newMessagesBody: '',
};

type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) {
        case 'SEND_NEW_MESSAGE': {
            return {
                ...state,
                newMessagesBody: action.text.newMessage
            }
        }
        default: 
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    sendNewMessageActionCreator: (data: any) => ({type: 'SEND_NEW_MESSAGE', text: {...data} as const})
}

export default dialogsReducer;