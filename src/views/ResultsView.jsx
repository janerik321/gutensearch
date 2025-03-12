import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../App";
import DirectionButton from "../components/DirectionButton";
import BookCard from "../components/BookCard";
import Spinner from "../components/Spinner";
import styled from "styled-components";

const BooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 3rem;
  justify-content: center;
  margin: 2rem 0;
`;

const HeaderContent = styled.h3`
  text-align: center;
`;

const ResultsContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

export default function ResultsView() {
  const params = useParams();
  const { loading, setLoading, error, setError, result, setResult, favorites } =
    useContext(AppContext);

  useEffect(() => {
    function saveToLocal() {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    saveToLocal();
  }, [favorites]);

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
          throw new Error(`Failed to fetch ${params.search}.`);
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
    <MainArea>
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
        <ResultsContainer>
          <HeaderContent>
            {params.search.indexOf("topic=") >= 0 &&
              `${result.count} results for '${params.search.slice(
                params.search.indexOf("topic=") + 6
              )}'`}
            {params.search.indexOf("search=") >= 0 &&
              `${result.count} results for '${params.search.slice(
                params.search.indexOf("search=") + 7
              )}'`}
          </HeaderContent>
          <HeaderContent>
            {result.previous &&
              `Page ${params.search.slice(
                params.search.indexOf("page=") + 5,
                params.search.indexOf("&")
              )} of ${Math.ceil(result.count / 32)}`}
            {!result.previous && `Page 1 of ${Math.ceil(result.count / 32)}`}
          </HeaderContent>
          <BooksContainer>
            {result.results.map((book) => (
              <BookCard key={book.id} book={book} favoritesButton={true} />
            ))}
          </BooksContainer>
          <div>
            {result.previous && <DirectionButton direction="previous" />}
            {result.next && <DirectionButton direction="next" />}
          </div>
        </ResultsContainer>
      )}
    </MainArea>
  );
}
