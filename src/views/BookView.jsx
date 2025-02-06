import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import Language from "../components/Language";
import AddToFavoritesButton from "../components/AddToFavoritesButton";

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

  let subjects = "";

  useEffect(() => {
    function saveToLocal() {
      console.log("Saving to local storage...");
      localStorage.setItem("favorites", JSON.stringify(favorites));
      console.log("Done saving");
    }
    saveToLocal();
  }, [favorites]);

  useEffect(() => {
    // console.log("Fetching book...");
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
        // console.log("Done!");
      }
    };
    fetchBook();
  }, []);

  // console.log(favorites);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", padding: "2rem 0" }}
    >
      {loading && <p>Fetching...</p>}

      {/* {console.log(book)} */}
      {book && (
        <div style={{ maxWidth: "700px", display: "flex", gap: "2rem" }}>
          <div style={{ textAlign: "right" }}>
            <img
              src={book.formats["image/jpeg"]}
              style={{
                maxHeight: "300px",
                // maxWidth: "200px",

                boxShadow: "0px 4px 10px #bbb",
              }}
            />
            <p>Links:</p>
            <div>
              <div>
                <a href={book.formats["text/html"]} className="button">
                  HTML
                </a>
                {" · "}
                <a
                  href={book.formats["text/plain; charset=us-ascii"]}
                  className="button"
                >
                  Plain text
                </a>
              </div>
              {/* <button
                onClick={() => {
                  if (!favorites.includes(book)) {
                    setFavorites((prev) => [...prev, book]);
                  }
                }}
              >
                ❤️Add to favorites🖤
              </button> */}
              <AddToFavoritesButton bookProp={book} />
            </div>
          </div>
          <div>
            <h2>{book.title}</h2>
            <h3>by {book.authors.map((author) => `${author.name} `)} </h3>
            <br />
            {/* subjects */}

            <div>
              <h4>Topics:</h4>
              {/* {book.subjects.map((subject) => (
                <p key={subject} style={{ fontSize: "14px" }}>
                  {subject.replace(" -- Fiction", "")}
                </p>
              ))} */}
              {book.subjects.map((subject) => {
                subjects += subject.replace(" -- Fiction", "") + " · ";
              })}{" "}
              {subjects.slice(0, subjects.length - 3)}
            </div>
            <br />

            {/* end subjects */}

            <p>
              Language: {book.languages.map((language) => Language(language))}{" "}
            </p>
            <p>Downloads: {book.download_count}</p>
            <br />
            <h4>Synopsis:</h4>
            <p>{book.summaries}</p>
          </div>
        </div>
      )}
    </div>
  );
}
