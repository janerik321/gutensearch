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
        padding: "2rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h2>Favorites</h2>
        {favorites.length > 0 && <h3>{favorites.length} books</h3>}
        {favorites.length === 0 && <h3>No favorites to display</h3>}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem 3rem",
          justifyContent: "center",
          margin: "2rem",
        }}
      >
        {favorites.map((book) => (
          <div key={book.id}>
            <BookCard book={book} removeButton={true} />
            {/* {console.log(book)} */}
            {/* <RemoveFavoriteButton bookId={book.id} /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
