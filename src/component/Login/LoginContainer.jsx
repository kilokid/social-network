import { connect } from 'react-redux';

import { setLoginDataThunkCreator } from "../../redux/authReducer.tsx";

import Login from "./Login";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    errorMessage: state.auth.someErrors,
    captchaUrl: state.auth.url,
})

const LoginContainer = connect(
    mapStateToProps, {
    requestLoginData: setLoginDataThunkCreator,
})(Login)

export default LoginContainer;