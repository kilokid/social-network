import { updateNewMessageActionCreator, sendNewMessageActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

import Dialogs from './Dialogs';

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
                e.preventDefault();
                dispatch(sendNewMessageActionCreator());
            }
        },
        changeMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;