import { useEffect, useState } from "react";

export function useDebounce(inputVal, timeout) {
  const [debounce, setDebounce] = useState(inputVal);
  useEffect(() => {
    let timeOutNumber = setTimeout(() => {
      setDebounce(inputVal);
    }, timeout);
    return () => {
      clearTimeout(timeOutNumber);
    };
  }, [inputVal]);

  return debounce;
}
