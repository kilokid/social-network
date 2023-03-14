import { useEffect } from "react";
import { connect } from "react-redux";

import { setUserAuthThunkCreator } from "../../redux/authReducer";
import Header from "./Header";

const HeaderApiContainer = ({setUserAuthData, login, isAuth}) => {
    const getUserAuthInfo = () => {
        setUserAuthData();
    }

    useEffect(() => {
        getUserAuthInfo();
    }, []);

    return <Header login={login} isAuth={isAuth} />
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

const HeaderContainer = connect(mapStateToProps, {
    setUserAuthData: setUserAuthThunkCreator,
})(HeaderApiContainer);

export default HeaderContainer;