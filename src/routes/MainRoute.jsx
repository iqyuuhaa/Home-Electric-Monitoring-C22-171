import { BrowserRouter, Routes, Route } from "react-router-dom"

import Sidebar from "./../components/Sidebar"

import DashboardPage from "./../pages/DashboardPage"
import ReportPage from "./../pages/ReportPage"
import LogPage from "./../pages/LogPage"
import ControlPage from "./../pages/ControlPage"
import ProfilePage from "./../pages/ProfilePage"

import LoginPage from "./../pages/LoginPage"
import RegisterPage from "./../pages/RegisterPage"
import HomePage from "./../pages/HomePage"
import NotFoundPage from "../pages/NotFoundPage"

import { ProtectedRoute } from "./RouteHelper"

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={ <HomePage /> } />
                <Route path="/*" element={ <NotFoundPage /> } />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="/register" element={ <RegisterPage /> } />

                <Route element={ <ProtectedRoute /> }>
                    <Route path="/dashboard" element={ <Sidebar props={ <DashboardPage /> } /> } />
                    <Route path="/report" element={ <Sidebar props={ <ReportPage /> } /> } />
                    <Route path="/log" element={ <Sidebar props={ <LogPage /> } /> } />
                    <Route path="/control" element={ <Sidebar props={ <ControlPage /> } /> } />
                    <Route path="/profile" element={ <Sidebar props={ <ProfilePage /> } /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoute