import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./output.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Auth/login.jsx";
import Register from "./components/Auth/Register.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element:<Register/>
  },
  {
    path:"dashboard",
    element: <Dashboard />
  }
],
{
  future: {
    v7_skipActionErrorRevalidation: true, 
    v7_relativeSplatPath: true,
  },
}
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
