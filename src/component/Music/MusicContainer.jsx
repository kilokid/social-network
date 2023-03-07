import { connect } from "react-redux";

import { playSongActionCreator, stopPlayingSongActionCreator } from "../../redux/musicReducer";

import Music from "./Music";

const mapStateToProps = (state) => {
    return {
        musics: state.musics.musics
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playSong: (musicId) => {
            dispatch(playSongActionCreator(musicId));
        },
        stopSong: (musicId) => {
            dispatch(stopPlayingSongActionCreator(musicId));
        },
    }
}

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);

export default MusicContainer;