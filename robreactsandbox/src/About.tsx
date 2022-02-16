import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { reducerRoot } from "./states/redux/reducers";

export function About() {
  const state = useSelector((state: reducerRoot) => state);
  console.log(JSON.stringify(state));
  return (
    <>
      <span> Account Amount {state.account}</span>
      <p>About</p>
      <Link to="/">Home</Link>
    </>
  );
}
