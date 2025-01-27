import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Profile",
    element: <Layout />,
    children: [
      {
        path: "/Profile/Home",
        element: <Home />,
      },
      {
        path: "/Profile/Search",
        element: <Search />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
