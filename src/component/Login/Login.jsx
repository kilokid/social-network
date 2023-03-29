import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

import s from './Login.module.css';

const Login = (props) => {
    const onSubmit = (data) => {
        props.requestLoginData(data);
    }

    if (props.isAuth) return <Navigate to="/profile" />;

    return (
        <section className={s.login_form}>
            <h1 className={s.title}>Login</h1>
            <LoginForm onSubmit={onSubmit} errorMessage={props.errorMessage} />
        </section>
    )
}

const LoginForm = (props) => {
    const { register, handleSubmit, formState: {errors}, setError } = useForm({mode: 'onBlur'});

    useEffect(() => {
        if (props.errorMessage) {
            setError("form", { type: "custom", message: props.errorMessage});
        }
        // eslint-disable-next-line
    }, [props.errorMessage]);

    return (
        <form className={s.form} onSubmit={handleSubmit(props.onSubmit)}>
            <ul>
                <li>
                    <input {...register("email", {required: 'Please enter your Email'})} type="text" placeholder="Email" />
                    {errors.email && <span>{errors.email.message}</span>}
                </li>
                <li>
                    <input {...register("password", {required: 'Please enter your password'})} type="password" placeholder="Password" />
                    {errors.password && <span>{errors.password.message}</span>}
                </li>
                <li>
                    <input {...register("rememberMe")} type="checkbox"/>
                    <span>Remember me</span>
                </li>
                {errors.form && <span>{errors.form.message}</span>}
                <li>
                    <button>Login</button>
                </li>
            </ul>
        </form>
    )
}

export default Login;