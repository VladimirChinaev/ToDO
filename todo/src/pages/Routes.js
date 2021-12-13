import React from "react";
import { Route, Routes } from "react-router-dom";
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
            <Route path="/auth" element={<AuthPage />} />
        </Routes>
    )

}

export default useRoutes;