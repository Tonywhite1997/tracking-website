import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import App from "./App.jsx";
import CustomerSupport from "./pages/CustomerSupport";
import CustomerLogin from "./pages/CustomerLogin";
import Services from "./pages/OurServices";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/dashboardPages/Orders";
import NewOrder from "./pages/dashboardPages/NewOrder";
import CreateUser from "./pages/dashboardPages/CreateUser";
import OrderDetails from "./pages/dashboardPages/OrderDetails";
import ShowTrackInfo from "./pages/TrackPage/ShowTrackInfo";
import AllOrders from "./pages/dashboardPages/AllOrders";
import Users from "./pages/dashboardPages/Users";
import Invoices from "./pages/dashboardPages/Invoices";
import InvoiceDetails from "./pages/dashboardPages/InvoiceDetails";
import EditUser from "./pages/dashboardPages/EditUser";
import ChangePassword from "./pages/dashboardPages/ChangePassword";
import ScrollToTop from "./components/ScrollToTop";

export const api = axios.create({
  baseURL: "https://yoyotracker.onrender.com/api",
  // baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/customer-support", element: <CustomerSupport /> },
      { path: "/login", element: <CustomerLogin /> },
      { path: "/services", element: <Services /> },
      { path: "/track", element: <ShowTrackInfo /> },
      { path: "/track/:trackingCode", element: <ShowTrackInfo /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Dashboard />
      </>
    ),
    children: [
      { index: true, element: <Orders /> },
      { path: "my-orders", element: <Orders /> },
      { path: "order/:id", element: <OrderDetails /> },
      { path: "new-order", element: <NewOrder /> },
      { path: "sign-up", element: <CreateUser /> },
      { path: "all-orders", element: <AllOrders /> },
      { path: "users", element: <Users /> },
      { path: "invoices", element: <Invoices /> },
      { path: "invoice/:id", element: <InvoiceDetails /> },
      { path: "users/:id", element: <EditUser /> },
      { path: "password", element: <ChangePassword /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
