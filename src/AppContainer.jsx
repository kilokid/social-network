import { connect } from "react-redux";
import { compose } from "redux";

import { getAuthInfoThunkCreator } from "./redux/appReducer.tsx";

import App from "./App";

const mapStateToProps = (state) => ({
    initialLoad: state.app.initialLoad
})

export default compose(connect(mapStateToProps, {
    setInitialLoad: getAuthInfoThunkCreator,
})(App))