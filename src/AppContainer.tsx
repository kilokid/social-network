import { connect } from "react-redux";
import { compose } from "redux";

import { getAuthInfoThunkCreator } from "./redux/appReducer";
import { AppStateType } from "./redux/reduxStore";

import App from "./App";

const mapStateToProps = (state: AppStateType) => ({
    initialLoad: state.app.initialLoad
})

export default compose(connect(mapStateToProps, {
    setInitialLoad: getAuthInfoThunkCreator,
})(App))