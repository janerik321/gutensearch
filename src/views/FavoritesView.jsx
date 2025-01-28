import { useContext } from "react";
import { AppContext } from "../App";
import BookCard from "../components/BookCard";
import RemoveFavoriteButton from "../components/RemoveFavoriteButton";

export default function FavoritesView() {
  const { favorites, setFavorites } = useContext(AppContext);

  function saveToLocal() {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  saveToLocal();

  console.log(favorites);
  //   RemoveFavoriteButton("a");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {favorites.length === 0 && (
        <h3 style={{ marginTop: "2rem" }}>No favorites to display</h3>
      )}
      {favorites.map((book) => (
        <div key={book.id} style={{ display: "flex" }}>
          <BookCard book={book} />
          {/* {console.log(book)} */}
          <RemoveFavoriteButton bookId={book.id} />
        </div>
      ))}
    </div>
  );
}
