import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import App from "../App";
import AuthPage from "../pages/AuthPage"

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/app" element={<App />} />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/app" element={<Navigate to='/auth'></Navigate>} />
            <Route path="/auth" element={<AuthPage />} />
        </Routes>
    )

}

export default useRoutes;