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
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <ul>
                <li>
                    <input {...register("email")} type="text" placeholder="Email" />
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

export default Login;