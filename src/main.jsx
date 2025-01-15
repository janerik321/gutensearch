import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./views/NotFound";
import HomeView from "./views/HomeView";
import CategoryView from "./views/CategoryView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { index: true, element: <HomeView /> },
      { path: "*", element: <NotFound /> },
      { path: "/categories/:category", element: <CategoryView /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
