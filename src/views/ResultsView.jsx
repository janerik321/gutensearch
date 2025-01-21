import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../App";

export default function ResultsView() {
  const params = useParams();
  const { loading, setLoading, error, setError, result, setResult } =
    useContext(AppContext);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        setError(null);
        setLoading(true);
        console.log(`fetching ${params.category}...`);
        const response = await fetch(
          `https://gutendex.com//books?topic=${params.category}`
        );
        // if (!response.ok) {
        //   throw new Error(`Failed to fetch the ${category} category`);
        // }
        console.log("...");
        const data = await response.json();
        // console.log(data);
        setResult(data);
        console.log(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        console.log("done!");
      }
    };
    fetchResult();
  }, []);

  console.log(result);
  return (
    <div style={{ width: "80ch", margin: "auto" }}>
      {loading && <p>Fetching...</p>}
      <h3>{params.category.toUpperCase()}</h3>

      {!loading &&
        result.results.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </li>
        ))}

      <button>Next</button>
    </div>
  );
}
