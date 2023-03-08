import { updateNewMessageActionCreator, sendNewMessageActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.dialogsData,
        newMessageText: state.dialogsPage.newMessagesBody
    }
}

const DialogsContainer = connect(mapStateToProps, {
    sendMessage: sendNewMessageActionCreator,
    changeMessage: updateNewMessageActionCreator
})(Dialogs);

export default DialogsContainer;