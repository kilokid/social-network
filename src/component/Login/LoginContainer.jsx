import { connect } from 'react-redux';

import { setLoginDataThunkCreator } from "../../redux/authReducer";

import Login from "./Login";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

const LoginContainer = connect(
    mapStateToProps, {
    requestLoginData: setLoginDataThunkCreator,
})(Login)

export default LoginContainer;