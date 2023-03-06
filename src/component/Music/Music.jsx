import Song from "./Song/Song";

const Music = ({musics, ...props}) => {
    const elements = musics.musics.map(song => {
        return <Song key={song.id} song={song} />
    })

    return (
        <div>
            <h2>Music</h2>
            <ul>
                {elements}
            </ul>
        </div>
    )
}

export default Music;