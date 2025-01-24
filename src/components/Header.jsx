import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Header() {
  const { search, setSearch, page, setPage } = useContext(AppContext);

  const handleSubmit = () => {
    console.log(`search=${search}`);
    // Putt `search=${search}` evt `search/search=${search}` inn i adressefeltet
  };

  // const params = new URLSearchParams()
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

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "0.2rem 0.5rem", borderRadius: "20px 0 0 20px" }}
          />
          <input
            type="submit"
            style={{
              padding: "0.2rem 0.5rem",
              borderRadius: "0 20px 20px 0",
              backgroundColor: "lightgreen",
            }}
          />
        </form>

        <nav>
          <Link to="/search/topic=fiction">Fiction</Link>
          <Link to="/search/topic=mystery">Mystery</Link>
          <Link to="/search/topic=thriller">Thriller</Link>
          <Link to="/search/topic=romance">Romance</Link>
          <Link to="/search/topic=fantasy">Fantasy</Link>
          <Link to="/search/topic=morality">Morality</Link>
          <Link to="/search/topic=society">Society</Link>
          <Link to="/search/topic=power">Power</Link>
          <Link to="/search/topic=justice">Justice</Link>
          <Link to="/search/topic=adventure">Adventure</Link>
          <Link to="/search/topic=tragedy">Tragedy</Link>
          <Link to="/search/topic=war">War</Link>
          <Link to="/search/topic=philosophy">Philosophy</Link>
          <Link to="/search/favorites">❤️Favorites</Link>
        </nav>
      </div>
    </>
  );
}
