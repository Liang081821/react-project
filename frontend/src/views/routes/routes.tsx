import { createBrowserRouter } from "react-router";
import GlobalLayout from "../layout/GlobalLayout";
import LoginLayout from "../layout/LoginLayout";
import LoginDetail from "../pages/Auth/LoginDetail";

// dynamic import 會自動拆分 bundle >> 有好有壞須自行評估
import { lazy } from "react";
const Register = lazy(() => import("../pages/Auth/RegisterPage"));
const Login = lazy(() => import("../pages/Auth/LoginPage"));
const Stock = lazy(() => import("../pages/Stock/Stock"));
const Home = lazy(() => import("../pages/Blog/BlogPage"));

import PathConstants from "./pathConstants";

// 使用 data mode 的 router
const router = createBrowserRouter([
  {
    path: PathConstants.HOME,
    children: [
      {
        path: PathConstants.HOME,
        element: <GlobalLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },

          {
            path: PathConstants.STOCK,
            element: <Stock />,
          },
        ],
      },
      {
        path: PathConstants.REGISTER,
        element: <LoginLayout />,
        children: [
          {
            index: true,
            element: <Register />,
          },
          { path: PathConstants.LOGIN_DETAIL, element: <LoginDetail /> },
        ],
      },
      {
        path: PathConstants.LOGIN,
        element: <LoginLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          { path: PathConstants.LOGIN_DETAIL, element: <LoginDetail /> },
        ],
      },
    ],
  },
]);

export default router;
