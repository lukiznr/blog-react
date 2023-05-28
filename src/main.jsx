import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Index from "./index";
import Blog from "./blog";
import "./style.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Index />,
      },
      {
        path: "blog/:id",
        element: <Blog />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
