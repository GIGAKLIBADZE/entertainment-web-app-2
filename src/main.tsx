import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Bookmarked from "./pages/Bookmarked";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignLayout from "./layouts/SignLayout";

const router = createBrowserRouter([
  {
    path: "/profile",
    element: <Layout />,
    children: [
      {
        path: "/profile/home",
        element: <Home />,
      },
      { path: "/profile/movies", element: <Movies /> },
      { path: "/profile/tv-Series", element: <TVSeries /> },
      { path: "/profile/bookmarked", element: <Bookmarked /> },
    ],
  },
  {
    path: "/sign",
    element: <SignLayout />,
    children: [
      {
        path: "/sign/sign-in",
        element: <SignIn />,
      },
      { path: "/sign/sign-up", element: <SignUp /> },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/sign/sign-in" replace />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
