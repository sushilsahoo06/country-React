import { useState } from "react";

export function useLocalStorage(key, initialData) {
  const [data, setData] = useState(() => {
    try {
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : initialData;
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return initialData; // Fallback if parsing fails
    }
  });

  const updateLocalStorage = (newData) => {
    setData((prevData) => {
      const updatedData = typeof newData === "function" ? newData(prevData) : newData;
      try {
        localStorage.setItem(key, JSON.stringify(updatedData));
      } catch (error) {
        console.error("Error updating localStorage data:", error);
      }
      return updatedData;
    });
  };

  return [data, updateLocalStorage];
}

