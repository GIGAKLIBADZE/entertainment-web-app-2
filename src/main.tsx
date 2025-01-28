import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sign from "./pages/Sign";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Movies from "./pages/Movies";

const router = createBrowserRouter([
  {
    path: "/:Sign",
    element: <Sign />,
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
      { path: "/Profile/Movies", element: <Movies /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
