import { connect } from 'react-redux';


import { AppStateType } from '../../redux/reduxStore';

import Login from "./Login.tsx";

const mapStateToProps = (state: AppStateType) => ({
    
})

const LoginContainer = connect(
    mapStateToProps, {
    
})(Login)

export default LoginContainer;