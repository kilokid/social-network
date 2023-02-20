import Dialog from './Dialog/Dialog';

import s from './Dialogs.module.css';

const Dialogs = () => {
    const dialogsData = [
        {
            id: "0",
            name: 'Artem',
            message: 'Hi bro'
        },
        {
            id: '1',
            name: 'Vanya',
            message: 'What`s up?'
        },
        {
            id: '2',
            name: 'Egor',
            message: 'How a u?'
        },
        {
            id: '3',
            name: 'Nastya',
            message: 'I love u'
        },
        {
            id: '4',
            name: 'Danya',
            message: 'Fuck u man'
        },
        {
            id: '5',
            name: 'Tanya',
            message: 'I miss u'
        }
    ];

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs_items}>
                {dialogsData.map( (dialog) => {
                    return <Dialog key={dialog.id} name={dialog.name} message={dialog.message} id={dialog.id} />
                } )}
            </ul>
        </div>
    );
}

export default Dialogs;