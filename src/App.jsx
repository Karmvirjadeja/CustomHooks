import { useEffect, useState } from "react";
import { useIsOnline } from "./hooks/useIsOnline";
import useMousePointer from "./hooks/useMousePointer";
import useInterval from "./hooks/useInterval";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [count, setCount] = useState(0);
  const { isOnline } = useIsOnline();
  const position = useMousePointer();
  const [inputVal, setInputVal] = useState("");
  const debounce = useDebounce(inputVal, 5000);
  console.log(position.x, position.y);
  console.log(isOnline);
  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter the Name"
          onChange={(e) => setInputVal(e.target.value)}
        />
      </div>
      <div>{debounce}</div>
    </div>
  );
}

export default App;
