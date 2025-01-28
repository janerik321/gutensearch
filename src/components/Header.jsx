import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Header() {
  const { search, setSearch, page, setPage } = useContext(AppContext);
  const navigate = useNavigate();

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
        <Link to="/">
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
          <Link to="/gutensearch/search/topic=fiction">Fiction </Link>
          <Link to="/gutensearch/search/topic=mystery"> Mystery </Link>
          <Link to="/gutensearch/search/topic=thriller"> Thriller </Link>
          <Link to="/gutensearch/search/topic=romance"> Romance </Link>
          <Link to="/gutensearch/search/topic=fantasy"> Fantasy </Link>
          <Link to="/gutensearch/search/topic=morality"> Morality </Link>
          <Link to="/gutensearch/search/topic=society"> Society </Link>
          <Link to="/gutensearch/search/topic=power"> Power </Link>
          <Link to="/gutensearch/search/topic=justice"> Justice </Link>
          <Link to="/gutensearch/search/topic=adventure"> Adventure </Link>
          <Link to="/gutensearch/search/topic=tragedy"> Tragedy </Link>
          <Link to="/gutensearch/search/topic=war"> War </Link>
          <Link to="/gutensearch/search/topic=philosophy"> Philosophy </Link>
          <Link to="/gutensearch/favorites/"> ❤️Favorites</Link>
        </nav>
      </div>
    </>
  );
}
