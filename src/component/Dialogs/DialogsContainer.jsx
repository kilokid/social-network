import { actions } from '../../redux/dialogsReducer.tsx';
import { connect } from 'react-redux';

import Dialogs from './Dialogs';
import WithAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.dialogsData,
    }
}

export default compose(
    connect(mapStateToProps, {
        sendMessage: actions.sendNewMessageActionCreator,
    }),
    WithAuthRedirect,
)(Dialogs);