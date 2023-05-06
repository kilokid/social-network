import { ComponentType, FC } from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

import { AppStateType } from '../../redux/reduxStore';

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

type MapPropsType = {
    isAuth: boolean
}

function WithAuthRedirect <WCP>(Component: ComponentType<WCP>) {
    const RedirectContainer: FC<WCP & MapPropsType> = (props) => {
        const {isAuth, ...restProps} = props;

        return (
            <>
                {!isAuth ? <Navigate to="/login" /> : <Component {...restProps} />}
            </>
        )
    }

    const ConnectRedirectContainer = connect<MapPropsType, {}, WCP, AppStateType>(mapStateToProps)(RedirectContainer);

    return ConnectRedirectContainer;
}

export default WithAuthRedirect