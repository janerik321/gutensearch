import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import Categories from "./Categories";

export default function Header() {
  const { search, setSearch, page, setPage } = useContext(AppContext);
  const navigate = useNavigate();

  console.log(Categories());

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
          //   textAlign: "center",
        }}
      >
        <Link to="/gutensearch/">
          <h1>Gutensearch</h1>
        </Link>
        <form onSubmit={() => navigate(`/gutensearch/search/search=${search}`)}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "0.2rem 0.5rem", borderRadius: "20px 0 0 20px" }}
          />
          <input
            type="submit"
            value="Go"
            style={{
              padding: "0.2rem 0.5rem",
              borderRadius: "0 20px 20px 0",
              backgroundColor: "lightgreen",
            }}
          />
        </form>

        <nav
          style={{
            width: "50%",
            margin: "auto",

            textAlign: "center",
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

          <Link to="/gutensearch/favorites/"> ❤️Favorites</Link>
        </nav>
      </div>
    </>
  );
}
