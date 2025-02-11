import { Link } from "react-router-dom";
import Language from "./Language";
import AddToFavoritesButton from "./AddToFavoritesButton";
import RemoveFavoriteButton from "./RemoveFavoriteButton";

export default function BookCard(prop) {
  const book = prop.book;
  const favoritesButton = prop.favoritesButton;
  const removeButton = prop.removeButton;

  return (
    <div style={{ display: "flex" }}>
      <Link
        to={`/gutensearch/book/${book.id}`}
        style={{
          minHeight: "180px",
          width: "500px",
          padding: "1rem",
          display: "flex",
          gap: "2rem",
          border: "1px solid #ccc",
          backgroundColor: "#fcfcfc",
          overflow: "hidden",
        }}
      >
        <img
          src={book.formats["image/jpeg"]}
          alt=""
          style={{
            boxShadow: "0px 4px 10px #bbb",
            maxWidth: "200px",
            maxHeight: "146px",
          }}
        />
        <div style={{}}>
          <h3>{book.title}</h3>
          {book.authors.length > 0 && (
            <h4>by {book.authors.map((author) => `${author.name} `)} </h4>
          )}

          <p>{book.languages.map((language) => Language(language))} </p>
        </div>
      </Link>
      {favoritesButton && <AddToFavoritesButton bookProp={book} />}
      {removeButton && <RemoveFavoriteButton bookId={book.id} />}
    </div>
  );
}
