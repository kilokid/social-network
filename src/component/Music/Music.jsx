import Song from "./Song/Song";

import s from './Music.module.css';

const Music = ({musics, ...props}) => {
    const elements = musics.map(song => {
        return <Song key={song.id} song={song} />
    })

    return (
        <>
            <div className={s.notice}>❗️Section under development</div>
            <div>
                <h2>Music</h2>
                <ul>
                    {elements}
                </ul>
            </div>
        </>
    )
}

export default Music;