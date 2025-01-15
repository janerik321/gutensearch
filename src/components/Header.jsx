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
        <h1>Header</h1>
        <h3>Search goes here...</h3>
        <Link to="/">Fiction</Link>
        <Link to="/">Mystery</Link>
        <Link to="/">Thriller</Link>
        <Link to="/">Romance</Link>
        <Link to="/">Fantasy</Link>
        <Link to="/">Morality</Link>
        <Link to="/">Society</Link>
        <Link to="/">Power</Link>
        <Link to="/">Justice</Link>
        <Link to="/">Adventure</Link>
        <Link to="/">Tragedy</Link>
        <Link to="/">War</Link>
        <Link to="/">Philosophy</Link>
        <Link to="/">❤️Favorites</Link>
      </div>
      <Outlet />
    </>
  );
}
