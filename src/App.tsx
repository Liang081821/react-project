import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";

// dynamic import 會自動拆分 bundle >> 有好有壞須自行評估
import { lazy } from "react";
const Crypto = lazy(() => import("./views/Crypto"));
const Stock = lazy(() => import("./views/Stock"));
const Home = lazy(() => import("./views/Home"));

// 使用 data mode 的 router
const router = createBrowserRouter([
  {
    path: "/crypto",
    element: <Crypto />,
  },

  {
    path: "/stock",
    element: <Stock />,
  },

  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
