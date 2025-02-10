import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../App";
import DirectionButton from "../components/DirectionButton";
import BookCard from "../components/BookCard";
import Spinner from "../components/Spinner";

export default function ResultsView() {
  const params = useParams();
  const { loading, setLoading, error, setError, result, setResult } =
    useContext(AppContext);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const fetcher = params.search;
        setError(null);
        setLoading(true);

        const response = await fetch(
          `https://gutendex.com/books/?${params.search}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch the ${category} category`);
        }

        const data = await response.json();

        setResult(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchResult();
  }, [params]);

  console.log(result);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "2rem",
      }}
    >
      {loading && (
        <>
          <p>
            {params.search.indexOf("topic=") >= 0 &&
              `Fetching results for '${params.search.slice(
                params.search.indexOf("topic=") + 6
              )}'...`}
            {params.search.indexOf("search=") >= 0 &&
              `Fetching results for '${params.search.slice(
                params.search.indexOf("search=") + 7
              )}'...`}
          </p>
          <Spinner />
        </>
      )}
      {!loading && result && (
        <div
          style={{
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ textAlign: "center" }}>
            {params.search.indexOf("topic=") >= 0 &&
              `${result.count} results for '${params.search.slice(
                params.search.indexOf("topic=") + 6
              )}'`}
            {params.search.indexOf("search=") >= 0 &&
              `${result.count} results for '${params.search.slice(
                params.search.indexOf("search=") + 7
              )}'`}
          </h3>
          <h3 style={{ textAlign: "center" }}>
            {result.previous &&
              `Page ${params.search.slice(
                params.search.indexOf("page=") + 5,
                params.search.indexOf("&")
              )} of ${Math.ceil(result.count / 32)}`}
            {!result.previous && `Page 1 of ${Math.ceil(result.count / 32)}`}
          </h3>
          <div
          // style={{
          //   display: "flex",
          //   flexWrap: "wrap",
          //   gap: "4rem",
          //   justifyContent: "center",
          // }}
          >
            {result.results.map((book) => (
              <BookCard key={book.id} book={book} favoritesButton={true} />
            ))}
          </div>
          <div>
            {result.previous && <DirectionButton direction="previous" />}
            {result.next && <DirectionButton direction="next" />}
          </div>
        </div>
      )}
    </div>
  );
}
