import { connect } from 'react-redux';

import { setLoginDataActionCreator, setLoginDataThunkCreator } from "../../redux/formReducer";

import Login from "./Login";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

const LoginContainer = connect(
    mapStateToProps, {
    setLoginData: setLoginDataActionCreator,
    requestLoginData: setLoginDataThunkCreator,
})(Login)

export default LoginContainer;