import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../App";
import DirectionButton from "../components/DirectionButton";

export default function ResultsView() {
  const params = useParams();
  const {
    loading,
    setLoading,
    error,
    setError,
    result,
    setResult,
    currentFetch,
    setCurrentFetch,
  } = useContext(AppContext);

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
        // if (!response.ok) {
        //   throw new Error(`Failed to fetch the ${category} category`);
        // }
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

  // console.log(result);
  return (
    <div style={{ width: "80ch", margin: "auto" }}>
      {loading && <p>Fetching...</p>}
      <h3>{params.search.toUpperCase()}</h3>
      {result && (
        <div>
          <ol>
            {result.results.map((book) => (
              <li key={book.id}>
                <Link to={`/book/${book.id}`}>{book.title}</Link>
              </li>
            ))}
          </ol>
          {/* {console.log(result)} */}
          {result.previous && <DirectionButton direction="previous" />}
          {result.next && <DirectionButton direction="next" />}
        </div>
      )}

      {/* <Link to={result.next}>Next</Link> */}
    </div>
  );
}
