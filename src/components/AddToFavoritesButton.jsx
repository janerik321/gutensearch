import { useContext } from "react";
import { AppContext } from "../App";
import "./addToFavoritesButton.css";

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
      <button onClick={handleFavorite} id="add-to-favorites-button">
        {!favorites.some((currentBook) => currentBook.id === book.id) && (
          <div>💚</div>
        )}
        {favorites.some((currentBook) => currentBook.id === book.id) && (
          <div id="heart">❤️</div>
        )}{" "}
        {text && "Add to favorites"}
      </button>
    </>
  );
}
