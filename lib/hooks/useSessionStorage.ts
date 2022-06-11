import { useState } from "react";

const useSessionStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window !== "undefined") {
      const item = window.sessionStorage.getItem(key);
      return !!item ? JSON.parse(item) : initialValue;
    }
    return initialValue;
  });

  const setValue = (value: (arg0: any) => any) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    }
  };

  return [storedValue, setValue];
};

export default useSessionStorage;
