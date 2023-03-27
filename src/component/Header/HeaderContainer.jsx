import { connect } from "react-redux";

import { logoutThunkCreator } from "../../redux/authReducer";
import Header from "./Header";

const HeaderApiContainer = ({login, isAuth, logoutUser}) => {

    return <Header login={login} isAuth={isAuth} logoutUser={logoutUser} />
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

const HeaderContainer = connect(mapStateToProps, {
    logoutUser: logoutThunkCreator,
})(HeaderApiContainer);

export default HeaderContainer;