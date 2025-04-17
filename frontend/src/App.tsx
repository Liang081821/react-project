import "./App.css";
import { RouterProvider } from "react-router";
import router from "./views/routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
