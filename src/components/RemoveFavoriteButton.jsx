import { useContext } from "react";
import { AppContext } from "../App";
import styled from "styled-components";

const DeleteButton = styled.button`
  height: 30px;
  width: 40px;
  background-color: #e55;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
`;

export default function RemoveFavoriteButton(bookId) {
  const { setFavorites } = useContext(AppContext);

  function removeFavorite(parameter) {
    setFavorites((favorites) =>
      favorites.filter((e) => e.id !== parameter.bookId)
    );
  }

  return <DeleteButton onClick={() => removeFavorite(bookId)}>X</DeleteButton>;
}
