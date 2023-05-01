import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/Auth/RegisterPage";
import AddEditPage from "../pages/Portfolio/AddEditPage";
import PortfolioListPage from "../pages/Portfolio/PortfolioListPage";
import { PrivateRoute } from "./PermissionRoute";

const HomePage = lazy(() => import("../pages/Home/HomePage"));
const LoginPage = lazy(() => import("../pages/Auth/LoginPage"));

const PUBLIC_ROUTES = [{
    name: "Redirect tot home",
    path: "*",
    element: <Navigate to="/" />
}, {
    name: "Home",
    path: "/",
    element: <HomePage />
}, {
    name: "Auth",
    path: "/auth/*",
    element: <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<RegisterPage />} />
        <Route path="/change-password" element={<RegisterPage />} />
    </Routes>
}, {
    name: "Portfolio",
    path: "/portfolio/*",
    element: <PrivateRoute>
        <Routes>
            <Route index element={<PortfolioListPage />} />
            <Route path="/create/*" element={<AddEditPage />} />
        </Routes>
    </PrivateRoute>
}];
export {
    PUBLIC_ROUTES
};