const Login = (props) => {
    return (
        <section>
            <h1>Login</h1>
           <LoginForm />
        </section>
    )
}

const LoginForm = () => {
    return (
        <form>
            <ul>
                <li>
                    <input type="text" placeholder="Login" />
                </li>
                <li>
                    <input type="text" placeholder="Password" />
                </li>
                <li>
                    <input type="checkbox"/>
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