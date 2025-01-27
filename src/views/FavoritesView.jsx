import { useContext } from "react";
import { AppContext } from "../App";
import BookCard from "../components/BookCard";
import RemoveFavoriteButton from "../components/RemoveFavoriteButton";

export default function FavoritesView() {
  const { favorites, setFavorites } = useContext(AppContext);

  console.log(favorites);
  RemoveFavoriteButton("a");
  return (
    <>
      {favorites.map((book) => (
        <div style={{ display: "flex" }}>
          <BookCard book={book} />
          {console.log(book)}
          <RemoveFavoriteButton bookId={book.id} />
        </div>
      ))}
    </>
  );
}
