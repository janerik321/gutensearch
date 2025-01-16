import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import NotFound from "./views/NotFound";
import HomeView from "./views/HomeView";
import ResultsView from "./views/ResultsView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomeView /> },
      { path: "*", element: <NotFound /> },
      { path: "/category/:category", element: <ResultsView /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
