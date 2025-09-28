import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppRoutes from "./App"; // We'll rename App to AppRoutes in the next step
import "./index.css";

// 1. Create the router using your app's routes
const router = createBrowserRouter(AppRoutes);

// 2. Use <RouterProvider> instead of rendering <App /> directly
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
