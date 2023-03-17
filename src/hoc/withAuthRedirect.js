import { connect } from "react-redux"
import { Navigate } from "react-router-dom"


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const WithAuthRedirect = (Component) => {
    const RedirectContainer = (props) => {
        return (
            <>
                {!props.isAuth ? <Navigate to="/login" /> : <Component {...props} />}
            </>
        )
    }

    const ConnectRedirectContainer = connect(mapStateToProps)(RedirectContainer);

    return ConnectRedirectContainer;
}

export default WithAuthRedirect