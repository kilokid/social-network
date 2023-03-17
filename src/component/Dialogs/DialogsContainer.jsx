import { updateNewMessageActionCreator, sendNewMessageActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

import Dialogs from './Dialogs';
import WithAuthRedirect from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.dialogsData,
        newMessageText: state.dialogsPage.newMessagesBody,
    }
}

const AuthRedirectContainer = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {
    sendMessage: sendNewMessageActionCreator,
    changeMessage: updateNewMessageActionCreator
})(AuthRedirectContainer);

export default DialogsContainer;