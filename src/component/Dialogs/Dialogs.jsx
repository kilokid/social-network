import Dialog from './Dialog/Dialog';

import s from './Dialogs.module.css';

const Dialogs = ({messages}) => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                {messages.map( ({id, name, message}) => {
                    return <Dialog key={id} name={name} message={message} id={id} />
                } )}
            </ul>
        </div>
    );
}

export default Dialogs;