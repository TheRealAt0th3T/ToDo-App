import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const localVal = window.localStorage.getItem(key);
      return localVal ? JSON.parse(localVal) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue];
};

export default useLocalStorage;
