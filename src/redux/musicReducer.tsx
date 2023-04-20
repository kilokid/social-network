const PLAY_SONG = 'PLAY-SONG';
const STOP_PLAYING = 'STOP-PLAYING';

type MusicsType = {
    id: number,
    title: string,
    author: string,
    time: string,
    cover: string,
    play: boolean,
    added: boolean,
}

type InitialStateType = {
    musics: MusicsType[]
}

const initialState: InitialStateType = {
    musics: [
        {
            id: 0,
            title: 'NEON BLADE',
            author: 'MoonDeity',
            time: '4:25',
            cover: '',
            play: false,
            added: true,
        },
        {
            id: 1,
            title: 'Nikto Ne Nuzhen',
            author: 'KIZARU',
            time: '2:55',
            cover: '',
            play: false,
            added: true,
        },
        {
            id: 3,
            title: 'Hotline',
            author: 'Kaito Shoma',
            time: '2:38',
            cover: '',
            play: false,
            added: true,
        },
    ]
}

const musicReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) {
        case PLAY_SONG:
            console.log('play');
        case STOP_PLAYING:
            console.timeLog('stop')
        default:
            return state;
    }
}

type ActionsTypes = PlaySongType | StopSongPlayingType;

type PlaySongType = {
    type: typeof PLAY_SONG,
    musicId: string
}

export const playSongActionCreator = (musicId: string): PlaySongType => ({type: PLAY_SONG, musicId});

type StopSongPlayingType = {
    type: typeof STOP_PLAYING,
    musicId: string
}

export const stopPlayingSongActionCreator = (musicId: string): StopSongPlayingType => ({type: STOP_PLAYING, musicId});

export default musicReducer;