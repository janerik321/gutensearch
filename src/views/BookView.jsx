import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import Language from "../components/Language";

export default function BookView() {
  const params = useParams();

  // console.log(params);
  const { loading, setLoading, error, setError, book, setBook } =
    useContext(AppContext);

  // setLoading(true);
  useEffect(() => {
    console.log("Fetching book...");
    const fetchBook = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await fetch(`https://gutendex.com/books/${params.id}`);
        // husk search (/books?search=) og topic (/books?topic=)
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

  // useEffect(() => {
  //   console.log("result updated");
  // }, [book]);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}
    >
      {loading && <p>Fetching...</p>}
      {/* <p>BookView</p> */}
      {console.log(book)}
      {book && (
        <div style={{ display: "flex", gap: "2rem" }}>
          <img src={book.formats["image/jpeg"]} />
          <div>
            <h2>{book.title}</h2>
            <h3>by {book.authors.map((author) => `${author.name} `)} </h3>
            <div>
              {/* <h4>Subjects:</h4> */}
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
                <button>HTML</button>
                <button>Plain text</button>
              </div>
              <button>❤️Add to favorites</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
