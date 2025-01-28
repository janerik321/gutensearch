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
    path: "/gutensearch/",
    element: <App />,
    children: [
      { index: true, element: <HomeView /> },
      { path: "/gutensearch/*", element: <NotFound /> },
      { path: "/gutensearch/search/:search", element: <ResultsView /> },
      { path: "/gutensearch/book/:id", element: <BookView /> },
      { path: "/gutensearch/favorites/", element: <FavoritesView /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
