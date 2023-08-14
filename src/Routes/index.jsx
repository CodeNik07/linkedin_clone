import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import HomeLayout from "../layout/HomeLayout";
import ProfileLayout from "../layout/ProfileLayout"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/home",
        element: <HomeLayout />,
    },
    {
        path: "/profile",
        element: <ProfileLayout />,
    },
]);