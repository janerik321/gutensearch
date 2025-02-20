import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import Language from "../components/Language";
import AddToFavoritesButton from "../components/AddToFavoritesButton";
import Spinner from "../components/Spinner";
import styled from "styled-components";

const Links = styled.div`
  margin: 0.5rem 0;
`;

const LinksAndFavoritesButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const CoverImage = styled.img`
  max-height: 300px;
  box-shadow: 0px 4px 10px #bbb;
  margin-bottom: 0.5rem;
`;

const CoverAndLinks = styled.div`
  text-align: right;
`;

const BookContent = styled.div`
  max-width: 700px;
  display: flex;
  gap: 2rem;
  margin: 0 2rem;
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

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
      localStorage.setItem("favorites", JSON.stringify(favorites));
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

        if (!response.ok) {
          throw new Error(`Failed to fetch book #${params.id}.`);
        }

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

  return (
    <MainArea>
      {loading && (
        <>
          <p>Fetching...</p>
          <Spinner />
        </>
      )}

      {book && (
        <BookContent>
          <CoverAndLinks>
            <CoverImage src={book.formats["image/jpeg"]} />
            <p>Links:</p>
            <LinksAndFavoritesButton>
              <Links>
                <a
                  href={book.formats["text/html"]}
                  target="_blank"
                  className="button"
                >
                  HTML
                </a>
                {" · "}
                <a
                  href={book.formats["text/plain; charset=us-ascii"]}
                  target="_blank"
                  className="button"
                >
                  Plain text
                </a>
              </Links>

              <AddToFavoritesButton bookProp={book} text={true} />
            </LinksAndFavoritesButton>
          </CoverAndLinks>
          <div>
            <h2>{book.title}</h2>
            <h3>by {book.authors.map((author) => `${author.name} `)} </h3>
            <br />

            <div>
              <h4>Topics:</h4>
              {book.subjects.map((subject) => {
                subjects += subject.replace(" -- Fiction", "") + " · ";
              })}{" "}
              {subjects.slice(0, subjects.length - 3)}
            </div>
            <br />

            <p>
              Language: {book.languages.map((language) => Language(language))}{" "}
            </p>
            <p>Downloads: {book.download_count}</p>
            <br />
            <h4>Summary:</h4>
            <p>{book.summaries}</p>
          </div>
        </BookContent>
      )}
    </MainArea>
  );
}
