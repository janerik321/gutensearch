import { useContext } from "react";
import { AppContext } from "../App";

export default function AddToFavoritesButton(bookProp) {
  const { favorites, setFavorites } = useContext(AppContext);
  const book = bookProp.bookProp;

  function handleFavorite() {
    if (!favorites.includes(book)) {
      setFavorites((prev) => [...prev, book]);
    } else {
      setFavorites((favorites) => favorites.filter((e) => e.id !== book.id));
    }
  }

  console.log(favorites);
  console.log(book);
  console.log(favorites.includes(book));
  console.log(favorites.indexOf(book));
  return (
    <>
      {/* {!favorites.includes(book) && (
        <button onClick={handleFavorite}>🖤Add to favorites</button>
      )}
      {favorites.includes(book) && (
        <button onClick={handleFavorite}>❤️Add to favorites</button>
      )} */}
      <button onClick={handleFavorite} style={{ padding: "4px 7px" }}>
        {!favorites.includes(book) && "🖤"}
        {favorites.includes(book) && "❤️"}
        Add to favorites
      </button>
    </>
  );
}
