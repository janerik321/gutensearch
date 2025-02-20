import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import Categories from "./Categories";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: end;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
`;

const GoButton = styled.input`
  padding: 0.2rem 0.7rem;
  border-radius: 0 20px 20px 0;
  background-color: lightgreen;
  color: #000c;
`;

const SearchBar = styled.input`
  padding: 0.2rem 1rem;
  border-radius: 20px 0 0 20px;
`;

const HeaderMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #a67d7d;
  padding: 1rem;
  color: white;
  gap: 1rem;
`;

export default function Header() {
  const { search, setSearch, page, setPage } = useContext(AppContext);
  const navigate = useNavigate();

  function handleSubmit(e, search) {
    e.preventDefault();

    navigate(`/gutensearch/search/search=${search}`);
  }

  return (
    <>
      <HeaderMain>
        <Link to="/gutensearch/">
          <h1>Gutensearch</h1>
        </Link>
        <form onSubmit={(e) => handleSubmit(e, search)}>
          <SearchBar
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <GoButton type="submit" value="Go" />
        </form>

        <NavBar>
          {Categories().map((category) => (
            <Link
              to={`/gutensearch/search/topic=${category.toLowerCase()}`}
              key={category}
            >
              {category}{" "}
            </Link>
          ))}

          <Link to="/gutensearch/favorites/">🤍Favorites</Link>
        </NavBar>
      </HeaderMain>
    </>
  );
}
