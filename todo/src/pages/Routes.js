import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage"
import App from "../App";
import { authPage, appPage } from "./EndPoints"

export const useRoutes = isAuthenticated => {
    console.log("And Here:", isAuthenticated);
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path={authPage} element={<Navigate to={appPage}></Navigate>} />
                <Route path={appPage} element={<App />} />
                <Route path="*" element={<Navigate to={appPage}></Navigate>} />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path={appPage} element={<App />} />
            <Route path={authPage} element={<AuthPage />} />
            <Route path="*" element={<Navigate to={authPage}></Navigate>} />
        </Routes>
    )

}

export default useRoutes;