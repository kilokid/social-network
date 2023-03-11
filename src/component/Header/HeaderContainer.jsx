import { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { setUserAuthDataActionCreator } from "../../redux/authReducer";
import Header from "./Header";

const HeaderApiContainer = ({setUserAuthData, login, isAuth}) => {
    const getUserAuthInfo = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, login, email} = response.data.data;

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