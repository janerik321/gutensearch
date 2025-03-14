import { Link } from "react-router-dom";
import styled from "styled-components";
import Language from "./Language";
import AddToFavoritesButton from "./AddToFavoritesButton";
import RemoveFavoriteButton from "./RemoveFavoriteButton";

const CompleteCard = styled.div`
  display: flex;
`;

const Card = styled(Link)`
  min-height: 180px;
  width: 500px;
  padding: 1rem;
  display: flex;
  gap: 2rem;
  border: 1px solid #ccc;
  background-color: #fcfcfc;
  overflow: hidden;
  border-radius: 5px 0 5px 5px;

  @media screen and (max-width: 610px) {
    width: calc(100vw - 54px);
  }
  @media screen and (max-width: 330px) {
    flex-direction: column;
  }
`;

const Cover = styled.img`
  box-shadow: 0px 4px 10px #bbb;
  max-width: 200px;
  max-height: 146px;
  object-fit: contain;

  @media screen and (max-width: 610px) {
    max-width: 100px;
  }
`;

export default function BookCard(prop) {
  const book = prop.book;
  const favoritesButton = prop.favoritesButton;
  const removeButton = prop.removeButton;

  return (
    <CompleteCard>
      <Card to={`/gutensearch/book/${book.id}`}>
        <Cover
          src={book.formats["image/jpeg"]}
          alt={`The cover of ${book.title}`}
        />
        <div>
          <h3>{book.title}</h3>
          {book.authors.length > 0 && (
            <h4>by {book.authors.map((author) => `${author.name} `)} </h4>
          )}

          <p>{book.languages.map((language) => Language(language))} </p>
        </div>
      </Card>
      {favoritesButton && <AddToFavoritesButton bookProp={book} />}
      {removeButton && <RemoveFavoriteButton bookId={book.id} />}
    </CompleteCard>
  );
}
