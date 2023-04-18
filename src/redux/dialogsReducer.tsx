const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

type DialogsDataType = {
    id: string,
    name: string,
    messages: Array<string>
}

type InitialStateType = {
    dialogsData: DialogsDataType[],
    newMessagesBody: string
}

const initialState: InitialStateType = {
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

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case SEND_NEW_MESSAGE: {
            return {
                ...state,
                newMessagesBody: action.text.newMessage
            }
        }
        default: 
            return state;
    }
}

type SendMessageType = {
    type: typeof SEND_NEW_MESSAGE,
    text: DialogsDataType
}

export const sendNewMessageActionCreator = (data: any): SendMessageType => {
    return {
        type: SEND_NEW_MESSAGE,
        text: {...data}
    }
}

export default dialogsReducer;