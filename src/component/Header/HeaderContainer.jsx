import { useEffect } from "react";
import { connect } from "react-redux";

import { setUserAuthDataActionCreator } from "../../redux/authReducer";
import Header from "./Header";

import { getAuthInfoRequest } from "../../api/api";

const HeaderApiContainer = ({setUserAuthData, login, isAuth}) => {
    const getUserAuthInfo = () => {
        getAuthInfoRequest()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data;

                setUserAuthData(id, login, email);
            }
        });
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
    setUserAuthData: setUserAuthDataActionCreator,
})(HeaderApiContainer);

export default HeaderContainer;