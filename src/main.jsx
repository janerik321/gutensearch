import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import NotFound from "./views/NotFound";
import HomeView from "./views/HomeView";
import ResultsView from "./views/ResultsView.jsx";
import BookView from "./views/BookView.jsx";
import FavoritesView from "./views/FavoritesView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomeView /> },
      { path: "*", element: <NotFound /> },
      { path: "/search/:search", element: <ResultsView /> },
      { path: "/book/:id", element: <BookView /> },
      { path: "/favorites/", element: <FavoritesView /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
