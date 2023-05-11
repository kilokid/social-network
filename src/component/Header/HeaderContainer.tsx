import { connect } from "react-redux";

import { logoutThunkCreator } from "../../redux/authReducer.ts";
import Header from "./Header";

import { AppStateType } from "../../redux/reduxStore";
import { FC } from "react";

type PropsType = {
    login: string,
    isAuth: boolean,
    logoutUser: () => void,
}

const HeaderApiContainer: FC<PropsType> = ({login, isAuth, logoutUser}) => {

    return <Header login={login} isAuth={isAuth} logoutUser={logoutUser} />
}

const mapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

const HeaderContainer = connect(mapStateToProps, {
    logoutUser: logoutThunkCreator,
})(HeaderApiContainer);

export default HeaderContainer;