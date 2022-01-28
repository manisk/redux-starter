import { useDispatch } from "react-redux";
import { increaseCount, updateUserName } from "./store";

export default function About() {
  const dispatch = useDispatch();

  return (
    <div>
      {" "}
      <h1> About</h1>
      <button onClick={() => dispatch(updateUserName("Anil"))}>
        {" "}
        increase{" "}
      </button>
    </div>
  );
}
