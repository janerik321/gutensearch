import { useContext } from "react";
import { AppContext } from "../App";
import BookCard from "../components/BookCard";
import styled from "styled-components";

const BooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 3rem;
  justify-content: center;
  margin: 2rem;
`;

const MainArea = styled.div`
  margin: 2rem;
  padding: 2rem;
  text-align: center;
`;

export default function FavoritesView() {
  const { favorites, setFavorites } = useContext(AppContext);

  function saveToLocal() {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  saveToLocal();

  return (
    <>
      <MainArea>
        <h2>Favorites</h2>
        {favorites.length > 0 && <h3>{favorites.length} books</h3>}
        {favorites.length === 0 && <h3>No favorites to display</h3>}
      </MainArea>
      <BooksContainer>
        {favorites.map((book) => (
          <div key={book.id}>
            <BookCard book={book} removeButton={true} />
            {/* {console.log(book)} */}
            {/* <RemoveFavoriteButton bookId={book.id} /> */}
          </div>
        ))}
      </BooksContainer>
    </>
  );
}
