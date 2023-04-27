import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/Auth/RegisterPage";

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
    </Routes>
}];
export {
    PUBLIC_ROUTES
};