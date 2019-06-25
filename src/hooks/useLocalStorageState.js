import { useState, useEffect } from "react";

const useLocalStorageState = (key, defaultVal) => {
  // Make piece of state based off value in local storage or default
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (err) {
      val = defaultVal;
    }
    return val;
  });

  // Use useEffect to update local storage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorageState;
