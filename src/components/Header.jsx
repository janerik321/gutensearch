import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#A67D7D",
          padding: "0.5rem",
          color: "white",
          textAlign: "center",
        }}
      >
        <Link to="/">
          <h1>Gutensearch</h1>
        </Link>
        <h3>Search goes here...</h3>
        <nav>
          <Link to="/category/fiction">Fiction</Link>
          <Link to="/category/mystery">Mystery</Link>
          <Link to="/category/thriller">Thriller</Link>
          <Link to="/category/romance">Romance</Link>
          <Link to="/category/fantasy">Fantasy</Link>
          <Link to="/category/morality">Morality</Link>
          <Link to="/category/society">Society</Link>
          <Link to="/category/power">Power</Link>
          <Link to="/category/justice">Justice</Link>
          <Link to="/category/adventure">Adventure</Link>
          <Link to="/category/tragedy">Tragedy</Link>
          <Link to="/category/war">War</Link>
          <Link to="/category/philosophy">Philosophy</Link>
          <Link to="/category/favorites">❤️Favorites</Link>
        </nav>
      </div>
      {/* <Outlet /> */}
    </>
  );
}
