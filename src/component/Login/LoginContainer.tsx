import { connect } from 'react-redux';

import { setLoginDataThunkCreator } from "../../redux/authReducer.ts";
import { AppStateType } from '../../redux/reduxStore';

import Login from "./Login.tsx";

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    errorMessage: state.auth.someErrors,
    captchaUrl: state.auth.url,
})

const LoginContainer = connect(
    mapStateToProps, {
    requestLoginData: setLoginDataThunkCreator,
})(Login)

export default LoginContainer;