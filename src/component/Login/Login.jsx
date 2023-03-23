import { useForm } from "react-hook-form";

const Login = (props) => {
    const onSubmit = (data) => {
        props.setLoginData({...data});
        props.requestLoginData(data);
    }
    return (
        <section>
            <h1>Login</h1>
           <LoginForm onSubmit={onSubmit} />
        </section>
    )
}

const LoginForm = (props) => {
    const { register, handleSubmit, formState: {errors} } = useForm({mode: 'onBlur'});

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
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
                <li>
                    <button>Login</button>
                </li>
            </ul>
        </form>
    )
}

export default Login;