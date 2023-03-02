import Dialogs from './Dialogs';

import { updateNewMessageActionCreator, sendNewMessageActionCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();

                    const onNewMessageChange = (text) => {
                        store.dispatch(updateNewMessageActionCreator(text))
                    }

                    const onSendMessageKeyDown = (e) => {
                        if (e.key === 'Enter') {
                            console.log('send');
                        }
                    }

                    return (
                        <Dialogs
                            messages={state.dialogsPage.dialogsData}
                            newMessageText={state.dialogsPage.newMessagesBody}
                            sendMessage={onSendMessageKeyDown}
                            changeMessage={onNewMessageChange}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;