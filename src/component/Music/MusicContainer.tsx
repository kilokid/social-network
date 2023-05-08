import { connect } from "react-redux";

import { actions } from "../../redux/musicReducer.ts";

import Music from "./Music";

import { AppStateType } from "../../redux/reduxStore";

const mapStateToProps = (state: AppStateType) => {
    return {
        musics: state.musics.musics
    }
}

const MusicContainer = connect(mapStateToProps, {
    playSong: actions.playSongActionCreator,
    stopSong: actions.stopPlayingSongActionCreator
})(Music);

export default MusicContainer;