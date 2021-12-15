import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage"
import App from "../App";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/auth" element={<Navigate to='/app'></Navigate>} />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/app" element={<App />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="*" element={<Navigate to='/auth'></Navigate>} />
        </Routes>
    )

}

export default useRoutes;