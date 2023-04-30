import { InferActionsTypes } from "./reduxStore";

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

type InitialStateType = typeof initialState;

const musicReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) {
        case 'PLAY_SONG':
            console.log('play');
        case 'STOP_PLAYING':
            console.timeLog('stop')
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    playSongActionCreator: (musicId: string) => ({type: 'PLAY_SONG', musicId}),
    stopPlayingSongActionCreator: (musicId: string) => ({type: 'STOP_PLAYING', musicId}),
}

export default musicReducer;