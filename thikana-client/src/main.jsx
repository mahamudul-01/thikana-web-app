import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root/Root";
import Home from "./pages/Home/Home";
import Rent from "./pages/Rent/Rent";
import Buy from "./pages/Buy/Buy";
import Sell from "./pages/Sell/Sell";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/rent',
        element: <Rent></Rent>
      },
      {
        path: '/buy',
        element: <Buy></Buy>
      },
      {
        path:'/sell',
        element: <Sell></Sell>
      }
      
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

