import Dialog from './Dialog/Dialog';

import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                <Dialog name="Artem" message="Hi bro" id="0" />
                <Dialog name="Vanya" message="Wat's up" id="1" />
                <Dialog name="Egor" message="How a u?" id="2" />
                <Dialog name="Nastya" message="I love you" id="3" />
                <Dialog name="Danya" message="Fuck  man" id="4" />
            </ul>
        </div>
    );
}

export default Dialogs;