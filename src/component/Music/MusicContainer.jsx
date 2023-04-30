import { connect } from "react-redux";

import { actions } from "../../redux/musicReducer.ts";

import Music from "./Music";

const mapStateToProps = (state) => {
    return {
        musics: state.musics.musics
    }
}

const MusicContainer = connect(mapStateToProps, {
    playSong: actions.playSongActionCreator,
    stopSong: actions.stopPlayingSongActionCreator
})(Music);

export default MusicContainer;