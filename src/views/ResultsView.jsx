import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../App";

export default function ResultsView() {
  const params = useParams();
  // console.log(useParams());
  const { loading, setLoading, error, setError, result, setResult } =
    useContext(AppContext);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await fetch(
          `https://gutendex.com//books?topic=${params.category}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch the ${category} category`);
        }
        const data = await response.json();
        console.log(data);
        setResult(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchResult();
  }, []);

  // const fetchResult = async () => {
  //   const response = await fetch(
  //     `https://gutendex.com//books?topic=${params.category}`
  //   );

  //   const data = await response.json();

  //   console.log(data);
  //   setResult(data);
  // };

  // fetchResult();

  return (
    <>
      <h3>{params.category.toUpperCase()}</h3>

      {result.results.map((book) => (
        <li key={book.id}>
          <Link to="/">{book.title}</Link>
        </li>
      ))}
    </>
  );
}
