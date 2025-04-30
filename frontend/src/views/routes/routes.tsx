import { createBrowserRouter } from "react-router";
import GlobalLayout from "../layout/GlobalLayout";
import CryptoLayout from "../layout/CryptoLayout";
import CryptoDetail from "../pages/Crypto/CryptoDetail";

// dynamic import 會自動拆分 bundle >> 有好有壞須自行評估
import { lazy } from "react";
const Crypto = lazy(() => import("../pages/Crypto/Crypto"));
const Stock = lazy(() => import("../pages/Stock/Stock"));
const Home = lazy(() => import("../pages/Blog/BlogPage"));

import PathConstants from "./pathConstants";

// 使用 data mode 的 router
const router = createBrowserRouter([
  {
    path: PathConstants.HOME,
    element: <GlobalLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PathConstants.CRYPTO,
        element: <CryptoLayout />,
        children: [
          {
            index: true,
            element: <Crypto />,
          },
          { path: PathConstants.CRYPTO_DETAIL, element: <CryptoDetail /> },
        ],
      },
      {
        path: PathConstants.STOCK,
        element: <Stock />,
      },
    ],
  },
]);

export default router;
