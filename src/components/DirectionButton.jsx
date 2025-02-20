import { useContext } from "react";
import { AppContext } from "../App";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const DirectionLink = styled(Link)`
  border: 1px solid grey;
  padding: 5px 10px;
  margin: 0 0.5rem;
  border: 1px solid #ccc;
`;

export default function DirectionButton(props) {
  const { result } = useContext(AppContext);
  const params = useParams();

  // console.log(params.search);
  console.log(result);

  let page = "";

  if (props.direction === "next") {
    console.log("next");
    page = result.next.slice(28);
  } else if (props.direction === "previous") {
    // console.log("previous");
    page = result.previous.slice(28);
  }

  return (
    <>
      {result && (
        <DirectionLink to={`/gutensearch/search/${page}`}>
          {props.direction}
        </DirectionLink>
      )}
    </>
  );
}
