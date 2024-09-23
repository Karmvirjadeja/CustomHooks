import { useEffect } from "react";

function useInterval(fn, timeout) {
  useEffect(function () {
    setInterval(fn, timeout);
  });
}

export default useInterval;
