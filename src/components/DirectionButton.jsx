import { useContext } from "react";
import { AppContext } from "../App";
import { useParams, Link } from "react-router-dom";

export default function DirectionButton(props) {
  const { result } = useContext(AppContext);
  const params = useParams();

  // console.log(params.search);
  // console.log(result);

  let page = "";

  if (props.direction === "next") {
    // console.log("next");
    page = result.next.slice(28);
  } else if (props.direction === "previous") {
    // console.log("previous");
    page = result.previous.slice(28);
  }

  return (
    <>
      {result && (
        <Link
          to={`/search/${page}`}
          style={{
            border: "1px solid grey",
            padding: "2px 7px",
          }}
        >
          {props.direction}
        </Link>
      )}
    </>
  );
}
