import { Navigate } from "react-router-dom"
const WithAuthRedirect = (Component) => {
    const RedirectContainer = (props) => {
        return (
            <>
                {!props.isAuth ? <Navigate to="/login" /> : <Component {...props} />}
            </>
        )
    }

    return RedirectContainer;
}

export default WithAuthRedirect