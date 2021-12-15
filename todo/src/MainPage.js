import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/auth.context";
import { useAuth } from "./hooks/auth.hook";
import { useRoutes } from "./pages/Routes";


const MainPage = () => {
    const { login, logout, token, userId } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(false);
    return (
        <AuthContext.Provider value={{
            login, logout, token, userId, isAuthenticated
        }}>
            <BrowserRouter>
                {routes}
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default MainPage;