import { useEffect, useState } from "react";

// const useLocalStorage = (key, initialValue) => {
//   const [storedValue, setStoredValue] = useState(undefined);
//   const item = window.localStorage.getItem(key);
//   console.log(item);
//   return item ? JSON.parse(item) : initialValue;
// };

const checkDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  console.log(`state is ${darkMode}`);

  useEffect(() => {
    console.log("use effect");

    const getRoot = window.document.querySelector("#root");
    console.log(getRoot);

    const addDarkClass = "dark";

    if (darkMode) {
      getRoot.classList.add(addDarkClass);
      console.log(getRoot);
    } else {
      getRoot.classList.remove(addDarkClass);
      console.log(getRoot);
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default checkDarkMode;
