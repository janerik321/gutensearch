import { useContext, useEffect } from "react";
import { AppContext } from "../App";

export default function RemoveFavoriteButton(bookId) {
  const { favorites, setFavorites } = useContext(AppContext);

  function removeFavorite(parameter) {
    setFavorites((favorites) =>
      favorites.filter((e) => e.id !== parameter.bookId)
    );

    // console.log(favorites);
  }

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
