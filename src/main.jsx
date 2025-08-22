import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import App from "./App.jsx";
import CustomerSupport from "./pages/CustomerSupport";
import CustomerLogin from "./pages/CustomerLogin";
import Services from "./pages/OurServices";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/customer-support", element: <CustomerSupport /> },
      { path: "/login", element: <CustomerLogin /> },
      { path: "/services", element: <Services /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
