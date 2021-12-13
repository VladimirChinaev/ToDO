import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./pages/Routes";


const MainPage = () => {
    const routes = useRoutes(false);
    return (
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    )
}

export default MainPage;