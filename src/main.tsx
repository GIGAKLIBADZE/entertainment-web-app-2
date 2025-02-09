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
  // {
  //   path: "/SignIn",
  //   element: <SignIn />,
  // },
  // {
  //   path: "/SignUp",
  //   element: <SignUp />,
  // },
  {
    path: "/profile",
    element: <Layout />,
    children: [
      {
        path: "/profile/home",
        element: <Home />,
      },
      { path: "profile/movies", element: <Movies /> },
      { path: "profile/tv-Series", element: <TVSeries /> },
      { path: "profile/bookmarked", element: <Bookmarked /> },
    ],
  },
  {
    path: "/sign",
    element: <SignLayout />,
    children: [
      {
        path: "/sign/signin",
        element: <SignIn />,
      },
      { path: "/sign/signup", element: <SignUp /> },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/sign/signin" replace />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
