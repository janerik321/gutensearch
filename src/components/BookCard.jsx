import { Link } from "react-router-dom";
import Language from "./Language";

export default function BookCard(prop) {
  const book = prop.book;
  //   console.log(book);
  return (
    <Link
      to={`/gutensearch/book/${book.id}`}
      style={{
        height: "180px",
        width: "500px",
        margin: "2rem 0 2rem 0",
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
          //   border: "1px solid #ddd",
          boxShadow: "0px 4px 10px #bbb",
          maxWidth: "200px",
        }}
      />
      <div style={{}}>
        <h3>{book.title}</h3>
        <h4>by {book.authors.map((author) => `${author.name} `)} </h4>
        <p>{book.languages.map((language) => Language(language))} </p>
      </div>
    </Link>
  );
}
