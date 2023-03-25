import { useEffect } from "react";
import { connect } from "react-redux";

import { setUserAuthThunkCreator, logoutThunkCreator } from "../../redux/authReducer";
import Header from "./Header";

const HeaderApiContainer = ({setUserAuthData, login, isAuth, logoutUser}) => {
    const getUserAuthInfo = () => {
        setUserAuthData();
    }

    useEffect(() => {
        getUserAuthInfo();
    }, []);

    return <Header login={login} isAuth={isAuth} logoutUser={logoutUser} />
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

const HeaderContainer = connect(mapStateToProps, {
    setUserAuthData: setUserAuthThunkCreator,
    logoutUser: logoutThunkCreator,
})(HeaderApiContainer);

export default HeaderContainer;