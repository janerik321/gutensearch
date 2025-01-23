import { useContext } from "react";
import { AppContext } from "../App";

export default function NextButton() {
  const { result, currentFetch, setCurrentFetch } = useContext(AppContext);

  function toNext() {
    console.log(result.next);
    setCurrentFetch(result.next);
  }

  return <button onClick={toNext}>Next</button>;
}
