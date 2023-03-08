import { connect } from "react-redux";

import { playSongActionCreator, stopPlayingSongActionCreator } from "../../redux/musicReducer";

import Music from "./Music";

const mapStateToProps = (state) => {
    return {
        musics: state.musics.musics
    }
}

const MusicContainer = connect(mapStateToProps, {
    playSong: playSongActionCreator,
    stopSong: stopPlayingSongActionCreator
})(Music);

export default MusicContainer;