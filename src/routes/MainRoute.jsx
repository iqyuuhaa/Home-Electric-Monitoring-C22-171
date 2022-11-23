import { Routes, Route } from "react-router-dom"

import DashboardPage from "./../pages/DashboardPage"
import ReportPage from "./../pages/ReportPage"
import LogPage from "./../pages/LogPage"
import ControlPage from "./../pages/ControlPage"

import LoginPage from "./../pages/LoginPage"
import RegisterPage from "./../pages/RegisterPage"
import HomePage from "./../pages/HomePage"
import NotFoundPage from "../pages/NotFoundPage"

import { ProtectedRoute } from "./RouteHelper"

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/"  element={ <HomePage /> } />
            <Route path="/*" element={ <NotFoundPage /> } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/register" element={ <RegisterPage /> } />

            <Route element={ <ProtectedRoute /> }>
                <Route path="/dashboard" element={ <DashboardPage /> } />
                <Route path="/report" element={ <ReportPage /> } />
                <Route path="/log" element={ <LogPage /> } />
                <Route path="/control" element={ <ControlPage /> } />
            </Route>
        </Routes>
    )
}

export default MainRoute