import Dialogs from './Dialogs';

import { updateNewMessageActionCreator, sendNewMessageActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState();

//                     const onNewMessageChange = (text) => {
//                         store.dispatch(updateNewMessageActionCreator(text))
//                     }

//                     const onSendMessageKeyDown = (e) => {
//                         if (e.key === 'Enter') {
//                             console.log('send');
//                         }
//                     }

//                     return (
//                         <Dialogs
//                             messages={state.dialogsPage.dialogsData}
//                             newMessageText={state.dialogsPage.newMessagesBody}
//                             sendMessage={onSendMessageKeyDown}
//                             changeMessage={onNewMessageChange}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.dialogsData,
        newMessageText: state.dialogsPage.newMessagesBody
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (e) => {
            if (e.key === 'Enter') {
                console.log('send');
            }
        },
        changeMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;