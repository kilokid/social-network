const PLAY_SONG = 'PLAY-SONG';
const STOP_PLAYING = 'STOP-PLAYING';

const initialState = {
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

const musicReducer = (state = initialState, action) => {
    switch(action.type) {
        case PLAY_SONG:
            console.log('play');
        case STOP_PLAYING:
            console.timeLog('stop')
        default:
            return state;
    }
}

export const playSongActionCreator = (musicId) => ({type: PLAY_SONG, musicId});
export const stopPlayingSongActionCreator = (musicId) => ({type: STOP_PLAYING, musicId});

export default musicReducer;