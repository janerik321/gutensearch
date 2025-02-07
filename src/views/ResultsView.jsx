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

  // console.log(params);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const fetcher = params.search;
        setError(null);
        setLoading(true);
        // console.log(params);
        // console.log(`fetching ${params.search}...`);
        const response = await fetch(
          `https://gutendex.com/books/?${params.search}`
          // currentFetch
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch the ${category} category`);
        }
        // console.log("...");
        const data = await response.json();
        // console.log(data);
        setResult(data);
        // console.log(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        // console.log("done!");
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
          <p>{`Fetching ${params.search.slice(
            params.search.indexOf("=") + 1
          )}...`}</p>
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
            {`${result.count} results for ${params.search.slice(
              params.search.indexOf("=") + 1
            )}`}
            {/* <Spinner /> */}
          </h3>
          {result.results.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}

          {result.previous && <DirectionButton direction="previous" />}
          {result.next && <DirectionButton direction="next" />}
        </div>
      )}
    </div>
  );
}
