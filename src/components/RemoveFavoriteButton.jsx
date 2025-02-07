import { useContext } from "react";
import { AppContext } from "../App";

export default function RemoveFavoriteButton(bookId) {
  const { setFavorites } = useContext(AppContext);

  function removeFavorite(parameter) {
    setFavorites((favorites) =>
      favorites.filter((e) => e.id !== parameter.bookId)
    );
  }

  return (
    <button
      onClick={() => removeFavorite(bookId)}
      style={{
        height: "30px",
        width: "40px",
        marginTop: "2rem",
        backgroundColor: "#e55",
        border: "none",
        color: "white",
      }}
    >
      X
    </button>
  );
}
