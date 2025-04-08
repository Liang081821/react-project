import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },

  {
    path: "/test",
    element: <div>Test if i success!</div>,
  },

  {
    path: "/terrible",
    element: <div>Terrible</div>,
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
