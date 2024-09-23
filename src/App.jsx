import { useEffect, useState } from "react";
import { useIsOnline } from "./hooks/useIsOnline";
import useMousePointer from "./hooks/useMousePointer";
import useInterval from "./hooks/useInterval";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const { isOnline } = useIsOnline();
  const position = useMousePointer();
  console.log(position.x, position.y);
  console.log(isOnline);
  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <div>
      <div>
        {position.x}
        {position.y}
      </div>
      <div>Here the Count is {count}</div>
    </div>
  );
}

export default App;
