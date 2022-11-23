import { Outlet, Navigate } from "react-router-dom"

import { UserConsumer } from './../utils/contexts/user'
import { getAccessToken } from "./../utils/network-data"

const ProtectedRoute = () => {
    return (
        <UserConsumer>
            {(user) => {
                return (
                    getAccessToken() !== "" && user.isAuthenticated
                    ? <Outlet/>
                    : <Navigate to="/login"/>
                )
            }}
        </UserConsumer>
    )
}

export {
    ProtectedRoute
}