import s from './Song.module.css';

const Song = ({song}) => {
    return (
        <li>
            <div className={s.cover}>
                {song.cover ? <img src={song.cover} alt={song.title} /> : <span></span>}     
                <button type="button"></button>
            </div>
            <div className={s.info}>
                <h3>{song.title}</h3>
                <p>{song.author}</p>
                <p>{song.time}</p>
            </div>
        </li>
    );
}

export default Song;