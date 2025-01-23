import { Outlet, Link } from "react-router-dom";

export default function Header() {
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

        <input type="text" />
        <nav>
          <Link to="/search/fiction">Fiction</Link>
          <Link to="/search/mystery">Mystery</Link>
          <Link to="/search/thriller">Thriller</Link>
          <Link to="/search/romance">Romance</Link>
          <Link to="/search/fantasy">Fantasy</Link>
          <Link to="/search/morality">Morality</Link>
          <Link to="/search/society">Society</Link>
          <Link to="/search/power">Power</Link>
          <Link to="/search/justice">Justice</Link>
          <Link to="/search/adventure">Adventure</Link>
          <Link to="/search/tragedy">Tragedy</Link>
          <Link to="/search/war">War</Link>
          <Link to="/search/philosophy">Philosophy</Link>
          <Link to="/search/favorites">❤️Favorites</Link>
        </nav>
      </div>
      {/* <Outlet /> */}
    </>
  );
}
