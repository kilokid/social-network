import { connect } from "react-redux";
import { compose } from "redux";

import { setInitialLoadActionCreator } from "./redux/appReducer";

import App from "./App";

const mapStateToProps = (state) => ({
    initialLoad: state.app.initialLoad
})

export default compose(connect(mapStateToProps, {
    setInitialLoad: setInitialLoadActionCreator,
})(App))