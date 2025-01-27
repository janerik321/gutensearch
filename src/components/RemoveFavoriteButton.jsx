import { useContext } from "react";
import { AppContext } from "../App";

export default function RemoveFavoriteButton(bookId) {
  const { favorites, setFavorites } = useContext(AppContext);

  function removeFavorite(parameter) {
    const filteredFavorites = favorites.filter(
      (e) => e.id !== parameter.bookId
    );

    setFavorites(filteredFavorites);

    if (favorites === filteredFavorites) {
      console.log("abc");
    } else {
      console.log("123");
    }

    // localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  console.log(favorites);
  return (
    <button
      onClick={() => removeFavorite(bookId)}
      style={{
        height: "30px",
        marginTop: "2rem",
        padding: "0 1rem 0 1rem",
        backgroundColor: "#e55",
        border: "none",
        color: "white",
      }}
    >
      X
    </button>
  );
}
