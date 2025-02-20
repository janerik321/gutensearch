import { useContext } from "react";
import { AppContext } from "../App";
import styled from "styled-components";

const AddFavoriteButton = styled.button`
  height: 30px;
  width: fit-content;
  padding: 5px 10px;
  background-color: lightgreen;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* border-radius: 0 5px 5px 0; */

  div {
    width: 1.2rem;
  }
`;

const RedHeart = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: add-to-favorite 500ms;

  @keyframes add-to-favorite {
    0% {
      opacity: 0;
      font-size: 2rem;
    }
    100% {
      opacity: 1;
      font-size: 1rem;
    }
  }
`;

export default function AddToFavoritesButton(bookProp) {
  const { favorites, setFavorites } = useContext(AppContext);
  const book = bookProp.bookProp;
  const text = bookProp.text;

  function handleFavorite() {
    if (!favorites.some((currentBook) => currentBook.id === book.id)) {
      setFavorites((prev) => [...prev, book]);
    } else {
      setFavorites((favorites) => favorites.filter((e) => e.id !== book.id));
    }
  }

  return (
    <>
      <AddFavoriteButton onClick={handleFavorite}>
        {!favorites.some((currentBook) => currentBook.id === book.id) && (
          <div>🤍</div>
        )}
        {favorites.some((currentBook) => currentBook.id === book.id) && (
          <RedHeart>❤️</RedHeart>
        )}
        {text && "Add to favorites"}
      </AddFavoriteButton>
    </>
  );
}
