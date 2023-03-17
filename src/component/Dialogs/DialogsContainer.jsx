import { updateNewMessageActionCreator, sendNewMessageActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

import Dialogs from './Dialogs';
import WithAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.dialogsData,
        newMessageText: state.dialogsPage.newMessagesBody,
    }
}

export default compose(
    connect(mapStateToProps, {
        sendMessage: sendNewMessageActionCreator,
        changeMessage: updateNewMessageActionCreator
    }),
    WithAuthRedirect,
)(Dialogs);