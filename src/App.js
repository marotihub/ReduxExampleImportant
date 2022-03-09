import "./styles.css";
import { increment, decrement, reset } from "./actions/action";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Counter:{counter} </h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      {isLogged ? <h1>Welcome Admin</h1> : <h1>welcome guest</h1>}
      <h1>hello viki</h1> 
<h1>Hello Maroti bendrikar</h1>

    </div>
  );
}
