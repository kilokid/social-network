import { useForm } from "react-hook-form";
import { connect } from 'react-redux';

import { setLoginDataActionCreator } from "../../redux/formReducer";

const LoginComponent = (props) => {
    const onSubmit = (data) => {
        props.setLoginData({...data});
    }
    return (
        <section>
            <h1>Login</h1>
           <LoginForm onSubmit={onSubmit} />
        </section>
    )
}

const LoginForm = (props) => {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <ul>
                <li>
                    <input {...register("login")} type="text" placeholder="Login" />
                </li>
                <li>
                    <input {...register("password")} type="text" placeholder="Password" />
                </li>
                <li>
                    <input {...register("rememberMe")} type="checkbox"/>
                    <span>Remember me</span>
                </li>
                <li>
                    <button>Login</button>
                </li>
            </ul>
        </form>
    )
}

const mapStateToProps = () => {
    return {

    }
}

const Login = connect(mapStateToProps, {
    setLoginData: setLoginDataActionCreator,
})(LoginComponent)

export default Login;