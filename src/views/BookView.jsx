import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { useParams } from "react-router-dom";

export default function BookView() {
  const params = useParams();
  // console.log(result);
  console.log(params);
  const { loading, setLoading, error, setError, result, setResult } =
    useContext(AppContext);

  useEffect(() => {
    console.log("Fetching book...");
    const fetchResult = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await fetch(`https://gutendex.com/books/${params.id}`);

        const data = await response.json();
        setResult(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        console.log("Done!");
      }
    };
    fetchResult();
  }, []);

  useEffect(() => {
    console.log("result updated");
  }, [result]);

  console.log(result);

  console.log(result.title);
  console.log(result.formats["image/jpeg"]);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}
    >
      {/* <p>BookView</p> */}
      <div style={{ display: "flex", gap: "2rem" }}>
        <img src={result.formats["image/jpeg"]} />
        <div>
          <h2>{result.title}</h2>
          <h4>by {result.authors[0].name}</h4>
        </div>
      </div>
    </div>
  );
}
