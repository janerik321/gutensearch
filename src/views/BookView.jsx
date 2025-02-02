import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import Language from "../components/Language";

export default function BookView() {
  const params = useParams();

  const {
    loading,
    setLoading,
    error,
    setError,
    book,
    setBook,
    favorites,
    setFavorites,
  } = useContext(AppContext);

  function saveToLocal() {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  saveToLocal();

  useEffect(() => {
    console.log("Fetching book...");
    const fetchBook = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await fetch(`https://gutendex.com/books/${params.id}`);

        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        console.log("Done!");
      }
    };
    fetchBook();
  }, []);

  console.log(favorites);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}
    >
      {loading && <p>Fetching...</p>}

      {console.log(book)}
      {book && (
        <div style={{ maxWidth: "700px", display: "flex", gap: "2rem" }}>
          <img
            src={book.formats["image/jpeg"]}
            style={{ boxShadow: "0px 4px 10px #bbb" }}
          />
          <div>
            <h2>{book.title}</h2>
            <h3>by {book.authors.map((author) => `${author.name} `)} </h3>
            <div>
              {book.subjects.map((subject) => (
                <p style={{ fontSize: "14px" }}>{subject}</p>
              ))}
            </div>
            <p>
              Language: {book.languages.map((language) => Language(language))}{" "}
            </p>
            <p>Downloads: {book.download_count}</p>
            <p>Links:</p>
            <div>
              <div>
                <a href={book.formats["text/html"]} className="button">
                  HTML
                </a>
                <a
                  href={book.formats["text/plain; charset=us-ascii"]}
                  className="button"
                >
                  Plain text
                </a>
              </div>
              <button
                onClick={() => {
                  if (!favorites.includes(book)) {
                    setFavorites((prev) => [...prev, book]);
                  }
                }}
              >
                ❤️Add to favorites
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
