import { useReducer } from "react";
import { reducer, initialState } from "./reducer";

export function LiveDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleJoinClick() {
    dispatch({ type: "Join" });
  }
  function handleExitClick() {
    dispatch({ type: "Exit" });
  }

  return (
    <div className="container-fluid">
      <h3>Watch Live - [{state.ViewersCount}]</h3>
      <div>
        <iframe
          src="http://youtube.com/embed/pKuFdE_vWJg"
          width="500px"
          height="300px"
        ></iframe>
        <div className="mt-2">
          <button onClick={handleJoinClick} className="btn btn-primary">
            Join Live
          </button>
          <button onClick={handleExitClick} className="btn btn-warning mx-2">
            Exit Live
          </button>
        </div>
      </div>
    </div>
  );
}
