import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import Categories from "./Categories";

export default function Header() {
  const { search, setSearch, page, setPage } = useContext(AppContext);
  const navigate = useNavigate();

  function handleSubmit(e, search) {
    e.preventDefault();

    navigate(`/gutensearch/search/search=${search}`);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#A67D7D",
          padding: "1rem",
          color: "white",
          gap: "1rem",
        }}
      >
        <Link to="/gutensearch/">
          <h1>Gutensearch</h1>
        </Link>
        <form onSubmit={(e) => handleSubmit(e, search)}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "0.2rem 1rem",
              borderRadius: "20px 0 0 20px",
              width: "",
            }}
          />
          <input
            type="submit"
            value="Go"
            style={{
              padding: "0.2rem 0.7rem",
              borderRadius: "0 20px 20px 0",
              backgroundColor: "lightgreen",
              color: "#000c",
            }}
          />
        </form>

        <nav
          style={{
            // maxWidth: "1000px",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            flexWrap: "wrap",
            gap: "0.5rem 1.5rem",
          }}
        >
          {Categories().map((category) => (
            <Link
              to={`/gutensearch/search/topic=${category.toLowerCase()}`}
              key={category}
            >
              {category}{" "}
            </Link>
          ))}

          <Link to="/gutensearch/favorites/">🤍Favorites</Link>
        </nav>
      </div>
    </>
  );
}
