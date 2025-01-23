import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// import "./App.css";

export const AppContext = createContext();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [book, setBook] = useState(null);
  const [currentFetch, setCurrentFetch] = useState(null);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        error,
        setError,
        result,
        setResult,
        book,
        setBook,
        currentFetch,
        setCurrentFetch,
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
    </AppContext.Provider>
  );
}
