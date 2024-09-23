import { useEffect, useState } from "react";
import { useIsOnline } from "./hooks/useIsOnline";
import useMousePointer from "./hooks/useMousePointer";
import "./App.css";

function App() {
  const { isOnline } = useIsOnline();
  const position = useMousePointer();
  console.log(position.x, position.y);
  console.log(isOnline);

  return (
    <div>
      {position.x}
      {position.y}
    </div>
  );
}

export default App;
