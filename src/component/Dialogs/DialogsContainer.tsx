import { actions } from '../../redux/dialogsReducer.ts';
import { connect } from 'react-redux';

import Dialogs from './Dialogs.tsx';
import WithAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/reduxStore';

const mapStateToProps = (state: AppStateType) => {}

export default compose(
    connect(mapStateToProps, {
        sendMessage: actions.sendNewMessageActionCreator,
    }),
    WithAuthRedirect,
)(Dialogs);