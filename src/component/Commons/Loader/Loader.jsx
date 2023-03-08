import s from './Loader.module.css';

import loader from '../../../assets/images/Loader.svg';

const Loader = () => {
    return (
        <div className={s.loader}>
            <img src={loader} alt='' />
        </div>
    )
}

export default Loader;